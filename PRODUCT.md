# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

React 18 (Vite), Tailwind CSS, Framer Motion, React Router v6. Deployed on Vercel.

## Users

**Primary:** College and high school students researching MUN conferences to decide whether to participate, select a committee (UNSC or AIPPM), understand the rules and procedures, and complete registration.

**Secondary:** Faculty advisors and MUN club coordinators evaluating the conference's credibility and rigor before recommending it to students.

**Situation:** Users arrive with varying MUN experience—from first-time delegates to seasoned participants. They need to quickly grasp what makes MCCS distinctive, understand each committee's format and agenda, access the rulebook for preparation, and take action to register before the deadline.

## Product Purpose

MCCS is a dual-committee Model UN conference (UNSC + AIPPM) hosted by Expresso Club at NIT Patna. The website exists to establish the conference's credibility, communicate its formal diplomatic character, present committee details and delegate requirements, provide the complete rulebook for preparation, and drive registration.

**Success means:** A delegate lands on the site, understands what MCCS offers within 30 seconds, finds their committee's details and rules, and clicks through to register.

## Positioning

MCCS differentiates through **prestige and procedural rigor**. While many college MUNs prioritize scale or social programming, MCCS positions itself as a formally prestigious simulation with serious diplomatic procedure, high-quality debate standards, and professional execution. The dual-committee format (UNSC as international diplomacy, AIPPM as Indian parliamentary debate) offers distinct experiences across two days.

## Operating Context

- **Event dates:** UNSC on 31 October 2026, AIPPM on 1 November 2026
- **Venue:** NIT Patna, Bihta Campus (specific room TBA)
- **Registration:** External Google Form linked from the site
- **Preparation:** Delegates use the rulebook page to study procedures before the event
- **Committee materials:** Country/party matrix cards help delegates understand their role options

## Capabilities and Constraints

**Functionality:**
- Hero with live countdown to event start
- Event overview with committee cards
- Individual committee pages with agenda, delegation format, and interactive country/party cards
- Rulebook with collapsible sections for both committees
- Team/Secretariat page with member profiles
- Registration CTA throughout (external Google Form)

**Constraints:**
- No backend—static site with external registration form
- Flag images loaded from external sources or placeholders until official assets provided
- Secretariat photos and bios pending user provision
- Registration URL is placeholder until Google Form is created

## Brand Commitments

**Name:** MCCS (Model Conferences and Committee Simulation)

**Visual direction (confirmed):**
- Primary Blue: #1B3A5C (deep navy—authority, UN blue family)
- Accent Gold: #C5A55A (muted gold—prestige)
- Background: #FAFAF8 (warm off-white)
- Headlines: Playfair Display (serif)—diplomatic gravitas
- Body: Inter (sans-serif)—modern readability
- Formal, prestigious aesthetic—avoiding playful or casual treatments

**Assets confirmed:**
- MCCS event logo
- NIT Patna logo
- Expresso Club logo

**Tone:** Formal, authoritative, diplomatically precise. Not casual, not overly promotional.

## Evidence on Hand

- Complete rulebook content for both committees (in rulebook data files)
- Country/party delegation matrix for UNSC and AIPPM
- Committee agendas and procedural details
- Plan document with full implementation specifications
- Site configuration with event details and placeholder contact info

**Not yet provided:**
- Secretariat member photos and bios
- Finalized registration Google Form URL
- High-resolution flag assets (currently using external sources or placeholders)

## Product Principles

1. **Formal credibility over flash.** Every visual and interaction decision reinforces MCCS as a serious diplomatic simulation, not a casual campus event.

2. **Information architecture serves preparation.** Delegates should be able to find their committee's rules, understand their role, and prepare for debate—all from the site.

3. **Registration friction is the enemy.** The path from interest to action should be obvious and short. CTAs appear where intent peaks.

4. **Distinctive but restrained interactions.** The flag-slide cards and scroll animations add life without compromising the formal tone. Motion is purposeful, not decorative.

## Accessibility & Inclusion

- Standard WCAG 2.1 AA compliance target
- Keyboard-navigable country/party cards
- Sufficient color contrast for all text (verified against palette)
- Reduced motion respected for scroll animations
