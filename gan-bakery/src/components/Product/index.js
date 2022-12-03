import React from 'react';

export default function Product(props) {


  return (
    <div>
        <h1>{props.name}</h1>
        <h1>{props.price}</h1>
        <h1>{props.description}</h1>
        <button onClick={props.changeDescriptionHandler}>Change description</button>
        <button onClick={props.addToCartHandler}>add to cart</button>
        <button onClick={props.deleteFromCartHandler}>delete from cart</button>
    </div>
  );
}
