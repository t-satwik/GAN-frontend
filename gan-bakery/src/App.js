import React, { useState } from 'react';
import Product from './components/Product';
import Cart from './components/Cart';

function App() {
  const [cartItems, setCartItems] = useState([0, 0, 0, 0]);
  const [totalPrice, setTotalPrice]=useState(0);
  const addToCartHandler = (productID) => {
    const newCartItems = [...cartItems];
    newCartItems[productID]++;
    setCartItems(newCartItems);
    const newTotalPrice = totalPrice + products[productID].price;
    setTotalPrice(newTotalPrice);
  };
  const deleteFromCartHandler = (productID) => {
    const newCartItems = [...cartItems];
    newCartItems[productID]--;
    setCartItems(newCartItems);
    const newTotalPrice = totalPrice-products[productID].price;
    setTotalPrice(newTotalPrice);
  };
  const [products, setProducts]=useState([
    {
      id: 0,
      name: 'Bread',
      price: 2.5,
      description: 'Fresh bread'
    },
    {
      id: 1,
      name: 'Bread',
      price: 2.5,
      description: 'Fresh bread'
    },
    {
      id: 2,
      name: 'Bread',
      price: 2.5,
      description: 'Fresh bread'
    },
    {
      id: 3,
      name: 'Bread',
      price: 2.5,
      description: 'Fresh bread'
    },
  ]);

  const changeDescriptionHandler = (productID) => {
    setProducts(
      products.map((p) => {
        if (p.id === productID) {
          return {
            ...p,
            description: 'New description',
          };
        }
        return p;
      })
    );
    console.log(products);
  };

  return (
    <div className="App">
      {products.map((p) => (
        <Product
          key={p.id}
          id={p.id}
          name={p.name}
          price={p.price}
          description={p.description}
          changeDescriptionHandler={() => changeDescriptionHandler(p.id)}
          addToCartHandler={() => addToCartHandler(p.id)}
          deleteFromCartHandler={() => deleteFromCartHandler(p.id)}
        />
      ))}
      <Cart cartItems={cartItems} totalPrice={totalPrice}/>
    </div>
  );
}

export default App;
