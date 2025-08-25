"use client"

import type React from "react"

import { ArrowLeft, HomeIcon, MessageCircle, User } from "lucide-react"
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

interface SearchProps {
  query: string
  events: Event[]
  onEventClick: (eventId: string) => void
  onBackClick: () => void
  onHomeClick: () => void
  onMessagesClick: () => void
  onAccountClick: () => void
}

export function Search({
  query,
  events,
  onEventClick,
  onBackClick,
  onHomeClick,
  onMessagesClick,
  onAccountClick,
}: SearchProps) {
  const [searchQuery, setSearchQuery] = useState(query)

  const filteredEvents = events.filter(
    (event) =>
      event.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
      event.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.organizer.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // The filtering happens automatically as the user types
  }

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="bg-[#FF8A65] p-4 pt-8 pb-6">
        <div className="flex items-center">
          <button
            onClick={onBackClick}
            className="text-white mr-2 hover:bg-[#FF7043] p-1 rounded-full transition-colors"
          >
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-white text-xl font-medium">Search</h1>
        </div>
      </div>

      {/* Search Input */}
      <form onSubmit={handleSearch} className="p-4 border-b">
        <input
          type="text"
          placeholder="Search events, tags, locations..."
          className="w-full p-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF8A65]"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          autoFocus
        />
        <div className="mt-2 text-xs text-gray-500 flex items-center">
          <span className="mr-1">Try searching by tags:</span>
          <div className="flex flex-wrap gap-1">
            {["Food", "Tech", "Art", "Fitness", "Volunteer"].map((tag) => (
              <button
                key={tag}
                type="button"
                className="bg-gray-100 px-2 py-0.5 rounded-full text-xs hover:bg-gray-200"
                onClick={() => setSearchQuery(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </form>

      {/* Search Results */}
      <div className="flex-1 overflow-auto p-4 bg-white">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <EventCard
              key={event.id}
              name={event.name}
              duration={event.duration}
              tag={event.tag}
              onClick={() => onEventClick(event.id)}
            />
          ))
        ) : (
          <div className="text-center p-4 text-gray-500">No events found for "{searchQuery}"</div>
        )}
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
