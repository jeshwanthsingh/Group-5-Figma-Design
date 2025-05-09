"use client"

import type React from "react"

import { ArrowLeft, AlertTriangle } from "lucide-react"
import { useState } from "react"

interface DeleteAccountProps {
  onConfirm: () => void
  onCancel: () => void
}

export function DeleteAccount({ onConfirm, onCancel }: DeleteAccountProps) {
  const [confirmation, setConfirmation] = useState("")
  const [isChecked, setIsChecked] = useState(false)

  const isConfirmationValid = confirmation.toLowerCase() === "delete"

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (isConfirmationValid && isChecked) {
      onConfirm()
    }
  }

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="bg-[#FF8A65] p-4 pt-8 pb-6">
        <div className="flex items-center">
          <button onClick={onCancel} className="text-white mr-2 hover:bg-[#FF7043] p-1 rounded-full transition-colors">
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-white text-xl font-medium">Delete Account</h1>
        </div>
      </div>

      {/* Content */}
      <form onSubmit={handleSubmit} className="flex-1 p-4 overflow-auto">
        <div className="flex items-center justify-center mb-6 text-red-500">
          <AlertTriangle size={48} />
        </div>

        <h2 className="text-xl font-bold text-center mb-2">Delete Your Account</h2>

        <p className="text-gray-600 mb-6 text-center">
          This action is permanent and cannot be undone. All your data will be permanently deleted.
        </p>

        <div className="mb-6">
          <label htmlFor="confirmation" className="block text-sm font-medium text-gray-700 mb-1">
            Type "delete" to confirm
          </label>
          <input
            type="text"
            id="confirmation"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            value={confirmation}
            onChange={(e) => setConfirmation(e.target.value)}
            required
          />
        </div>

        <div className="mb-6">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="mr-2 h-4 w-4 text-red-500 focus:ring-red-500 border-gray-300 rounded"
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
              required
            />
            <span className="text-sm text-gray-700">I understand that this action cannot be undone</span>
          </label>
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
            className={`flex-1 py-2 rounded-md ${
              isConfirmationValid && isChecked
                ? "bg-red-500 text-white hover:bg-red-600"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            } transition-colors`}
            disabled={!isConfirmationValid || !isChecked}
          >
            Delete Account
          </button>
        </div>
      </form>
    </div>
  )
}
