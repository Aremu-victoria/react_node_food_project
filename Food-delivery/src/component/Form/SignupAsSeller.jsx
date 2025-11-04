import React from "react";
import Button from "../Botton";
import { Accordion } from "flowbite-react";
import { Link } from "react-router";
import { useFormik } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const SignupAsSeller = () => {
   const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      title: "",
      firstname: "",
      lastname: "",
      phone_number: "",
      address: "",
      city: "",
      state: "",
      landmark: "",
      storename: "",
      description: "",
      email: "",
      password: "",
      conPassword: "",
    },
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        // Check if passwords match
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

        // Show loading toast
        const toastId = toast.loading("Creating your seller account...", {
          position: "top-right",
        });

        // Make API call
          await axios.post("http://localhost:8080/signupAsSeller", values);  
          toast.update(toastId, {
          render: "Account created successfully! Redirecting...",
          type: "success",
          isLoading: false,
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });

        resetForm();
        
        // Redirect after delay
        setTimeout(() => navigate('/login'), 2000);
        
      } catch (error) {
        let errorMessage = "Registration failed. Please try again.";
        
        if (error.response) {
          // Server responded with error status
          if (error.response.status === 409) {
            errorMessage = "Email already registered";
          } else if (error.response.status === 400) {
            errorMessage = error.response.data.message || "Invalid registration data";
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
      title: yup.string().required("Title is required"),
      firstname: yup.string().required("First Name is required"),
      lastname: yup.string().required("Last Name is required"),
      phone_number: yup.string()
        .required("Phone number is required")
        .min(10, "Must be at least 10 digits"),
      address: yup.string().required("Address is required"),
      city: yup.string().required("City is required"),
      state: yup.string().required("State is required"),
      landmark: yup.string().required("Landmark is required"),
      storename: yup.string().required("StoreName is required"),
      description: yup.string()
        .required("Description is required"),
        // .min(50, 'Description must be at least 50 characters'),
      email: yup.string()
        .required("Email is required")
        .email("Invalid Email"),
      password: yup.string()
        .required("Password is required")
        .min(8, 'Password must be at least 8 characters')
        .matches(
          /^(?=.*[A-Z])(?=.*[\W_])(?=.*\d).+$/,
          'Password must contain at least one uppercase letter, one special character, and one number'
        ),
      conPassword: yup.string()
        .required("Confirm Password is required")
        .oneOf([yup.ref('password'), null], 'Passwords must match'),
    }),
  });
  return (
    <>
      <div className="grid lg:grid-cols-12 xs:grid-cols-1 gap-4 mt-14 mx-auto justify-center items-center">
        <div className="lg:col-span-4 relative lg:bottom-24">
          <div className="bg-white p-2 text-sm rounded-md shadow-lg max-w-64 mx-auto">
            <h4 className="font-semibold py-2">Grow your business online</h4>
            <p>
              <i>
                Reach millons of buyer in your CityTown easily,get your store on{" "}
                <span className="font-semibold"> kitchen</span>The today
              </i>
            </p>
          </div>
          <div className="justify-center">
            <h4 className="text-center py-3 text-md font-bold">
              Why Choose The Kitchen?
            </h4>
            <div className="mx-auto justify-between items-center tex">
              <Accordion className="border-none mx-auto justify-center lg:ms-20">
                <Accordion.Panel>
                  <Accordion.Title className="bg-white outline-none border-none rounded-none shadow-none my-5 max-w-72">
                    Communication is Easy
                  </Accordion.Title>
                  <Accordion.Content className="bg-white max-w-72">
                    <p className="mb-2 text-black ">
                      Flowbite is an open-source library of interactive
                      components built on top of Tailwind CSS
                    </p>
                  </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                  <Accordion.Title className="bg-white outline-none border-none rounded-none shadow-none my-5 max-w-72">
                    Low Commissions
                  </Accordion.Title>
                  <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400 max-w-72">
                      Flowbite is first conceptualized and designed
                    </p>
                  </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                  <Accordion.Title className="bg-white outline-none border-none rounded-none shadow-none my-5 max-w-72">
                    You Have Our 24/7 Support
                  </Accordion.Title>
                  <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400 max-w-72">
                      Flowbite is first conceptualized and designed
                    </p>
                  </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                  <Accordion.Title className="bg-white outline-none border-none rounded-none shadow-none my-5 max-w-72">
                    You're in Control
                  </Accordion.Title>
                  <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400 max-w-72">
                      Flowbite is first conceptualized and designed
                    </p>
                  </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                  <Accordion.Title className="bg-white outline-none border-none rounded-none shadow-none my-5 max-w-72">
                    We Make Sure it's Safe
                  </Accordion.Title>
                  <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400 max-w-72">
                      Flowbite is first conceptualized and designed
                    </p>
                  </Accordion.Content>
                </Accordion.Panel>
              </Accordion>
            </div>
            <p className="font-bold text-[#FF4500] text-center">
              Earn Money, Hassle Free
            </p>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-8 mx-auto lg:col-span-8 w-[90%] xs:w-[99%] mb-10">
          <form action="" method="post" onSubmit={formik.handleSubmit}>
            <h1 className="font-bold text-2xl py-2">Sign up as a Seller</h1>
            <div className="lg:grid grid-cols-12 gap-10 ">
              {/* First Inputs */}
              <div className="col-span-6">
                <p className="text-[#FF4500] font-bold">PERSONAL DETAILS</p>
                <div>
                  <label htmlFor="title" className="block text-sm font-bold my-2">
                    Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    className={
                      formik.touched.title && formik.errors.title
                        ? "mt-1 w-full px-4 py-2 border rounded-md border-red-500"
                        : "mt-1 w-full px-4 py-2 border rounded-md"
                    }
                    placeholder="Mr, Mrs, Miss"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.title}
                  />
                  <div className="text-[red]">
                    {formik.touched.title && formik.errors.title}
                  </div>
                </div>
                <div>
                  <label htmlFor="title" className="block text-sm font-bold my-2">
                    First name
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="firstname"
                    className={
                      formik.touched.firstname && formik.errors.firstname
                        ? "mt-1 w-full px-4 py-2 border rounded-md border-red-500"
                        : "mt-1 w-full px-4 py-2 border rounded-md"
                    }
                    placeholder="Enter First name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.firstname}
                  />
                  <div className="text-[red]">
                    {formik.touched.firstname && formik.errors.firstname}
                  </div>
                </div>
                <div>
                  <label htmlFor="title" className="block text-sm font-bold my-2">
                    Last name
                  </label>
                  <input
                    type="text"
                    id=""
                    name="lastname"
                    className={
                      formik.touched.lastname && formik.errors.lastname
                        ? "mt-1 w-full px-4 py-2 border rounded-md border-red-500"
                        : "mt-1 w-full px-4 py-2 border rounded-md"
                    }
                    placeholder="Enter last name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lastname}
                  />
                  <div className="text-[red]">
                    {formik.touched.lastname && formik.errors.lastname}
                  </div>
                </div>
                <div>
                  <label htmlFor="title" className="block text-sm font-bold my-2">
                    Phone number
                  </label>
                  <input
                    type="tel"
                    id=""
                    name="phone_number"
                    className={
                      formik.touched.phone_number && formik.errors.phone_number
                        ? "mt-1 w-full px-4 py-2 border rounded-md border-red-500"
                        : "mt-1 w-full px-4 py-2 border rounded-md"
                    }
                    placeholder="Enter phone number"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phone_number}
                  />
                  <div className="text-[red]">
                    {formik.touched.phone_number && formik.errors.phone_number}
                  </div>
                </div>
                <div>
                  <label htmlFor="title" className="block text-sm font-bold my-2">
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
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.address}
                  />
                  <div className="text-[red]">
                    {formik.touched.address && formik.errors.address}
                  </div>
                </div>
                <div>
                  <label htmlFor="title" className="block text-sm font-bold my-2">
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
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.city}
                  />
                  <div className="text-[red]">
                    {formik.touched.city && formik.errors.city}
                  </div>
                </div>
                <div>
                  <label htmlFor="title" className="block text-sm font-bold my-2">
                    State
                  </label>
                  <input
                    type="text"
                    id=""
                    name="state"
                    className={
                      formik.touched.state && formik.errors.state
                        ? "mt-1 w-full px-4 py-2 border rounded-md border-red-500"
                        : "mt-1 w-full px-4 py-2 border rounded-md"
                    }
                    placeholder="Enter your State"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.state}
                  />
                  <div className="text-[red]">
                    {formik.touched.state && formik.errors.state}
                  </div>
                </div>
                <div>
                  <label htmlFor="title" className="block text-sm font-bold my-2">
                    Landmark
                  </label>
                  <input
                    type="text"
                    id=""
                    name="landmark"
                    className={
                      formik.touched.landmark && formik.errors.landmark
                        ? "mt-1 w-full px-4 py-2 border rounded-md border-red-500"
                        : "mt-1 w-full px-4 py-2 border rounded-md"
                    }
                    placeholder="Enter Landmark"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.landmark}
                  />
                  <div className="text-[red]">
                    {formik.touched.landmark && formik.errors.landmark}
                  </div>
                </div>
              </div>
              {/* Secound Inputs */}
              <div className="col-span-6">
                <p className="text-[#FF4500] font-bold">STORE DETAILS</p>
                <div>
                  <label htmlFor="title" className="block text-sm font-bold my-2">
                    Store name
                  </label>
                  <input
                    type="text"
                    id=""
                    name="storename"
                    className={
                      formik.touched.storename && formik.errors.storename
                        ? "mt-1 w-full px-4 py-2 border rounded-md border-red-500"
                        : "mt-1 w-full px-4 py-2 border rounded-md"
                    }
                    placeholder="Your online store name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.storename}
                  />
                  <div className="text-[red]">
                    {formik.touched.storename && formik.errors.storename}
                  </div>
                </div>
                <div>
                  <label htmlFor="title" className="block text-sm font-bold my-2">
                    Description
                  </label>
                  <textarea className="rounded-md w-full h-48"
                  placeholder="Your store description"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.description}
                  name="description"
                  required
                  />
                  <div className="text-[red]">
                    {formik.touched.description && formik.errors.description}
                  </div>
                </div>
                <div>
                  <label htmlFor="title" className="block text-sm font-bold my-2">
                    Email
                  </label>
                  <input
                    type="text"
                    id=""
                    name="email"
                    className={
                      formik.touched.email && formik.errors.email
                        ? "mt-1 w-full px-4 py-2 border rounded-md border-red-500"
                        : "mt-1 w-full px-4 py-2 border rounded-md"
                    }
                    placeholder="Enter your Email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />
                  <div className="text-[red]">
                    {formik.touched.email && formik.errors.email}
                  </div>
                </div>
                <div>
                  <label htmlFor="title" className="block text-sm font-bold my-2">
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
                    placeholder="Enter password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                  />
                  <div className="text-[red]">
                    {formik.touched.password && formik.errors.password}
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="title" className="block text-sm font-bold my-2">
                    Confilm Password
                  </label>
                  <input
                    type="password"
                    id="Your online store name"
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
                </div>
                <Button generalButton="Sign up" />
                <p className="font-semibold text-center py-2">
                  Already have an account{" "}
                  <span className="text-[#FF4500] font-bold">
                    <Link to="/login">Log in</Link>
                  </span>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignupAsSeller;
