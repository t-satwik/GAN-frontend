import React from 'react';
import './CartCard.css';

import numItemsImg from "../../Assets/images/numItems.svg"
import cartImg from "../../Assets/images/cart.svg"
export default function Cart(props) {
  function sum_array (array) {
    let sum = 0;
    for (let i = 0; i < props.cartItems.length; i++) {
        sum += props.cartItems[i];
    }
    return sum;
  };
  return (
    <div className="cart-outer-container">
        <div className="cart-container">
            <h1 className="cart-price">₹{props.totalPrice}</h1>
            <div className="cart-items">
                <img src={numItemsImg} alt="numItems" className="inline-svg-num-items"/>
                <h1 className="cart-items">{sum_array(props.cartItems)}</h1>
            </div>
            <button className="cart-expand-btn" onClick={props.cartExpandHandler}><img className="inline-svg-cart" src={cartImg}/></button>
        </div>
    </div>
    
  );
}
