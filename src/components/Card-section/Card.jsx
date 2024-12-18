import React, { useContext } from 'react';
import { CreatContext } from '../../App';

const Card = ({ name, des, a }) => {
  const { cartItems, setCartItems } = useContext(CreatContext); // Use useContext at the top level

  const handleAddToCart = () => {
    const product = { name, description: des, id: a }; // Create a product object
    // Check if the product is already in the cart
    const isProductInCart = cartItems.some(item => item.id === product.id);
    if (!isProductInCart) {
      setCartItems([...cartItems, product]); // Add product to cart
      alert("Product added to cart!"); // Optional: Alert when product is added
    } else {
      alert("This product is already in your cart!"); // Alert if product is already in cart
    }
  };

  // Function to truncate description to 10 words
  const truncateDescription = (description) => {
    const words = description.split(' ');
    return words.length > 7 ? words.slice(0, 10).join(' ') + '...' : description;
  };

  return (
    <div className='product-cart'>
      <div className='cart-header'>
        <h2>{a + 1}</h2> {/* This is the first h2 you mentioned */}
        <button onClick={handleAddToCart} className='add-btn'>Add to Cart</button> {/* Button to add to cart */}
      </div>
      <h4>{name}</h4> {/* Product name */}
      <p>{truncateDescription(des)}</p> {/* Product description truncated to 10 words */}
    </div>
  );
};

export default Card;