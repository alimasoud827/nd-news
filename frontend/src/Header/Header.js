import React from 'react'
import assets from '../assets/assets'
import { IoSearch } from "react-icons/io5";
import './header.css'

const Header = () => {
  return (
    <div className='header'>
      <div className='header-top'>
        <div className='header-left'>
          <img src={assets.logo} alt="" />
          <div>
            <h2 className='roboto-header'>Nairobi Daily</h2>
            <h5 className='dancing-script-header'>Number one Source of News, Entertainment and Drama</h5>
          </div>
        </div>
        <div className='header-right'>
          <ul>
            <li><a href="#login">Login</a></li>
            <li><a href="#regiter">Register</a></li>
          </ul>
          <div>
            <input type="text" placeholder='Search' />
            <IoSearch className='search' />
          </div>
        </div>
      </div>
      <div className="header-bottom">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Breaking News</a></li>
          <li><a href="#">Politics</a></li>
          <li><a href="#">Entertainment</a></li>
          <li><a href="#">Sports</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Header