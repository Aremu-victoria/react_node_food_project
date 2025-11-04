import React, { useState } from "react";
import Button from "../Botton";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import { Link, useNavigate } from "react-router";
import { useFormik } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";
import axios from 'axios';

const Login = () => {
 const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: yup.object({
      email: yup.string().email('Invalid email').required('Required'),
      password: yup.string().required('Required')
    }),
    onSubmit: async (values) => {
      try {
        setLoading(true);
        const response = await axios.post('http://localhost:8080/login', values);
        
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('role', response.data.role);
        localStorage.setItem('user', JSON.stringify(response.data.user));

        toast.success('Login successful!');
        switch(response.data.role) {
          case 'seller':
            navigate('/seller-dashboard');
            break;
          case 'rider':
            navigate('/rider-dashboard');
            break;
          default:
            navigate('/buyer-dashboard');
        }
        
      } catch (error) {
        let message = 'Login failed';
        if (error.response) {
          message = error.response.data.message || message;
        }
        toast.error(message);
      } finally {
        setLoading(false);
      }
    }
  });

  return (
    <>
      <Link to="/">
        <a href="" className="underline text-blue-600 p-10">
          Back to HomePage
        </a>
      </Link>
      <div className="bg-white shadow-lg p-5 max-w-sm md:w-full w-[90%] mx-auto mt-11 ">
        <h1 className="font-bold text-2xl lg:block hidden">Log in</h1>

        <form action="" onSubmit={formik.handleSubmit}>
          <Button
            generalButton={
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "baseline",
                  gap: "8px",
                  height: "10px",
                }}
              >
                <FcGoogle /> Coutinue with Google
              </span>
            }
            style={{
              backgroundColor: "transparent",
              border: "2px solid #ff4500",
              color: "#000",
              margin: "10px 0",
            }}
          />
          <Button
            generalButton={
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "baseline",
                  gap: "8px",
                  height: "10px",
                }}
              >
                <BsApple /> Coutinue with Apple
              </span>
            }
            style={{
              backgroundColor: "transparent",
              border: "2px solid #ff4500",
              color: "#000",
              margin: "10px 0",
            }}
          />
          <div className="flex justify-center items-center">
            <div className="w-1/2 border-b border-black"></div>
            <span className="mx-4">or</span>
            <div className="w-1/2 border-b border-black"></div>
          </div>
          <label for="firstname" className="block text-sm font-bold my-2">
            Email
          </label>
          <input
            type="text"
            name="email"
            className={
              formik.touched.email && formik.errors.email
                ? "mt-1 w-full px-4 py-2 border rounded-md border-red-500"
                : "mt-1 w-full px-4 py-2 border rounded-md"
            }
            placeholder="Enter your email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <div className="text-[red]">
            {formik.touched.email && formik.errors.email}
          </div>
          <label for="firstname" className="block text-sm font-bold my-2">
            Password
          </label>
          <input
            type="password"
            name="password"
            className={
              formik.touched.password && formik.errors.password
                ? "mt-1 w-full px-4 py-2 border rounded-md border-red-500"
                : "mt-1 w-full px-4 py-2 border rounded-md"
            }
            placeholder="Enter password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <div className="text-[red]">
            {formik.touched.password && formik.errors.password}
          </div>
          <p className="md:flex justify-between my-3">
            <p>
              <input type="checkbox" name="" id="" /> Remember me
            </p>
            <p>
              <a href="#" className="text-[#ff4500]">
                <Link to="/forgotPassword">Forgot password?</Link>
              </a>
            </p>
          </p>
          <Button generalButton="Log in" />
          <p className="text-center py-2">
            Don't have an account{" "}
            <span className="text-[#FF4500] font-bold">
              <Link to="/signup">Sign up</Link>
            </span>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
