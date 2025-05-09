"use client"

import type React from "react"

import { ArrowLeft, HomeIcon, MessageCircle, User, Send } from "lucide-react"
import { useState } from "react"

interface ChatProps {
  organizer: string
  onBackClick: () => void
  onHomeClick: () => void
  onMessagesClick: () => void
  onAccountClick: () => void
}

interface Message {
  id: string
  text: string
  sender: "user" | "organizer"
  timestamp: Date
}

export function Chat({ organizer, onBackClick, onHomeClick, onMessagesClick, onAccountClick }: ChatProps) {
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: `Hello! I'm the organizer for this event. How can I help you?`,
      sender: "organizer",
      timestamp: new Date(Date.now() - 3600000),
    },
  ])

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (message.trim()) {
      // Add user message
      const userMessage: Message = {
        id: Date.now().toString(),
        text: message,
        sender: "user",
        timestamp: new Date(),
      }

      setMessages([...messages, userMessage])
      setMessage("")

      // Simulate organizer response after a short delay
      setTimeout(() => {
        const organizerResponses = {
          "SF Markets": [
            "The Farmer's Market will have over 30 local vendors this weekend!",
            "Yes, we'll have live music from 5-7pm at the market.",
            "We accept cash, credit cards, and SNAP/EBT at all vendor booths.",
          ],
          "SF Brew Tours": [
            "The Beer Crawl includes 5 tastings at different breweries in North Beach.",
            "Yes, we require ID for all participants. The event is strictly 21+.",
            "We'll meet at The Saloon on Grant Avenue at 7pm sharp.",
          ],
          "Green SF": [
            "We'll provide all cleaning supplies, but please bring your own gloves if possible.",
            "The cleanup event will happen rain or shine, unless there's severe weather.",
            "Yes, this counts for community service hours! We can provide verification.",
          ],
          "SF Tech Community": [
            "The meetup will feature 3 lightning talks on AI, blockchain, and UX design.",
            "Yes, we'll have vegetarian and vegan food options available.",
            "You can pitch your startup during the networking session after the talks.",
          ],
          "SF Wellness Collective": [
            "The yoga session is suitable for all levels, including complete beginners.",
            "Please bring your own mat, water bottle, and a small towel.",
            "If it rains, we'll move to our indoor location on Valencia Street.",
          ],
          "Mission Art Collective": [
            "The exhibition features works from 12 local artists in various media.",
            "Yes, all artwork will be available for purchase, with prices ranging from $50-$2000.",
            "We'll have a special artist talk at 8:30pm during the opening.",
          ],
        }

        const defaultResponses = [
          "Thanks for your message! I'll get back to you soon.",
          "Great question! Let me check and get back to you.",
          "Yes, that's correct. Is there anything else you'd like to know?",
          "The event is still scheduled as planned. Looking forward to seeing you there!",
          "Please feel free to ask if you have any other questions.",
        ]

        const specificResponses = organizerResponses[organizer as keyof typeof organizerResponses] || defaultResponses
        const responseText = specificResponses[Math.floor(Math.random() * specificResponses.length)]

        const organizerMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: responseText,
          sender: "organizer",
          timestamp: new Date(),
        }

        setMessages((prev) => [...prev, organizerMessage])
      }, 1000)
    }
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
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
          <div>
            <h1 className="text-white text-xl font-medium">{organizer}</h1>
            <p className="text-white text-sm opacity-80">Event Organizer</p>
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 p-4 overflow-auto bg-gray-50">
        {messages.map((msg) => (
          <div key={msg.id} className={`mb-4 max-w-[80%] ${msg.sender === "user" ? "ml-auto" : "mr-auto"}`}>
            <div
              className={`p-3 rounded-lg ${
                msg.sender === "user"
                  ? "bg-[#FF8A65] text-white rounded-br-none"
                  : "bg-white border border-gray-200 rounded-bl-none"
              }`}
            >
              {msg.text}
            </div>
            <div className={`text-xs text-gray-500 mt-1 ${msg.sender === "user" ? "text-right" : "text-left"}`}>
              {formatTime(msg.timestamp)}
            </div>
          </div>
        ))}
      </div>

      {/* Message Input */}
      <form onSubmit={handleSendMessage} className="p-3 border-t flex items-center">
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 p-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#FF8A65]"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          className="ml-2 p-2 bg-[#FF8A65] text-white rounded-full hover:bg-[#FF7043] transition-colors"
          disabled={!message.trim()}
        >
          <Send size={20} />
        </button>
      </form>

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
