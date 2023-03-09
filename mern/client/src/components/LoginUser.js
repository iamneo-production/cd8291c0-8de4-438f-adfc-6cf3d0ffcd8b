import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Link, BrowserRouter} from "react-router-dom"
export default function LoginUser() {
  return (
    <div>
      <Form>
          <h1>user</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
     <Link to='/loginemployer'> <p>Log in as an employer</p></Link>
      <Button variant="primary" type="submit" className="user-submit">
        Submit
      </Button>
    </Form>
    
    </div>
  )
}
