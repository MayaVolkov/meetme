# meetme: Product Spec

Sep 30, 2026 · @Maya

## Overview

meetme is a social app where backpackers log the places they visit and see the ranked trail of places their friends have been. It covers hostels, food, beaches, and activities, not just restaurants.

**Positioning (working):** Never lose a travel rec again. meetme is a ranked map of the hostels, hikes, and street food your friends actually loved.

**The problem.** Backpackers get their best recommendations from people they meet on the road. Those recommendations arrive as long messages, WhatsApp and Facebook group posts, and conversations, and they get lost. By the time you reach a place, you can't find who told you what.

**The idea.** Instead of someone typing a wall of text from memory, they log places as they go, with photos, rankings, and tips. When you head somewhere, you open your friends' trails and the recommendation already exists.

**The core moment.** Someone at a hostel says "I'm heading to Colombia next," and you send them your Colombia list in one tap: every hostel, meal, and activity, with your rankings and tips. It replaces the wall-of-text recommendation, and every shared list introduces a new person to the app.

**Origin.** Inspired by Beli, a restaurant app with a friends feed, photo logs, and head-to-head rankings. Shaped by two backpacking trips: Mexico in December 2025, travelling with mostly Israeli post-army backpackers who shared recs in large Facebook and WhatsApp groups, and Greece, travelling with mostly Australian and European backpackers met through hostels.

**Short pitch:** Beli for backpackers.

## Target user and launch community

The app is for backpackers of any nationality. The launch can start with one tight community, because meetme only works when your friends are on it.

**Target user (persona): Sam, 22**

- **Who:** a backpacker from anywhere (Israel, Australia, Europe, the US) on a trip of a few weeks to a year or more. Solo or with a friend, but social, meeting people at hostels constantly.
- **Budget:** low. Hostels, street food, free or cheap activities.
- **Gets recs from:** people they meet, hostel staff, Facebook and WhatsApp groups.
- **Frustration:** the best recommendations are scattered across chats and conversations, and hard to find when needed.
- **Wants:** to see where people they trust have actually been, and to keep their own trail for travellers coming after them.

Out of scope for now: higher-budget travellers and fully solo travellers who don't connect with others. Both could come later.

**Practical implications:** free for users, at least early on, and works well on weak hostel wifi and limited mobile data.

**Launch community.** Israeli post-army backpackers in Latin America are a strong first group. They are densely connected and already swap recommendations constantly in large WhatsApp groups (הגל העולה and הגל היורד, confirmed real). There is a seasonal wave: travellers typically start in Chile in the fall and move north through South America, often ending in Mexico.

Why this works for launch:

- **The route is the product.** Travellers a few weeks ahead leave exactly the trail the people behind them need.
- **It solves the empty-app problem.** A small group near the front of the wave fills the app for everyone behind.
- **It sets the launch timing.** Be ready before the fall wave starts, seeded with past trips from people who have done the route.

Outside that community, people meet through hostels rather than online groups, which points to hostels as a later growth channel.

To confirm: whether Southeast Asia has a similar wave pattern.

## Core principles and privacy

Trust is the product, so privacy rules are fixed design decisions, not settings to add later.

**Principle 1: Nothing you post ever becomes more public than you chose when you posted it.** Public sharing is visible in the logging flow from version 1. Any future public features apply only to posts shared going forward, never retroactively.

**Principle 2: No messaging from strangers, ever.** meetme is not a chat app. This avoids the creepy DMs, scams, and promoter spam that users report on Hostelworld.

**Two sides of the app**

|  | Friends side (private) | Public side |
| --- | --- | --- |
| Who sees it | Mutual friends only | Anyone looking up a place |
| Default | Every post defaults here | Opt in, per post |
| What's shown | Your full trail, photos, rankings, tips | Individual reviews only, on the place's page |
| Timing | Real time, or delayed 24, 48, or 72 hours (your choice) | Month and year only, never an exact date |
| Traceable to your route | Yes, by friends | No: reviews don't link back into your trail |

Why month-level dates: they show readers whether a review is recent or seasonal, without revealing where someone is right now.

Why public reviews can't link to a profile's list: even with month-only dates, a list of someone's public reviews could reveal their route.

## MVP features (version 1)

Version 1 covers accounts, friends, logging, and four ways of seeing things. The test for every feature: could meetme work without it? If yes, it waits.

**Accounts**

