import React, { useState } from "react";
import axios from "axios";
import { Container, Form, FormGroup, Label, Input, Button } from "reactstrap";

function Rec() {

  const [resume, setResume] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
   
    formData.append("resume", resume);

    // Call the backend API to parse the resume and get the information
    const parsedData = await axios.post(
      "/api/resume",
      formData
    );
    const {  location } = parsedData.data;

    // Call the Adzuna API to get job recommendations
    const resultsPerPage = 10;
    const maxDaysOld = 30;
    const adzunaAPIUrl = `https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=your_app_id&app_key=your_app_key&results_per_page=${resultsPerPage}&max_days_old=${maxDaysOld}&content-type=application/json`;
    const adzunaResponse = await axios.get(adzunaAPIUrl);
    const adzunaJobs = adzunaResponse.data.results;
    setJobs(adzunaJobs);
    setLoading(false);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="resume">Resume:</Label>
          <Input
            type="file"
            id="resume"
            onChange={(e) => setResume(e.target.files[0])}
          />
        </FormGroup>
        <Button color="primary" type="submit" disabled={loading}>
          {loading ? "Loading..." : "Submit"}
        </Button>
      </Form>
      <div>
        {jobs.map((job) => (
          <div key={job.id}>
            <h3>{job.title}</h3>
            <p>{job.company.display_name}</p>
            <p>{job.location.display_name}</p>
            <p>
              Salary: {job.salary_min} - {job.salary_max} 
              {job.salary_currency} per year
            </p>
            <a href={job.redirect_url} target="_blank" rel="noreferrer">
              View job details
            </a>
          </div>
        ))}
      </div>
      </Container>
   
  
  );
}

 


export default Rec;