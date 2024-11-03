import React from 'react';
import Navbar from '../conponents/Navbar';
import Footer from '../conponents/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar></Navbar>
      {/* Dynamic section */}
      <div className='min-h-[calc(100vh-232px)] py-12 container mx-auto px-12'>
    <Outlet></Outlet>
      </div>
      {/* Footer */}
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;