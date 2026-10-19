#!/bin/bash

# Claude Code Skills Installer
# Usage: ./install-skills.sh [skill_repo_url ...]

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Claude Code skills directory
SKILLS_DIR="$HOME/.claude/skills"

echo -e "${GREEN}=== Claude Code Skills Installer ===${NC}"
echo ""

# Check if skills directory exists, create if not
if [ ! -d "$SKILLS_DIR" ]; then
    echo -e "${YELLOW}Creating skills directory: $SKILLS_DIR${NC}"
    mkdir -p "$SKILLS_DIR"
fi

# Function to install a skill from GitHub
install_skill() {
    local repo_url="$1"
    local repo_name=$(basename "$repo_url" .git)

    echo -e "${GREEN}Installing skill: $repo_name${NC}"

    # Check if the skill already exists
    if [ -d "$SKILLS_DIR/$repo_name" ]; then
        echo -e "${YELLOW}Skill '$repo_name' already exists. Updating...${NC}"
        cd "$SKILLS_DIR/$repo_name"
        git pull origin main 2>/dev/null || git pull origin master
        echo -e "${GREEN}Updated: $repo_name${NC}"
    else
        echo -e "${YELLOW}Cloning $repo_url...${NC}"
        git clone "$repo_url" "$SKILLS_DIR/$repo_name"
        echo -e "${GREEN}Installed: $repo_name${NC}"
    fi
    echo ""
}

# Parse command line arguments
if [ $# -eq 0 ]; then
    echo -e "${RED}No skills specified.${NC}"
    echo ""
    echo "Usage: $0 <skill_repo_url> [skill_repo_url ...]"
    echo ""
    echo "Example:"
    echo "  $0 https://github.com/anthropics/skills/tree/main/skills/pdf"
    echo ""
    echo "Or add skill URLs to this script and run: $0"
    exit 1
fi

# Install each skill
for repo_url in "$@"; do
    # Convert GitHub browse URL to clone URL
    if echo "$repo_url" | grep -q "github.com"; then
        # Extract owner/repo from URL
        clone_url=$(echo "$repo_url" | sed 's|https://github.com/|git@github.com:|' | sed 's|/tree/.*||' | sed 's|/blob/.*||')
        install_skill "$clone_url"
    else
        echo -e "${YELLOW}Skipping non-GitHub URL: $repo_url${NC}"
        echo ""
    fi
done

echo -e "${GREEN}=== Installation Complete ===${NC}"
echo ""
echo "Skills installed in: $SKILLS_DIR"
echo ""
echo "Available skills:"
ls -1 "$SKILLS_DIR" | while read -r skill; do
    echo "  - $skill"
done
echo ""
echo "To use a skill, restart Claude Code and use /<skill-name>"
