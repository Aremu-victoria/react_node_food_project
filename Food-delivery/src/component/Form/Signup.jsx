import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../Botton";
import axios from "axios";
import { useFormik } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";
const Signup = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      password: "",
      conPassword: "",
      address: "",
    },
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      console.log("Submitting form with values:", values);
      try {
        if (values.password !== values.conPassword) {
          toast.error("Passwords do not match");
          return;
        }

        const response = await axios.post(
          "http://localhost:8080/signup",
          values
        );
        toast.success("Signup successful! Redirecting to login...", {
          autoClose: 2000,
          onClose: () => navigate("/login"),
        });
        resetForm();
        console.log(response.data);
      } catch (error) {
        if (error.response) {
          toast.error(
            error.response.data.message || "Signup failed. Please try again."
          );
        } else if (error.request) {
          toast.error("Network error. Please check your connection.");
        } else {
          toast.error("An error occurred. Please try again.");
        }
        console.error("Signup error:", error);
      } finally {
        setSubmitting(false);
      }
    },
    validationSchema: yup.object({
      fullName: yup.string().required("This field is required"),
      email: yup
        .string()
        .email("Invalid email format")
        .required("This field is required"),
      phoneNumber: yup.string().required("This field is required"),
      password: yup
        .string()
        .required("This field is required")
        .min(8, "Password must be at least 8 characters"),
      conPassword: yup
        .string()
        .required("This field is required")
        .oneOf([yup.ref("password"), null], "Passwords must match"),
      address: yup.string().required("This field is required"),
    }),
  });

  return (
    <>
      <p className="p-5 max-w-sm relative top-10 md:w-full w-[90%] mx-auto lg:hidden block">
        <h1 className="font-bold text-3xl">Sign up as a buyer</h1>
      </p>
      <div className="bg-white shadow-lg rounded-lg p-5  max-w-md md:w-full w-[90%] mx-auto mt-11 mb-10">
        <h1 className="my-3 font-bold text-3xl ms-5 lg:block hidden">
          Sign up as a buyer
        </h1>
        <p className="my-2 text-[#FF4500]  font-bold">CUSTOMERS DETAILS</p>
        <form action="" onSubmit={formik.handleSubmit}>
          <label htmlFor="firstname" className="block text-sm font-bold my-2">
            Full Name
          </label>
          <input
            type="text"
            name="fullName"
            className={
              formik.touched.fullName && formik.errors.fullName
                ? "mt-1 w-full px-4 py-2 border rounded-md border-red-500"
                : "mt-1 w-full px-4 py-2 border rounded-md"
            }
            placeholder="Enter your name"
            onChange={formik.handleChange}
            value={formik.values.fullName}
            onBlur={formik.handleBlur}
          />
          <div className="text-[red]">
            {formik.touched.fullName && formik.errors.fullName}
          </div>

          <label htmlFor="email" className="block text-sm font-bold my-2">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            className={
              formik.touched.email && formik.errors.email
                ? "mt-1 w-full px-4 py-2 border rounded-md border-red-500"
                : "mt-1 w-full px-4 py-2 border rounded-md"
            }
            placeholder="Enter your email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          <div className="text-[red]">
            {formik.touched.email && formik.errors.email}
          </div>
          <label htmlFor="phone" className="block text-sm font-bold my-2">
            Phone Number
          </label>
          <input
            type="tel"
            name="phoneNumber"
            className={
              formik.touched.phoneNumber && formik.errors.phoneNumber
                ? "mt-1 w-full px-4 py-2 border rounded-md border-red-500"
                : "mt-1 w-full px-4 py-2 border rounded-md"
            }
            placeholder="Enter your phone"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phoneNumber}
          />
          <div className="text-[red]">
            {formik.touched.phoneNumber && formik.errors.phoneNumber}
          </div>
          <label htmlFor="password" className="block text-sm font-bold my-2">
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
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          <div className="text-[red]">
            {formik.touched.password && formik.errors.password}
          </div>
          <label htmlFor="password" className="block text-sm font-bold my-2">
            Confirm Password
          </label>
          <input
            type="password"
            name="conPassword"
            className={
              formik.touched.conPassword && formik.errors.conPassword
                ? "mt-1 w-full px-4 py-2 border rounded-md border-red-500"
                : "mt-1 w-full px-4 py-2 border rounded-md"
            }
            placeholder="Re-enter password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.conPassword}
          />
          <div className="text-[red]">
            {formik.touched.conPassword && formik.errors.conPassword}
          </div>
          <p className="my-2 text-[#FF4500] font-bold">DELIVERY DETAILS</p>
          <div className="mb-4">
            <label htmlFor="firstname" className="block text-sm font-bold">
              Address
            </label>
            <input
              type="text"
              name="address"
              className={
                formik.touched.address && formik.errors.address
                  ? "mt-1 w-full px-4 py-2 border rounded-md border-red-500"
                  : "mt-1 w-full px-4 py-2 border rounded-md"
              }
              placeholder="Enter your address"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.address}
            />
            <div className="text-[red]">
              {formik.touched.address && formik.errors.address}
            </div>
          </div>
          <Button generalButton="Sign up" />
          <p className="font-semibold text-center py-2">
            Already have an account{" "}
            <span className="text-[#FF4500] font-bold">
              <Link to="/login">Log in</Link>
            </span>
          </p>
          <div className="space-y-5">
            <div>
              <Link to="/signupAsSeller">
                <Button generalButton="Sign up As Seller" />
              </Link>{" "}
            </div>
            <div>
              {" "}
              <Link to="/signupAsRider">
                <Button generalButton="Sign up As Rider" />
              </Link>{" "}
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signup;
