import React from 'react'
import '../../styles/cartItem.css'

const OrderDetails = ({i}) => {

  return (
    <div className="cartItem" >
      <img src={i.image} alt=''/>
      <p >{i.name}</p>
      <p >{i.qty}</p>
      <p >{i.price} DT/100g</p>
    </div>
)
}

export default OrderDetails