# Group-5-Figma-Design
# SFBuzz Prototype Report: Design Document

## 1. Project Overview

SFBuzz is a mobile application concept meticulously designed to address the dynamic social needs of students and young residents in San Francisco. The core mission is to provide a real-time, curated guide to trending local events, moving beyond static listings by leveraging social trends and crowd-sourced activity. This enables users to spontaneously discover what's happening around them, from pop-up gatherings to popular local spots.

The application aims to solve the common challenge of "event discovery fatigue" by surfacing relevant, immediate opportunities for engagement. Key functionalities include real-time event feeds, seamless check-ins, expressive vibe rating, easy sharing with friends, and event pinning for future reminders. Ultimately, SFBuzz is envisioned as an indispensable social companion for navigating and experiencing city life effortlessly and excitingly.

**Target Audience:**
* University students in San Francisco.
* Young professionals and residents (ages 18-30).
* Individuals seeking spontaneous, socially validated local experiences.

## 2. Design Philosophy

The SFBuzz prototype adheres to a user-centric design philosophy rooted in **John Maeda's Laws of Simplicity**, prioritizing clarity, efficiency, and an intuitive user experience.

* **Clarity and Visual Hierarchy:** The design employs a clean layout with distinct visual Cues to guide the user. Information is structured logically, with prominent elements for primary actions and key information. For instance, event names and call-to-action buttons are visually emphasized.
* **Minimal Navigation & Efficiency:** Core navigation is streamlined to three main tabs (Home, Search, Profile) on the Home Screen. Key interactions, such as checking into an event or rating its vibe, are designed as one-tap operations to minimize friction and cognitive load, ensuring users can achieve their goals quickly.
* **Youthful & Engaging Aesthetics:** A warm and vibrant color palette, dominated by shades of **orange and coral** (specifically `#FE724C` for primary actions and headers), is used to create an energetic, approachable, and youth-friendly atmosphere. These colors are also chosen for their high contrast and readability, ensuring accessibility. Accents of bright **yellow** (`#FFC529`) are used on event cards to draw attention to key event markers.
* **Consistency:** A consistent design language (typography, iconography, button styles, card layouts) is applied across all screens to create a cohesive and predictable user experience, making the app easier to learn and use.
* **Feedback & Responsiveness:** The design incorporates immediate visual feedback for user actions, such as the check-in confirmation screen, reinforcing user interactions and building confidence.

## 3. Screenshot of Key Screens



## 4. Screen Descriptions

The prototype encompasses four primary screens, each designed for a specific stage of the user journey:

### 4.1. Home Screen
* **Purpose:** Provides a dynamic, real-time feed of trending local events, acting as the primary discovery hub.
* **Key UI Elements:**
    * **Orange Header:** Displays the "SFBuzz" brand and "Home" title in white, with a filter/sort icon on the right for content customization.
    * **Event Cards:** White cards with a distinctive vertical yellow accent bar on the left. Each card clearly presents:
        * Event Name (bold, black text).
        * Brief details with icons (e.g., `🎟️ 5.2 rating`, `👥 54 m`), potentially indicating rating/type and distance/attendees.
        * Subtle shadow for depth.
    * **Bottom Navigation Bar:** Orange background with three white icons:
        * **Home (Filled):** Current active screen.
        * **Search (Outline):** For specific event lookups.
        * **Profile (Outline):** For user-specific information and settings.

### 4.2. Event Detail Screen
* **Purpose:** Offers comprehensive information about a selected event, enabling users to make informed decisions and engage further.
* **Key UI Elements:**
    * **Orange Header:** Features a white back chevron (`‹`), a centered "Event Name" title, and a white outlined options/share icon (`○`) on the right.
    * **Information Section:** Clearly displays:
        * `📅 Date, Time`
        * `📍 Location` (with map preview anticipated below or via tap).
    * **"Vibes" Section:** Displays user-generated or event-organizer-defined vibes using expressive emoticons (e.g., 😞 🙁 😐 🙂 😄) for a quick emotional read of the event.
    * **"Tags" Section:** Features pill-shaped tags (e.g., "Student-Friendly," "Chill") with orange text on a light gray background, allowing users to quickly grasp event characteristics. The active/selected tag may have a slightly darker gray background.
    * **"Check in" Button:** A prominent button with orange text on a dark gray background, facilitating easy event check-in.
    * **Home Indicator:** A subtle black horizontal line at the bottom, common in modern gesture-based mobile UIs.

### 4.3. Check-In Confirmation Screen
* **Purpose:** Provides immediate visual confirmation to the user upon successfully checking into an event.
* **Key UI Elements:**
    * **Full-Screen Teal Background:** Creates a distinct, positive feedback state.
    * **Centered Content:**
        * "Checked In!" title (bold, dark text).
        * Supporting text: "You have checked in to the event."
        * "OK" button (white background, dark text, subtle border) to dismiss the confirmation.

### 4.4. Post-Event Rating Screen
* **Purpose:** Allows users who have attended an event to contribute to its social validation by submitting vibe ratings and tags.
* **Key UI Elements:**
    * **Clear Title:** "How was checked in" (or similar, like "How was the event?"), prompting user feedback.
    * **Emoticon Rating:** A horizontal array of expressive emoticons (e.g., 😞 🙁 😐 🙂 😄) for users to select their overall feeling about the event.
    * **Submit Button:** An orange button with white/dark text, enabling users to submit their rating. This feedback loop is crucial for the "social trends and crowd activity" aspect of SFBuzz.

## 5. Key Design Goals & User Flow Highlights

**Key Design Goals:**
* **Effortless Discovery:** Enable users to find relevant events with minimal effort.
* **Real-Time Relevance:** Prioritize events that are currently trending or popular.
* **Social Engagement:** Encourage check-ins, vibe ratings, and sharing to build a community-driven platform.
* **Intuitive Interaction:** Ensure the app is easy to learn and delightful to use.

**Core User Flow (as depicted in prototype screens):**
1.  **Discover:** User browses trending events on the **Home Screen**.
2.  **Explore:** User taps an event card to view detailed information on the **Event Detail Screen**.
3.  **Engage:** User decides to "Check in" to the event.
4.  **Confirm:** User receives immediate feedback on the **Check-In Confirmation Screen**.
5.  **Contribute:** After the event (or a set duration), the user is prompted to rate their experience on the **Post-Event Rating Screen**.

This design for SFBuzz aims to provide a seamless and engaging experience for discovering and participating in San Francisco's vibrant local event scene.
