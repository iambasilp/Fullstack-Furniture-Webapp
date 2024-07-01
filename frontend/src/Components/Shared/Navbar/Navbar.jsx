import React, { useRef, useState } from "react";
import "./Navbar.css";
import { RiSofaLine } from "react-icons/ri";
import { IoCartOutline } from "react-icons/io5";
import { IoIosArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle("open");
  };

  return (
    <div className="navbar-container">
      <div className="navbar">
        <Link
          to="/"
          onClick={() => {
            setMenu("shop");
          }}
          className="nav-logo"
        >
          <div className="nav-logo-img">
            <RiSofaLine />
          </div>
          <p>FURNISH</p>
        </Link>
        <div>
          <IoIosArrowDropdown
            onClick={dropdown_toggle}
            className="nav-dropdown nav-dorpdown-icon"
          />
        </div>

        <ul ref={menuRef} className="nav-menu">
          <li
            onClick={() => {
              setMenu("shop");
            }}
          >
            <Link to="/">Shop</Link>
            {menu === "shop" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("livingroom");
            }}
          >
            <Link to="/livingroom">Living Room</Link>
            {menu === "livingroom" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("bedroom");
            }}
          >
            <Link to="bedroom">Bedroom</Link>
            {menu === "bedroom" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("dining");
            }}
          >
            <Link to="dining">Dining</Link>
            {menu === "dining" ? <hr /> : <></>}
          </li>
        </ul>
        <div className="nav-login-cart">
          <a to="/login">
            <button>Login</button>
          </a>
          <div className="cart-icon">
            <IoCartOutline />
          </div>
          <div className="nav-cart-count">{0}</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
