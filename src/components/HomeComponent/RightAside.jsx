import React from 'react';
import SocialLogin from './SocialLogin';
import FindUs from './FindUs';
import Qzone from './Qzone';

const RightAside = () => {
    return (
      <div>
        {/* social login */}
        <SocialLogin></SocialLogin>
        {/* Find Us On */}
        <div className="mt-10">
          <FindUs></FindUs>
        </div>

        {/* Qzone  */}
        <div className='mt-5'>
          <Qzone></Qzone>
        </div>
      </div>
    );
};

export default RightAside;