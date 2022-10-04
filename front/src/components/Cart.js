import shop from"../Icons/shop.svg"
import React, {    useState } from 'react';
import { Badge, Button, Modal } from 'react-bootstrap';
import {  useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { addToCart, removeFromCart } from "../JS/actions/shopActions";
import { createOrder} from "../JS/actions/orderActions";


const Cart = () => {
    const [Show, setShow] = useState(false);
   

    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;      

    const removeFromCartHandler = (id) => {
      dispatch(removeFromCart(id));
    };
    const getCartSubTotal = () => {
    return cartItems
      .reduce((price, item) => price + item.price * item.qty, 0)
      .toFixed(2);
  };

  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty));
  };

  const {user} = useSelector(state => state.authreducer);

  const {isAuth} = useSelector(state => state.authreducer);

  const alrt = () => {
    alert("you have to connect to an account");
  }

  const placeOrderHandler = () => {
  dispatch(createOrder({ orderItems: [...cartItems],user:user._id }));
  alert("order passed succesfully");

}

  return (
    <div>
        <button className="cart" onClick={() => setShow(true)}>Cart <Badge pill bg="dark" style={{margin:'15px -71px 0 35px', zIndex:'3' }}>{cartItems.length}</Badge><img src={shop} alt="shopping cart" /></button>
       
        <Modal
        size="lg"
        show={Show}
        onHide={() => setShow(false)}
        aria-labelledby="example-modal-sizes-title-lg">
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Cart   </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {cartItems.length === 0 ? (
            <h4>
              Your Cart Is Empty
            </h4>
        ): (
          <>
            {cartItems.map((item) => (
              <div  key={item._id}>
              <CartItem
              item={item}
              qtyChangeHandler={qtyChangeHandler}
              removeHandler={removeFromCartHandler}
              />
              <hr/>
              </div>
              ))}
            <div style={{display:'flex', justifyContent:'space-around'}}>
            <h4 style={{fontWeight:'bold'}}> Total = {getCartSubTotal()} DT</h4> 
            {isAuth?<Button variant="primary" onClick={placeOrderHandler} >Oreder </Button>
            :<Button variant="primary" onClick={alrt} >Oreder </Button>}
            </div>
            </>
            )
            
          }
          
        </Modal.Body>
      </Modal>

    </div>
  )
}

export default Cart