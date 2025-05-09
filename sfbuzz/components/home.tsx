"use client"

import type React from "react"

import { SearchIcon, HomeIcon, MessageCircle, User } from "lucide-react"
import { EventCard } from "./event-card"
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

interface HomeProps {
  events: Event[]
  onEventClick: (eventId: string) => void
  onSearchClick: (query: string) => void
  onHomeClick: () => void
  onMessagesClick: () => void
  onAccountClick: () => void
}

export function Home({ events, onEventClick, onSearchClick, onHomeClick, onMessagesClick, onAccountClick }: HomeProps) {
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      onSearchClick(searchQuery)
    }
  }

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="bg-[#FF8A65] p-4 pt-8 pb-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-white text-2xl font-bold">SFBuzz</h1>
            <h2 className="text-white text-xl">Home</h2>
          </div>
          <form onSubmit={handleSearchSubmit} className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="p-1 pl-2 pr-8 rounded-full text-sm border-none focus:outline-none focus:ring-2 focus:ring-[#FF8A65]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              type="submit"
              className="absolute right-1 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              <SearchIcon size={16} />
            </button>
          </form>
        </div>
      </div>

      {/* Event List */}
      <div className="flex-1 overflow-auto p-4 bg-white">
        {events.map((event) => (
          <EventCard
            key={event.id}
            name={event.name}
            duration={event.duration}
            tag={event.tag}
            onClick={() => onEventClick(event.id)}
          />
        ))}
      </div>

      {/* Bottom Navigation */}
      <div className="bg-[#FF8A65] p-4 flex justify-around items-center">
        <button className="text-white p-2 rounded-full hover:bg-[#FF7043] transition-colors" onClick={onHomeClick}>
          <HomeIcon size={24} />
        </button>
        <button className="text-white p-2 rounded-full hover:bg-[#FF7043] transition-colors" onClick={onMessagesClick}>
          <MessageCircle size={24} />
        </button>
        <button className="text-white p-2 rounded-full hover:bg-[#FF7043] transition-colors" onClick={onAccountClick}>
          <User size={24} />
        </button>
      </div>
    </div>
  )
}
