import React from "react";
import Button from "../Botton";
import { Link, useNavigate } from "react-router-dom";  
import { useFormik } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";  
import axios from "axios"; 

const SignupAsRider = () => {
  const navigate = useNavigate();  

  const formik = useFormik({
    initialValues: {
      firstname: "",
      email: "",
      phoneNumber: "",
      address: "",
      state: "",
      city: "",
      password: "",
      conPassword: "",
      experience: "",
      past: "",
      license: "",
    },
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        if (values.password !== values.conPassword) {
          toast.error("Passwords do not match!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
          return;
        }
        const toastId = toast.loading("Processing your registration...", {
          position: "top-right",
          autoClose: 3000,
        });
        await axios.post("http://localhost:8080/signupAsRider", values);
        toast.update(toastId, {
          render: "Registration successful! Redirecting to login...",
          type: "success",
          isLoading: false,
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });

        resetForm();
        setTimeout(() => navigate('/login'), 2000);
        
      } catch (error) {
        let errorMessage = "An error occurred during registration";
        
        if (error.response) {
          errorMessage = error.response.data.message || error.response.data.error || "Registration failed";
          if (error.response.status === 409) {
            errorMessage = "Email already registered";
          } else if (error.response.status === 400) {
            errorMessage = "Invalid registration data";
          }
        } else if (error.request) {
          // Request was made but no response
          errorMessage = "Network error. Please check your connection";
        }

        toast.error(errorMessage, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });

        console.error("Registration error:", error);
      } finally {
        setSubmitting(false);
      }
    },
    validationSchema: yup.object({
      firstname: yup.string().required("First Name is required"),
      email: yup.string().email("Invalid email format").required("Email is required"),
      phoneNumber: yup.string()
        .required("Phone Number is required")
        .min(10, "Must be at least 10 digits"),
      address: yup.string().required("Address is required"),
      state: yup.string().required("State is required"),
      city: yup.string().required("City is required"),
      password: yup.string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
          "Must contain uppercase, lowercase, number and special character"
        ),
      conPassword: yup.string()
        .required("Confirm Password is required")
        .oneOf([yup.ref('password'), null], "Passwords must match"),
      experience: yup.string().required("Experience in Logistics is required"),
      past: yup.string().required("E-commerce logistics in the past is required"),
      license: yup.string().required("Company registration with courier license is required"),
    }),
  });

  return (
    <>
      <div>
        <p className="lg:p-24  p-10 lg:bg-transparent bg-white m-10">
          <h1 className="font-bold">Become Our Delivery Partner</h1>
          <p className="italic">
            We're excited about your interest in partnering with The Kitchen as
            our Third-Party Logistics provider! We're confident that together we
            can deliver exceptional service to our clients. To get started,
            please complete the short form below with some additional
            information.
          </p>
        </p>
        <p className="p-5 max-w-sm md:w-full w-[90%] mx-auto lg:hidden block">
          <h1 className="font-bold text-xl">Sign up as a rider</h1>
        </p>
        <div className="bg-white shadow-lg rounded-lg p-5 max-w-sm md:w-full w-[90%] mx-auto mb-10">
          <h1 className="font-bold text-xl ms-5 lg:block hidden">
            Sign up as a rider
          </h1>
          <form onSubmit={formik.handleSubmit}>
            <label htmlFor="firstname" className="block text-sm font-bold my-2">
              Name
            </label>
            <input
              type="text"
              id=""
              name="firstname"
              className={
                formik.touched.firstname && formik.errors.firstname
                  ? "mt-1 w-full px-4 py-2 border rounded-md border-red-500"
                  : "mt-1 w-full px-4 py-2 border rounded-md"
              }
              placeholder="Enter your name"
              value={formik.values.firstname}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <div className="text-[red]">
              {formik.touched.firstname && formik.errors.firstname}
            </div>
            <label htmlFor="email" className="block text-sm font-bold my-2">
              Email
            </label>
            <input
              type="email"
              id="email"
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
            <label htmlFor="Phone Number" className="block text-sm font-bold my-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="firstname"
              name="phoneNumber"
              className={
                formik.touched.phoneNumber && formik.errors.phoneNumber
                  ? "mt-1 w-full px-4 py-2 border rounded-md border-red-500"
                  : "mt-1 w-full px-4 py-2 border rounded-md"
              }
              placeholder="Enter your phone"
              value={formik.values.phoneNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <div className="text-[red]">
              {formik.touched.phoneNumber && formik.errors.phoneNumber}
            </div>
            <label htmlFor="firstname" className="block text-sm font-bold my-2">
              Address
            </label>
            <input
              type="text"
              id=""
              name="address"
              className={
                formik.touched.address && formik.errors.address
                  ? "mt-1 w-full px-4 py-2 border rounded-md border-red-500"
                  : "mt-1 w-full px-4 py-2 border rounded-md"
              }
              placeholder="Enter your address"
              value={formik.values.address}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <div className="text-[red]">
              {formik.touched.address && formik.errors.address}
            </div>
            <label htmlFor="firstname" className="block text-sm font-bold my-2">
              State
            </label>
            <input
              type="text"
              id=" "
              name="state"
              className={
                formik.touched.state && formik.errors.state
                  ? "mt-1 w-full px-4 py-2 border rounded-md border-red-500"
                  : "mt-1 w-full px-4 py-2 border rounded-md"
              }
              placeholder="Enter your state"
              value={formik.values.state}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <div className="text-[red]">
              {formik.touched.state && formik.errors.state}
            </div>
            <label htmlFor="firstname" className="block text-sm font-bold my-2">
              City
            </label>
            <input
              type="text"
              id=""
              name="city"
              className={
                formik.touched.city && formik.errors.city
                  ? "mt-1 w-full px-4 py-2 border rounded-md border-red-500"
                  : "mt-1 w-full px-4 py-2 border rounded-md"
              }
              placeholder="Enter your city"
              value={formik.values.city}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <div className="text-[red]">
              {formik.touched.city && formik.errors.city}
            </div>
            <label htmlFor="firstname" className="block text-sm font-bold my-2">
              Password
            </label>
            <input
              type="password"
              id=""
              name="password"
              className={
                formik.touched.password && formik.errors.password
                  ? "mt-1 w-full px-4 py-2 border rounded-md border-red-500"
                  : "mt-1 w-full px-4 py-2 border rounded-md"
              }
              placeholder="Enter your password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <div className="text-[red]">
              {formik.touched.password && formik.errors.password}
            </div>
            <label htmlFor="firstname" className="block text-sm font-bold my-2">
              confirm Password
            </label>
            <input
              type="password"
              id=""
              name="conPassword"
              className={
                formik.touched.conPassword && formik.errors.conPassword
                  ? "mt-1 w-full px-4 py-2 border rounded-md border-red-500"
                  : "mt-1 w-full px-4 py-2 border rounded-md"
              }
              placeholder="Enter your confirm password"
              value={formik.values.conPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <div className="text-[red]">
              {formik.touched.conPassword && formik.errors.conPassword}
            </div>
            <label htmlhtmlFor="" className="block text-sm font-bold my-2">
              Do you have prior experience in Logistics?{" "}
            </label>
            <p className="space-x-5 my-2">
              <input
                type="radio"
                name="experience"
                id=""
                value="Yes"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.experience === "Yes"}
              />{" "}
              Yes
              <input
                type="radio"
                name="experience"
                id=""
                value ="No"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.experience === "No"}
              />{" "}
              No
            </p>
            <div className="text-[red]">
              {formik.touched.experience && formik.errors.experience}
            </div>
            <label htmlhtmlFor="" className="block text-sm font-bold my-2">
              Have you manage e-commerce logistics in the past?{" "}
            </label>
            <p className="space-x-5 my-2">
              <input
                type="radio"
                name="past"
                id=""
                value="Yes"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.past === "Yes"}
              />{" "}
              Yes
              <input
                type="radio"
                name="past"
                id=""
                value="No"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.past === "No"}
              />{" "}
              No
            </p>
            <div className="text-[red]">
              {formik.touched.past && formik.errors.past}
            </div>
            <label htmlhtmlFor="" className="block text-sm font-bold my-2">
              Is your company registerd with a courier license?{" "}
            </label>
            <p className="space-x-5 my-2">
              <input
                type="radio"
                name="license"
                id=""
                value="Yes"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.license === "Yes"}
              />{" "}
              Yes
              <input
                type="radio"
                name="license"
                id=""
                value="No"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.license === "No"}
              />{" "}
              No
            </p>
            <div className="text-[red]">
              {formik.touched.license && formik.errors.license}
            </div>
            <Button generalButton="Sign up" />
            <p className="font-semibold text-center py-2">
              Already have an account{" "}
              <span className="text-[#FF4500] font-bold">
                <Link to="/login">Log in</Link>
              </span>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignupAsRider;
