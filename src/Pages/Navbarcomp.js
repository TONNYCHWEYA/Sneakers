
import { Navbar , Nav,  Form, FormControl, Button, Card} from "react-bootstrap"
import {
  
  Link
} from "react-router-dom";

import React, { useState } from 'react';

import Offcanvas from 'react-bootstrap/Offcanvas';



function Navbarcomp({shoes}){
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return(
  
      <div>
        
<Navbar bg="dark" variant={"dark"} expand="lg">
  <Navbar.Brand as={Link} to={"/"}>Sneaker Shop</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
      <Nav.Link as={Link} to={"/product"}>Product</Nav.Link>
      <Nav.Link as={Link} to={"/login"}>Login</Nav.Link>
      <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
    
    </Nav>

    <Button variant="outline-success" onClick={handleShow}>
        Cart
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
       
        <Offcanvas.Body>
        {shoes.map((shoe) => (
        
        <Card bg={'outline-success'}>
          <Card.Img variant="top" src={shoe.image} />
          <Card.Body>
            <Card.Title>{shoe.name}</Card.Title>
            <Card.Text>
            Ksh {shoe.price}
            </Card.Text>
            <button>Buy</button>
           <button style={{marginLeft:"120px"}}>Remove from cart</button>
          </Card.Body>
        </Card> 
     
    ))}
        </Offcanvas.Body>
      </Offcanvas>
     
    <Form inline={true}>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>

  </Navbar.Collapse>
</Navbar>
</div>

  )
}
export default Navbarcomp