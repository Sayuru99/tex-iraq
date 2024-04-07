import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "../../assets/homefront.webp";
import img2 from "../../assets/consult.jpg";
import img3 from "../../assets/slide-6.jpg";
import img4 from "../../assets/vitro-626x425_0.png";
import img5 from "../../assets/tech.jpg";
import logo1 from "../../assets/rhea_logo.png";
import logo2 from "../../assets/azkoyen_logo.svg";
import logo3 from "../../assets/caprimo_logo.png";
import logo4 from "../../assets/satro_logo.jpg";

const images = [
  { src: img1, title: "Establishment in 2022", subtitle: "Visionary Business Experts in Erbil City, Iraq", logos: [logo1, logo2, logo3, logo4] },
  { src: img2, title: "Accessible Partnership", subtitle: "Dedicated Collaboration for Your Success" },
  { src: img4, title: "Vending Machine Excellence", subtitle: "Convenience, Quality, and Support for Small Businesses" },
  { src: img5, title: "Business Development Expertise", subtitle: "Tailored Strategies for Market Growth" },
  { src: img3, title: "Technology-driven Solutions", subtitle: "Efficient Business Management through Software and IT Infrastructure" },
];

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="relative">
      <Slider {...settings}>
        {images.map((item, index) => (
          <div key={index} className="relative">
            <img
              src={item.src}
              alt={`Slide ${index + 1}`}
              className="w-full h-1/2 lg:h-[500px] sm:h-svh brightness-50"
            />
            {index === 0 && (
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                {item.logos.map((logo, logoIndex) => (
                  <img key={logoIndex} src={logo} alt={`Logo ${logoIndex + 1}`} className="w-16 h-8 mr-10 bg-white px-2" />
                ))}
              </div>
            )}
            <div className="absolute bottom-0 left-0 p-8 text-white">
              <h1 className="text-4xl font-bold mb-4">{item.title}</h1>
              <p className="text-xl">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
