import React from 'react';
import Link from 'next/link';

interface LessonsPreviewProps {
  title: string;
  subTitle: string;
  link: string;
}

const LessonsPreviewItem: React.FC<LessonsPreviewProps> = ({ title, subTitle, link }) => {
  return (
    <div className="p-8 border border-gray-700 bg-gray-900 rounded-md shadow-md py-12">
      <h2 className="text-xl font-bold mb-2 text-blue-300 text-center">{title}</h2>
      <p className="text-gray-400 mb-4 text-center">{subTitle}</p>
      <div className='flex'>
        <Link href={link} className="text-blue-500 hover:text-blue-700 mx-auto" >
          Explore
        </Link>
      </div>
    </div>
  );
};

export default LessonsPreviewItem;
