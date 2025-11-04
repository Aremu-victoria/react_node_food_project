import React, { useState } from 'react';
import image from '../assets/images/navLogo.png'
import { Outlet, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white border-gray-200 fixed top-0 z-10 w-full">
      <div className="max-w-screen-1xl flex flex-wrap items-center justify-between mx-auto py-4 px-10">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
         <img src={image} alt="" />
        </a>
        <div className="flex md:order-2 space-x-12 md:space-x-3">
          <div className='md:order-2 space-x-12 md:space-x-3 lg:block hidden'>
          <button type="button" className="text-black font-medium rounded-lg text-sm px-4 py-2 text-center">Log in</button>
          <button type="button" className="text-white bg-black focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-6 py-3 text-center ">Sign up</button>
          </div>
          {/* Cart button with badge */}
          <CartButton />
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div className={`items-center justify-between ${isMenuOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1`} id="navbar-cta">
          <ul className="flex flex-col font-semibold p-4 md:p-0 mt-4 border  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
            <li>
              <a href="#" className="block py-2 px-3 text-black" aria-current="page">Home</a>
            </li>
            <li>
            <a href="#" className="block py-2 px-3 text-black" aria-current="page">Services</a>
            </li>
            <li>
            <a href="#" className="block py-2 px-3 text-black" aria-current="page">Property</a>
            </li>
            <li>
            <a href="#" className="block py-2 px-3 text-black" aria-current="page">Contact</a>
            </li>
            <li className='block lg:hidden'>
            <div className='md:order-2 space-x-12 md:space-x-3'>
          <button type="button" className="text-black font-medium rounded-lg text-sm px-4 py-2 text-center">Log in</button>
          <button type="button" className="text-white bg-black focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-6 py-3 text-center ">Sign up</button>
          </div>
            </li>
          </ul>
          
        </div>
      </div>
      <Outlet />
    </nav>
   );
};

const CartButton = () => {
  const { items } = useCart()
  return (
    <Link to="/cart" className="relative inline-flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4" />
        <path d="M7 21a1 1 0 100-2 1 1 0 000 2zm10 0a1 1 0 100-2 1 1 0 000 2z" />
      </svg>
      {items.length > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">{items.length}</span>
      )}
    </Link>
  )
}

export default Navbar;
