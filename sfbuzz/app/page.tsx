"use client"

import { useState } from "react"
import { Home } from "@/components/home"
import { EventDetails } from "@/components/event-details"
import { CheckedIn } from "@/components/checked-in"
import { Feedback } from "@/components/feedback"
import { Messages } from "@/components/messages"
import { Chat } from "@/components/chat"
import { Account } from "@/components/account"
import { Search } from "@/components/search"
import { EditProfile } from "@/components/edit-profile"
import { ChangePassword } from "@/components/change-password"
import { DeleteAccount } from "@/components/delete-account"

export type Screen =
  | "home"
  | "event-details"
  | "checked-in"
  | "feedback"
  | "messages"
  | "chat"
  | "account"
  | "search"
  | "edit-profile"
  | "change-password"
  | "delete-account"

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("home")
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null)
  const [selectedOrganizer, setSelectedOrganizer] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState<string>("")

  const events = [
    {
      id: "1",
      name: "Sunset Farmer's Market",
      duration: "3 hours",
      tag: "8pm",
      organizer: "SF Markets",
      date: "Sat, Jun 15",
      time: "4:00 PM - 7:00 PM",
      location: "Sunset Blvd, SF",
      description:
        "Local farmers and artisans selling fresh produce, handmade goods, and prepared foods. Live music and family-friendly activities.",
      tags: ["Food", "Market", "Family"],
    },
    {
      id: "2",
      name: "North Beach Beer Crawl",
      duration: "4 hours",
      tag: "21+",
      organizer: "SF Brew Tours",
      date: "Fri, Jun 21",
      time: "7:00 PM - 11:00 PM",
      location: "Columbus Ave, SF",
      description:
        "Tour of North Beach's best breweries and bars. Ticket includes tastings at 5 locations. Must be 21+ with valid ID.",
      tags: ["Drinks", "Social", "21+"],
    },
    {
      id: "3",
      name: "Park Cleanup",
      duration: "Morning",
      tag: "Volunteer",
      organizer: "Green SF",
      date: "Sun, Jun 16",
      time: "9:00 AM - 12:00 PM",
      location: "Golden Gate Park",
      description:
        "Community cleanup event. Tools and refreshments provided. Bring gloves and wear comfortable clothes.",
      tags: ["Volunteer", "Outdoors", "Community"],
    },
    {
      id: "4",
      name: "Tech Meetup SF",
      duration: "Evening",
      tag: "Networking",
      organizer: "SF Tech Community",
      date: "Thu, Jun 20",
      time: "6:00 PM - 9:00 PM",
      location: "SoMa, SF",
      description:
        "Monthly tech networking event with lightning talks and demos. Food and drinks provided. Great opportunity to meet local developers and entrepreneurs.",
      tags: ["Tech", "Networking", "Professional"],
    },
    {
      id: "5",
      name: "Yoga in the Park",
      duration: "1 hour",
      tag: "Wellness",
      organizer: "SF Wellness Collective",
      date: "Sat, Jun 15",
      time: "10:00 AM - 11:00 AM",
      location: "Dolores Park, SF",
      description:
        "Free outdoor yoga session for all levels. Bring your own mat and water. Weather permitting. Donations welcome to support community wellness programs.",
      tags: ["Fitness", "Outdoors", "Wellness"],
    },
    {
      id: "6",
      name: "SF Art Gallery Opening",
      duration: "Evening",
      tag: "Art",
      organizer: "Mission Art Collective",
      date: "Fri, Jun 14",
      time: "7:00 PM - 10:00 PM",
      location: "Mission District, SF",
      description:
        "Opening reception for new exhibition featuring local artists. Wine and appetizers served. Meet the artists and curators. Limited edition prints available for purchase.",
      tags: ["Art", "Culture", "Social"],
    },
  ]

  const handleEventClick = (eventId: string) => {
    const event = events.find((e) => e.id === eventId)
    if (event) {
      setSelectedEvent(event.id)
      setCurrentScreen("event-details")
    }
  }

  const handleCheckIn = () => {
    setCurrentScreen("checked-in")
  }

  const handleOkClick = () => {
    setCurrentScreen("feedback")
  }

  const handleSubmitFeedback = () => {
    setCurrentScreen("home")
  }

  const handleBackClick = () => {
    setCurrentScreen("home")
  }

  const handleHomeClick = () => {
    setCurrentScreen("home")
  }

  const handleMessagesClick = () => {
    setCurrentScreen("messages")
  }

  const handleAccountClick = () => {
    setCurrentScreen("account")
  }

  const handleSearchClick = (query: string) => {
    setSearchQuery(query)
    setCurrentScreen("search")
  }

  const handleChatClick = (organizerId: string) => {
    setSelectedOrganizer(organizerId)
    setCurrentScreen("chat")
  }

  const handleEditProfileClick = () => {
    setCurrentScreen("edit-profile")
  }

  const handleChangePasswordClick = () => {
    setCurrentScreen("change-password")
  }

  const handleDeleteAccountClick = () => {
    setCurrentScreen("delete-account")
  }

  const getSelectedEvent = () => {
    return events.find((e) => e.id === selectedEvent) || events[0]
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm mx-auto overflow-hidden rounded-3xl border-4 border-black shadow-xl bg-white h-[600px] relative">
        {currentScreen === "home" && (
          <Home
            events={events}
            onEventClick={handleEventClick}
            onSearchClick={handleSearchClick}
            onHomeClick={handleHomeClick}
            onMessagesClick={handleMessagesClick}
            onAccountClick={handleAccountClick}
          />
        )}
        {currentScreen === "event-details" && (
          <EventDetails
            event={getSelectedEvent()}
            onBackClick={handleBackClick}
            onCheckInClick={handleCheckIn}
            onHomeClick={handleHomeClick}
            onMessagesClick={handleMessagesClick}
            onAccountClick={handleAccountClick}
          />
        )}
        {currentScreen === "checked-in" && <CheckedIn onOkClick={handleOkClick} />}
        {currentScreen === "feedback" && <Feedback onSubmit={handleSubmitFeedback} />}
        {currentScreen === "messages" && (
          <Messages
            events={events}
            onChatClick={handleChatClick}
            onHomeClick={handleHomeClick}
            onMessagesClick={handleMessagesClick}
            onAccountClick={handleAccountClick}
          />
        )}
        {currentScreen === "chat" && (
          <Chat
            organizer={events.find((e) => e.organizer === selectedOrganizer)?.organizer || "Event Organizer"}
            onBackClick={() => setCurrentScreen("messages")}
            onHomeClick={handleHomeClick}
            onMessagesClick={handleMessagesClick}
            onAccountClick={handleAccountClick}
          />
        )}
        {currentScreen === "account" && (
          <Account
            onEditProfileClick={handleEditProfileClick}
            onChangePasswordClick={handleChangePasswordClick}
            onDeleteAccountClick={handleDeleteAccountClick}
            onHomeClick={handleHomeClick}
            onMessagesClick={handleMessagesClick}
            onAccountClick={handleAccountClick}
          />
        )}
        {currentScreen === "search" && (
          <Search
            query={searchQuery}
            events={events}
            onEventClick={handleEventClick}
            onBackClick={handleBackClick}
            onHomeClick={handleHomeClick}
            onMessagesClick={handleMessagesClick}
            onAccountClick={handleAccountClick}
          />
        )}
        {currentScreen === "edit-profile" && (
          <EditProfile onSave={() => setCurrentScreen("account")} onCancel={() => setCurrentScreen("account")} />
        )}
        {currentScreen === "change-password" && (
          <ChangePassword onSave={() => setCurrentScreen("account")} onCancel={() => setCurrentScreen("account")} />
        )}
        {currentScreen === "delete-account" && (
          <DeleteAccount onConfirm={() => setCurrentScreen("home")} onCancel={() => setCurrentScreen("account")} />
        )}
      </div>
    </div>
  )
}
