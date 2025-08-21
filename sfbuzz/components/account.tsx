"use client"

import { HomeIcon, MessageCircle, User, Edit, Key, Trash2 } from "lucide-react"

interface AccountProps {
  onEditProfileClick: () => void
  onChangePasswordClick: () => void
  onDeleteAccountClick: () => void
  onHomeClick: () => void
  onMessagesClick: () => void
  onAccountClick: () => void
}

export function Account({
  onEditProfileClick,
  onChangePasswordClick,
  onDeleteAccountClick,
  onHomeClick,
  onMessagesClick,
  onAccountClick,
}: AccountProps) {
  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="bg-[#FF8A65] p-4 pt-8 pb-6">
        <h1 className="text-white text-xl font-bold">My Account</h1>
      </div>

      {/* Profile Summary */}
      <div className="p-6 flex items-center border-b">
        <div className="w-16 h-16 bg-[#FFD180] rounded-full flex items-center justify-center mr-4">
          <span className="text-2xl font-bold">JD</span>
        </div>
        <div>
          <h2 className="text-xl font-medium">Jane Doe</h2>
          <p className="text-gray-600">jane.doe@example.com</p>
        </div>
      </div>

      {/* Account Options */}
      <div className="flex-1 overflow-auto">
        <button
          onClick={onEditProfileClick}
          className="w-full p-4 flex items-center border-b hover:bg-gray-50 transition-colors"
        >
          <Edit className="w-5 h-5 mr-3 text-gray-600" />
          <span>Edit Profile</span>
        </button>

        <button
          onClick={onChangePasswordClick}
          className="w-full p-4 flex items-center border-b hover:bg-gray-50 transition-colors"
        >
          <Key className="w-5 h-5 mr-3 text-gray-600" />
          <span>Change Password</span>
        </button>

        <button
          onClick={onDeleteAccountClick}
          className="w-full p-4 flex items-center border-b hover:bg-gray-50 transition-colors text-red-500"
        >
          <Trash2 className="w-5 h-5 mr-3" />
          <span>Delete Account</span>
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
        <button
          className="text-white p-2 rounded-full hover:bg-[#FF7043] transition-colors bg-[#FF7043]"
          onClick={onAccountClick}
        >
          <User size={24} />
        </button>
      </div>
    </div>
  )
}
