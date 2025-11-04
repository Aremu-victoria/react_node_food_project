import React from 'react'
import { Link } from 'react-router-dom'

const HomeNavBarTwo = () => {
  return (
    <div>
        <nav className="bg-white border-b p-4 lg:px-8 flex items-center justify-between">
  
  <div className="flex items-center">
    <span className="text-xl font-bold ml-2">The KTCHN</span>
  </div>

  <div className="hidden lg:flex items-center space-x-6">
    <a href="#" className="text-gray-600 hover:text-black">Home</a>
    <a href="#" className="text-gray-600 hover:text-black">Restaurant</a>
  </div>
  <div className="flex-grow lg:mx-6 mx-4">
    <div className="relative">
      <input
        type="text"
        placeholder="Search"
        className="w-full border rounded-full py-2 px-4 pl-10 focus:outline-none"
      />
      <button
        className="absolute inset-y-0 right-0 px-4 flex items-center text-white bg-black rounded-r-full">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M8 4a4 4 0 100 8 4 4 0 000-8zm9 12l-4-4m0 0a6 6 0 11-8.486-8.486A6 6 0 0117 12z" />
        </svg>
      </button>
    </div>
  </div>
  <div className="flex items-center space-x-4">
    <button className="hidden lg:block">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 7M7 13l-4 8m0 0h16M3 21a1 1 0 100 2h16a1 1 0 100-2H3z"
        />
      </svg>
    </button>
    <button className="hidden lg:block border rounded px-4 py-1"><Link to='/login'>Log in</Link></button>
    <button className="bg-orange-500 text-white px-4 py-1 rounded"><Link to='/signup'>Sign up</Link></button>
  </div>
</nav>
    </div>
  )
}

export default HomeNavBarTwo
