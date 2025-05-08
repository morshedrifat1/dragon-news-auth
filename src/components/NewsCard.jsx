// import React from 'react';

// const NewsCard = ({newsData}) => {
//     return (
//         <div>
//             <h1>{newsData.title}</h1>
//         </div>
//     );
// };

// export default NewsCard;



import React from 'react';
import { CiBookmark, CiShare2 } from 'react-icons/ci';
import { FaStar, FaEye } from 'react-icons/fa';
import { NavLink } from 'react-router';


const NewsCard = ({ newsData }) => {
  const {
    id,
    title,
    rating,
    total_view,
    author,
    thumbnail_url,
    details,
  } = newsData;

  const formattedDate = new Date(author.published_date).toLocaleDateString(
    'en-US',
    {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }
  );

  return (
    <div className="bg-white rounded-lg border-2 border-base-200">
      {/* Author Section */}
      <div className='flex justify-between items-center bg-base-300 p-5'>
        <div className="flex items-center ">
            <img
            src={author.img}
            alt={author.name}
            className="w-12 h-12 rounded-full object-cover mr-4"
            />
            <div>
            <h3 className="text-lg font-semibold">{author.name}</h3>
            <p className="text-sm text-gray-500">{formattedDate}</p>
            </div>
        </div>
        <div className='space-x-4'>
            <button className='cursor-pointer'><CiShare2 size={24} /></button>
            <button className='cursor-pointer'><CiBookmark size={24} /></button>
        </div>
      </div>
      
      <div className='p-5 pb-0'>
            {/* Title */}
        <h2 className="text-xl leading-9 font-bold mb-2">{title}</h2>
        
        {/* Thumbnail Image */}
        <img
            src={thumbnail_url}
            alt={title}
            className="w-full h-64 object-cover rounded-lg mb-4"
        />
        
        {/* Details */}
        <p className="text-accent text-base leading-7">
            {details.slice(0, 150)}...
        </p>
        <button className="text-[#fe874a] font-semibold hover:underline cursor-pointer mt-2 mb-4">
            <NavLink to={`/news-details/${id}/`}>Read More</NavLink>
        </button>


        {/* Rating and Views */}
        <div className="flex border-t-2 border-base-300 py-5 items-center justify-between">
          <div className="flex items-center gap-x-1.5 text-yellow-500">
            {Array.from({ length: 5 }, (_, index) => (
              <FaStar
                key={index}
                className={`${
                  index < rating.number ? 'text-yellow-500' : 'text-gray-300'
                }`}
              />
            ))}
            <span className="ml-1 text-gray-800 font-semibold">
              {rating.number}
            </span>
          </div>
          <div className="flex items-center gap-2 text-gray-500">
            <FaEye />
            <span className="ml-1">{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;