"use client";
import MainDashboard from "./MainDashboard";
import RiderDash from "./RiderDash";


const RiderDashboard = () => {
  return (
    <div>
      <div>
        <RiderDash />
        <div className="p-4 sm:ml-60 bg-[#EAEFFA]">
          <MainDashboard />
        </div>
      </div>
    </div>
  );
};

export default RiderDashboard;
