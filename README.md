[README (3).md](https://github.com/user-attachments/files/33224982/README.3.md)
# meetme

**Never lose a travel rec again.** meetme is a mobile app where backpackers log the places they visit, rank them in a few quick taps, and share ranked country lists with friends heading there next.

**[Try the clickable prototype](EDIT-paste-your-github-pages-link-here)**

<!-- EDIT: add a screenshot or short GIF of the prototype here, e.g. -->
<!-- ![meetme prototype](docs/prototype-screenshot.png) -->

**Status:** early development. The product spec and a clickable prototype are done, and the app itself is being built step by step.

## The problem

Backpackers get their best recommendations from people they meet on the road: the hostel worth staying at, the taco stand to find, the beach that's hard to reach but worth it. Those recommendations arrive as long WhatsApp messages, group chat posts, and conversations, and by the time you reach a place, they're buried and gone.

## The idea

Instead of typing a wall of text from memory, travelers log places as they go, with photos, rankings, tags, and tips. When someone says "I'm heading to Colombia next," you send them your Colombia list in one tap: every hostel, meal, beach, and activity you ranked.

Think of it as Beli (the restaurant ranking app) for backpackers, covering hostels, food, beaches, and activities instead of just restaurants.

## How it works

### Logging a place

1. Pick the place from a map search, or drop a pin for spots that aren't listed
2. Give a quick reaction: loved it, it was fine, or didn't like it
3. Answer a few head-to-head comparisons: "Which would you rather send a friend to?"
4. Add optional tags ("social", "cheap", "hard to reach"), heads-up warnings ("loud at night"), and a tip for the next person
5. Choose who sees it: friends only, or public too

### Ranking

You never type a number. The reaction sets a score range (loved 7 to 10, fine 4 to 7, didn't like 0 to 4), and the comparisons place it within that range using binary search, so even with 30 hostels logged it only takes a few taps. Scores are calculated when displayed, never stored, so they stay accurate as your list grows.

### Your profile

Logs sort automatically by country. Friends see your ranking within a country ("#2 in Greece, 8.5"), and you can also view your all-time rankings.

### Sharing

Send a country list to a friend in the app, or share a link that anyone can open in a browser, no account needed.

## Privacy principles

Trust is the product, so these are fixed rules, not settings:

- Nothing you post ever becomes more public than you chose when you posted it. Every log defaults to friends-only.
- No messaging from strangers, ever. meetme is not a chat app.
- Friends are mutual. Both people must accept.
- Month and year only on public reviews and shared lists, never exact dates.
- Optional delays of 24, 48, or 72 hours before friends see where you are now.

## Tech stack

| Piece | Choice |
|---|---|
| Mobile app | React Native with Expo |
| Backend | Supabase |
| Database | PostgreSQL |
| Authentication | Supabase Auth |
| Photo storage | Supabase Storage |
| Place search | Google Places API |

## Project structure

```
meetme/
├── CLAUDE.md          # Working guide for building with Claude Code
├── README.md          # This file
└── docs/
    ├── spec.md        # Full product spec
    └── prototype.html # Clickable prototype with working ranking logic
```

App code will be added as the build progresses.

## Trying it out

**Prototype:** use the link at the top of this page, or open `docs/prototype.html` in any browser.

**The app:** setup instructions will be added here once the project setup milestone is complete.

## Roadmap

- [x] Product spec
- [x] Clickable prototype with working ranking logic
- [ ] Project setup, running on a phone via Expo Go
- [ ] Ranking logic with tests
- [ ] Logging flow screens
- [ ] Profile: by country and all-time views
- [ ] Supabase database, sign-up, and log-in
- [ ] Friends and friends feed
- [ ] Sharing country lists
- [ ] Google Places search
- [ ] Later: photos, share links for non-users, public scores, trips

## About

Built by Maya Volkov, who came up with meetme after backpacking through Mexico and Greece and watching great recommendations disappear into group chats. This is also a learning project: I'm building it while learning app development, databases, and APIs, with AI as a coding partner and tutor.
