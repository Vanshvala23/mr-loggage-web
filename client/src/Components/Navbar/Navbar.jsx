import React from "react";
import "./Navbar.css";
import main_logo from "../../assets/main_logo.svg";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img src={main_logo} alt="" />
        </div>
        <div className="nav">
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">About us</a>
          <a href="#">Contact</a>
          <a href="#">Signup</a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
