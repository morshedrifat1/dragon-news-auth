import React, {  useContext } from 'react';
import {Link, NavLink } from 'react-router';
import userImg from "../assets/user.png"
import { AuthContext } from '../authprovider/AuthProvider';
import { toast } from 'react-toastify';

const Navbar = () => {
  const {user,logoutUser} = useContext(AuthContext);
  const handleLogout = ()=>{
    logoutUser()
    .then(() => {
      toast.success("logout successful",{hideProgressBar: true})
      // Sign-out successful.
      // console.log(user);
    }).catch((error) => {
      toast(error.message)
    });
  }
    const navItem = (
      <>
        <ul className="flex gap-7">
          <li className="text-lg font-normal text-accent">
            <NavLink className={({ isActive}) =>isActive ? "text-accent-content" : "text-accent"} to={"/"}>Home</NavLink>
          </li>
          <li className="text-lg font-normal">
            <NavLink
              className={({ isActive}) =>isActive ? "text-accent-content" : "text-accent"}
              to={"/about"}
            >
              About
            </NavLink>
          </li>
          <li className="text-lg font-normal text-accent">
            <NavLink className={({ isActive}) =>isActive ? "text-accent-content" : "text-accent"} to={"/career"}>Career</NavLink>
          </li>
        </ul>
      </>
    );
    return (
        <div className='max-w-[1250px] p-5 mx-auto flex flex-col sm:flex-row gap-5 justify-between sm:pt-8 items-center'>
            <div className='flex-1'>{user&&<p>{user.email}</p>}</div>
            <div className="navItem justify-items-center flex-1">
                {navItem}
            </div>
            <div className="user flex gap-6 justify-end items-center flex-1">
                <img className='rounded-full w-10 h-10 object-fill cursor-pointer' src={user?user.photoURL:userImg} alt="" />
                {
                  user?<button onClick={handleLogout} className='bg-primary text-white px-10 py-2 text-xl font-medium rounded-sm cursor-pointer'>Logout</button>
                  :<button className='bg-primary text-white px-10 py-2 text-xl font-medium rounded-sm cursor-pointer'><Link to={'/auth/login'}>Login</Link></button>
                }
            </div>
        </div>
    );
};

export default Navbar;