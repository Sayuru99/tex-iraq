import React from 'react';
import { useNavigate } from 'react-router-dom';

const ServiceCard = ({ brandName, description, buttonText }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/services/${brandName}`);
  };

  return (
    <div className="w-full h-80 mx-auto flex bg-white rounded-lg shadow-lg">
      <div className="w-1/2 flex flex-col">
        <div className="flex justify-start items-start p-4">
          {/* <img src='https://via.placeholder.com/100' alt="Logo" className="h-16 w-16" /> */}
        </div>
        <div className="flex-grow px-6 py-4 text-center">
          <h2 className="text-xl font-bold">{brandName}</h2>
          <p className="text-gray-700">{description}</p>
        </div>
      </div>
      <div className="w-1/2">
        <img src='https://via.placeholder.com/400' alt="Car" className="w-full h-full object-cover" />
        <div className="w-full">
          <button onClick={handleClick} className="bg-[#00409A] hover:bg-[#333333] text-white py-2 px-4 w-full">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
