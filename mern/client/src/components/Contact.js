import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import phone from './phone.png'
import email from './email.png'
import address from './location-pin.png'
export default function Contact() {
  return (<div className="contact-bg">
    <Container>
      <br></br>
          <br></br>
          <br></br>
          <br></br>
          
        <Row>
          
          <Col sm><div className="address">
            
          <img
                  src={address}
                  width="20%"
                  className="justify-content-end text-end"
                  id="phone-image"
                ></img>
            <h2>ADDRESS</h2>
            <p>GalCareer Main Branch</p>
            <p>3567, Jordan Road</p>
            <p>Chennai, Tamil Nadu</p>
            <br></br>
            <p>GalCareer Divison Office</p>
            <p>508, Vaishali Nagar</p>
            <p>Jaipur, Rajasthan</p>
            <br></br>
            <p>GalCareer Central Office</p>
            <p>3567, Potheri Road</p>
            <p>Mumbai, Maharashtra</p>
          </div></Col>
          <Col sm><div className="phone">
          <img
                  src={phone}
                  width="20%"
                  className="justify-content-end text-end"
                  id="phone-image"
                ></img>
            

            <h2>PHONE</h2>
            <p>GalCareer Main Branch</p>
            <p>9853765489: phone</p>
            <p>200 382 8765: landline</p>
            <br></br>
            <p>GalCareer Divison Office</p>
            <p>002 888 9898</p>
            <p>(Then press 2 for emergency calls)</p>
            <br></br>
            <p>GalCareer Central Office</p>
            <p>9863798765: phone</p>
            <p>012 345 8888: landline</p>
          </div></Col>
          <Col sm><div className="email">
          <img
                  src={email}
                  width="20%"
                  className="justify-content-end text-end"
                  id="phone-image"
           
                ></img>
           

            <h2>EMAIL</h2>
            <p>Request for Proposal</p>
            <p>info@galcareer.com</p>
            <br></br>
            <p>All Bid Opportunities</p>
            <p>estimating@galcareer.com</p>
            <br></br>
            <p>Electrical Service Call</p>
            <p>9863798765: phone</p>
            <p>012 345 8888: landline</p>
            <br></br>
            <p>Employment Opportunities</p>
            <p>careers@galcareercontracting.com</p>
          </div></Col>
        </Row>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </Container>
      </div>
  )
}
