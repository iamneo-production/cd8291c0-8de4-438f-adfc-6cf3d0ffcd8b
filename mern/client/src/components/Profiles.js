import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import pro1 from './profile1.jpg'
import pro2 from './profile2.jpg'
import pro3 from './profile3.jpg'
import pro4 from './profile4.jpg'
import pro5 from './profile5.jpg'
import pro6 from './profile6.jpg'
export default function Profiles() {
  return (
    <div className="profile-bg">
      <br></br>
      <br></br>
      <h2 className="text-center heading-profile">SUCCESSFUL FEMALE LEADERS IN TECH</h2>
      <br></br>
      
      <Container>
      <Row>
        <Col sm> <Card style={{ width: '18rem' }} className="card">
      <Card.Img variant="dark" src={pro1} height="300px"/>
      <Card.Body id="card1">
        <Card.Title>Ada Lovelace: The World's First Computer Programmer</Card.Title>
        <Card.Text>
        Ada was the daughter of romantic poet, Lord Byron, and his wife, Anna Isabella-Byron. Her mathematical talent shone through in her early life, and her skills and interest in machines lead to a working relationship with Charles Babbage.
        </Card.Text>
      <br></br>
       <a href="https://en.wikipedia.org/wiki/Lady_Byron" target={"_blank"}> <Button variant="dark">LEARN MORE</Button></a>
      </Card.Body>
    </Card></Col>
        <Col sm> <Card style={{ width: '18rem' }} className="card">
      <Card.Img variant="dark" src={pro2} height="300px"/>
      <Card.Body id="card1">
        <Card.Title>Grace Hopper: The Esteemed Computer Scientist</Card.Title>
        <Card.Text>
        Rear Admiral Grace M. Hopper was an esteemed computer scientist and one of the first computer programmers to work on the Harvard Mark I. Her work led to the development of COBOL, an early programming language we is still used to this day.
        </Card.Text>
      <br></br>
      <a href="https://en.wikipedia.org/wiki/Grace_Hopper" target={"_blank"}> <Button variant="dark">LEARN MORE</Button></a>
      </Card.Body>
    </Card></Col>
        <Col sm> <Card style={{ width: '18rem' }} className="card">
      <Card.Img variant="top" src={pro3} height="300px"/>
      <Card.Body id="card1">
      <Card.Title>Adele Goldberg: The Inspiration For GUI</Card.Title>
        <Card.Text>
        Adele was instrumental in the development of the programming language Smalltalk-80, which inspired the very first Apple computer. Adele is said to have referred to the decision to show Steve Jobs Smalltalk as a way to “give away the kitchen sink”.
        </Card.Text>
      <br></br>
        
      <a href="https://en.wikipedia.org/wiki/Adele_Goldberg_(computer_scientist)" target={"_blank"}> <Button variant="dark">LEARN MORE</Button></a>
      </Card.Body>
    </Card></Col>
      </Row>
    </Container>
    <br></br>
    <br></br>
    <br></br>
    <Container>
      <Row>
        <Col sm> <Card style={{ width: '18rem' }} className="card">
      <Card.Img variant="top" src={pro4} height="300px"/>
      <Card.Body id="card2">
        <Card.Title>Annie Easley: The NASA Rocket Scientist</Card.Title>
        <Card.Text>
        Annie was a NASA rocket scientist, and a trailblazer for gender and racial diversity in STEM. When hired, she was one of only four black employees at the Lab.
        </Card.Text>
      <br></br>
      <a href="https://en.wikipedia.org/wiki/Annie_Easley" target={"_blank"}> <Button variant="dark">LEARN MORE</Button></a>
      </Card.Body>
    </Card></Col>
        <Col sm> <Card style={{ width: '18rem' }} className="card">
      <Card.Img variant="top" src={pro5} height="300px"/>
      <Card.Body id="card2">
        <Card.Title>Mary Wilkes: The First Home Computer User</Card.Title>
        <Card.Text>
        Mary is a former computer programmer and logic designer. She is best known for designing the software for the LINC, one of the earliest systems of an interactive personal computer.
        </Card.Text>
      <br></br>
      <a href="https://en.wikipedia.org/wiki/Mary_Allen_Wilkes" target={"_blank"}> <Button variant="dark">LEARN MORE</Button></a>
      </Card.Body>
    </Card></Col>
        <Col sm> <Card style={{ width: '18rem' }} className="card">
      <Card.Img variant="top" src={pro6} height="300px"/>
      <Card.Body id="card2">
      <Card.Title>Hedy Lamarr: The Inventor of WiFi</Card.Title>
        <Card.Text>
        Hedy was a self-taught inventor and film actress, who was awarded a patent in 1942 for her "secret communication system", designed with the help of the composer George Antheil. 
        </Card.Text>
      <br></br>
      <a href="https://en.wikipedia.org/wiki/Hedy_Lamarr" target={"_blank"}> <Button variant="dark">LEARN MORE</Button></a>
      </Card.Body>
    </Card></Col>
      </Row>
      <br></br>
      <br></br>
      <br></br>
    
    </Container>
    
    </div>
  )
}
