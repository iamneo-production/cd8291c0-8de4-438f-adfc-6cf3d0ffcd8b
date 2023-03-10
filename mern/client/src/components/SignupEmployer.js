import React from 'react'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import { useState } from "react";
import axios from "axios";

export default function SignupEmployer() {
  const [data, setData] = useState({ firstname: "", lastname: "",email:"", password:"" });

  function handleChange(e) {
    setData((data) => ({ ...data, [e.target.name]: e.target.value }));
}
  function handleSubmit(e) {
    e.preventDefault();

    axios
        .post("https://8080-bfadcedcbbcaedacbacdcbdacdccdabcdebacdacedf.project.examly.io/api/employee/register", data)
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
      <Form onSubmit={handleSubmit}>
          <h1>Want to post a job?</h1>
      <Row>
        <Col>
          <Form.Control onChange={handleChange}  type="text"
                        name="firstname"
                        value={data.firstname} placeholder="First name" />
        </Col>
        <Col>
          <Form.Control placeholder="Last name" onChange={handleChange}  type="text"
                        name="lastname"
                        value={data.lastname} />
        </Col>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" onChange={handleChange} 
                        name="email"
                        value={data.email} placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" onChange={handleChange}  
                        name="password"
                        value={data.password}  placeholder="Password" />
      </Form.Group>
      <Link to='/signupuser'> <p>Sign up as a User</p></Link>
      <Button variant="primary" type="submit" className="employer-signup-submit">
        Submit
      </Button>
      </Row>
    </Form>
    
    </div>
  )
}
