import React, { useState } from "react";
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";
export default function LoginEmployer() {

    const [data, setData] = useState({ email: "", password: "" });
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
    null,
    {
      params: {
        email: data.email,
        password: data.password,
      },
    }
        );
  
        if (response.status === 200) {
          window.location.href = '/Home';
        }
      } catch (error) {
        // If there was an error, display an error message to the user
        console.log("Error message: ", error.message);
        console.log("Error message: ", error.response.data);
      }
    };
  

  return (
    <div>
 
      <Form onLogin={handleLogin}>
          <h1>employer</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control onLogin={handleChange} name="email" value={data.email}type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control onLogin={handleChange} name="password" value={data.password}type="password" placeholder="Password" />
      </Form.Group>
     <Link to='/loginuser'> <p>Log in as a user</p></Link>
      <Button variant="primary" type="submit" className="employer-submit">
        Submit
      </Button>
    </Form>
    </div>
  )
}
