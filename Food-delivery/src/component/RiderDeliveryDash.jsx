import React, { useEffect, useState } from 'react'
import RiderDash from './RiderDash'
import WelcomeBack from './WelcomeBack'
import RiderHeader from './RiderHeader';
import RiderTracker from './RiderTracker';
import RiderDownReview from './RiderDownReview';
import RiderOrder from './RiderOrder';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const RiderDeliveryDash = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:8080/api/user', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setUser(response.data.user);
      } catch (error) {
        toast.error('Failed to fetch user data');
      }
    };

    fetchUserData();
  }, []);

  const today = new Date();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const monthName = months[today.getMonth()];
  const date = today.getDate();
  const year = today.getFullYear();

const mockOrderData = {
    id: '098765',
    shipmentId: '2024042310001',
    isOngoing: true,
    totalTime: '30 minutes',
    items: [{ name: 'Ofada rice, with snail', image: 'path_to_image' }],
    statusUpdates: [
      { time: 'April 20, 2024', status: 'En route to Alata', isActive: true, isCompleted: false },
      { time: 'April 20, 2024', status: 'Arrived at Alata', isActive: false, isCompleted: true },
      { time: 'April 20, 2024', status: 'Order pickup', isActive: false, isCompleted: false },
      { time: 'April 20, 2024', status: 'En route to customer', isActive: false, isCompleted: false },
      { time: 'April 20, 2024', status: 'Delivered to customer', isActive: false, isCompleted: false }
    ],
  };
  const [order, setOrder] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setOrder(mockOrderData);
    }, 1000);
  }, []);

  if (!order) {
    return <div className="text-center mt-20">Loading...</div>;
  }
  return (
    <div>
        <RiderDash />
        <div className="p-4 sm:ml-60 bg-[#EAEFFA]">
        {user && (

          <WelcomeBack
          welcome={`Welcome back, ${user.firstname}`}
          code="BXCSFS"
          date={`${monthName} ${date}, ${year}`}
          />
        )}
        <RiderHeader headling="Delivery Information" style="bg-[#FE4501] text-white mt-5"/>
        <div className='grid grid-cols-12 gap-2'>
          <div className='md:col-span-6 col-span-12'>
          <RiderTracker orders="Orders/ 098765" shipment="Shipment ID:" serial="SHP2024130001" item="Items:" discription="Ofodo rice, with snail" price="#3,500" time="update 15 sec ago" deliveryStatus="Devivery status" Ongoing="Ongoing" from="From" dispFrom="Alata Restaurants" to="To" dispTo="#23 Yoaco phase 2 Ogbomosho, Oyo 08161329340" totalPro="Total time" totalMinPro="30 minutes" buttonPro="confirm"/>
          <RiderOrder order={order} />
          </div>
          <div className='md:col-span-6 col-span-12'>
          <RiderTracker orders="Orders/ 098765" shipment="Shipment ID:" serial="SHP2024130001" item="Items:" discription="Ofodo rice, with snail" price="#3,500" time="update 15 sec ago" deliveryStatus="Devivery status" Ongoing="Ongoing" from="From" dispFrom="Alata Restaurants" to="To" dispTo="#23 Yoaco phase 2 Ogbomosho, Oyo 08161329340" totalPro="Total time Pro" totalMinPro="30 minutes" buttonPro="confirm"/>
          </div>
        </div>
        <RiderDownReview />
        </div>
    </div>
  )
}

export default RiderDeliveryDash