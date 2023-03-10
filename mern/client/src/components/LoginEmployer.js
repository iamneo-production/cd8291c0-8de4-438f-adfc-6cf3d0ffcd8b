import React from 'react'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
export default function LoginEmployer() {
  return (
    <div className='loginuser-bg'>
         <Container className='login-con'>
     
      <Row>
        <Col className="opacity" md={{ span: 4, offset: 4 }}> <Form>
          <h1 className='h1-user text-center'>EMPLOYER LOGIN</h1>
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
      <Link to='/loginuser' className="login-employer"> <p>Log in as a user</p></Link>
      <Link to="/postajob">
      <Button variant="primary" type="submit" className="user-submit">
        Submit
      </Button>
      </Link>
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

