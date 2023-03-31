import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./styles/navbar.css";
import logo from './assets/logo.png';

function Navbar() {
  const navRef = useRef();
  const [isOpen, setIsOpen] = useState(false);

  const showNavbar = () => {
    navRef.current.classList.add("responsive_nav");
    setIsOpen(true);
  };

  const hideNavbar = () => {
    navRef.current.classList.remove("responsive_nav");
    setIsOpen(false);
  };

  const handleLinkClick = () => {
    hideNavbar();
  };

  return (
    <header>
      <div className="logoInfo">
      <img className="logoIconic" src={logo} alt="logo"></img>
      <h1>Iconic Coating</h1>
      </div>
      <nav ref={navRef}>
        <Link to="/" onClick={handleLinkClick}>
          HomePages
        </Link>
        <Link to="/Services" onClick={handleLinkClick}>
          Services
        </Link>
        <Link to="/Showroom" onClick={handleLinkClick}>
          Showroom
        </Link>
        <Link to="/Contact" onClick={handleLinkClick}>
          Contact Us
        </Link>
        <button className="nav-btn nav-close-btn" onClick={hideNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={isOpen ? hideNavbar : showNavbar}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
    </header>
  );
}

export default Navbar;
