import React from 'react'
import '../styles/about.css'
import Navbar from '../components/Navbar'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import Footer from '../components/Footer'



const About = () => {

   
  return (
<div>
    <Navbar/>

    <Container>
        <h2 style={{color: "#e53637", textAlign: "center", fontWeight: "bold", margin: "40px 0px"}}>Contact Us</h2>
          <Row>
            <Col>
            <p>  Do you want help? Our team is at your disposal to answer your questions and requests. 
                You can contact us by email or phone</p>
        <h3 style={{color: "#e53637", textAlign: "center", fontWeight: "bold", margin: "40px 0px"}}>Our Addresses</h3>

            <ul> 
              <li>
              <span>55 Independence Street Saidia - Bardo</span>
              </li> 
              <li>
              <span>Phone: 29254772 </span>
              </li> 
              <br/>
              <li>
              <span>5 Jasmine Street Saidia - Bardo</span>
              </li> 
              <li>
              <span>Phone: 22572258 </span>
              </li>
              </ul>
            </Col>
            <Col>
              <Form  >
                <h3 className="title">Send your comments</h3>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlName">
                      <Form.Label>Name</Form.Label>
                      <Form.Control type="text" placeholder="your name" required name="user_name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlSubject">
                        <Form.Label>Subject</Form.Label>
                        <Form.Control type="text" placeholder="Subject" required name="user_subject" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" required name="user_email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlMessage">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows={5} placeholder="Enter your Comment"  name="message" required/>
                    </Form.Group>
                    
                    <Button type="submit" variant="dark" >Send Email</Button>
                </Form>
            </Col>
          </Row>

      </Container>


<Footer/>
    </div>
  )
}

export default About