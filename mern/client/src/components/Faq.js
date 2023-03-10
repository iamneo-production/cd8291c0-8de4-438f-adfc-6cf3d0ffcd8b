import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import imageOfGirl from "./FAQ1.png";
export default function Faq() {
  return (
    <div className="faq-bg">
      <Container>
        <Row>
          <Col sm={5}>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <img
              src={imageOfGirl}
              width="100%"
              className="justify-content-end text-end"
              id="girl-image"
            ></img>
          </Col>
          <Col className="accordion-class" sm={7}>
          <div className="space">
          

          <div className="my-second-container">
            <div className="accordion">
              <div className="accordion-item" id="question1">
                <a className="accordion-link" href="#question1">
                How do I create an account on the platform?

                  <i class="fas fa-plus"></i>
                  {/* <i class="fas fa-minus"></i> */}
                </a>
                <div className="answer">
                  <p>
                  To create an account, simply click on the "Sign Up" button on the homepage and fill out the registration form. You will be asked to provide basic information about yourself and your professional background.

                  </p>
                </div>
              </div>
              <div className="accordion-item" id="question2">
                <a className="accordion-link" href="#question2">
                Can I apply to jobs directly through the platform?

                  <i class="fas fa-plus"></i>
                  {/* <i class="fas fa-minus"></i> */}
                </a>
                <div className="answer">
                  <p>
                  Yes, you can apply to jobs directly through our platform. Simply click on the "Apply Now" button on the job listing and follow the steps to submit your application.

                  </p>
                </div>
              </div>
              <div className="accordion-item" id="question3">
                <a className="accordion-link" href="#question3">
                Is my personal information secure on the platform?

                  <i class="fas fa-plus"></i>
                  {/* <i class="fas fa-minus"></i> */}
                </a>
                <div className="answer">
                  <p>
                  Yes, we take data security very seriously. We use industry-standard security measures to protect your personal information and ensure that it is kept confidential.


                  </p>
                </div>
              </div>
              <div className="accordion-item" id="question4">
                <a className="accordion-link" href="#question4">
                How does the skillset matching tool work?

                  <i class="fas fa-plus"></i>
                  {/* <i class="fas fa-minus"></i> */}
                </a>
                <div className="answer">
                  <p>
                  Our skillset matching tool uses algorithms to match your skills and qualifications with relevant job postings on our platform. To use this tool, simply input your skills and experience into the search bar and we will display job listings that match your criteria.

                  </p>
                </div>
              </div>
              <div className="accordion-item" id="question5">
                <a className="accordion-link" href="#question5">
                How do I edit or update my profile information?

                  <i class="fas fa-plus"></i>
                  {/*  <i class="fas fa-minus"></i> */}
                </a>
                <div className="answer">
                  <p>
                  You can edit your profile information by clicking on the "Profile" button on your account dashboard. You can then update your personal information, work experience, education, and other details. It's important to keep your profile up-to-date to increase your chances of being hired for a job.
                  </p>
                </div>
              </div>
            </div>
            </div>
            </div>
          </Col>
        </Row>
      </Container>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}
