import React from 'react'
import './footer.css'
import {FaShopify, FaSearch,FaCartPlus } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='footer-main'>
            <h1>E<FaShopify/>SHOPPING</h1>
        </div>
        <div><h3>KEEP IN TOUCH</h3></div>
    </div>
  )
}

export default Footer