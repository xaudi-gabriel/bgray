import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/BGRay-logo.png";
import menu_icon from "../../assets/menu-icon.png";
import { Link } from "react-scroll";

const Nabvar = () => {
  const [sticky, setsticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setsticky(true) : setsticky(false);
    });
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };

  return (
    <nav className={`container ${sticky ? "light-nav" : ""}`}>
      <img src={logo} alt="" className="logo" />
      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        <li>
          <Link
            onClick={() => {
              document.getElementById("menu-icon").click();
            }}
            to="hero"
            smooth={true}
            offset={0}
            duration={500}
          >
            Solar Solutions
          </Link>
        </li>
        <li>
          <Link
            onClick={() => {
              document.getElementById("menu-icon").click();
            }}
            to="benefits"
            smooth={true}
            offset={-250}
            duration={500}
          >
            Benefits
          </Link>
        </li>
        <li>
          <Link
            onClick={() => {
              document.getElementById("menu-icon").click();
            }}
            to="about"
            smooth={true}
            offset={-150}
            duration={500}
          >
            About us
          </Link>
        </li>
        <li>
          <Link
            onClick={() => {
              document.getElementById("menu-icon").click();
            }}
            to="contact"
            smooth={true}
            offset={-260}
            duration={500}
            className="btn"
          >
            Contact Us
          </Link>
        </li>
      </ul>
      <img
        src={menu_icon}
        alt=""
        id="menu-icon"
        className="menu-icon"
        onClick={toggleMenu}
      />
    </nav>
  );
};

export default Nabvar;
