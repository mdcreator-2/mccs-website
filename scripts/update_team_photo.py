#!/usr/bin/env python3
"""
MCCS 2026 - Secretariat Team Photo Updater
-------------------------------------------
1. Crops an input photo into a perfect 1:1 square (with EXIF auto-rotation and smart portrait crop).
2. Resizes and optimizes the image (800x800 high-resolution JPEG).
3. Saves a local backup copy in public/images/team/<member-id>.jpg.
4. Uploads the cropped photo to a fast, reliable 3rd-party CDN (Catbox.moe by default, or ImgBB).
5. Automatically updates the photo URL for that member in src/data/team.js.

Usage:
  Interactive Mode:
    python scripts/update_team_photo.py

  CLI Mode:
    python scripts/update_team_photo.py --id head-tech --image "C:/path/to/photo.jpg"
    python scripts/update_team_photo.py head-tech "C:/path/to/photo.jpg" --focus top
"""

import sys
import os
import re
import io
import argparse
from pathlib import Path

# Ensure UTF-8 output encoding on Windows terminals
if hasattr(sys.stdout, "reconfigure"):
    try:
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
        sys.stderr.reconfigure(encoding="utf-8", errors="replace")
    except Exception:
        pass

try:
    from PIL import Image, ImageOps
except ImportError:
    print("\n[ERROR] Pillow is required. Please install it with: pip install pillow\n")
    sys.exit(1)

try:
    import requests
except ImportError:
    print("\n[ERROR] requests is required. Please install it with: pip install requests\n")
    sys.exit(1)


WORKSPACE_DIR = Path(__file__).resolve().parent.parent
TEAM_JS_PATH = WORKSPACE_DIR / "src" / "data" / "team.js"
LOCAL_TEAM_IMG_DIR = WORKSPACE_DIR / "public" / "images" / "team"


def parse_team_members(team_js_content: str):
    """
    Parses member entries from src/data/team.js.
    Returns a list of dicts: [{id, name, role, tier, photo, ...}]
    """
    members = []
    # Match object blocks inside teamMembers array
    pattern = re.compile(
        r"\{\s*id:\s*['\"]([^'\"]+)['\"].*?"
        r"name:\s*['\"]([^'\"]+)['\"].*?"
        r"(?:initials:\s*['\"]([^'\"]*)['\"].*?)?"
        r"role:\s*['\"]([^'\"]+)['\"].*?"
        r"tier:\s*['\"]([^'\"]+)['\"].*?"
        r"photo:\s*(null|['\"][^'\"]*['\"])",
        re.DOTALL
    )

    for match in pattern.finditer(team_js_content):
        m_id = match.group(1)
        name = match.group(2)
        initials = match.group(3) or ""
        role = match.group(4)
        tier = match.group(5)
        raw_photo = match.group(6)
        photo = None if raw_photo == "null" else raw_photo.strip("'\"")
        members.append({
            "id": m_id,
            "name": name,
            "initials": initials,
            "role": role,
            "tier": tier,
            "photo": photo
        })

    return members


def crop_to_square(image_path: str, focus: str = "center", target_size: int = 800) -> bytes:
    """
    Opens an image, handles EXIF orientation, crops to a 1:1 square,
    resizes to target_size x target_size, and returns JPEG bytes.

    focus options:
      - 'center': standard centered square crop
      - 'top': crops biased towards top (ideal for portraits/headshots)
      - 'bottom': crops biased towards bottom
    """
    with Image.open(image_path) as img:
        # Auto-rotate based on phone camera EXIF tags
        img = ImageOps.exif_transpose(img)

        # Convert palette/RGBA to RGB
        if img.mode in ("RGBA", "LA", "P"):
            bg = Image.new("RGB", img.size, (255, 255, 255))
            if img.mode == "P":
                img = img.convert("RGBA")
            bg.paste(img, mask=img.split()[-1] if "A" in img.mode else None)
            img = bg
        elif img.mode != "RGB":
            img = img.convert("RGB")

        w, h = img.size
        side = min(w, h)

        if focus == "top":
            # Portrait bias: top crop for headshots
            left = (w - side) // 2
            top = 0
        elif focus == "bottom":
            left = (w - side) // 2
            top = h - side
        else:
            # Default: Center crop
            left = (w - side) // 2
            top = (h - side) // 2

        right = left + side
        bottom = top + side

        cropped = img.crop((left, top, right, bottom))
        resized = cropped.resize((target_size, target_size), Image.Resampling.LANCZOS)

        out_buffer = io.BytesIO()
        resized.save(out_buffer, format="JPEG", quality=92, optimize=True)
        return out_buffer.getvalue()


