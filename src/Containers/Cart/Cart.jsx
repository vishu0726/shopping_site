import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import './cart.css';

export const Cart = () => {
    const navigate = useNavigate();
    const cartItem = JSON.parse(localStorage.getItem('cart'));

    const totalAmount = cartItem.reduce((prev,curr) => {
        return prev+curr.rate;
    },0)

    const item = cartItem.map((ele) => {
        return (
            <div>
                <span>name: {ele.header}</span>
                <div>Rate: ${ele.rate}</div>
            </div>
        )
    })
    
  return (
    <div className='cart-container'>
    <h2>cart</h2>
    <div>{item}</div>
    <div>Total Cost: ${totalAmount}</div>
    </div>
  )
}
