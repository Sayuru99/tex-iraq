import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="mr-4">
            <select className="p-2 hover:border-white text-sm">
              <option value="en">EN</option>
              <option value="ar">AR</option>
              <option value="kr">KR</option>
            </select>
          </div>
          
        </div>
        <div className="ml-auto flex space-x-4 items-center">
            <FontAwesomeIcon icon={faFacebook} className="h-6 w-6 text-gray-600 hover:text-gray-900" />
            <FontAwesomeIcon icon={faInstagram} className="h-6 w-6 text-gray-600 hover:text-gray-900" />
            <FontAwesomeIcon icon={faLinkedin} className="h-6 w-6 text-gray-600 hover:text-gray-900" />
            <FontAwesomeIcon icon={faTwitter} className="h-6 w-6 text-gray-600 hover:text-gray-900" />
          </div>
      </div>
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-xl font-bold">
            {isMobile ? (
              <div>
                <button
                  onClick={toggleMenu}
                  className="text-gray-600 hover:text-gray-900"
                >
                  &#9776;
                </button>
                <Link to="/" className="pl-10 text-xl font-bold">
                  <img
                    alt="logo"
                    className="h-16 w-auto sm:h-16 ml-10 -mt-10"
                    src="https://img1.wsimg.com/isteam/ip/002216ce-916e-4d96-be8d-e2be1fdd3886/WhatsApp%20Image%202023-10-23%20at%2021.44.09_3e572b43.jpg"
                  />
                </Link>
              </div>
            ) : (
              <Link to="/" className="text-xl font-bold">
                <img
                  alt="logo"
                  className="h-16 w-auto sm:h-16"
                  src="https://img1.wsimg.com/isteam/ip/002216ce-916e-4d96-be8d-e2be1fdd3886/WhatsApp%20Image%202023-10-23%20at%2021.44.09_3e572b43.jpg"
                />
              </Link>
            )}
          </div>
        </div>
        {isMobile ? (
          <div
            className={`absolute top-0 left-0 w-full h-full bg-white z-10 transition-opacity ${
              showMenu ? "opacity-100" : "opacity-0 invisible"
            }`}
          >
            <div className="container mx-auto px-4 py-6 flex flex-col items-center">
              <button
                onClick={closeMenu}
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
              >
                &times;
              </button>
              <Link to="/" className="my-2 text-gray-600 hover:text-gray-900">
                Home
              </Link>
              <Link
                to="/corporations"
                className="my-2 text-gray-600 hover:text-gray-900"
              >
                Corporations
              </Link>
              <Link
                to="/brands"
                className="my-2 text-gray-600 hover:text-gray-900"
              >
                Brands
              </Link>
              <Link
                to="/news-events"
                className="my-2 text-gray-600 hover:text-gray-900"
              >
                News and Events
              </Link>
              <Link
                to="/about"
                className="my-2 text-gray-600 hover:text-gray-900"
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="my-2 text-gray-600 hover:text-gray-900"
              >
                Contact Us
              </Link>
            </div>
          </div>
        ) : (
          <div className="flex space-x-4">
            <Link to="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <Link
              to="/corporations"
              className="text-gray-600 hover:text-gray-900"
            >
              Corporations
            </Link>
            <Link to="/brands" className="text-gray-600 hover:text-gray-900">
              Brands
            </Link>
            <Link
              to="/news-events"
              className="text-gray-600 hover:text-gray-900"
            >
              News and Events
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-gray-900">
              About Us
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-gray-900">
              Contact Us
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
