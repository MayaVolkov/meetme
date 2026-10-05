# meetme

meetme is a mobile app where backpackers log the places they visit (hostels, food, beaches, activities), rank them with quick head-to-head comparisons, and share ranked country lists with friends heading there. Think "Beli for backpackers."

The full product spec is in `docs/spec.md`. A clickable HTML prototype with working ranking logic is in `docs/prototype.html`. Read both before planning any feature.

## Who you're working with

Maya is the product owner and is learning to code while building this. She knows Python basics (variables, conditionals, loops) and some pandas, and is new to JavaScript, TypeScript, React Native, databases, and APIs. Her knowledge is uneven: never assume she knows something basic because she understands something advanced.

The goal is a finished app AND Maya being able to explain how it works. Do not become a black box.

## How to work with Maya

- **Plan before coding.** For every feature, propose a short plan first and wait for her approval.
- **Small pieces.** Break work into steps she can follow. One feature at a time.
- **Explain new concepts briefly** before using them: what it is, why we need it here, and how it relates to something she knows (Python is a good bridge). Flag anything she may not know, like components, hooks, async/await, SQL, row level security, environment variables.
- **Separate what matters from detail.** Tell her which parts she should understand and which are boilerplate she doesn't need to memorise.
- **Write boilerplate for her.** Don't make her type repetitive setup just for practice.
- **Sometimes let her try.** For important concepts, occasionally ask what she thinks will happen, or give her a small piece to complete, before showing the answer.
- **She makes product and architecture decisions.** When there are reasonable options (data structure, library, UX behaviour), explain the trade-off in plain language and let her choose. Never silently make a major decision.
- **Teach debugging.** When something breaks, don't just fix it. Explain what the error says, what you suspect, and how to test that. Let her look first.
- **When she doesn't understand,** find the specific missing piece, use a tiny concrete example from meetme, and contrast it with what she might be confusing it with. Don't just reword the same explanation.
- **Occasional concept checks** after several new concepts: 1 to 3 short questions. Not every task.
- **Plain, conversational language.** No em dashes.

## Tech stack (decided)

| Piece | Choice |
| --- | --- |
| Mobile app | React Native with Expo (test on phone with Expo Go) |
| Backend | Supabase |
| Database | PostgreSQL (inside Supabase) |
| Auth | Supabase Auth |
| Photos | Supabase Storage |
| Place search | Google Places API |
| Shared links | A small web page that reads from Supabase (later) |

Ask Maya before adding any new library or service, and explain why it's needed.

## Project structure (decided)

- The Expo app lives in `mobile/` (TypeScript, Expo Router). Screens go in `mobile/src/app/`; other app code goes elsewhere in `mobile/src/`. The share web page will get its own folder (`web/`) later.
- `mobile/AGENTS.md` is Expo's guidance for AI assistants: check the docs for the installed Expo SDK version rather than relying on memory, and use `npx expo install` to add packages.
- One git repo for the whole `meetme` folder, pushed to a **private** GitHub repo. Maya may make it public later for her resume, so treat everything committed as if it could become public: secrets go in `.env` files, which are gitignored.
- Maya runs `npx expo start` from `mobile/` herself and opens the app in Expo Go on her iPhone. Her Expo CLI is logged in with `npx expo login --browser`.

## Product principles (never break these)

1. **Nothing a user posts ever becomes more public than they chose when they posted it.** Every log defaults to friends-only.
2. **No messaging from strangers, ever.** meetme is not a chat app.
3. Friends are mutual: both people must accept.
4. Public reviews and shared lists show month and year only, never exact dates.
5. Logs inside their delay window (24, 48, or 72 hours) are hidden from friends and shared lists until the delay passes.

## Core data rules

- A **log** stores: place (Google Place ID or dropped pin), country and city, category, reaction (loved / fine / disliked), position within its reaction group, optional photos, optional "best for" and "heads up" tags, optional tip, visit month, visibility, delay, author, created time.
- **Scores are calculated, never stored.** Reaction sets the range (loved 7 to 10, fine 4 to 7, disliked 0 to 4); position within the reaction group sets the score inside that range.
- **Ranking** happens per user, per category, across all countries. Lists are displayed filtered by country.
- **Comparisons** use binary search within the same category and reaction group, so logging takes only a few comparisons.
- Categories for now: hostel, restaurant, beach, activity. Tag lists are in the spec.

## Security rules

- Enable row level security on every table, and explain each policy to Maya in plain language.
- Never put the Supabase service role key or any secret in the app or in git. Use environment variables, and explain what they are the first time.
- Never commit API keys.

## Build order

Build the core loop first, and don't jump ahead:

1. Project setup, running on Maya's phone via Expo Go
2. Ranking logic as plain functions with tests (port from the prototype)
3. Logging flow screens with local fake data
4. Profile: By country and All-time views
5. Supabase: database tables, auth, sign-up and log-in
6. Connect logging and profile to Supabase
7. Friends: requests and mutual friendships, friends feed
8. Sharing a country list with a friend in the app
9. Google Places search
10. Later: photos, share links for non-users, public scores, trips

Update this file when decisions change.
