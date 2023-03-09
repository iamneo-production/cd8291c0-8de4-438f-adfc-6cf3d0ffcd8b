import { React, useState } from 'react'
import imageOfGirl from "./2021flat_231.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
import Typewriter from "typewriter-effect";
import ScrollTrigger from 'react-scroll-trigger'
import CountUp from 'react-countup'
export default function Home() {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <div className="home">
      <div id="home">
        <Container className="wave">
          <Row>
            <Col sm={6} className="monisha">
              <h2 className="dream">We find the <span className="word"> perfect</span> job for you</h2>

              <Typewriter
                options={{
                  loop: true,
                }}
                onInit={(typewriter) => {
                  typewriter

                    .typeString("Work From Home")

                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("Remote Jobs")

                    .start();
                }}
              /><div className="small-statement">
                <p>Fill your job in hours, not weeks. Search for free.</p>
              </div><br></br>
              <Col><div class="search-local">
                <div class="icon">
                  <ion-icon name="location-outline"></ion-icon>
                </div>

                <input type="text" placeholder="All location" />
                <button>
                  <a href="#">Search</a>
                  <ion-icon name="search-outline" class="search-icon"></ion-icon>
                </button>
              </div>
                <p className="popular">Popular Searches:
                  Data Analytics
                  UX research</p>
                <br></br>
                <ScrollTrigger><Row>
                  <Col>

                    <h1><CountUp start={0} end={100} duration={2} delay={0} />K+</h1>

                    <p className='job-submitted'>Jobs Submitted</p></Col>
                  <Col>

                    <h1><CountUp start={0} end={30} duration={2} delay={0} />K+</h1>

                    <p className='job-submitted text-left'>Monthly Users</p></Col>
                  </Row> </ScrollTrigger>
              </Col>
            </Col>
            <Col sm={6}>
              <div className="centering-girl">
                <img
                  src={imageOfGirl}
                  width="100%"
                  className="justify-content-end text-end"
                  id="girl-image"
                ></img></div>
            </Col>
          </Row>
          <br></br>
          <br></br>
          <br></br>
        </Container>
      </div>
    </div>
  )
}
