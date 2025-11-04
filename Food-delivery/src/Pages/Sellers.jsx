import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SellerDashboard = () => {
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
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Seller Dashboard</h1>
      {user && (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Store Information</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="font-medium">Store Name:</p>
              <p>{user.storename}</p>
            </div>
            <div>
              <p className="font-medium">Owner:</p>
              <p>{user.firstname} {user.lastname}</p>
            </div>
            <div>
              <p className="font-medium">Contact Email:</p>
              <p>{user.email}</p>
            </div>
            <div>
              <p className="font-medium">Phone:</p>
              <p>{user.phone_number}</p>
            </div>
            <div>
              <p className="font-medium">Location:</p>
              <p>{user.address}, {user.city}, {user.state}</p>
            </div>
            <div>
              <p className="font-medium">Description:</p>
              <p>{user.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SellerDashboard;