def upload_to_catbox(image_bytes: bytes, filename: str = "team_avatar.jpg") -> str:
    """
    Uploads an image to Catbox.moe CDN.
    No API key required; returns permanent direct HTTPS URL.
    """
    print("[CDN] Uploading to Catbox.moe CDN...")
    url = "https://catbox.moe/user/api.php"
    data = {"reqtype": "fileupload"}
    files = {"fileToUpload": (filename, image_bytes, "image/jpeg")}

    resp = requests.post(url, data=data, files=files, timeout=45)
    resp.raise_for_status()

    link = resp.text.strip()
    if not link.startswith("http"):
        raise ValueError(f"Unexpected response from Catbox: {link}")

    return link


def upload_to_imgbb(image_bytes: bytes, api_key: str, filename: str = "team_avatar.jpg") -> str:
    """
    Uploads an image to ImgBB CDN using the provided API key.
    """
    print("[CDN] Uploading to ImgBB CDN...")
    url = "https://api.imgbb.com/1/upload"
    data = {"key": api_key, "name": Path(filename).stem}
    files = {"image": (filename, image_bytes, "image/jpeg")}

    resp = requests.post(url, data=data, files=files, timeout=45)
    resp.raise_for_status()
    payload = resp.json()

    if not payload.get("success"):
        raise ValueError(f"ImgBB upload failed: {payload}")

    return payload["data"]["url"]


def update_team_js(member_id: str, photo_url: str, new_name: str = None) -> bool:
    """
    Updates the photo URL (and optionally name) in src/data/team.js.
    """
    if not TEAM_JS_PATH.exists():
        raise FileNotFoundError(f"Cannot find {TEAM_JS_PATH}")

    content = TEAM_JS_PATH.read_text(encoding="utf-8")

    # Match the member block
    # Regex locates the object containing id: 'member_id'
    escaped_id = re.escape(member_id)
    member_block_re = re.compile(
        r"(\{\s*id:\s*['\"]" + escaped_id + r"['\"][^}]*?\})",
        re.DOTALL
    )

    match = member_block_re.search(content)
    if not match:
        return False

    original_block = match.group(1)
    updated_block = original_block

    # Update photo field
    photo_re = re.compile(r"(photo:\s*)(null|['\"][^'\"]*['\"])")
    if photo_re.search(updated_block):
        updated_block = photo_re.sub(rf"\g<1>'{photo_url}'", updated_block)
    else:
        # If photo field doesn't exist, insert before closing brace
        updated_block = re.sub(r"(\s*)(\}\s*)$", rf"\1  photo: '{photo_url}',\n\1\2", updated_block)

    # Optionally update name field if provided
    if new_name:
        name_re = re.compile(r"(name:\s*)['\"][^'\"]*['\"]")
        updated_block = name_re.sub(rf"\g<1>'{new_name}'", updated_block)

    new_content = content[:match.start()] + updated_block + content[match.end():]
    TEAM_JS_PATH.write_text(new_content, encoding="utf-8")
    return True


def interactive_select_member(members):
    """Interactive prompt to select a secretariat member."""
    print("\n" + "=" * 60)
    print("       MCCS 2026 - SECRETARIAT MEMBER SELECTION")
    print("=" * 60)

    current_tier = None
    for idx, m in enumerate(members, start=1):
        if m["tier"] != current_tier:
            current_tier = m["tier"]
            print(f"\n--- {current_tier} ---")

        status_tag = f"({m['name']})" if m['name'] != "To Be Announced" else "[Pending]"
        has_photo = f"[Photo: {m['photo']}]" if m['photo'] else "[No Photo]"
        print(f" [{idx:2d}] {m['role']} {status_tag}")
        print(f"      ID: {m['id']} | {has_photo}")

    print("\n" + "=" * 60)
    while True:
        choice = input("\nSelect member by number [1-14] or ID (or 'q' to quit): ").strip()
        if choice.lower() in ("q", "quit", "exit"):
            sys.exit(0)

        if choice.isdigit():
            num = int(choice)
            if 1 <= num <= len(members):
                return members[num - 1]
            print(f"Invalid number. Please enter 1 to {len(members)}.")
        else:
            for m in members:
                if m["id"].lower() == choice.lower():
                    return m
            print(f"Unknown member ID: '{choice}'. Please try again.")


