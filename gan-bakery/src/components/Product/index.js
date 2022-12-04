import React from 'react';

import './ProductCard.css';

export default function Product(props) {

  return (
    <>
      <div style={{backgroundImage: `url(${props.img})`}} className="pc-container">
          <div className="pc-empty"></div>
          <div className="pc-content">
              <div className="pc-row">
                <h1 className="pc-title">{props.name}</h1>
                <h1 className="pc-price">₹{props.price}</h1>
              </div>
              <div className="pc-row">
                <p className="pc-desc">{props.description} </p>
                <button onClick={props.changeDescriptionHandler} className="pc-btn pc-change-desc-btn">
                    <span>Change Description</span>
                </button>
              </div>
              <div className="pc-row">
                <button onClick={props.addToCartHandler} className="pc-btn pc-add-cart-btn">
                    <span>Add to Cart</span>
                </button>
                <button onClick={props.deleteFromCartHandler} className="pc-btn pc-delete-btn">
                    <span>Delete from cart</span>
                </button>
              </div>
          </div>
      </div>
    </>
  );
}
