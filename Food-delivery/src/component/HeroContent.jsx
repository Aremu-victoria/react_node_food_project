import React from 'react'

const heroContent = ({Find_Your,Fav,Fod,heroTex}) => {
  return (
    <>
      <div className="container lg:p-56 items-center justify-between">
        <div className="md:w-1/2 text-left">
          <h1 className="text-4xl md:text-6xl text-black font-abel">
          {Find_Your} <br /> <span className="font-bold">{Fav}</span>  <span className="text-red-500 font-bold">{Fod}</span>
          </h1>
          <hr className='max-w-56 my-2 text-gray'/>
          <p className="mt-4 text-md text-gray-600 max-w-48">
           {heroTex}</p>
          <button className="mt-6 px-6 py-3 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition">
            Order here
          </button>
        </div>
      </div>
    </>
  )
}

export default heroContent
