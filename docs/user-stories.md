# meetme: User Stories

These stories describe what meetme needs to do, from the point of view of the people using it. They come from the [product spec](spec.md) and from my own backpacking trips in Mexico and Greece, where the best recommendations kept getting lost in WhatsApp and Facebook groups.

Each story follows the format **As a [user], I want [goal] so that [reason]**. The most important ones have acceptance criteria: a checklist for when the story counts as done.

## Who the users are

| User | Who they are |
| --- | --- |
| **Traveler** | A budget backpacker on a trip of a few weeks to a year, meeting people at hostels constantly (persona: Sam, 22) |
| **Recommender** | A traveler who has already been somewhere and wants to pass on what was worth it |
| **Friend** | A mutual friend on meetme who sees someone's logs and shared lists |
| **Link viewer** | Someone without the app who opens a shared list from a link |

Most people are all of these at different points in a trip: you get recommendations for the next country while giving them for the last one.

## Status key

- ✅ **Prototype:** works in the [clickable prototype](https://mayavolkov.github.io/meetme/docs/prototype.html)
- 🔨 **Building:** in progress in the app
- 📋 **Planned:** version 1, not started
- 💭 **Later:** after version 1

---

## 1. Logging a place

**1.1 Log a place quickly** ✅
As a traveler, I want to log a place in under a minute so that I actually do it while I'm on the road instead of meaning to later.

- Picking the place, reacting, comparing, and posting takes under a minute
- Only the place, category, and reaction are required; photos, tags, and tips are optional

**1.2 Log places that aren't on the map** 📋
As a traveler, I want to drop a pin for places Google doesn't have so that hidden beaches, unmarked hikes, and street carts can still be logged.

**1.3 Category fills itself in** 📋
As a traveler, I want the category (hostel, restaurant, beach, activity) filled in for me so that I only have to confirm it, not choose it every time.

**1.4 Leave tips for the next person** ✅
As a recommender, I want to add "best for" tags, "heads up" warnings, and a short tip so that the next person knows who a place suits and what to watch out for, not just a score.

**1.5 Log past trips** 📋
As a new user, I want to log places from trips I've already taken so that my profile isn't empty and I can share recommendations right away.

- I can pick a past month and year for the visit
- Past logs count in my rankings like any other log
- Past logs are dated by when I visited, not when I logged them

## 2. Ranking

**2.1 Rank without typing a number** ✅
As a traveler, I want to rank places by choosing between two of them so that my rankings reflect my gut feeling instead of a made-up number out of 10.

- I give a quick reaction first: loved it, it was fine, or didn't like it
- Each comparison asks "Which would you rather send a friend to?"
- I never type or pick a score

**2.2 Only a few comparisons** ✅ 🔨
As a traveler with a lot of places logged, I want each new place to need only a few comparisons so that logging doesn't get slower the more I travel.

- Comparisons only use places in the same category with the same reaction
- Each answer cuts the remaining list in half (binary search), so 30 places take about 5 comparisons
- Ranking logic is covered by automated tests

**2.3 Handle comparisons I can't answer** ✅ 🔨
As a traveler, I want to say "too close to call" or skip a place I don't remember so that I'm never forced into a fake answer.

- "Too close to call" places the new log right below the compared place
- Skipping asks about the next closest place instead, with no limit on skips

**2.4 Scores stay accurate** ✅ 🔨
As a traveler, I want my scores to update as my list grows so that a place I loved early in my trip still compares fairly against places I find later.

## 3. Profile

**3.1 See my places by country** ✅
As a traveler, I want my logs sorted by country automatically so that I can find my Greece list without organizing anything myself.

**3.2 See my all-time rankings** ✅
As a traveler, I want to see my overall rankings by category so that I know my favorite hostel across every trip.

**3.3 Delete a log** ✅
As a traveler, I want to delete a log so that a mistake or a place I no longer want to share disappears everywhere, and the rest of my list moves up.

## 4. Sharing (the core moment)

**4.1 Share a country list in one tap** ✅
As a recommender, I want to send someone my ranked list for a country in one tap so that when someone at the hostel says "I'm heading to Colombia next," I don't have to type a wall of text from memory.

- Sharing a country is one tap from my profile
- The list includes every place I logged there, with scores, tags, and tips
- Only the places in that list are shared, not the rest of my profile

**4.2 Save a list for later** ✅
As a traveler, I want to save a list a friend sent me so that it's there when I arrive, instead of buried in a chat.

**4.3 Open a list without the app** 💭
As a link viewer, I want to open a shared list in my browser without making an account so that I can use a recommendation even if I've never heard of meetme.

**4.4 Turn off a shared link** 💭
As a recommender, I want to turn off a link I shared so that it stops working if it gets forwarded further than I meant.

## 5. Friends

**5.1 Add friends by username** 📋
As a traveler, I want to find people I met by their username and send a friend request so that I can keep their recommendations after we go separate ways.

**5.2 Mutual friends only** 📋
As a traveler, I want friendships to need both people to accept so that strangers can't follow my trail.

**5.3 Friends feed** 📋
As a traveler, I want a feed of my friends' newest logs so that I see where people I trust have actually been.

## 6. Privacy and safety

Trust is the product, so these are fixed rules, not optional settings.

**6.1 Friends-only by default** 📋
As a traveler, I want every log to be friends-only unless I choose otherwise so that I never share more than I meant to.

- Every new log starts as friends-only
- Making a log public is a choice in the logging flow, one post at a time
- Nothing ever becomes more public than it was when I posted it

**6.2 Delay where I am right now** 📋
As a traveler, I want to delay my posts by 24, 48, or 72 hours so that friends can see my recommendations without knowing exactly where I am today.

- Delayed logs are hidden from friends and shared lists until the delay passes

**6.3 No exact dates in public** 📋
As a traveler, I want public reviews and shared lists to show only the month and year so that people know if a review is recent without being able to track my route.

**6.4 No messages from strangers** 📋
As a traveler, I want no way for strangers to message me so that I don't get the creepy DMs and promoter spam that happen on other travel apps.

**6.5 Block, report, and delete my account** 📋
As a user, I want to block or report people and delete my account so that I stay in control of my experience and my data.

## 7. Finding places

**7.1 Search by city, category, and vibe** 📋
As a traveler, I want to search things like "social hostels in Tulum" so that I find places that fit how I travel, not just the highest-rated ones.

**7.2 See friends' opinions separately** 📋
As a traveler, I want friends' scores shown separately from the public score so that I can trust people I know over strangers.

**7.3 Know if a review is outdated** 📋
As a traveler, I want to see when a place was reviewed and have recent reviews count more so that a "party hostel" recommendation from the wrong season doesn't send me somewhere empty.

**7.4 Public scores I can trust** 💭
As a traveler, I want public scores that don't let one 10/10 review beat fifty great ones so that the top-ranked places really are the best.
