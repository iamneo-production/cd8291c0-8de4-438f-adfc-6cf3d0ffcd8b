import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function LoginUser() {
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
        "https://8080-bfadcedcbbcaedacbacdcbdacdccdabcdebacdacedf.project.examly.io/api/user/login",
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
      <Form onSubmit={handleLogin}>
          <h1>user</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control onChange={handleChange} name="email" value={data.email} type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control onChange={handleChange} name="password" value={data.password} type="password" placeholder="Password" />
      </Form.Group>
     <Link to='/loginemployer'> <p>Log in as an employer</p></Link>
      <Button variant="primary" type="submit" className="user-submit">
        Submit
      </Button>
    </Form>
    
    </div>
  )
}
