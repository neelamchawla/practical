import React, { useContext, useState } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import logo from "../img/header_logo.png";

const Navbar = () => {

  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");

  return (
    <div
    className="n-wrapper" id="Navbar">
    <nav className="nav">
            {/* left */}
      <div className="n-left">
        <div className="n-logo">
          <img src={logo} alt="logo" />
        </div>
      </div>
      <div className="n-right n-list">
      <ul className={active} style={{ listStyleType: "none" }}>
              Variyadi Bazar, Near 
            <li className="nav__item">
              <Link className="nav__link" activeClass="active" to="map" spy={true} smooth={true}>
              <i className="fa fa-map-marker" aria-hidden="true"></i>
              </Link>
            </li>
            <li className="nav__item">
              <Link className="nav__link" to="search" spy={true} smooth={true}>
              <i className="fa fa-search" aria-hidden="true"></i>
              </Link>
            </li>
            <li className="nav__item">
              <Link className="nav__link" to="cart" spy={true} smooth={true}>
              <i className="fa fa-shopping-cart" aria-hidden="true"></i>
              </Link>
            </li>
            <li className="nav__item">
              <Link className="nav__link" to="heart" spy={true} smooth={true}>
                <i className="fa fa-heart" aria-hidden="true"></i>
              </Link>
            </li>
            <li className="nav__item">
              <Link className="nav__link" to="signin" spy={true} smooth={true}>
              <i className="fa fa-sign-in" aria-hidden="true"></i>
              </Link>
            </li>
      </ul>
      </div>
    </nav>
    </div>
  );
};

export default Navbar;
