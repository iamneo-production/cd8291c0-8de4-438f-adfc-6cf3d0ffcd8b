import React from 'react'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
export default function SignupUser() {
  return (
    <div className='loginuser-bg'>
      <Container className='login-con'>
        <Row>
          <Col className="opacity" md={{ span: 4, offset: 4 }}>
            <Form>
              <h1 className='h1-user text-center'>Looking for a Job?</h1>
              <br></br>
              <Row>
                <Col>
                <Form.Label className="email-address">First Name</Form.Label>
                  <Form.Control placeholder="First name" />
                </Col>
                <Col>
                <Form.Label className="email-address">Last Name</Form.Label>

                  <Form.Control placeholder="Last name" />
                  <br></br>
                </Col>
                
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="email-address">Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label className="email-address">Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
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

