import React from 'react';

const BrandCard = ({ name, description, imageUrl, onExplore  }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between h-full transition duration-300 ease-in-out transform hover:shadow-md hover:border-t-4 hover:border-[#00419D]">
      <div className="mb-4">
        {/* <img src={imageUrl} alt={name} className="h-16 w-16 mx-auto" /> */}
        <h3 className="text-xl font-thin text-center my-2">{name}</h3>
        <p className="text-gray-600 text-center">{description}</p>
      </div>
      <button onClick={onExplore} className="text-[#00419D] py-2 px-4">
        EXPLORE
      </button>
    </div>
  );
};

export default BrandCard;
