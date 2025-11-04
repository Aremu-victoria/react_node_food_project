import React, { useState } from "react";
import lock from "../../assets/images/lock.png";
import Button from "../Botton";
import { Link } from "react-router";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [role, setRole] = useState('buyer');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post('http://localhost:8080/forgot-password', { email, role });
      toast.success("Password reset link sent to your email");
      navigate("/login");
    } catch (error) {
      toast.error(error.response?.data?.message || "Error sending reset link");
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div className="bg-white shadow-lg p-4  max-w-sm md:w-full w-[90%] mx-auto mt-16 mb-10">
        <p>
          <img src={lock} alt="" className="justify-center mx-auto" />
        </p>
        <h2 className="my-2 font-bold text-3xl text-center">Forgot Password</h2>
        <p>Enter your phone number to reset your password</p>
        {/* Role selection */}
      <div className="mb-4">
        <label>Account Type</label>
        <select 
          value={role} 
          onChange={(e) => setRole(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="buyer">Buyer</option>
          <option value="seller">Seller</option>
          <option value="rider">Rider</option>
        </select>
      </div>
        <form onSubmit={handleSubmit}>
          <label for="number" class="block text-sm font-bold my-2">
            Phone number
          </label>
          <input
            type="text"
            id="phone number"
            class="mt-1 w-full px-4 py-2 border rounded-md"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="my-2">
            We will text you a verification code to reset your password.
          </p>
          <Button
            generalButton="Request password reset"
            style={{ backgroundColor: "#000", margin: "10px 0 " }}
          />
          <Link to="/reset-password/:token">
            {" "}
            <Button generalButton="Reset password" />
          </Link>
        </form>
      </div>
    </>
  );
};

export default ForgetPassword;
