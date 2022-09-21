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
    // const cartState = useSelector((state) => state.cart.product);
    // const totalAmount = cartState.reduce((acc,curr) => {
    //     if (cartState.length > 0) {
    //         return acc+curr;
    //     }
    //    else {
    //     return (
    //         <>
    //         <div>Cart is empty!</div>
    //         <button onClick={() => navigate('/')}>Home</button>
    //         </>
    //     )
    //    }
//     })
//     const cartData = cartState.map((data) => {
//         return (
//             <div className='cart-main'>
//                 <div className='price-section'>
//                     <div>Price Details</div>
//                 </div>
//                 <div className='price-details'>
//                     <div>Price : ${data.price}</div>
//                     <div>Delivery Charges : Free</div>
//                 </div>
//                 <div className='amount-details'>
//                     <div>Amount Payable: ${totalAmount}</div>
//                 </div>
//             </div>
//         )
//     })
  return (
    <div className='cart-container'>
    <h2>cart</h2>
    <div>{item}</div>
    <div>Total Cost: ${totalAmount}</div>
    </div>
  )
}
