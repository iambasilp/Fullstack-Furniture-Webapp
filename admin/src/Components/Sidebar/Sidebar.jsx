import React from 'react'
import './Sidebar.css'
import { FaCartPlus } from "react-icons/fa6";
import { MdFeaturedPlayList } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";


import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Link to='/listproduct' style={{ textDecoration: 'none' }}>
        <div className="sidebar-item">
        <MdFeaturedPlayList className='product-list' />
          <p>Products</p>
        </div>
      </Link>
      <Link to='/productadd' style={{ textDecoration: 'none' }}>
        <div className="sidebar-item">
        <FaCartPlus className='product' />
          <p>Product Add</p>
        </div>
      </Link>
      <Link to='/userlist' style={{ textDecoration: 'none' }}>
        <div className="sidebar-item">
        <FaUserCircle className='product' />
          <p>Users</p>
        </div>
      </Link>
   
     
    </div>
  )
}

export default Sidebar
