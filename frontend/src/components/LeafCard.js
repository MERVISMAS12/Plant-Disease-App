import React from "react";

const LeafCard = ({ image, label }) => {
  return (
    <div className="relative w-48 h-60 rounded-lg overflow-hidden shadow-md m-4 group">
      <img src={image} alt="leaf" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
        <span className="text-white font-semibold bg-white bg-opacity-70 rounded-full px-4 py-2">
          {label}
        </span>
      </div>
    </div>
  );
};

export default LeafCard;