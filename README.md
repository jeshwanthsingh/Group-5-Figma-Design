# Group-5-Figma-Design
# SFBuzz Mobile Application Prototype: Video Showcase Report

## 1. Introduction

This document outlines the features, user interface (UI), and user flow of the "SFBuzz" mobile application prototype, as demonstrated in a video showcase. SFBuzz is designed as a dynamic platform for discovering and interacting with local events, presumably targeted at users in San Francisco. The prototype highlights a comprehensive set of functionalities aimed at providing an engaging and seamless event navigation experience.

## 2. Overall Design & UI Impression

The SFBuzz prototype presents a clean, modern, and user-friendly interface. Key design characteristics observed include:

* **Consistent Color Scheme:** Predominantly uses a vibrant orange/coral for primary actions and branding, complemented by light yellow/beige accents and neutral backgrounds, ensuring good visual hierarchy and readability.
* **Clear Navigation:** Employs standard mobile navigation patterns, including a bottom tab bar for main sections and clear back-arrow navigation within screens.
* **Intuitive Layout:** Information is well-organized on each screen, with clear calls to action and legible typography.
* **Interactive Feedback:** The prototype effectively simulates user interactions, providing visual feedback for actions like typing, button presses, and screen transitions.

## 3. Visual Summary of Key Screens

https://github.com/jeshwanthsingh/Group-5-Figma-Design/blob/main/Frame.png


## 4. Detailed Feature Breakdown & User Flow

The prototype showcases the following core features and user interactions:

### 4.1. Home Screen (Main Event Feed)

The primary landing screen for event discovery.

* **Header:**
    * Displays the application title: **"SFBuzz"**.
    * Current page title: **"Home"**.
    * A **"Search..."** bar with a magnifying glass icon for initiating event searches.
* **Event Listings:**
    * A vertically scrollable feed of events.
    * Each event is presented as a distinct card, featuring:
        * **Category Tag:** A colored rectangular tag on the left side of the card (e.g., "Sunset," "North," "Park," "Tech," "Yoga," "SF"), visually categorizing the event.
        * **Event Title:** Clearly displayed (e.g., "Sunset Farmer's Market," "North Beach Beer Crawl").
        * **Key Details:** Small icons and accompanying text provide quick information such as:
            * Duration (e.g., "3 hours").
            * Time or specific attribute (e.g., "8pm," "21+," "Volunteer," "Networking," "Wellness," "Art").
        * **Progress/Time Bar (Implied):** A faint horizontal bar below the title, possibly indicating event progress or time remaining (its exact function is not explicitly detailed in the video description).
* **Bottom Navigation Bar:**
    * Provides access to the app's main sections with three icons:
        * **Home:** (Selected by default) Returns to this event feed.
        * **Messages/Chat:** Navigates to the messaging feature.
        * **Profile/Account:** Opens the user's account section.

### 4.2. Event Detail Screen

Provides comprehensive information about a specific event.

* **Access:** Users navigate to this screen by tapping an event card on the Home screen.
* **Header:**
    * **Back Arrow:** Allows users to return to the previous screen (Home screen).
    * **Event Title:** Displays the name of the selected event.
