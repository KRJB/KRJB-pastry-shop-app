import React from 'react'
import '../styles/cartItem.css'

const CartItem = ({item,removeHandler,qtyChangeHandler}) => {

  return (
    <div className="cartItem">
         
       <img src={item.image} alt=''/>
        <p >{item.name}</p>
        <p >{item.price} DT/100g</p>
        <input className="input" type="number" value={item.qty} onChange={(e) => qtyChangeHandler(item._id, e.target.value)} min="1" ></input>
 
        <button className='button'
        onClick={(e) => removeHandler(item._id,e.target.value)}>  X </button>     


    </div>
  )
}

export default CartItem