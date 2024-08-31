import { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import './Course.css'



const Course = ()=>{

    return(
        <div className="container01">
            <div style={{display:'flex'}}>
                <h3 style={{color:"blue",margin:'10px'}}>This Component is for Adding and Viewing Courses</h3>
                <button style={{marginLeft:'520px',marginTop:'10px'}} className="btn btn-danger"><Link to={'/logout'} style={{textDecoration:'none',color:'white'}}>Logout</Link></button>
            </div>
            <button type="button" className="btn01" style={{marginLeft:'540px'}}><Link to={'addCourse'} style={{textDecoration:'none',color:'whitesmoke'}}><b>Add Course</b></Link></button>
            <button type="button" className="btn02"><Link to={'viewCourse'}  style={{textDecoration:'none',color:'whitesmoke'}}><b>View Course</b></Link></button>
        <Outlet/>
        </div>
    )
}
export default Course;