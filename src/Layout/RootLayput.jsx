import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Shared/NaVBAR.JSX';
import Footer from '../Shared/Footer';

const RootLayput = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayput;