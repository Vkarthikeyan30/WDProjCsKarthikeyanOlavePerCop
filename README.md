# The Clay and the Crown


### Description

*The Clay and the Crown* is an interactive website game that immerses users in the daily life and culture of ancient civilizations. We aim to foster historical awareness in users and encourage them to reflect on the enduring impacts of history. Even though technology is advancing, our society and government still face the same problems that caused the fall of some of these civilizations; hence, history is relevant for us to progress as a nation. This project makes history experiential to allow users to feel what it was like to live as a citizen in these civilizations through a narrative-driven simulation rather than simply presenting facts. 

The webpage follows a **life simulation** format, inspired by storytelling game advertisements on social media such as "Your Life as a ____". Upon entering the website, the user plays an ordinary citizen (e.g., a farmer in the Nile River, a scribe in Sumer, or an artisan in the Zhou Dynasty) and progresses through various stages of their life, set within true-to-life historical contexts. Each phase reveals aspects of the user's chosen civilization's traditions, daily routines, rituals, beliefs, architectural achievements, artistic achievements, and historical contributions.


### Design and Narrative of HTML Form

The website will utilize a HTML Form in the sixth webpage for the operation of the life simulation game, with the data collected interpreted and shared to the seventh and eighth webpages. *Check Topic Outline for elaboration*. The HTML Form will ask the users their preferred name and pronoun for integration into the life simulation game to personalize the users' experience. Then, they will be asked to choose between the three ancient civilizations. The life simulation game will be in a **Multiple Choice Question** format; each input determines a unique output. The sixth page will present the ending and whether it was a good or bad one. Meanwhile, the seventh page will discuss the historical context and relevance of the ending with respect to what actually transpired in reality.


### Topic Outline

1. Main Page: The main page shall be the home site for navigation of other webpages, a concise description of the website, and what to expect from using it.  The navigation will be done through a table in the main page and webpages.  All of the civilization webpages will feature contributions and important inventions, along with their cultures, rituals, and other important aspects of the civilizations.  
2. About Us Page: This page will just feature the makers of the page, goals of the website, insights towards the other topics, and some main sources.  It will be located near the header of the main page.  Will also site emails and github usernames.
3. Ancient Egypt Page: The webpage for Egypt will feature their old traditions like mummification, ancient artifacts, pyramids and tombs of ancient Egyptian rulers.  
4. Ancient China Page: The webpage for China will include past Chinese dynasties, housing and architecture, agriculture, philosophers, and scholars.  
5. Mesopotamia Page: The webage for Mesopotamia will feature its earliest empires, contributions in mathematics, and their breakthroughs in government and law.
6. Civilization Selection, Player Info, and Life Simulation Page: This page will allow users to select a civilization and input a character name, pronoun, and role. It will simulate daily life through historical scenarios and choices based on their preferred civilization's context.
7. Results Page: This page will display the outcomes and consequences of the user's in-simulation choices. It will provide the ending (good/bad/neutral) and a summary of the character's life path.
8. Historical Context and Relevance Page: This page will connect ancient innovations and social structures to history. It will explain the lasting legacy and contemporary relevance of each featured civilization's contributions.


### JavaScript Integration

We will use JavaScript so that the users can select the civilizations they want to explore, for decision-based branching, and for progress tracking to allow users to undergo through a personalised gaming experience. **These can be found in the Ancient Egypt, Ancient China, and Mesopotamia pages of the website.** Also, we plan to use JavaScript for an interactive story progression that allow users to scroll, click, or make decisions which dynamically change the content on-screen. For instance, as users progress through different life stages in Ancient Egypt, Mesopotamia, or China, we will be able to incorporate scene transitions, animations, and sound effects that mirror their environment. This makes the webpage feel alive and responsive rather than static. 

## FINAL MODIFICATION PROPOSAL

### Overview

Our current website implements basic user authentication, a branching narrative game, and a comment system. However, it lacks full CRUD (Create, Read, Update, Delete) capabilities on the stored data. This proposal outlines enhancements that give users complete control over their personal information and the progress they make.


