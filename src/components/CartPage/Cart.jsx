import React, { useContext } from 'react';
import { CreatContext } from '../../App';
 // Import the CSS file for styles

const Cart = () => {
  const { cartItems, setCartItems } = useContext(CreatContext); // Use useContext to access cart items and setCartItems

  const handleRemoveItem = (itemId) => {
    // Remove item from cart
    setCartItems(cartItems.filter(item => item.id !== itemId));
  };

  return (
    <div className='cart-page'>
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className='product-cart-holder'>
          {cartItems.map(item => (
            <li key={item.id} className='add-to-cart-product'>
              <div>
                <h2>{item.name}</h2>
                <p>{item.description}</p>
              </div>
              <button onClick={() => handleRemoveItem(item.id)} className='remove-btn'>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;