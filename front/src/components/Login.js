import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import { Modal,Button, Form } from 'react-bootstrap';
import useri from "../Icons/user-icon.svg"

import { loginUser } from '../JS/actions/authAction';

const Login = () => {
    const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const userLogin = ()=>{
    dispatch(loginUser({email,password}))
  
    setEmail('');
    setPassword('');
  }

  return (
    <>
 
    <Button style={{backgroundColor: 'transparent',borderStyle: 'none'}} onClick={handleShow}>
    <img src={useri} alt=""/> Log In
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Log In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
    <Form>
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
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{userLogin();handleClose()}}>
          Log In
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Login