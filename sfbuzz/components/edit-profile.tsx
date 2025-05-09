"use client"

import type React from "react"

import { ArrowLeft } from "lucide-react"
import { useState } from "react"

interface EditProfileProps {
  onSave: () => void
  onCancel: () => void
}

export function EditProfile({ onSave, onCancel }: EditProfileProps) {
  const [name, setName] = useState("Jane Doe")
  const [email, setEmail] = useState("jane.doe@example.com")
  const [phone, setPhone] = useState("(555) 123-4567")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically save the profile data
    onSave()
  }

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="bg-[#FF8A65] p-4 pt-8 pb-6">
        <div className="flex items-center">
          <button onClick={onCancel} className="text-white mr-2 hover:bg-[#FF7043] p-1 rounded-full transition-colors">
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-white text-xl font-medium">Edit Profile</h1>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="flex-1 p-4 overflow-auto">
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 bg-[#FFD180] rounded-full flex items-center justify-center">
            <span className="text-3xl font-bold">JD</span>
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF8A65]"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF8A65]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF8A65]"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div className="flex space-x-3">
          <button
            type="button"
            onClick={onCancel}
            className="flex-1 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="flex-1 py-2 bg-[#FF8A65] text-white rounded-md hover:bg-[#FF7043] transition-colors"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  )
}
