import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import { Modal,Button, Form } from 'react-bootstrap';
import edit from"../Icons/edit.svg"

import { registerUser } from '../JS/actions/authAction';

const Register = () => {
    const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const [name,setName] = useState("");
  const [adress , setAdress] =useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [phone,setPhone] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const userRegister = ()=>{
    dispatch(registerUser({name,adress,email,phone,password}))
    setName('');
    setAdress('');
    setEmail('');
    setPassword('');
    setPhone('');
  }

  return (
    <>
      <Button style={{backgroundColor: 'transparent',borderStyle: 'none',}} onClick={handleShow}>
      <img src={edit} alt=""/> Register
      </Button>
    
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
    <Form>
       <Form.Group className="mb-3">
        <Form.Label>Name :</Form.Label>
        <Form.Control type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter your name..." />
       </Form.Group>
    
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email" />
        <Form.Text className="text-muted">
      We'll never share your email with anyone else.
         </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password"name="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
  </Form.Group>
  <Form.Group className="mb-3">
        <Form.Label>adress :</Form.Label>
        <Form.Control type="text" name="adress" value={adress} onChange={(e)=>setAdress(e.target.value)} placeholder="Enter your adress..." />
       </Form.Group>
  <Form.Group className="mb-3">
        <Form.Label>Phone :</Form.Label>
        <Form.Control type="text" name="phone" value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder="Enter your phone..." />
       </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{userRegister();handleClose()}}>
          Register
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Register