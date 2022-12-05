import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBInput,
} from 'mdb-react-ui-kit';
import React, { useState } from 'react';

import Product from './components/Product';
import Cart from './components/Cart';
import './App.css';
import breadImg from "./Assets/images/bread.jpg";
import pastryImg from "./Assets/images/pastry.jpeg";
import croissaintImg from "./Assets/images/croissant.jpg";
import pretzelImg from "./Assets/images/pretzels.jpg";

function App() {
  const [cartItems, setCartItems] = useState([0, 0, 0, 0]);
  const [totalPrice, setTotalPrice]=useState(0);
  const [changeDescProdID, setChangeDescProdID]=useState(0);
  const [newDesc, setNewDesc] = useState('');
  const [basicModal, setBasicModal] = useState(false);

  const addToCartHandler = (productID) => {
    const newCartItems = [...cartItems];
    newCartItems[productID]++;
    setCartItems(newCartItems);
    const newTotalPrice = totalPrice + products[productID].price;
    setTotalPrice(newTotalPrice);
  };
  const deleteFromCartHandler = (productID) => {
    const newCartItems = [...cartItems];
    if (newCartItems[productID] <= 0) {
      alert('No items in cart');
      return;
    }
    newCartItems[productID]--;
    setCartItems(newCartItems);
    const newTotalPrice = totalPrice-products[productID].price;
    setTotalPrice(newTotalPrice);
  };
  const cartExpandHandler = () => {
    console.log("Cart Payload: ");
    for(let i=0; i<4; i++) {
      if(cartItems[i] > 0) {
        console.log(products[i].name, cartItems[i]);
      }
    }
    console.log('Total Price: ', totalPrice);
    alert("checkout requested -> total amount: ₹"+totalPrice);
  };
  const [products, setProducts]=useState([
    {
      id: 0,
      img: breadImg,
      name: 'Bread',
      price: 50,
      description: 'Freshly baked food product made of flour or meal that is moistened, kneaded, and sometimes fermented.'
    },
    {
      id: 1,
      img: pretzelImg,
      name: 'Pretzel',
      price: 30,
      description: 'Pretzel is a type of baked bread made from dough that is commonly shaped into a knot'
    },
    {
      id: 2,
      img: croissaintImg,
      name: 'Croissaint',
      price: 30,
      description: 'A croissant is a buttery, flaky, Austrian viennoiserie pastry inspired by the shape of the Austrian kipferl but using the French yeast-leavened laminated dough.'
    },
    {
      id: 3,
      img: pastryImg,
      name: 'Pastry',
      price: 40,
      description: 'Pastry is baked food made with a dough of flour, water and shortening that may be savoury or sweetened.'
    },
  ]);
  
  const changeDescriptionHandler = (productID) => {
    setChangeDescProdID(productID);
    console.log("Change description of product with ID: " + productID);
    toggleShow();    
  };
  
  const changeDescriptionFormHandler = () => {
    setProducts(
      products.map((p) => {
        if (p.id === changeDescProdID) {
          return {
            ...p,
            description: newDesc,
          };
        }
        return p;
      })
    );
    toggleShow();
    alert('Description changed');
  }

  const toggleShow = () => setBasicModal(!basicModal);


  return (
    <div className="app">
      <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Change Description</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <MDBInput label='New Description' id='form1' type='text' value={newDesc} onChange={(e)=>{setNewDesc(e.target.value)}} />
            </MDBModalBody>

            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={toggleShow}>
                Close
              </MDBBtn>
              <MDBBtn onClick={changeDescriptionFormHandler}>Save changes</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
      <h1 className="app-title app-main-title">Bakery</h1>
      <h2 className="app-title section-title">Products</h2>
      <div className="app-products">
        {products.map((p) => (
            <Product
            key={p.id}
            id={p.id}
            img={p.img}
            name={p.name}
            price={p.price}
            description={p.description}
            changeDescriptionHandler={() => changeDescriptionHandler(p.id)}
            addToCartHandler={() => addToCartHandler(p.id)}
            deleteFromCartHandler={() => deleteFromCartHandler(p.id)}
          />
        ))}
      </div>
      {totalPrice>0 ? <Cart cartItems={cartItems} totalPrice={totalPrice} cartExpandHandler={cartExpandHandler}/> : null}
    </div>
  );
}

export default App;
