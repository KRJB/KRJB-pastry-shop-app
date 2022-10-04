import React, { useState } from 'react'
import { Button, Card, Modal } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import eye from  "../../Icons/eye.png"
import '../../styles/cartItem.css'
import OrderDetails from './OrderDetails'

const OrderItem = ({item}) => {

  const [Show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const users = useSelector((state) => state.userReducer.users);


 


  return (
    <div >

<Card body style={{margin:'20px 40px'}} >
<div style={{display:'flex', justifyContent:'space-around'}}>
        <p > {users.find(e =>(e._id) === item.user).name}</p>
        <p > {users.find(e =>(e._id) === item.user).phone}</p>
        <p >{item.createdAt} </p>
        <Button variant="primary" onClick={handleShow}>
       <img src={eye} style={{paddingRight:'10px'}} alt=""/>
        view details      
        </Button>
        </div>
      <Modal
        size="lg"
        show={Show}
        onHide={() => setShow(false)}
        aria-labelledby="example-modal-sizes-title-lg">
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Order Details   </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{display : 'flex', justifyContent:'space-around', fontWeight:'bold'}}>  
          
        <p >image</p>
        <p >product</p>
        <p >quantity</p>
        <p >price</p>
        
        </div>
        <hr style={{marginTop:'-10px'}}/>

        {item.orderItems.map((i) => (       
              <OrderDetails i={i} key={i._id}/>)
              )}

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
</Card>
    </div>
  )
}

export default OrderItem