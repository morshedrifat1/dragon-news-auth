import React from 'react';
import logo from "../assets/logo.png"
import { format } from 'date-fns';

const Header = () => {

    return (
        <div className='max-w-[1250px] p-5 mx-auto'>
            <div className='flex flex-col justify-center items-center pt-5 sm:pt-12 text-center'>
                <img className='w-[300px] sm:w-[400px]' src={logo} alt="" />
                <p className='mt-5 text-accent text-base sm:text-xl font-normal'>Journalism Without Fear or Favour</p>
                <p className='mt-3 text-accent text-base sm:text-xl font-medium'><span className='text-accent-content text-header'>{format(new Date(),"EEEE")},</span> {format(new Date(),"MMMM MM, yyyy")}</p>
            </div>
        </div>
    );
};

export default Header;