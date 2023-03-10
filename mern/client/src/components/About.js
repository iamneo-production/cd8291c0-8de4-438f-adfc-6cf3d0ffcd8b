import React from 'react'
import girl2 from './girl2.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function About() {
  return (
    <div className="about-bg">
      <Container>
        <Row>
          
          <Col sm={5}><br></br><br></br> <img
            src={girl2}
            width="100%"

            id="about-image"
          ></img></Col>
          <Col className="about-para" sm={7}><h1 className="text-center who-we-are">WHO WE ARE<span className="question">?</span></h1><p className="para-about">Our career platform is dedicated to providing women with a comprehensive and empowering job search experience. We recognize that women face unique challenges in the job market, so our platform is designed to address those challenges head-on. We offer a range of features to make the job search process as seamless as possible, including a skillset matching tool, job search filters, and profiles of successful women in technology. Our goal is to connect talented women with employers who value diversity and inclusivity, and to support them in achieving their career aspirations. Whether you're a recent graduate or an experienced professional, our platform offers a wealth of resources and opportunities to help you succeed in your chosen field.</p></Col>
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
