import React from "react";
import cloths from "../img/cloths.webp";
import "./Home.css";

const Home = () => {
  return (
        <div id="home" className="home">        
        <div className="block-r">
            <h1 className="hero">We are here to provide all services.</h1>
            <span className="sp">
            Company that provides local search for different services in India over the phone and online
            </span>
            <input placeholder="Search for products anywhere in India" >
            </input>
            <i className="fa fa-search" aria-hidden="true"></i>
        </div>
        
        <div className="block-l">
            <img src={cloths} alt="cloths" />
        </div>
    </div>
  )
}

export default Home;
