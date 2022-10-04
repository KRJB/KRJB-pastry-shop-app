import React, { useState } from 'react'
import { Button, Card, Form, Modal } from 'react-bootstrap';
import { useDispatch} from 'react-redux';
import { addProduct } from '../../JS/actions/productActions';
import Fab from '@mui/material/Fab';


const AddProduct = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [image , setImage] =useState("");
    const [price,setPrice] = useState("");
    const addHandler = ()=>{
        dispatch(addProduct({name,image,price}))
        setName('');
        setImage('');
        setPrice('');
      
      }
   
  return (
    <div>

        
         <Card style={{ width: '15rem', minHeight:'420px' ,margin: '5px', display:'flex',justifyContent:'center', alignItems:'center', cursor:'pointer'}} onClick={handleShow}> <Fab color="primary" aria-label="add"  style={{ fontSize: '40px', fontWeight:'lighter' }}>
        +
      </Fab>  </Card>
     

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>ADD Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Form.Group className="mb-3">
        <Form.Label>Name :</Form.Label>
        <Form.Control type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter your name..." />
       </Form.Group>

       <Form.Group className="mb-3">
        <Form.Label>image :</Form.Label>
        <Form.Control type="text" name="name" value={image} onChange={(e)=>setImage(e.target.value)} placeholder="Enter URL image..." />
       </Form.Group>

       <Form.Group className="mb-3">
        <Form.Label>price :</Form.Label>
        <Form.Control type="text" name="name" value={price} onChange={(e)=>setPrice(e.target.value)} placeholder="Enter price..." />
       </Form.Group>
    
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{addHandler();handleClose()}}>
          ADD
          </Button>
        </Modal.Footer>
      </Modal>
   
    </div>
  )
}

export default AddProduct