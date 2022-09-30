import React from 'react'
import './footer.css'
import {FaShopify} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='outer'>
          <div>
            <div className='footer-head'>ABOUT</div>
            <div>Contact Us</div>
            <div>About Us</div>
            <div>Careers</div>
            <div>Stories</div>
            <div>Press</div>
            <div>Wholesale</div>
            <div>Corporate Information</div>
          </div>
          <div>
            <div className='footer-head'>HELP</div>
            <div>Payment</div>
            <div>Shipping</div>
            <div>Cancellation &amp; Return</div>
            <div>FAQ</div>
            <div>Report</div>
          </div>
          <div>
            <div className='footer-head'>POLICY</div>
            <div>Return Policy</div>
            <div>Terms of Use</div>
            <div>Security</div>
            <div>Privacy</div>
            <div>Site Map</div>
          </div>
          <div>
            <div className='footer-head'>SOCIAL</div>
            <div>Facebook</div>
            <div>Twitter</div>
            <div>YouTube</div>
          </div>
          <div className='mail-address'>
            <div className='footer-head'>Mail Us:</div>
            <div>Shopping Internet Private Limited,</div>
            <div>Building Alskuy, Dongari &amp;</div>
            <div>karl Ambey Tech city</div>
            <div>Inner Ring Road, Virul Akkaji Village</div>
            <div>Maharashtra, 4400001, India</div>
          </div>
          <div>
            <div className='footer-head'>Register Office Address</div>
            <div>Shopping Internet Private Limited,</div>
            <div>Building Alskuy, Dongari &amp;</div>
            <div>karl Ambey Tech city</div>
            <div>Inner Ring Road, Virul Akkaji Village</div>
            <div>Maharashtra, 4400001, India</div>
            <div>CIN : UZ12334KHLFHL12324</div>
            <div>Telephone : 4445566-112244</div>
          </div>
        </div>
        <hr />
        <div className='footer-bottom'>
          <div>Become a Seller</div>
          <div>Advertise</div>
          <div>Gift Cards</div>
          <div>Help Center</div>
          <div>&copy; eshppoing.com</div>
        </div>
    </div>
  )
}

export default Footer