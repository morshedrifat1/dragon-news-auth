import React, { use } from 'react';
import { AuthContext } from '../authprovider/AuthProvider';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user,loading} = use(AuthContext);
    const location = useLocation();
    // console.log(location);
    if(loading){
        return <div className='flex justify-center items-center h-screen'>
        <span className="loading loading-dots loading-xl"></span>
    </div>
    }
    if(!user){
        return <Navigate state={location?.pathname} to={'/auth/login'}></Navigate>
    }
    return children
        
};

export default PrivateRoute;