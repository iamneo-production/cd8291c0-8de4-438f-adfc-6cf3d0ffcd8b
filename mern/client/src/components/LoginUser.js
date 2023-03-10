import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { Link, BrowserRouter } from "react-router-dom"
export default function LoginUser() {
  return (
    <div className='loginuser-bg'>
      <Container className='login-con'>
        <Row>
          <Col className="opacity" md={{ span: 4, offset: 4 }}> <Form>
            <h1 className='h1-user text-center'>USER LOGIN</h1>
            <br></br>
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
            <Link to='/loginemployer'> <p className="login-employer">Log in as an employer</p></Link>
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
  )
}
