"use client"

import { useState } from "react"

interface FeedbackProps {
  onSubmit: () => void
}

export function Feedback({ onSubmit }: FeedbackProps) {
  const [selectedRating, setSelectedRating] = useState<number | null>(null)

  const emojis = ["😟", "🙁", "😐", "😊", "😃"]

  return (
    <div className="flex flex-col items-center justify-center h-full p-6">
      <h1 className="text-xl font-bold mb-8">How was the event?</h1>

      <div className="flex space-x-4 mb-12">
        {emojis.map((emoji, index) => (
          <button
            key={index}
            className={`text-3xl ${selectedRating === index ? "transform scale-125" : ""}`}
            onClick={() => setSelectedRating(index)}
          >
            {emoji}
          </button>
        ))}
      </div>

      <button
        onClick={onSubmit}
        className="bg-[#FFD180] w-full py-3 rounded-full font-medium"
        disabled={selectedRating === null}
      >
        Submit
      </button>
    </div>
  )
}
