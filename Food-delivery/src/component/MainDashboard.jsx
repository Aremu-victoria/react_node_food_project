"use client";
import React from 'react'
import WelcomeBack from './WelcomeBack'
import RiderHeader from './RiderHeader';
import RiderSale from './RiderSale';
import Naira from '../assets/images/mdi_naira.png'
import approve from '../assets/images/approve.png'
import raphael from '../assets/images/groupPeople.png'
import mdi from '../assets/images/mdi.png'
import Transaction from './Transaction';
import Notification from './Notification';
import RiderDownReview from './RiderDownReview';
const MainDashboard = () => {
    const today = new Date();
    const months = [
      "January", "February", "March", "April", "May", "June", "July",
      "August", "September", "October", "November", "December"
    ];
    const monthName = months[today.getMonth()];
    const date = today.getDate();
    const year = today.getFullYear();
  return (
    <div>
        <div className="p-4">
            <WelcomeBack welcome='Welcome back, Mr Ibrahim' code='BXCSFS' date={`${monthName} ${date}, ${year}`}/>
            <div>
               <RiderHeader headling='Sales Tracking' style='my-5'/>
               <div className="custom-scrollbar overflow-x-auto">
               <div className='grid grid-cols-4 gap-4 mb-4 min-w-max md:grid-cols-4'>
                  <p><RiderSale  image={Naira} number="# 2,200,550" total="Total Revenue" date="Last 30 days"/></p>
                  <p><RiderSale  image={approve} number="1,253" total="Register Transporter" date="Last 30 days"/></p>
                  <p><RiderSale  image={raphael} number="14, 653" total="Active Transporter" date="Last 30 days"/></p>
                  <p><RiderSale  image={mdi} number="257" total="Total Restaurant" date="Last 30 days"/></p>
               </div>
               </div>
            </div>
      <div className="grid grid-cols-12 gap-4 mb-4">
        <div className='md:col-span-8 col-span-12'>
        <Transaction />
        </div>
         <div className= "col-span-4 hidden md:block">
             <Notification />
         </div>
      </div>
      <RiderDownReview />
   </div>
    </div>
  )
}

export default MainDashboard