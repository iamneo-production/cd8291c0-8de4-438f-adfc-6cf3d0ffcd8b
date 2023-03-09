import React from 'react'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button'
export default function SignupEmployer() {
  return (
    <div>
      <Form>
          <h1>Want to post a job?</h1>
      <Row>
        <Col>
          <Form.Control placeholder="First name" />
        </Col>
        <Col>
          <Form.Control placeholder="Last name" />
        </Col>
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
      <Link to='/signupuser'> <p>Sign up as a User</p></Link>
      <Button variant="primary" type="submit" className="employer-signup-submit">
        Submit
      </Button>
      </Row>
    </Form>
    
    </div>
  )
}
