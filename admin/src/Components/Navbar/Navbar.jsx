import React from 'react'
import './Navbar.css'
import { RiSofaLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";


const Navbar = () => {
  return (
    <div className='navbar'>
      <RiSofaLine className='nav-logo'/>
      <CgProfile  className='nav-profile'/>
    </div>
  )
}

export default Navbar
