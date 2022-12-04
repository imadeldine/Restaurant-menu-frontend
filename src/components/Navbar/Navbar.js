import React from "react";
import logo from "../../images/logo.svg";
import phone from "../../images/phone.svg";
import { useNavigate } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="nav-contanier">
      <div className="nav-number">
        <img className="nav-phone-img" src={phone} alt="phone" />
        1535
      </div>
      <div className="nav-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="nav-button">
        <button className="nav-button" onClick={() => navigate("/login")}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
