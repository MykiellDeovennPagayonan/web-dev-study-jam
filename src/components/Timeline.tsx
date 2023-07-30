import React from 'react';
import timelineItemsData from '@/utils/timelineItemData';
import TimelineItem from './Timeline/TimelineItem';

const Timeline: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full bg-gray-900 py-16">
      <h1 className='text-5xl text-center font-bold text-gray-100 my-10'> Timeline</h1>
      <div className="w-1 bg-gray-500" style={{ height: 670 }}>
        <div className="relative w-1 bg-gray-500 transform translate-x-1" style={{ height: 670 }}>
          {timelineItemsData.map((item, index) => (
            <TimelineItem key={index} title={item.title} date={item.date} side={index % 2 === 0 ? 'left' : 'right'} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;

