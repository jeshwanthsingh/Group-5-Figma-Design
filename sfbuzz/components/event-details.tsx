"use client"

import { ArrowLeft, Calendar, MapPin, HomeIcon, MessageCircle, User, Clock } from "lucide-react"

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

interface EventDetailsProps {
  event: Event
  onBackClick: () => void
  onCheckInClick: () => void
  onHomeClick: () => void
  onMessagesClick: () => void
  onAccountClick: () => void
}

export function EventDetails({
  event,
  onBackClick,
  onCheckInClick,
  onHomeClick,
  onMessagesClick,
  onAccountClick,
}: EventDetailsProps) {
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
          <h1 className="text-white text-xl font-medium">{event.name}</h1>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-4 overflow-auto">
        <div className="flex items-center mb-2">
          <Calendar className="w-5 h-5 mr-2 text-gray-600" />
          <span>{event.date}</span>
        </div>

        <div className="flex items-center mb-2">
          <Clock className="w-5 h-5 mr-2 text-gray-600" />
          <span>{event.time}</span>
        </div>

        <div className="flex items-center mb-6">
          <MapPin className="w-5 h-5 mr-2 text-gray-600" />
          <span>{event.location}</span>
        </div>

        <div className="mb-4">
          <p className="text-gray-700">{event.description}</p>
        </div>

        <div className="mb-6">
          <h3 className="font-bold mb-3">Vibes</h3>
          <div className="flex space-x-3">
            <span className="text-2xl">😟</span>
            <span className="text-2xl">🙁</span>
            <span className="text-2xl">😐</span>
            <span className="text-2xl">🙂</span>
            <span className="text-2xl">😊</span>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="font-bold mb-3">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {event.tags.map((tag, index) => (
              <span key={index} className="bg-[#FFD180] px-3 py-1 rounded-full text-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <h3 className="font-bold mb-2">Organizer</h3>
          <p>{event.organizer}</p>
        </div>

        <button
          onClick={onCheckInClick}
          className="w-full bg-[#FFD180] py-3 rounded-full font-medium hover:bg-[#FFAB40] transition-colors"
        >
          Check In
        </button>
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
