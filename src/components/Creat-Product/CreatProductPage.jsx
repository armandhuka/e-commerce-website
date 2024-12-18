import React, { useContext } from 'react';
import { CreatContext } from '../../App';

const CreatProductPage = () => {
  const { productName, setProductName, productDes, setProductDes, product, setProduct } = useContext(CreatContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (productName && productDes) {
      setProduct([...product, { name: productName, des: productDes }]);
      setProductName('');
      setProductDes('');
      alert("Product added!");
    } else {
      alert("Please fill in all fields.");
    }
  }

  return (
    <div className='create-product-page'>
      <form onSubmit={handleSubmit}>
        <h2>Create Your Product</h2>
        <div className="detail">
          <input 
            type="text" 
            placeholder="Product Name"
            value={productName} 
            onChange={(e) => setProductName(e.target.value)} 
          />
          <textarea 
            placeholder="Product Description"
            value={productDes} 
            onChange={(e) => setProductDes(e.target.value)}>
          </textarea>
        </div>
        <button type="submit">Add to Page</button>
      </form>
    </div>
  )
}

export default CreatProductPage;