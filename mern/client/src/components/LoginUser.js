import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Link, BrowserRouter} from "react-router-dom"
import axios from "axios";

export default function LoginUser() {
  const [data, setData] = useState({ email:"", password:"" });

  function handleChange(e) {
    setData((data) => ({ ...data, [e.target.name]: e.target.value }));
}
const handleLogin = async (email, password) => {
  try {
    // Send a POST request to the server to authenticate the user
    const response = await axios.post('/api/auth/login', {
      email: email,
      password: password,
    });

    // If authentication is successful, redirect to the dashboard page
   // history.push('/dashboard');
  } catch (error) {
    console.log(error);
  }
};
  return (
    <div>
      <Form >
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
