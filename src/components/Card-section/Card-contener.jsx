import React,{useContext,useState} from 'react';
import Card from './Card';
import {CreatContext} from "../../App"

const CartContainer = () => {
  const { productName, setProductName, productDes, setProductDes,product, setProduct,filteredProduct, setFilteredProduct} = useContext(CreatContext);


  return (
    <div className='cart-save-container'>
    {filteredProduct.length > 0 ? (
      filteredProduct.map((product, index,i) => (
        <Card
          a={index}
          key={index}
          name={product.name}
          des={product.des}
        />
      ))
    ) : (
      <p style={{color:'white'}}>No products added yet.</p>
    )}
  </div>
  );
};
export default CartContainer;
