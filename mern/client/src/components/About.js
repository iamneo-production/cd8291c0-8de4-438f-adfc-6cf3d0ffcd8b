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
          <Col sm={5}> <img
            src={girl2}
            width="100%"

            id="about-image"
          ></img></Col>
          <Col className="about-para" sm={7}><h1 className="text-center who-we-are">WHO WE ARE<span className="question">?</span></h1><p className="para-about">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p></Col>
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
