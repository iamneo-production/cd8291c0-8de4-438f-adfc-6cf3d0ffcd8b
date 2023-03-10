import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
    <div>
      <h1>Search Jobs</h1>
      <input
        type="text"
        placeholder="Search query"
        value={searchQuery}
        onChange={handleSearchQueryChange}
      />
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={handleLocationChange}
      />
      <input
        type="number"
        placeholder="Minimum Salary"
        value={salary}
        onChange={handleSalaryChange}
      />
      <input
        type="text"
        placeholder="Job Role"
        value={jobRole}
        onChange={handleJobRoleChange}
      />
      <input
        type="text"
        placeholder="Company"
        value={company}
        onChange={handleCompanyChange}
      />
      <ul>
        {jobs.map(job => (
          <li key={job._id}>
            
            <p>{job.company}</p>
            <p>{job.location}</p>
            <p>{job.salary}</p>
            <p>{job.jobRole}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
