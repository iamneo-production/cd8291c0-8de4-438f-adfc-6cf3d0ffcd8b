import React from 'react'
export default function PostJob() {
  return (
    <div className='postjob-bg'>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
    <div class="containers">
    <div class="title">POST A JOB</div>
    <form action="#">
        <div class="user_details">
            <div class="input_pox">
                <span class="datails">Job Role</span>
                <input type="text" placeholder="enter your job role" required/>
            </div>
            <div class="input_pox">
                <span class="datails">Company Name</span>
                <input type="text" placeholder="enter your company name" required/>
            </div>
            <div class="input_pox">
                <span class="datails">Salary</span>
                <input type="text" placeholder="enter salary offered" required/>
            </div>
            
            <div class="input_pox">
                <span class="datails">Location</span>
                <input type="text" placeholder="enter preferred location" required/>
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
