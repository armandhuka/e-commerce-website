import React, { useContext} from 'react'
import { CreatContext } from '../../App'

const Header = () => {
  const{serach, setSerach,setIsCartOpen,cartItems}=useContext(CreatContext)

  const handelSearch =(e)=>{
    e.preventDefault();    
  }
  const handleCart = () => {
    setIsCartOpen(prev => !prev); // Toggle cart visibility
  };
  return (
    <div className='header'>
      <h1>Pro Store</h1>
      <form onSubmit={handelSearch}>
        <p>Pro Store</p>
      <input type="text" className='hearder-search-bar' value={serach} 
      onChange={(e)=>{setSerach(e.target.value)}}/></form>
      <div className="cart-sec">
        <h2 onClick={handleCart}>Cart</h2>
        <div className="cart-count">{cartItems.length}</div>
      </div>
    </div>
  )
}

export default Header