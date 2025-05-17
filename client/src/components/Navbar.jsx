import React from 'react';
import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ZomatoNavbar = () => {
  return (
    <Navbar expand="lg" bg="light" className="shadow-sm">
      <Container>
        <Navbar.Brand href="#" className="text-danger fw-bold fs-3">Zomato</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form className="d-flex mx-auto w-50">
            <FormControl type="search" placeholder="Search for restaurant, cuisine or a dish" className="me-2" />
            <Button variant="outline-danger">Search</Button>
          </Form>
          <Nav>
          <Nav.Link as={Link} to="/login">Login</Nav.Link>  
          <Nav.Link as={Link} to="/register">Signup</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default ZomatoNavbar;
