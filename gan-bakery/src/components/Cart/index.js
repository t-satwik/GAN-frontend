import React from 'react';

export default function Cart(props) {


  return (
    <div>
        <p>{props.cartItems}</p>
        <h1>{props.totalPrice}</h1>
    </div>
  );
}
