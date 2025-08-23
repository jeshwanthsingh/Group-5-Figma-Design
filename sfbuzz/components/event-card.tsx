"use client"

interface EventCardProps {
  name: string
  duration?: string
  tag?: string
  onClick: () => void
}

export function EventCard({ name, duration, tag, onClick }: EventCardProps) {
  return (
    <div className="flex mb-4 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors" onClick={onClick}>
      <div className="w-16 h-16 bg-[#FFD180] rounded-lg mr-3 flex items-center justify-center">
        <span className="font-bold text-sm">{name.split(" ")[0]}</span>
      </div>
      <div className="flex-1">
        <h3 className="font-bold">{name}</h3>
        <div className="h-2 bg-gray-200 rounded-full w-3/4 mt-1 mb-2"></div>
        <div className="flex items-center text-xs text-gray-600">
          {duration && (
            <div className="flex items-center mr-3">
              <span className="mr-1">◷</span>
              <span>{duration}</span>
            </div>
          )}
          {tag && (
            <div className="flex items-center">
              <span className="mr-1">◉</span>
              <span>{tag}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
