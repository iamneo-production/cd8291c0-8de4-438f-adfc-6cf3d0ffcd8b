import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button'
function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');
  const [salary, setSalary] = useState('');
  const [jobRole, setJobRole] = useState('');
  const [company, setCompany] = useState('');
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get('https://8080-bfadcedcbbcaedacbacdcbdacdccdabcdebacdacedf.project.examly.io/api/job/search', {
        params: {
          searchQuery,
          location,
          salary,
          jobRole,
          company,
        },
      });
      setJobs(data);
    }
    fetchData();
  }, [searchQuery, location, salary, jobRole, company]);

  function handleSearchQueryChange(event) {
    setSearchQuery(event.target.value);
  }

  function handleLocationChange(event) {
    setLocation(event.target.value);
  }

  function handleSalaryChange(event) {
    setSalary(event.target.value);
  }

  function handleJobRoleChange(event) {
    setJobRole(event.target.value);
  }

  function handleCompanyChange(event) {
    setCompany(event.target.value);
  }

  return (
    <div className="search-bg">
      <h1 className="text-center" id="search-jobs">Search Jobs</h1>
     
     
      
      
     
      <Container>
      <Row>
        <Col className="input-field" sm> <input
        className="input-job"
        type="text"
        placeholder="Company"
        value={company}
        onChange={handleCompanyChange}
      /></Col>
        <Col className="input-field" sm> <input
        className="input-job"
        type="text"
        placeholder="Location"
        value={location}
        onChange={handleLocationChange}
      /></Col>
        
      <Col className="input-field" sm><input
      className="input-job"
        type="text"
        placeholder="Minimum Salary"
        value={salary}
        onChange={handleSalaryChange}
      /></Col>
        <Col className="input-field" sm><input
        className="input-job"
        type="text"
        placeholder="Job Role"
        value={jobRole}
        onChange={handleJobRoleChange}
      /></Col>
        <Col sm></Col>
      </Row>
      
    </Container>
    <div>
      <br></br>
      
      <Container className='job-con'>
        {jobs.map(job => (
          <Stack>
          <Row className="job-row" key={job._id}>
            
            <Col className="com" sm>{job.company}</Col>
            <Col className="com" sm>{job.location}</Col>
            <Col className="com" sm>{job.salary}</Col>
            <Col className="com" sm>{job.jobRole}</Col>
            <Col className="button-job"><Button variant="info">APPLY</Button></Col>
            <hr className="white"></hr>
          </Row>
          </Stack>
        ))}
      </Container>

      </div>
      
      <br></br>
      
      
    </div>
  );
}

export default App;
