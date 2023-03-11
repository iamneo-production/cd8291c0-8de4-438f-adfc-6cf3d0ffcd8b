import React from 'react'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import Button from 'react-bootstrap/Button'
import { useState } from "react";
import axios from "axios";

export default function SignupUser() {
  const [data, setData] = useState({ firstname: "", lastname: "",email:"", password:"" });

  function handleChange(e) {
    setData((data) => ({ ...data, [e.target.name]: e.target.value }));
}
  function handleSubmit(e) {
    e.preventDefault();

    axios
        .post("https://8080-bfadcedcbbcaedacbacdcbdacdccdabcdebacdacedf.project.examly.io/api/user/register", data)
        .then((res) => {
            setData({ firstname: "", lastname: "",email:"",password:"" });
            console.log(res.data);
            toast.success("Registered Successfully")
        })
        .catch((err) => {
           // console.log("Error couldn't create TODO");
            console.log(err.status);
            toast.error("Email already Registered");
        });
}
  return (
    <div className='loginuser-bg'>
      <Container className='login-con'>
        <Row>
          <Col className="opacity" md={{ span: 4, offset: 4 }}>
            <Form onSubmit={handleSubmit}>
              <h1 className='h1-user text-center'>Looking for a Job?</h1>
              <br></br>
              <Row>
                <Col>
                <Form.Label className="email-address">First Name</Form.Label>
                  <Form.Control onChange={handleChange}  type="text"
                        name="firstname"
                        value={data.firstname} required placeholder="First name" />
                </Col>
                <Col>
                <Form.Label className="email-address">Last Name</Form.Label>

                  <Form.Control onChange={handleChange} required type="text"
                        name="lastname"
                        value={data.lastname} placeholder="Last name" />
                  <br></br>
                </Col>
                
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="email-address">Email address</Form.Label>
                  <Form.Control required onChange={handleChange}  
                        name="email"
                        value={data.email} type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label className="email-address">Password</Form.Label>
                  <Form.Control onChange={handleChange} 
                        name="password" required
                        value={data.password} type="password" placeholder="Password" />
                </Form.Group>
                <Link to='/signupemployer'> <p className="login-employer" id="spacing">Sign up as an employer</p></Link>
                
                <Button variant="primary" type="submit" className="user-signup-submit">
                  SIGN UP
                </Button>
                
              </Row>
            </Form>
            <br></br>
                <br></br>
                <br></br>
                
                
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
  )
}

