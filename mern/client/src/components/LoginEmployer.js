import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function LoginEmployer() {
  const [data, setData] = useState({ email: "", password: "" });
  const nav = useNavigate();

  function handleChange(e) {
    setData((data) => ({ ...data, [e.target.name]: e.target.value }));
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(data.email);
    console.log(data.password);
    try {
      const response = await axios.post(
        "https://8080-bfadcedcbbcaedacbacdcbdacdccdabcdebacdacedf.project.examly.io/api/employee/login",
         {
            email: data.email,
            password: data.password,
          }
        
      );

      if (response.status === 200) {
        console.log(data.email);
        console.log(data.password);
        nav("/postajob");
      }
    } catch (error) {
      // If there was an error, display an error message to the user
      console.log("Error message: ", error.message);
      console.log("Error message: ", error.response.data);
    }
  };

  return (
    <div className="loginuser-bg">
      <Container className="login-con">
        <Row>
          <Col className="opacity" md={{ span: 4, offset: 4 }}>
            <Form onSubmit={handleLogin}>
              <h1 className="h1-user text-center">EMPLOYER LOGIN</h1>
              <br></br>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="email-address">Email address</Form.Label>
                <Form.Control
                  onChange={handleChange}
                  name="email"
                  value={data.email}
                  type="email"
                  placeholder="Enter email"
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="email-address">Password</Form.Label>
                <Form.Control
                  onChange={handleChange}
                  name="password"
                  value={data.password}
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>
              <Link to="/loginuser" className="login-employer">
                {" "}
                <p>Log in as a user</p>
              </Link>
              
                <Button variant="primary" type="submit" className="user-submit">
                  Submit
                </Button>
             
              <br></br>
              <br></br>
              <br></br>
              <br></br>
            </Form>
          </Col>
        </Row>
      </Container>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}
