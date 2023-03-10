// server.js
const express = require('express');
const { get } = require('https');
//const mongoose = require('mongoose');
const Job = require('../models/job');
const app = express();


// Define a route with a path of "/jobs"

exports.searchJobs = async (req, res) => {
  const { searchQuery, company,jobRole,location, salary } = req.query;

  const filter = {};

  if (location) {
    filter.location = {$regex: location, $options: 'i'};
  }

  if (salary) {
    filter.salary = { $gte: salary };
  }

  if (jobRole) {
    filter.jobRole =  {$regex: jobRole, $options: 'i'};
  }

  if (company) {
    filter.company =  {$regex: company, $options: 'i'};
  }

  const query = {};

  if (searchQuery) {
    query.$text = { $search: searchQuery };
  }

  try {
    const results = await Job.find({ $and: [query, filter] });
    res.json(results);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred' });
  }
}

//module.exports = router;
// Start the server
