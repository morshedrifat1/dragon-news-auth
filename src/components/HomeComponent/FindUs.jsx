import React from 'react';
import { BsInstagram, BsTwitter } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const FindUs = () => {
    return (
        <div>
            <h2 className='text-primary text-lg font-semibold'>Find Us On</h2>
            <div className='border-2 border-base-300 rounded-xl mt-5'>
                <div className='flex items-center gap-2 p-4 cursor-pointer'>
                <span className='bg-base-200 p-2 rounded-full'><FaFacebookF size={24} className='text-[#3B599C]' /></span><span className='text-base font-medium text-accent'>Facebook</span>
                </div>
                <hr className='border-t-2 border-base-300' />
                <div className='flex items-center gap-2 p-4 cursor-pointer'>
                <span className='bg-base-200 p-2 rounded-full'><BsTwitter size={24} className='text-[#58A7DE]' /></span><span className='text-base font-medium text-accent'>Facebook</span>
                </div>
                <hr className='border-t-2 border-base-300' />
                <div className='flex items-center gap-2 p-4 cursor-pointer'>
                <span className='bg-base-200 p-2 rounded-full'><BsInstagram size={24} className='text-[#e35472]' /></span><span className='text-base font-medium text-accent'>Facebook</span>
                </div>
            </div>
        </div>
    );
};

export default FindUs;