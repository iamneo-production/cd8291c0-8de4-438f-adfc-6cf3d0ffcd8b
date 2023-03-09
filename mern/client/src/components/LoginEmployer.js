import React from 'react'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
export default function LoginEmployer() {
  return (
    <div>
 
      <Form>
          <h1>employer</h1>
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
     <Link to='/loginuser'> <p>Log in as a user</p></Link>
      <Button variant="primary" type="submit" className="employer-submit">
        Submit
      </Button>
    </Form>
    </div>
  )
}
