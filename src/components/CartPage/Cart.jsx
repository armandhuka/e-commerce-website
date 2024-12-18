import React, { useContext } from 'react';
import { CreatContext } from '../../App';

const Cart = () => {
  const { cartItems, setCartItems } = useContext(CreatContext);

  const handleRemoveItem = (itemId) => {
    setCartItems(cartItems.filter(item => item.id !== itemId));
  };

  // Function to truncate description to 5 words
  const truncateDescription = (description) => {
    const words = description.split(' ');
    return words.length > 5 ? words.slice(0, 5).join(' ') + '...' : description;
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
                <p>{truncateDescription(item.description)}</p> {/* Truncated description */}
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