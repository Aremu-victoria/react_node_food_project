import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { IoSearch } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";
import { CiMenuFries } from "react-icons/ci";
import { Link } from "react-router";

const HomeNavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="bg-transparent border-b-2">
        {/* Desktop Navigation */}
        <div className="flex justify-between p-4 hidden md-block  md:flex">
          <div className="flex">
            <div>
              <img src={logo} alt="Logo" />
            </div>
            <div className="flex space-x-10 font-semibold pt-5 ms-10">
              <span><Link to= '/'>Home</Link></span>
              <span><Link to='/landingPage'>Restaurant</Link></span>
            </div>
            <div className="ms-10 pt-3">
              <input
                type="search"
                placeholder="Search"
                className="h-10 w-96 rounded-l-lg bg-transparent border"
              />
              <span className="bg-black text-white p-2 rounded-r-lg">
                <FontAwesomeIcon icon={faSearch} />
              </span>
            </div>
          </div>
          <div className="flex space-x-10 items-center">
            <span>
            {/* <GrCart /> */}
            </span>
            <span className="bg-black text-white p-3 rounded-xl flex space-x-2">
             <CiMenuFries />
              <FaRegCircleUser />
            </span>
          </div>
        </div>

        {/* Mobile/Tablet Navigation */}
        <div className="p-4 flex justify-between md:hidden">
          <img src={logo} alt="Logo" className="h-8" />
          {/* <div><IoSearch /></div>
          <div><GrCart /></div> */}
          <button onClick={toggleMenu} className="text-xl">
            {isMenuOpen ? (
              <FontAwesomeIcon icon={faTimes} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t-2 p-4 space-y-4">
            <span className="block">Home</span>
            <span className="block">Restaurant</span>
            <div className="flex items-center space-x-2">
              <input
                type="search"
                placeholder="Search"
                className="h-10 w-full rounded-lg bg-transparent border px-2"
              />
              <span className="bg-black text-white p-2 rounded-lg">
                {/* <FontAwesomeIcon icon={faSearch} /> */}
              </span>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default HomeNavBar;