* **Content (Scrollable Area):**
    * **Date & Time:** Clearly displayed with associated calendar and clock icons (e.g., "Sat, Jun 15," "4:00 PM - 7:00 PM").
    * **Location:** Shown with a location pin icon (e.g., "Sunset Blvd, SF").
    * **Description:** A paragraph providing detailed information about the event.
    * **Vibes:** A row of five emoji faces (ranging from sad to happy), likely representing aggregated user feedback or the intended atmosphere of the event.
    * **Tags:** Pill-shaped, clickable tags relevant to the event (e.g., "Food," "Market," "Family" for the Farmer's Market; "Drinks," "Social," "21+" for the Beer Crawl).
    * **Organizer:** Displays the name of the event organizer (e.g., "SF Markets," "SF Brew Tours").
    * **Check In Button:** A prominent button allowing users to check into the event.

### 4.3. Search Functionality

Enables users to find specific events.

* **Access:** Initiated by tapping the search bar on the Home screen.
* **Search Screen UI:**
    * **Header:**
        * **Back Arrow:** To navigate back to the Home screen.
        * **Title:** "Search".
    * **Search Input Field:** A larger search bar with the placeholder text "Search events, tags, locations...".
    * **Tag Suggestions:**
        * Label: "Try searching by tags:"
        * A list of clickable common tags (e.g., Food, Tech, Art, Fitness, Volunteer) to facilitate quick searches.
* **Live Search Results & Interaction:**
    * **Dynamic Filtering:** As the user types into the search input (e.g., "park," "tech," "fitnes"), the event list displayed below filters in real-time to show matching results.
    * **Tag-Based Filtering:** Clicking a suggested tag (e.g., "Fitness") filters the event list accordingly.
    * **Navigation:** Tapping a search result card navigates the user to the respective Event Detail screen.

### 4.4. Messages/Chat Feature

Allows users to communicate, likely with event organizers.

* **Access:** Via the middle "Messages/Chat" icon in the bottom navigation bar.
* **Messages List Screen:**
    * **Header:**
        * Title: "Messages".
        * Subtext: "Chat with event organizers."
    * **Search Bar:** Placeholder "Search organizers..." for filtering chat list.
    * **List of Chats:**
        * Displays existing conversations, presumably with event organizers (e.g., "SF Markets," "SF Brew Tours," "SF Wellness Collective").
        * Each chat entry typically shows an initial/icon, the organizer's name, and a subtext like "Event Organizer."
        * The list filters dynamically as the user types in the search bar (e.g., typing "well" filters to show "SF Wellness Collective").
* **Individual Chat Screen:**
    * **Access:** By tapping an organizer's entry from the Messages List screen.
    * **Header:**
        * **Back Arrow:** To return to the Messages List.
        * **Organizer Name:** The name of the event organizer.
        * **Subtext:** "Event Organizer."
    * **Chat Interface:**
        * **Organizer Messages:** Displayed left-aligned, typically in white chat bubbles (e.g., "Hello! I'm the organizer for this event. How can I help you?").
        * **User Message Input:** A text field with "Type a message..." placeholder and a send icon (paper plane).
        * **User Messages:** Appear right-aligned, showcased in orange chat bubbles.
        * **Timestamps:** Visible for messages, indicating when they were sent or received.
        * The prototype simulates receiving replies from organizers, demonstrating a two-way conversation flow.

### 4.5. My Account Section

Manages user-specific information and settings.

* **Access:** Via the rightmost "Profile/Account" icon in the bottom navigation bar.
* **My Account Screen:**
    * **Header:** Title "My Account."
    * **User Information Display:**
        * A circular avatar, possibly with user initials (e.g., "JD").
        * Full Name (e.g., "Jane Doe").
        * Email (e.g., "jane.doe@example.com").
    * **Account Management Options (List Format):**
        * "Edit Profile" (associated with a pencil icon).
        * "Change Password" (associated with a key icon).
        * "Delete Account" (associated with a trash can icon, text possibly in red to indicate a critical action).
* **Edit Profile Screen:**
    * **Header:** Back arrow, "Edit Profile."
    * **Input Fields:** Shows fields for Full Name, Email, and Phone Number, pre-filled with existing user data. The prototype demonstrates the capability to input text into these fields.
    * **Action Buttons:** "Cancel" and "Save Changes." (The video description notes that the prototype doesn't fully simulate saving changes but demonstrates input.)
* **Change Password Screen:**
    * **Header:** Back arrow, "Change Password."
    * **Input Fields:**
        * Current Password
        * New Password
        * Confirm New Password
        * Each password field includes a show/hide toggle icon. The prototype shows dots being typed, indicating masked password input.
    * **Action Buttons:** "Cancel" and "Update Password."
* **Delete Account Screen:**
    * **Header:** Back arrow, "Delete Account."
    * **Warning Message:** A prominent message emphasizing the permanent nature of account deletion.
    * **Confirmation Steps:**
        * Requires the user to type the word "delete" into a designated text field.
        * Requires the user to check a box labeled "I understand that this action cannot be undone."
    * **Action Buttons:**
        * "Cancel."
        * "Delete Account" (button becomes active, possibly turning red, once all confirmation conditions are met).
    * **Outcome:** Upon confirming and clicking "Delete Account," the prototype navigates the user back to the Home screen, implying the account deletion process is complete.

## 5. Conclusion

The SFBuzz prototype effectively showcases a robust and intuitive mobile application concept for event discovery and engagement. The demonstrated features cover the entire user journey from finding events and getting details to interacting with organizers and managing personal account settings. The design is visually appealing and follows established mobile UI/UX conventions, suggesting a strong foundation for a user-friendly application.
