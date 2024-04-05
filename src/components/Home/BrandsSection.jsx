// BrandsSection.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component
import BrandCard from './BrandCard';

const BrandsSection = ({ brands, onBrandExplore }) => {
  const renderBrandCards = () => {
    return brands.map((brand, index) => (
      <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4">
        <Link to={`/services/${brand.name}`} className="text-black"> {/* Navigate to brand details page */}
          <BrandCard
            name={brand.name}
            description={brand.description}
            imageUrl={brand.imageUrl}
            onExplore={() => onBrandExplore(brand)}
          />
        </Link>
      </div>
    ));
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-wrap -mx-4">
        {renderBrandCards()}
      </div>
    </div>
  );
};

export default BrandsSection;
