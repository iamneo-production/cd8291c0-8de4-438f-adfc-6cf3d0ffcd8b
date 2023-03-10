import {React,useState} from 'react'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {Link} from 'react-router-dom'
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
        })
        .catch((err) => {
            console.log("Error couldn't create TODO");
            console.log(err.data.message);
        });
}
  return (
    <div>
      <Form  onSubmit={handleSubmit}>
          <h1>Looking for a Job?</h1>
      <Row>
        <Col>
          <Form.Control onChange={handleChange}  type="text"
                        name="firstname"
                        value={data.firstname} placeholder="First name" />
        </Col>
        <Col>
          <Form.Control onChange={handleChange}  type="text"
                        name="lastname"
                        value={data.lastname}placeholder="Last name" />
        </Col>
        <Form.Group  className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control onChange={handleChange}  
                        name="email"
                        value={data.email} type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
<<<<<<< HEAD
        <Form.Control onChange={handleChange} name="password" value={data.password} type="password" placeholder="Password" />
=======
        <Form.Control onChange={handleChange} 
      </Form.Group>
      <Link to='/signupemployer'> <p>Sign up as an employer</p></Link>
      <Button variant="primary" type="submit" className="user-signup-submit">
      </Button>
      </Row>
    </Form>
    
    </div>
  )
}
