import React from 'react';
import qzone1 from '../../assets/swimming.png'
import qzone2 from '../../assets/class.png'
import qzone3 from '../../assets/playground.png'

const Qzone = () => {
    return (
        <div className='bg-base-300 rounded-lg p-4'>
            <h2 className='text-primary text-lg font-semibold'>Q-Zone</h2>
            <div className='space-y-5 mt-5'>
                <img src={qzone1} alt="" />
                <img src={qzone2} alt="" />
                <img src={qzone3} alt="" />
            </div>
        </div>
    );
};

export default Qzone;