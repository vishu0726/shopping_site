import React from "react";
import './header.css'
import {FaShopify, FaSearch,FaCartPlus } from 'react-icons/fa'
import { Login } from "../Login/Login"; 
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  const userState = useSelector((state) => state.user);
  return (
    <nav className="header">
      <h2><NavLink to={'/'} className="logo">E<FaShopify/>SHOPPING</NavLink></h2>
    <ul className="header-right">
      <li>
        <div className="input-button-div">
          <input className="nav-input" type="text"  placeholder='search for product, brands and more'/>
          <button className="search-button"><FaSearch/></button>
        </div>
      </li>
      <li>
        {userState.username ? <li>Welcome {userState.username}</li> : <li ><NavLink to={'/login'} className="login-name">Login</NavLink></li>}
      </li>
      <li>
        <label className="scroll-down" htmlFor="product">More</label>
        <select name="products" id="product" value='select'>
          <option value="select"></option>
          <option value="clothing">Clothing</option>
          <option value="jewellery">Jewellery</option>
          <option value="bag">Bag's</option>
          <option value="electronics">Electronics Item's</option>
        </select>
      </li>
      <li>
        <button onClick={() => navigate('/cart')}><FaCartPlus/></button>
      </li>
    </ul>
    </nav>
  );
};

export default Header;