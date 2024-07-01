import React, { useRef, useState } from 'react'
import './Navbar.css'
import { RiSofaLine } from "react-icons/ri";
import { IoCartOutline } from "react-icons/io5";
import { IoIosArrowDropdown } from "react-icons/io";


const Navbar = () => {

    const [menu,setMenu] = useState("shop");
    const menuRef = useRef();

    const dropdown_toggle = (e) => {
      menuRef.current.classList.toggle('nav-menu-visible');
      e.target.classList.toggle('open');
    }

  return (
    <div className='navbar'>
      <a to='/' onClick={()=>{setMenu("shop")}} className="nav-logo">
        <div className='nav-logo-img'>
        <RiSofaLine />
        </div>
        <p>FURNISH</p>
      </a>
      <div>
       <IoIosArrowDropdown onClick={dropdown_toggle}  className='nav-dropdown nav-dorpdown-icon'  />
      </div>
      <ul ref={menuRef} className="nav-menu">
        <li onClick={()=>{setMenu("shop")}}><a href='#'>Shop</a>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("mens")}}><a  href='#'>Living Room</a>{menu==="livingroom"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("womens")}}><a href='#'>Bedroom</a>{menu==="bedroom"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("kids")}}><a href='#'>Dining</a>{menu==="dining"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <a to='/login'><button>Login</button></a>
        <div className='cart-icon'>
        <IoCartOutline />
        </div>
        <div className="nav-cart-count">{0}</div>
      </div>
    </div>
  )
}

export default Navbar
