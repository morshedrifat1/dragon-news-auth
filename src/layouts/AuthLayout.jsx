import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className='bg-base-200'>
            <header>
                <Navbar></Navbar>
            </header>
            <section className='max-w-[1250px] flex flex-col h-screen justify-center items-center mx-auto'>
                <Outlet></Outlet>
            </section>
        </div>
    );
};

export default AuthLayout;