import { useState } from 'react';
import BrandsSection from "../components/Home/BrandsSection";
import Carousel from "../components/Home/Carousel";
import HeroText from "../components/Home/HeroText";
import BrandDetails from '../components/ServiceBrands/BrandDetails';

const brands = [
    { name: 'ConsulTEx', description: 'Strategic business development consultancy and outsourcing services."', imageUrl: 'url_to_toyota_image' },
    { name: 'VendTEx', description: 'Vending machine distribution, operation, and support for small businesses.', imageUrl: 'url_to_lexus_image' },
    { name: 'SofTEx', description: 'Innovative Software development and digital solutions for diverse business needs.', imageUrl: 'url_to_lexus_image' },
    { name: 'TradTEx', description: 'Specializing in general trading and customers special needs.', imageUrl: 'url_to_lexus_image' },
  ];

  const Home = () => {
    const [selectedBrand, setSelectedBrand] = useState(null);
  
    const handleBrandExplore = (brand) => {
      setSelectedBrand(brand);
    };

    return (
        <div>
          {!selectedBrand ? (
            <>
              <Carousel />
              <HeroText />
              <BrandsSection brands={brands} onBrandExplore={handleBrandExplore} />
            </>
          ) : (
            <BrandDetails brand={selectedBrand} />
          )}
        </div>
      );
    };
    
    export default Home;