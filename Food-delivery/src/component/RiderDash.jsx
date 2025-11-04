"use client";
import React, { useState } from 'react';
import ImageSrc from '../assets/images/rider.png'; // Note: Importing image like this might need the proper path or use require
import Review from './Review';
import DeliveryStatus from './DeliveryStatus';
import Aside from './Aside';

const RiderDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <div>
        <button 
          data-drawer-target="logo-sidebar" 
          data-drawer-toggle="logo-sidebar" 
          aria-controls="logo-sidebar" 
          type="button" 
          className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          onClick={toggleSidebar}
        >
          <span className="sr-only">Open sidebar</span>
          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
          </svg>
        </button>

        <aside 
          id="logo-sidebar" 
          className={`fixed top-0 left-0 z-40 w-60 h-screen transition-transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0`} 
          aria-label="Sidebar"
        >
          <div className="h-full px-3 py-4 overflow-y-hidden bg-white md:bg-[#D3D5E9]">
            <button 
              type="button" 
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:text-gray-600 dark:focus:ring-gray-600 sm:hidden"
              onClick={toggleSidebar}
            >
              <span className="sr-only">Close sidebar</span>
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path>
              </svg>
            </button>
            <ul className="space-y-1 md:block hidden">
              <li>
                <div className='shadow'>
                  <img src={ImageSrc} alt=""/>
                  <div className='text-center bg-white'>
                    <p className='font-bold'>Mr Ibrahim Olawale</p>
                    <p>Boxer JK723FG</p>
                  </div>
                </div>
              </li>
              <li>
                <Review />
              </li>
              <li>
                <DeliveryStatus />
              </li>
            </ul>
            <Aside />
          </div>
        </aside>
      </div>
    </div>
  );
}

export default RiderDashboard;
