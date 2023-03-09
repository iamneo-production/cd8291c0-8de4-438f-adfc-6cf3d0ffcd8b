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
            <Navbar.Brand href="#" className="brand-name">Galcareer</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav
                className="justify-content-center flex-grow-1 pe-3 text-center"
                id="nav-elements"
                style={{ maxHeight: "250px" }}

              >
                <Nav.Link as={Link} to="/" className="Link1">
                  HOME
                </Nav.Link>
                <Nav.Link as={Link} to="/about" className="Link2">
                  ABOUT
                </Nav.Link>
                <Nav.Link as={Link} to="/faq" className="Link3">
                  FAQ
                </Nav.Link>
                <Nav.Link as={Link} to="/contact" className="Link4">
                  CONTACT US
                </Nav.Link>
                <Nav.Link as={Link} to="/profile" className="Link5">
                  PROFILES
                </Nav.Link>
              </Nav>
              <Form className="d-flex text-center button1">

                <Link to="/loginuser">
                  <div className="center-button text-center justify-content-center">
                    <Button variant="outline-success" className="button1" >LOGIN</Button>
                  </div></Link>

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
            <Route path="/loginuser" element={<LoginUser />} />
            <Route path="/signupuser" element={<SignupUser />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/profile" element={<Profiles />} />
            <Route path="/loginemployer" element={<LoginEmployer />} />
            <Route path="/signupemployer" element={<SignupEmployer />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
      
    </BrowserRouter>
  );
}

export default App;
