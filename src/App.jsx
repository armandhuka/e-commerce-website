import React, { createContext, useEffect, useState } from 'react'
import Header from "../src/components/Header/Header"
import Cart from './components/CartPage/Cart'
import Card from './components/Card-section/Card-contener'
import CreatProductPage from './components/Creat-Product/CreatProductPage'
import "./App.css"

const CreatContext = createContext();

const App = () => {
  const [serach, setSerach] = useState('')
  const [productName, setProductName] = useState('');
  const [productDes, setProductDes] = useState('');
  const [product, setProduct] = useState([]);
  const [filteredProduct, setFilteredProduct] = useState([]);
  const [showPage, setShowPage] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false); // State to manage cart visibility

  const handelCreatProduct = () => {
    setShowPage(!showPage);
  }

  useEffect(() => {
    if (serach.trim()) {
      setFilteredProduct(
        product.filter((p) =>
          p.name.toLowerCase().includes(serach.toLowerCase())
        )
      );
    } else {
      setFilteredProduct(product);
    }
  }, [serach, product]);

  return (
    <CreatContext.Provider 
    value={{serach, 
    setSerach,
    productName, 
    setProductName,
    productDes, 
    setProductDes, 
    product, 
    setProduct,
    filteredProduct, 
    setFilteredProduct,
    cartItems,
    setCartItems,
    isCartOpen,
    setIsCartOpen}}>
      <Header />

      <div className='add-product-btn'>
        <button onClick={handelCreatProduct}>+</button>
      </div>
      {isCartOpen ? <Cart /> : (showPage ? <Card /> : <CreatProductPage />)} {/* Render Cart or Card based on isCartOpen */}
    </CreatContext.Provider>
  )
}

export default App;
export { CreatContext };