- Sign up, log in, simple profile (name, username, photo)
- Delete account, block, and report (required by the App Store and Google Play)

**Friends**

- Search by username and send a friend request
- Friends are mutual: both people accept

**Countries, trips, and sharing** (details in the next section)

- Every log sorts automatically into its country and city; optional trips are lists you build yourself. Share a country or trip with a friend in the app, or as a link to anyone
- Log past trips at signup, so new users aren't starting from an empty app

**Logging a place** (full flow in the next section)

- Pick the place, add photos, rank it head to head, add tags and a tip
- Choose friends-only or public, plus the delay option

**Seeing things**

- **Friends feed:** your friends' logs, newest first. This is the home screen.
- **Place page:** photos, public score, "best for" tags, month-dated public reviews, and your friends' logs shown separately
- **Search:** a place by name, or browse by city, category, and tags ("social hostels in Tulum")
- **Your profile:** countries by default, a Trips view for your own lists, and overall rankings by category

**Cut from version 1:** the global feed. It needs thousands of users to be interesting and makes route-tracing harder to control. Public reviews already appear on place pages, where people actually look when deciding where to go.

## Countries, trips, and sharing

Country is the automatic way logs are organised; trips are optional lists you build; and sharing a country or trip list is the app's core moment.

**Countries (automatic)**

- Every log sorts into its country and city using Google place data, with no setup
- The profile's default view is by country, with city as a filter inside it

**Rankings stay on one scale per category.** A new hostel is compared against all your hostels everywhere, not just those in the same city, then displayed filtered by place. This keeps scores meaningful: if rankings were per city, your only hostel in Nice would automatically score 10, even if it was mediocre. Comparisons happen within the same reaction group (see Logging flow).

**Trips (optional)**

- User-made lists, like a playlist ("South America 2026")
- For organising and sharing a journey, not for ranking
- Needed because trips and countries don't line up: one trip can cross several countries, and one country can be visited on several trips

**Sharing**

You can share a country ("My Colombia", one tap from your profile) or a trip.

| Shared to | How it works |
| --- | --- |
| A friend on meetme | Appears in their app; they can save it for when they arrive |
| Anyone, as a link | Opens a web preview through WhatsApp, Instagram, or any chat |

**What a link shows without an account:** the full list you shared, with photos, scores, tags, and tips.

**What needs an account:** saving the list, seeing more of your trips and recommendations, adding you as a friend (mutual, so you still approve them), and browsing public rankings. The prompt reads something like "See more of Maya's recommendations on meetme."

**Privacy rules for shared lists**

- Months only, never exact dates, since links can be forwarded to strangers
- Only the places in that list are visible, not the rest of your profile
- You can turn off a link anytime, and it stops working
- Logs still inside their delay window don't appear until the delay passes, so sharing your Colombia list while in Colombia doesn't reveal where you were this morning

## The log

A log is one logged place, and every screen reads from it. It stores the reaction and position; the score is calculated fresh each time it's shown, because a place's score changes when you log other places.

