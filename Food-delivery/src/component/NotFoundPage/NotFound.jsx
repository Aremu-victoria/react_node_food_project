import React from 'react';
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from 'flowbite-react';
import notFound from '../../assets/images/found.png'
const NotFound = () => {
    const navigate = useNavigate();

    return (
      <div className="flex items-center justify-center max-w-md mx-auto min-h-screen bg-gradient-to-br from-blue-100 to-purple-100">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center p-10 md:mx-auto"
        >
          <h1 className="text-6xl font-extrabold text-purple-600">Oops!</h1>
          <p className="text-lg text-gray-600 pt-3">
            We can't seem to find the page you're looking for.
          </p>
          <p className="font-bold text-black" style={{fontSize: '20rem', zIndex: '-1'}}>404</p>
          <div className="relative bottom-96 right-24">
            <img
             src={notFound}
              alt="Lost Astronaut Illustration"
              className="mx-auto rounded-xl"
            />
          </div>
          
        </motion.div>
      </div>
    )
}

export default NotFound
