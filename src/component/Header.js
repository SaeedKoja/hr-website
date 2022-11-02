import React from "react";
import { NavLink } from "react-router-dom";
import AlYousserLogo from "../image/Alyousser - BR - لوغو الشركة-19-03.png";
import AlYousser from "../image/yser-0133-01.png";
import Motherhood from "../image/omama-01.png";
import Training from "../image/ruqee lo-01.png";
import Rounq from "../image/rounq-01.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <div className="container">
        <img src={AlYousserLogo} alt="" className="logo" />
        <div className="content">
          <h4>مرحبا بك في الموقع الرسمي لشركة اليسر للارتقاء العمراني </h4>
        </div>
        <div className="icon">
          <NavLink to="">
            <img src={Motherhood} alt="" />
          </NavLink>  
          <NavLink to="">
            <img src={Training} alt="" />
          </NavLink>
          <NavLink to="/AlYousser">
            <img src={AlYousser} alt="" />
          </NavLink>
          <NavLink to="/">
            <img src={Rounq} alt="" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
