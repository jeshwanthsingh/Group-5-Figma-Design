"use client"

interface CheckedInProps {
  onOkClick: () => void
}

export function CheckedIn({ onOkClick }: CheckedInProps) {
  return (
    <div className="flex flex-col items-center justify-center h-full bg-[#A5D6A7] p-6">
      <h1 className="text-3xl font-bold mb-4">Checked In!</h1>
      <p className="text-center mb-8">You have checked in to the event.</p>
      <button onClick={onOkClick} className="bg-white w-full py-3 rounded-full font-medium">
        OK
      </button>
    </div>
  )
}
