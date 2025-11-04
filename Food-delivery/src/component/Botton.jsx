import React from "react";

const Botton = ({ generalButton, style, action }) => {
  return (
    <div>
      <button
        onClick={action}
        type="submit"
        className="bg-[#FE4501] w-full text-md rounded-lg px-5 py-2.5 text-center font-medium text-white"
        style={style}
      >
        {generalButton}
      </button>
    </div>
  );
};

export default Botton;