def main():
    parser = argparse.ArgumentParser(
        description="Crop photo to square, upload to 3rd-party CDN, and update Secretariat page."
    )
    parser.add_argument("pos_id", nargs="?", help="Member ID (e.g. head-tech, sec-gen)")
    parser.add_argument("pos_image", nargs="?", help="Path to input photo file")
    parser.add_argument("--id", dest="member_id", help="Secretariat member ID")
    parser.add_argument("--image", dest="image_path", help="Path to the input image")
    parser.add_argument(
        "--focus",
        choices=["center", "top", "bottom"],
        default="center",
        help="Square crop focus: 'center' (default), 'top' (ideal for portraits/headshots), or 'bottom'"
    )
    parser.add_argument(
        "--size",
        type=int,
        default=800,
        help="Target square dimensions in pixels (default: 800)"
    )
    parser.add_argument(
        "--name",
        help="Optionally update the member's full name"
    )
    parser.add_argument(
        "--provider",
        choices=["catbox", "imgbb"],
        default="catbox",
        help="CDN provider: 'catbox' (default, permanent, no key required) or 'imgbb'"
    )
    parser.add_argument(
        "--imgbb-key",
        default=os.environ.get("IMGBB_API_KEY"),
        help="ImgBB API Key (required if --provider imgbb)"
    )
    parser.add_argument(
        "--local-only",
        action="store_true",
        help="Skip CDN upload and use the local backup image path"
    )

    args = parser.parse_args()

    member_id = args.member_id or args.pos_id
    image_path = args.image_path or args.pos_image

    if not TEAM_JS_PATH.exists():
        print(f"[ERROR] Could not find {TEAM_JS_PATH}")
        sys.exit(1)

    team_js_content = TEAM_JS_PATH.read_text(encoding="utf-8")
    members = parse_team_members(team_js_content)

    # 1. Determine Member
    selected_member = None
    if member_id:
        for m in members:
            if m["id"].lower() == member_id.lower():
                selected_member = m
                break
        if not selected_member:
            print(f"[ERROR] Member with id '{member_id}' not found.")
            print(f"Available IDs: {', '.join(m['id'] for m in members)}")
            sys.exit(1)
    else:
        selected_member = interactive_select_member(members)

    # 2. Determine Image Path
    if not image_path:
        while True:
            prompt_path = input(f"\nEnter image path for {selected_member['role']}: ").strip()
            # Strip enclosing quotes if user dragged and dropped path in Windows terminal
            prompt_path = prompt_path.strip("'\"")
            if os.path.isfile(prompt_path):
                image_path = prompt_path
                break
            print(f"File not found: '{prompt_path}'. Please enter a valid file path.")

    image_path = os.path.abspath(os.path.expanduser(image_path))
    if not os.path.isfile(image_path):
        print(f"[ERROR] Input image not found: {image_path}")
        sys.exit(1)

    print("\n" + "-" * 50)
    print(f"Processing photo for: {selected_member['role']}")
    print(f"Member ID:           {selected_member['id']}")
    print(f"Current Name:        {selected_member['name']}")
    print(f"Input image:         {image_path}")
    print(f"Crop focus:          {args.focus}")
    print(f"Square size:         {args.size}x{args.size}")
    print("-" * 50)

    # 3. Crop and resize to 1:1 square
    try:
        cropped_bytes = crop_to_square(image_path, focus=args.focus, target_size=args.size)
        print(f"[+] Photo successfully cropped to 1:1 square ({args.size}x{args.size} px).")
    except Exception as e:
        print(f"[ERROR] Failed to process image: {e}")
        sys.exit(1)

    # 4. Save local backup copy
    LOCAL_TEAM_IMG_DIR.mkdir(parents=True, exist_ok=True)
    local_filename = f"{selected_member['id']}.jpg"
    local_dest = LOCAL_TEAM_IMG_DIR / local_filename
    local_dest.write_bytes(cropped_bytes)
    print(f"[+] Saved local copy:  {local_dest}")

    # 5. Upload to 3rd-party CDN or use local
    cdn_url = None
    if args.local_only:
        cdn_url = f"/images/team/{local_filename}"
        print(f"[+] Using local path:  {cdn_url}")
    elif args.provider == "imgbb":
        if not args.imgbb_key:
            print("[ERROR] ImgBB requires --imgbb-key or IMGBB_API_KEY environment variable.")
            sys.exit(1)
        try:
            cdn_url = upload_to_imgbb(cropped_bytes, args.imgbb_key, filename=local_filename)
            print(f"[+] Uploaded to ImgBB: {cdn_url}")
        except Exception as e:
            print(f"[ERROR] Upload to ImgBB failed: {e}")
            sys.exit(1)
    else:
        try:
            cdn_url = upload_to_catbox(cropped_bytes, filename=local_filename)
            print(f"[+] Uploaded to CDN:   {cdn_url}")
        except Exception as e:
            print(f"[WARNING] CDN upload failed ({e}). Falling back to local backup asset.")
            cdn_url = f"/images/team/{local_filename}"

    # 6. Update src/data/team.js
    success = update_team_js(selected_member["id"], cdn_url, new_name=args.name)
    if success:
        print("\n" + "=" * 60)
        print("  SUCCESSFULLY UPDATED SECRETARIAT PAGE!")
        print("=" * 60)
        print(f"Member:     {selected_member['role']}")
        print(f"ID:         {selected_member['id']}")
        if args.name:
            print(f"Name:       {args.name}")
        print(f"Photo URL:  {cdn_url}")
        print(f"Local file: {local_dest}")
        print("\nYou can verify it on the Secretariat page at /secretariat")
        print("=" * 60 + "\n")
    else:
        print(f"[ERROR] Failed to update {TEAM_JS_PATH} for ID: {selected_member['id']}")
        sys.exit(1)


if __name__ == "__main__":
    main()
