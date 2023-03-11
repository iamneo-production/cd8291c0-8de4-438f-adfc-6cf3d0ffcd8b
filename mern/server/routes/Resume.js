const express = require('express');
const router = express.Router();
const {resume}=require('../controllers/resume')

router.get('/resume', resume);


module.exports = router;