import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./components/About";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Profiles from "./components/Profiles";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LoginUser from "./components/LoginUser"
import Home from "./components/Home";
import LoginEmployer from "./components/LoginEmployer";
import React, { useState } from 'react';
import SignupUser from "./components/SignupUser";
import SignupEmployer from "./components/SignupEmployer"
function App() {


  return (
    <BrowserRouter>
    <div className="App">
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container fluid>
          <Navbar.Brand href="#">Monisha Nagpal</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav
              className="justify-content-center flex-grow-1 pe-3"
              style={{ maxHeight: "250px" }}
              
            >
              <Nav.Link as={Link} to="/">
                HOME
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                ABOUT
              </Nav.Link>
              <Nav.Link as={Link} to="/faq">
                FAQ
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                CONTACT US
              </Nav.Link>
              <Nav.Link as={Link} to="/profile">
                PROFILES
              </Nav.Link>
            </Nav>
            <Form className="d-flex text center">
              <Link to="/loginuser">
              <Button variant="outline-success" >LOGIN</Button>
              </Link>
            </Form>

            <Form className="d-flex" eventKey={2}>
              <Link to="/signupuser">
              <Button variant="outline-success">SIGN UP</Button>
              </Link>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div>
      <Routes>
      <Route path="/loginuser" element={<LoginUser/>}/>
      <Route path="/signupuser" element={<SignupUser/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/faq" element={<Faq/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/profile" element={<Profiles/>}/>
      <Route path="/loginemployer" element={<LoginEmployer/>}/>
      <Route path="/signupemployer" element={<SignupEmployer/>}/>
<Route path="/" element={<Home/>}/>
      </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