| Piece | Required? | Where it comes from |
| --- | --- | --- |
| Place (name + Google Place ID) | Yes | Google search or dropped pin |
| Country and city | Yes | Automatic from the place |
| Category (hostel, restaurant, beach, activity) | Yes | Auto-filled from Google, user confirms |
| Reaction (loved / fine / didn't like) | Yes | User taps |
| Position within its reaction group | Yes | Comparisons |
| Photos | Optional | User adds |
| "Best for" tags | Optional | User taps |
| "Heads up" tags | Optional | User taps |
| Tip for the next person | Optional | User writes |
| Visit date (month and year) | Yes | Automatic now, or picked for past visits |
| Who sees it (friends or public) | Yes | User picks, defaults to friends |
| Delay (now, 24h, 48h, 72h) | For current visits | User picks |
| Who logged it, and when | Yes | Automatic |

Categories stay at four for now, with more (bars, hikes, other) to add later.

**Past logs** count toward rankings and public scores like any other log. Memory keeps the best and worst places clearly, and the forgettable middle lands mid-range anyway. Past logs are dated by when you visited, not when you logged them, so readers know they're older and recency weighting counts them slightly less.

**Deleting a log** removes it from your lists, friends' feeds, and shared lists. Places below it move up, and scores recalculate. Editing comes later.

## Logging flow and ranking

Logging a place should take under a minute, with only 2 to 5 comparisons, even after hundreds of logs.

**The flow**

1. **Tap +, pick the place.** Search Google Maps, or drop a pin if it isn't listed (a hidden beach, an unmarked hike, a street cart).
2. **Category fills in automatically** from Google (hostel, restaurant, beach, activity). The user confirms or changes it.
3. **Add photos.**
4. **Quick reaction:** loved it, it was fine, or didn't like it. This sets the score range.
5. **Head-to-head comparisons** against your other places in the same category with the same reaction. Options: pick one, too close to call, or skip.
6. **"Best for" tags and a tip** ("Tip for the next person").
7. **Choose who sees it:** friends only (now, 24h, 48h, or 72h), or public too.

The category comes before ranking because places are only compared within a category. No separate title field: the place name does that job.

**How comparisons stay few: binary search.** Instead of comparing against every place, compare with the middle-ranked place in the same reaction group, then the middle of whichever half it belongs in, and so on. Each answer halves the list.

| Places in category | Comparisons needed |
| --- | --- |
| 30 | about 5 |
| 500 | about 9 |

With the quick reaction first, most logs take 2 or 3 taps.

**Personal score.** The reaction sets the score range, and the place's position within that reaction group fine-tunes it.

| Reaction | Score range |
| --- | --- |
| Loved it | 7 to 10 |
| It was fine | 4 to 7 |
| Didn't like it | 0 to 4 |

Why ranges: if position alone set the score, someone who only logged places they loved would see their least favourite scored near 0. The comparison question is "Which would you rather send a friend to?", answered from your gut; tags capture how places differ.

**How a list is displayed.** Rankings use one scale per category across everything you've logged, then get filtered by place, so a friend sees "#2 in Greece, 8.5". Filtering keeps the same order as ranking that country alone, and the score shows how good it was compared with everywhere else. Comparing "same country first" was dropped because it conflicts with the halving method.

**Place data: Google Maps (Places API)**

- Most accurate and complete source
- Paid service with some free monthly usage, so costs grow with users
- Google limits what can be stored, but the Place ID can be kept permanently. This also solves duplicates: two logs of the same hostel point to the same ID.
- Drop-a-pin fallback for places Google doesn't have

## Public scores and tags

A place's public score is a Bayesian average of personal scores, weighted toward recent reviews and ranked only within a city and category. All numbers below are starting guesses to test with fake data in Python, then tune.

**Public score: Bayesian average.** Each place starts with a few "phantom" reviews at the city average, then real reviews pull it up or down. This stops one 10/10 review from beating fifty 9s.

```latex
\text{score} = \frac{m \cdot C + \sum \text{reviews}}{m + n}
```

m = number of phantom reviews (starting guess: 5), C = city average, n = number of real reviews.

Example, city average 7: one review of 10 gives 7.5, while fifty reviews averaging 9.2 give 9.0, so the well-reviewed place wins.

**Other rules**

- **Recent reviews count more.** Hostels change owners; beaches get developed. Month-level dates make this possible.
- **Only rank within a city and category:** "best hostels in Tulum," never "best places in Mexico."
- **Friends' scores shown separately** from the public score on every place page.

**"Best for" tags.** Reviewers tap tags such as social, quiet, good for solo, cheap, party, great views. A tag shows publicly only when both are true:

- at least 3 people picked it, and
- at least about 40% of reviewers picked it

Then:

- Show the **top 3 tags** under a place in lists
- Show **percentages** on the place page ("social, 78%"), which handles conflicts like social versus quiet
- Weight **recent** tags more
- **Friends' tags** always show, with no threshold

**Tag lists (version 1)**

Tags describe who a place suits, not how good it was, since the score covers quality. "Heads up" tags are warnings, shown in a different style from "best for" tags. Serious issues, such as safety or bed bugs, go in the written tip instead of a tag, so they come with context.

| Category | Best for | Heads up |
| --- | --- | --- |
| Hostel | social, quiet, party, good for solo, cheap, great staff, good location, good wifi, free breakfast | loud at night, not very clean, uncomfortable beds, far from everything, unfriendly staff, bad wifi, overpriced |
| Restaurant | cheap, local favourite, street food, vegetarian-friendly, big portions, good for groups, worth the splurge | overpriced, slow service, tourist trap, long wait, small portions |
| Beach | quiet, lively, good for swimming, surfing, snorkelling, hard to reach, worth the trip | crowded, dirty, rough water, pushy vendors, nowhere to get food |
| Activity | free, cheap, must-do, hidden gem, needs a guide, good with a group, tough but worth it, food included, worth the splurge | overpriced, tourist trap, too crowded, not worth the time, bad guide |

The public threshold applies to both kinds, so one bad night doesn't label a place. Written tips will need reporting and moderation, since that's where serious claims live.

## Screens and visual direction

Version 1 has seven core screens, sketched in the [meetme screens canvas](https://claude.ai/artifact/WZgS4nhKJPsbrhWb8tkH1B). The current visual direction is "clean with stamps," and it still needs one defining element.

**Clickable prototype:** [meetme prototype](https://claude.ai/artifact/UXBNLCkmNdL5ApYdwKXjSa). It runs the real ranking logic with sample Mexico and Greece logs, and covers logging, profile views, sharing, a received list, deleting, and a new-user empty state. First reaction: the logging and ranking flow feels simple and makes sense, and sharing plus the By country and All-time split work well. Next: test with 2 or 3 backpacker friends without explaining it.

**Navigation:** bottom bar with Feed, Search, a central + button to log, and Profile.

| Screen | What it shows |
| --- | --- |
| Friends feed | Friends' logs: photo, score stamp, rank in their list, tags, tip, trip name |
| Search | City, category, and "best for" filters; results show public score and how many friends logged each place |
| Place page | Public score, friends' scores separately, tag percentages, month-dated public tips |
| Profile | Countries view (default), Trips view, overall rankings, share buttons, "Log a past trip" |
| Log 1 | Pick place or drop a pin, confirm category, add photos |
| Log 2 | Head-to-head comparison |
| Log 3 | Tags, tip, friends-only or public, delay option |
| Stamped (new) | Confirmation after posting: the place gets stamped with its score and rank |

**Visual directions explored**

- **Clean (v1):** works, but looks too similar to Beli.
- **Passport:** stamps, typewriter text, lined paper. Distinctive, but too retro.
- **Clean with stamps (current):** clean cards and readable text, with personality in a few places: scores as tilted ink stamps in category colours, small monospace travel-document labels, passport navy and stamp red, and the stamp-down moment after posting.

**Category ink colours:** red for hostels, blue for food, green for beaches, purple for activities.

**Still needed: a defining element.** Options under consideration:

- **Route line (recommended):** a dotted travel line connecting stamps like stops on a journey, shown on trip profiles and in the feed ("stop 4 of 9"). It expresses the core idea: the trail you leave for the next person.
- **One signature colour,** used boldly in a few places
- **Handwritten tips,** so the human part of the app is instantly recognisable

## Tech stack and architecture

meetme is a React Native mobile app built with Expo, backed by Supabase. Development happens with Claude Code, guided by a CLAUDE.md file that sets out the stack, principles, and learning rules.

| Piece | Choice | Job |
| --- | --- | --- |
| Frontend (the app) | React Native with Expo | Screens on iPhone and Android from one codebase; Expo Go runs it on a phone for testing without the app store |
| Backend | Supabase | Database, sign-up and log-in, photo storage |
| Database | PostgreSQL (inside Supabase) | Stores users, logs, friendships as related tables, queried with SQL |
| Place data | Google Places API | Place search and permanent Place IDs |
| Share page | Small web page (later) | Shows shared lists to people without the app, reading from the same database |

**How the pieces fit.** The app and the share page are both frontends. They send requests over the internet to Supabase through APIs ("save this log", "give me Noa's Colombia list"), and the database stores everything. Scores are calculated when displayed, never stored.

**Why these choices**

- **Mobile first:** backpackers live on their phones, and the core moments happen on the road.
- **React Native with Expo over native or Flutter:** one codebase for both platforms, a huge community, easy phone testing, and strong Claude Code support. Python isn't practical for mobile apps, but its concepts transfer to JavaScript.
- **Supabase over Firebase or a custom Python backend:** meetme's data is all relationships, which PostgreSQL handles well; log-in and security come built in; and SQL is a lasting data skill.

**Costs to plan for:** Apple developer account ($99 per year) before App Store release, Google Places usage beyond the free tier, and Supabase beyond its free tier as users grow.

**Security to learn early:** row level security rules on every table (who can see which rows), and keeping secret keys out of the app and out of git.

**Build order:** project setup, ranking logic with tests, logging screens with fake data, profile views, Supabase tables and log-in, connecting the app to Supabase, friends and feed, in-app sharing, Google Places search. Photos, share links, public scores, and trips come after.

## Competitive landscape

Polarsteps is the closest competitor and Beli is the biggest copy risk. No competitor combines friends-only trails with ranked, searchable places across hostels, food, and activities.

| Competitor | What it does | Where it falls short for backpackers | How meetme differs |
| --- | --- | --- | --- |
| Polarsteps | Tracks your route; trips shared with followers by default; printed travel books | A timeline you scroll; hard to find a friend's rec for one city | A ranked, searchable index, not a timeline |
| Beli | Restaurant logging with head-to-head rankings and a friends feed | Food only; skews trendy and expensive; misses venues outside Western cities | Covers hostels, food, beaches, activities; budget focus; drop-a-pin |
| Hostelworld | Hostel booking plus city chats, events, and meetups | Chats scroll away; reports of creepy DMs and promoter spam; only hostels it sells | Keeps recs instead of chats; no messaging from strangers |
| Google Maps | Places database, reviews, saved lists | Ratings inflated (most places 4.2 to 4.6); lists get cluttered | Head-to-head rankings from friends |
| TripAdvisor | Reviews and tour booking | Skews older and higher budget; fake and sponsored reviews | Trusted friend network |
| WhatsApp and Facebook groups | Real-time Q&A in large groups | Recs vanish in chat history; same questions asked repeatedly | Turns those recs into a permanent, searchable log |
| Wanderlog, TripBFF, Rex, Ditto | Trip planning; finding travel buddies; friend rec lists | Planning or meeting focused, not ranked logs of where you've been | Logging and passing on recs |

**Taglines to remember:** Hostelworld helps you meet people; meetme keeps what they told you. Polarsteps tracks where you went; meetme tracks what was worth it.

**Business model reference.** Polarsteps' model fits a low-budget audience best: a free core app, with money from printed travel books and an optional subscription. A printed book of a ranked trip is a possible later feature.

Source: Gemini deep research reports (two rounds), spot-checked in conversation. User numbers and some app details are unverified and should not be quoted without checking.

## Risks, later features, and open questions

The biggest risks are an empty app at launch and Beli expanding into travel. Several decisions are still open, listed at the end.

**Risks**

| Risk | Mitigation |
| --- | --- |
| Empty app: new users have nothing logged and no friends on it | Log past trips at signup; launch with one dense community (the Israeli wave) |
| Beli adds hostels and activities | Move fast in a niche Beli doesn't serve: budget backpacking, non-Western places, trips |
| Route tracing: a 24-hour delay protects one post, but daily posts still reveal a route a day behind | Explore a "trip mode" where nothing publishes until you've left a city |
| Google Places API costs grow with users | Monitor usage; store Place IDs to limit repeat lookups |
| Privacy law (GDPR, Colorado Privacy Act) for location history | Data minimisation, clear deletion controls, a privacy policy before launch |
| App store requirements | Account deletion, reporting, blocking, and a privacy policy in version 1 |

**Later features (not in version 1)**

- QR code friend adding
- Global feed
- Map view of your trail
- "Been there" logs without a ranking (no comparisons, no score), e.g. for quick stops; could feed the map view
- Quarterly "meetme favourites" lists by area
- Printed trip books
- Group swiping, challenges, badges, streaks, crawls, Lucky Spin
- AI photo analysis
- Hebrew and other languages
- Bookings, subscriptions, or other money-making features

**Open questions**

- [ ] Visual identity, including the defining element: handed off to a friend majoring in design
- [ ] Does the name meetme fit an app about places rather than meeting people?
- [ ] Does Southeast Asia have a seasonal wave like Latin America?
- [ ] Test the prototype with 2 or 3 backpacker friends
- [ ] Safety and moderation details: reporting flow, fake reviews
- [ ] Start building with Claude Code: step 1, project setup on Maya's phone
- [ ] Test the ranking and tag math in Python with fake data
- [ ] Public scores with 0 or few reviews: the Bayesian average shows an unreviewed place as the city average, and softens a single real warning (one 0 shows as about 5.8). Options: hide the public score below a minimum number of reviews (like the 3-person tag threshold), show the review count next to the score ("5.8 · 1 review"), and rely on friends' scores, tips, and heads-up tags to carry warnings
- [ ] Launch timing relative to the fall wave
