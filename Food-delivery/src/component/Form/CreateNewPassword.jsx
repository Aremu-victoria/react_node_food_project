import Button from "../Botton";
import lock from "../../assets/images/lock.png";
import { Link, useNavigate, useParams, useSearchParams } from "react-router";
import axios from 'axios';
import { toast } from 'react-toastify';
import { useState } from "react";
import { useEffect } from "react";

const CreateNewPassword = () => {
  const { token, role } = useParams();
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [validToken, setValidToken] = useState(false);
  const navigate = useNavigate();
 

  useEffect(() => {
    const verifyToken = async () => {
      try {
        await axios.post('http://localhost:8080/verify-reset-token', { token });
        setValidToken(true);
      } catch (error) {
        toast.error('Invalid or expired reset token');
        navigate('/forgotPassword');
      }
    };
    verifyToken();
  }, [token, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (newPassword !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    setLoading(true);
    try {
      await axios.post('http://localhost:8080/reset-password', { 
      token, 
      newPassword, 
      role 
    });
      toast.success('Password updated successfully');
      navigate('/login');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Error resetting password');
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
        <h2 className="my-2 font-bold text-3xl text-center">
          Create new Password For {role}
        </h2>
        <p>Enter your password</p>
        <form onSubmit={handleSubmit}>
          <label for="password" class="block text-sm font-bold my-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            class="mt-1 w-full px-4 py-2 border rounded-md"
            placeholder="Enter your password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <label for="password" class="block text-sm font-bold my-2">
            Confirm Password
          </label>
          <input
            type="password"
            id="password"
            class="mt-1 w-full px-4 py-2 mb-2 border rounded-md"
            placeholder="Re-enter password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Link to="/resetPassword">
            <Button generalButton="Reset password" />
          </Link>
        </form>
      </div>
    </>
  );
};

export default CreateNewPassword;
