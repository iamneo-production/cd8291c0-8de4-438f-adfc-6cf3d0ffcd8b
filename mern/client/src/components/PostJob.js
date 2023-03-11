import {useState,React} from 'react'
import axios from "axios"
import {toast} from "react-toastify"
function PostJob() {

    const [data, setData] = useState({ company: "", location: "", salary:"", jobRole:"" });

    function handleChange(e) {
      setData((data) => ({ ...data, [e.target.name]: e.target.value }));
  }
    function handleSubmit(e) {
      e.preventDefault();
  axios
      .post("https://8080-bfadcedcbbcaedacbacdcbdacdccdabcdebacdacedf.project.examly.io/api/jobs/postjob", {
        company: data.company,
        location: data.location,
        salary: data.salary,
        jobRole: data.jobRole,
    })
          .then((res) => {
              setData({ company: "", location: "", salary:"", jobRole:""});
              console.log(res.data);
              toast.success("Job posted")
          })
          .catch((err) => {
              console.log("Error couldn't create TODO");
              console.log(err);
          });
  }



  return (
    <div className='postjob-bg'>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
    <div class="containers">
    <div class="title">POST A JOB</div>
    <form action="#" onSubmit={handleSubmit}>
        <div class="user_details">
            <div class="input_pox">
                <span class="datails">Job Role</span>
                <input name="jobRole" value={data.jobRole} onChange={handleChange} type="text" placeholder="enter your job role" required/>
            </div>
            <div class="input_pox">
                <span class="datails">Company Name</span>
                <input  name="company" value={data.company} onChange={handleChange}type="text" placeholder="enter your company name" required/>
            </div>
            <div class="input_pox">
                <span class="datails">Salary</span>
                <input  name="salary" value={data.salary} onChange={handleChange}type="text" placeholder="enter salary offered" required/>
            </div>
            
            <div class="input_pox">
                <span class="datails">Location</span>
                <input name="location" value={data.location} onChange={handleChange}type="text" placeholder="enter preferred location" required/>
            </div>
            
        </div>
        
        <div class="button">
            <input type="submit" value="POST
            "/>
        </div>
        </form>    
       
       
</div>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>

</div>
  )
}

export default PostJob;
