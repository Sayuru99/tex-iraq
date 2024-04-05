// ProductCarousel.jsx
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProductCard = ({ product, index, handleLogoClick }) => {
  return (
    <div className="flex flex-col items-center justify-between p-4 border rounded-lg shadow-md h-full">
      <div className="flex flex-col items-center divide-y">
        <img src={product.image} alt={`Product ${index + 1}`} className="h-32 w-32 object-contain mb-4" />
        <h3 className="text-sm font-semibold h-24">{product.name}</h3>
        {/* <p className="text-sm text-gray-600 h-48">{product.description}</p> */}
      </div>
      <div className="mt-auto">
        {product.logo && (
          <img 
            src={product.logo} 
            alt={`Logo ${index + 1}`} 
            className="h-auto w-16 cursor-pointer"
            onClick={() => handleLogoClick(product.logoUrl)}
          />
        )}
      </div>
    </div>
  );
};

const ProductCarousel = ({ products }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  const handleLogoClick = (logoUrl) => {
    window.open(logoUrl, '_blank');
  };

  return (
    <div>
      <Slider {...settings}>
        {products.map((product, index) => (
          <div key={index} className="p-4">
            <ProductCard product={product} index={index} handleLogoClick={handleLogoClick} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductCarousel;
