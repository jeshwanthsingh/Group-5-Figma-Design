"use client"

import { HomeIcon, MessageCircle, User } from "lucide-react"
import { useState } from "react"

interface Event {
  id: string
  name: string
  duration: string
  tag: string
  organizer: string
  date: string
  time: string
  location: string
  description: string
  tags: string[]
}

interface MessagesProps {
  events: Event[]
  onChatClick: (organizerId: string) => void
  onHomeClick: () => void
  onMessagesClick: () => void
  onAccountClick: () => void
}

export function Messages({ events, onChatClick, onHomeClick, onMessagesClick, onAccountClick }: MessagesProps) {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredOrganizers = events
    .map((event) => event.organizer)
    .filter((organizer, index, self) => self.indexOf(organizer) === index)
    .filter((organizer) => searchQuery === "" || organizer.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="bg-[#FF8A65] p-4 pt-8 pb-6">
        <h1 className="text-white text-xl font-bold">Messages</h1>
        <p className="text-white text-sm opacity-80">Chat with event organizers</p>
      </div>

      {/* Search */}
      <div className="p-4 border-b">
        <input
          type="text"
          placeholder="Search organizers..."
          className="w-full p-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF8A65]"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Message List */}
      <div className="flex-1 overflow-auto">
        {filteredOrganizers.length > 0 ? (
          filteredOrganizers.map((organizer, index) => (
            <div
              key={index}
              className="flex items-center p-4 border-b cursor-pointer hover:bg-gray-50"
              onClick={() => onChatClick(organizer)}
            >
              <div className="w-12 h-12 bg-[#FFD180] rounded-full flex items-center justify-center mr-3">
                <span className="text-lg font-bold">{organizer.charAt(0)}</span>
              </div>
              <div>
                <h3 className="font-medium">{organizer}</h3>
                <p className="text-sm text-gray-500">Event Organizer</p>
              </div>
            </div>
          ))
        ) : (
          <div className="p-4 text-center text-gray-500">No organizers found</div>
        )}
      </div>

      {/* Bottom Navigation */}
      <div className="bg-[#FF8A65] p-4 flex justify-around items-center">
        <button className="text-white p-2 rounded-full hover:bg-[#FF7043] transition-colors" onClick={onHomeClick}>
          <HomeIcon size={24} />
        </button>
        <button
          className="text-white p-2 rounded-full hover:bg-[#FF7043] transition-colors bg-[#FF7043]"
          onClick={onMessagesClick}
        >
          <MessageCircle size={24} />
        </button>
        <button className="text-white p-2 rounded-full hover:bg-[#FF7043] transition-colors" onClick={onAccountClick}>
          <User size={24} />
        </button>
      </div>
    </div>
  )
}
