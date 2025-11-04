import React from "react";
import CompanyCard from "../component/CompanyCard";
import item7 from "../assets/images/item7.png";
import brent from "../assets/images/brent.png";
import alata from "../assets/images/alata.png";
import aroma from "../assets/images/aroma.png";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';
import { toast } from "react-toastify";
const Companies = () => {
        const [user, setUser] = useState(null);
        const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('https://react-node-food-project.onrender.com/api/user', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setUser(response.data.user);
      } catch (error) {
        toast.error('Failed to fetch user data');
      }
    };

    fetchUserData();
  }, []);

  return (
    <div>
      <Link to="/" className="text-blue-600 underline p-5">
        Back to HomePage
      </Link>
      <h2 className="text-center text-semibold text-2xl mt-5">
        Order your delicious meals from our best restaurants
      </h2>
      {user &&(
        <h3 className="text-center text-semibold text-xl mt-2">
          Welcome, {user.fullName}!
        </h3>
      )}
      <CompanyCard
        com="Alata Mike & Honey Restaurant"
        comCon="Eating out saves you time and effort compared 
to cooking at home. You can simply order your 
food, have it prepared, and enjoy it without 
the hassle at ALATA"
        btn="Browse Alata"
        style={{ width: "50%" }}
        oneImg={alata}
        action={() => navigate('/restaurant/alata')}
      />

      <CompanyCard
        com={`Item7go Party Rice Shawarma`}
        comCon="Item7go offering a discounted price for a combination of items (e.g., a burger, fries, and drink combo)."
        btn="Browse Item7go"
        style={{ width: "50%" }}
        oneImg={item7}
        action={() => navigate('/restaurant/item7go')}
      />

      <CompanyCard
        com={`Aroma Place Mosho Restaurant`}
        comCon="Aroma Place restaurant allow you to try new and different dishes that you might not make at home."
        btn="Browse Aroma"
        style={{ width: "50%" }}
        oneImg={aroma}
        action={() => navigate('/restaurant/aroma')}
      />

      <CompanyCard
        com={`Brent Mall Mosho Restaurant`}
        comCon="Brent mall Mosho Free appetizers, desserts, or drinks with the purchase of our family YAKATA meal."
        btn="Browse Brent Mall"
        style={{ width: "50%" }}
        oneImg={brent}
        action={() => navigate('/restaurant/brent')}
      />
    </div>
  );
};

export default Companies;
