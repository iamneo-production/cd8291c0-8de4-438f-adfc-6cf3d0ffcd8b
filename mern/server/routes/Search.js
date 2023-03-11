const express = require('express');
const router = express.Router();
const { searchJobs } = require('../controllers/search');
const {resume}=require('../controllers/resume')

router.get('/search', searchJobs);



module.exports = router;