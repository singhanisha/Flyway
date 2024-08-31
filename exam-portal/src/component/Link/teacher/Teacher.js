import { Link, Outlet } from 'react-router-dom';
import './teacher.css'
import { useState } from 'react';
import TeacherSignup from './TeacherSignup';

const Teacher = ()=>{

    return(
        <>
        <div className='teacher'>
               <div>
                    <h1 className='h1'>Hello, Teacher</h1>
                    <h5 className='h5'>Welcome to Online Quiz</h5>
                        <p style={{color:'white'}}>----------------------------------------------------------------------</p>
                    <h6 className='h6'><b>You can access various features after Login</b></h6>
                    <button className='btn btn-primary' style={{marginRight:'10px'}}><Link to={'/teachersignup'}  style={{textDecoration:'none',color:'white'}}>Create Your Account</Link></button>
                    <button className='btn btn-primary'><Link to={'/login'}  style={{textDecoration:'none',color:'white'}}>Login</Link></button>
                    <Outlet/>
                </div>
        </div>
        
        </>
    )
}
export default Teacher;