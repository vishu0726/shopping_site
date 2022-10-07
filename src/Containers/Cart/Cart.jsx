import React from 'react'
// import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
// import Footer from '../Footer/Footer';
import './cart.css';

export const Cart = () => {
    const navigate = useNavigate();
    const cartItem = JSON.parse(localStorage.getItem('cart'));

    const totalAmount = cartItem.reduce((prev,curr) => {
        return prev+curr.rate;
    },0)

    const item = cartItem.map((ele) => {
        return (
            <ul className='items_in_cart'>
                <li className='cart-header'>{ele.header}</li>
                <div className='cart-rate'>${ele.rate}</div>
            </ul>
        )
    })
    const buyNow = () => {
        const userList = JSON.parse(localStorage.getItem('user'));
        if (userList.length !== 0) {
            alert("Your order is placed successfully")
        } else {
            navigate('/login');
        }
    }
  return (
    <>
        <h2 className='cart-heading'>CART</h2>
        <div className='cart-container'>
            <div className='cart-item'>{item}</div>
            <hr/>
            <div className='totalCost'>Total Cost: ${totalAmount}</div>
            <button onClick={buyNow}>BUY NOW</button>
        </div>
        {/* <Footer/> */}
    </>
  )
}
