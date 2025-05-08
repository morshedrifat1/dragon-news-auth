import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className='max-w-[1250px] mx-auto p-5'>
      <div className="bg-base-200 p-4 flex flex-col sm:flex-row gap-5 items-center mt-4  rounded-lg">
        <button className="btn btn-secondary px-5 py-5">Latest</button>
        <Marquee pauseOnHover={true} className="cursor-pointer">
            <div className="flex gap-10">
            <p className="text-base font-normal text-center sm:text-lg sm:font-semibold sm:text-left text-accent-content">
            Match Highlights: Germany vs Spain — as it happened ! Match Highlights: Germany vs Spain as...
            </p>  
            <p className="text-base font-normal text-center sm:text-lg sm:font-semibold sm:text-left text-accent-content">
            Match Highlights: Germany vs Spain — as it happened ! Match Highlights: Germany vs Spain as...
            </p>
            <p className="text-base font-normal text-center sm:text-lg sm:font-semibold sm:text-left text-accent-content">
            Match Highlights: Germany vs Spain — as it happened ! Match Highlights: Germany vs Spain as...
            </p>
            </div>
        </Marquee>

      </div>
    </div>
  );
};

export default LatestNews;
