import React from 'react';
import LessonsPreviewItem from './lessons/lessonPreviewItem';
import sessionData from '@/utils/sessionData';

const LessonsPreview: React.FC = () => {

  return (
    <div className='flex flex-col bg-black py-20'>
      <h1 className='text-5xl text-center font-bold text-gray-200 my-10'> Lessons </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mx-auto px-8 md:px-16 lg:px-40 py-10">
        {sessionData.map((lesson, index) => (
          <LessonsPreviewItem key={index} title={lesson.title} subTitle={lesson.subTitle} link={lesson.link} />
        ))}
      </div>
    </div>
  );
};

export default LessonsPreview;