### Data Storage (Current)

* userProfiles – an object keyed by email, each containing: 
    * email, username, password, pronouns;
    * saveData: { civ, state } - the user's current game progress, where civ = civilization;
    * comments: array of comment IDs (not used – comments are stored globally)
* globalComments – an array of comment objects, each with:
    * id, text, username, pronouns, timestamp, parentId


### Proposed CRUD Features

1. User Profile Management, **Purpose:** We want to give users the ability to update their personal information.
    * Edit Profile
        * Where: A new "Edit Profile" button will be added to the Player Info Panel
        * How it works: Clicking opens a form pre-filled with user's current username and pronouns. Our users can change these fields and optionally set a new password. After submission, their profiles are updated in userProfiles and the display updates immediately.
        * Additional step: If their username is changed, all comments authored by that user in globalComments are also updated so comment authorship remains consistent.

2. Game Progress Management, **Purpose:** We want to allow users to manage their game saves more flexibly. We want them to be able to delete unwanted saves and maintain multiple playthroughs (e.g. one for each civilization).
    * Multiple Save Slots
        * Current: A single saveData object per user
        * Proposed: Replace with an array of up to 3 save slots. Each slot contains:
            * slotId (1,2, or 3)
            * civ (civilization)
            * state 
            * lastSaved (timestamp)
        * UI Changes:
            * In the Game Stats part, instead of a single "Save Progress" button, we will display a dropdown of save slots showing the civilization and last saved time for each occupied slot
            * Buttons: "Save to Slot X," "Load Slot X," and "Delete Slot X"
        * When starting a new civilization, our users choose an empty slot or overwrite an existing one
        * Benefits
            * Users can experiment with different civilizations without losing progress
            * They can revisit key decision points by loading earlier slots.
            * This supports the educational goal of comparing historical outcomes.
    * Delete Save
        * Purpose: Instead of current "Reset Game," users can permanently delete a saved slot
        * How it works: Each slot has a delete icon. Clicking confirms deletion, then the slot is cleared from userProfiles and the UI updates.

3. Comment Management, **Purpose:** Let users correct or remove their own comments, with a reasonable time limit for edits to preserve conversation context.
    * Edit Comment (within 10 minutes)
        * Where: For every comment, if the logged‑in user is the author and the comment’s timestamp is less than 10 minutes old, a pencil icon (edit) appears next to the author’s name.
        * How it works: Clicking the pencil replaces the comment text with a textarea pre-filled with the current content, plus “Save” and “Cancel” buttons. After saving, the comment object in globalComments is updated, and the comments list re‑renders.
        * Purpose: Allows users to fix typos or clarify thoughts shortly after posting, while preventing historical revisionism after a conversation has developed.
    * Delete Comment
        * Where: A trash icon appears alongside the edit icon for the author’s own comments (regardless of age).
        * How it works: Clicking the trash shows a confirmation dialog. If confirmed, the comment is removed from globalComments. If the deleted comment was a parent, all its replies are also removed (because they reference the parent ID). The view is then refreshed.
        * Purpose: Gives users full control to remove content they no longer wish to be associated with.

4. Rating System, **Purpose:** We want to promote convenience and transparency for users to offer security with anonymity
    * Anonymous Ratings
        * Can be used by users who do not have an account or wish to anonymously rate the website with optional short text reviews
        * We plan to implement:
            * 5-Star rating system
            * CRUD;
                * Creation: Creation of new reviews
                * Read: Displaying reviews and ratings
                * Update: Users can update these reviews and ratings and ratings would be averaged
                * Delete: Users can delete their ratings and reviews

#### Wireframes
The [Canva link](https://www.canva.com/design/DAG3LPkhbSI/j_Vml09AuZj0700VvMv_iQ/edit?utm_content=DAG3LPkhbSI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton) of the wireframes about data collection and CRUD implementation is found in this section.