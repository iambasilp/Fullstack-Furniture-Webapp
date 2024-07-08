import React from 'react'
import './Sidebar.css'
import { FaCartPlus } from "react-icons/fa6";
import { MdFeaturedPlayList } from "react-icons/md";

import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Link to='/addproduct' style={{ textDecoration: 'none' }}>
        <div className="sidebar-item">
        <FaCartPlus className='product-add' />
          <p>Add Product</p>
        </div>
      </Link>
      <Link to='/listproduct' style={{ textDecoration: 'none' }}>
        <div className="sidebar-item">
        <MdFeaturedPlayList className='product-list' />
          <p>Product List</p>
        </div>
      </Link>
      
    </div>
  )
}

export default Sidebar
