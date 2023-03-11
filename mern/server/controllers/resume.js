const express = require('express');
const bodyParser = require('body-parser');
const pdfParse = require('pdf-parse');
const app = express();
const router = express.Router();
 
const request = require('request');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
 
router.post('/resume', (req, res) => {
    const { resume } = req.params;
    console.log(resume);
  
    // Extract skills from the resume using pdf-parse
    const resumeBuffer = Buffer.alloc(resume.length, resume, 'base64');
    
    pdfParse(resumeBuffer).then(function (data) {
      const resumeText = data.text;
      const skillsRegex = /(?:^|\s)(?:#|)([A-Za-z0-9\-\.\_]+)(?:$|\s)/g;
      const skillsMatch = resumeText.match(skillsRegex);
      const skills = skillsMatch ? skillsMatch.map(skill => skill.trim()) : [];
  
      // Adzuna API endpoint and parameters
      const url = "https://api.adzuna.com/v1/api/jobs/gb/search/1";
      const app_id = "d1dc4df6"; // Replace with your Adzuna API app ID
      const app_key = "609a99d3a1a857706479397903dd79bc"; // Replace with your Adzuna API app key
      const results_per_page = 10; // Number of job recommendations to return
      const max_days_old = 30; // Maximum number of days for job posting to be considered
      const content_type = "application/json";
  
      // Call the Adzuna API to get job recommendations
      const params = { app_id, app_key, results_per_page, max_days_old, "content-type": content_type};
      request.get({ url, qs: params }, (error, response, body) => {
        if (error) {
          console.error(error);
          return res.status(500).send('Error fetching job recommendations');
        }
  
        // Extract the job recommendations from the API response
        const jobs = JSON.parse(body).results;
        const jobRecommendations = jobs.map(job => {
          return {
            title: job.title,
            company: job.company.display_name,
            location: job.location.display_name,
            salary: `${job.salary_min} - ${job.salary_max} ${job.salary_currency} per year`,
            link: job.redirect_url
          };
        });
  
        return res.send({ jobRecommendations });
      });
    });
  });
  module.exports = router;