import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./components/About";
import Services from "./components/Services";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from "./components/Home";
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Monisha Nagpal</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/">
                HOME
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                ABOUT
              </Nav.Link>
              <Nav.Link as={Link} to="/service">
                SERVICES
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Button variant="outline-success">CONTACT ME</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div>
      <Routes>
      <Route path="/about" element={<About/>}/>
      <Route path="/service" element={<Services/>}/>
<Route path="/" element={<Home/>}/>
      </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
