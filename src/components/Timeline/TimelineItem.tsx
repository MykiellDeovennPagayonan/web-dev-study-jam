import React from 'react';

interface TimelineItemProps {
  title: string
  date: string
  side: string
}

const TimelineItem: React.FC<TimelineItemProps> = ({ title, date, side }) => {
  // check if the side is left or right
  return side === 'left' ? (
    // render the item on the left side
    <div className="mb-8 relative">
      <div className="bg-gray-800 w-36 shadow-lg p-4 rounded-lg ml-8 mr-4 transform -translate-x-52">
        <h3 className="text-lg font-bold text-yellow-300">{title}</h3>
        <p className="text-gray-100">{date}</p>
      </div>
      <div className="flex-shrink-0">
        <div className="bg-blue-500 w-6 h-6 rounded-full absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2"></div>
      </div>
    </div>
  ) : (
    // render the item on the right side
    <div className="mb-8 relative">
      <div className="flex-shrink-0">
        <div className="bg-blue-500 w-6 h-6 rounded-full absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2"></div>
      </div>
      <div className="bg-gray-800 w-36 shadow-lg p-4 rounded-lg ml-8 mr-4">
        <h3 className="text-lg font-bold text-yellow-300">{title}</h3>
        <p className="text-gray-100">{date}</p>
      </div>
    </div>
  )
}

export default TimelineItem
