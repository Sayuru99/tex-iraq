import React from 'react';

const BrandDescription = ({ brandName, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg">
      <h2 className="text-2xl font-semibold text-[#00419D] mb-4">{brandName}</h2>
      <p>{description}</p>
      {/* <a href="/" className="text-red-500 font-semibold mt-4 inline-block">WEBSITE</a> */}
    </div>
  );
};

export default BrandDescription;
