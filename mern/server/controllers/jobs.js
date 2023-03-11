const express = require('express');
const router = express.Router();
const Job = require('../models/job');

router.get('/getjobs', async (req, res) => {
    console.log(req.body)
    try {
      const jobs = await Job.find();
      res.json(jobs);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });


  router.post('/postjob', async (req, res) => {
    const job = new Job({
      company: req.body.company,
      location: req.body.location,
      salary: req.body.salary,
      jobRole: req.body.jobRole,
    });
  
    try {
      const newJob = await job.save();
      res.status(201).json(newJob);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
  module.exports = router;
