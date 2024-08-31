import React, { useState } from 'react';
import '../login/LoginSection.css'
import { useNavigate } from 'react-router-dom';


const AdminSection = ()=>{

    const navigate = useNavigate();

    const [formdata,setFormdata] = useState({username:'',password:''})

    const handleSubmit = (e)=>{
        if(formdata.username === "admin" && formdata.password === "nimda")
        {
            e.preventDefault();
            navigate("/dashboard")
        }
        else{
            e.preventDefault();
            alert("Invalid Admin");
            setFormdata({
                username:'',
                password:''
            })
        }
        
    }

    return(
        <div className="blur-background">
            <div className="container" style={{marginTop:'200px'}}>
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-header">
                                <h1>Admin Login</h1>
                            </div>
                                <div className="card-body">
                                    <form onSubmit={handleSubmit}>
                                        <div className="form-group mb-2">
                                            <label htmlFor='un'>Username</label>
                                            <input id='un' type='text' className='form-control' value={formdata.username} onChange={(e)=>setFormdata({...formdata,username:e.target.value})} required/>
                                        </div>
                                        <div className="form-group ">
                                            <label htmlFor='pa'>Password</label>
                                            <input id='pa' type='password' className='form-control' value={formdata.password} onChange={(e)=>setFormdata({...formdata,password:e.target.value})} required/>
                                        </div>
                                        <div className="container  mb-2 "style={{marginLeft:'3px'}}>
                                            <div className="row">
                                                <div className="col text-center">
                                                    <button type='submit' className="btn btn-primary btn-block mt-3">
                                                        {/* <Link style={{textDecoration:'none',color:'white'}}to='/airline'> */}
                                                            Login
                                                       {/*  </Link> */}
                                                    </button>
                                                </div>
                                            </div>
                                        </div> 
                                    </form>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        
    )

}

export default AdminSection;