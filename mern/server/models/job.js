// job.model.js
const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  
   company: {
    type: String,
    required: true,
    text:'index',
    
  },
  location: {
    type: String,
    required: true,
    text:'index',
  },
  salary: {
    type: Number,
    required: true,
   
  },
  jobRole: {
    type: String,
    required: true,
    text:'index',
  },
});



jobSchema.index({ jobRole: 'text', company: 'text',location: 'text',salary: 'text' });
const Job = mongoose.model('Job', jobSchema);

module.exports = Job;