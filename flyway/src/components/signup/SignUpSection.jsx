import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../login/LoginSection.css';
import ToastContainer from 'react-bootstrap/ToastContainer';
import Toast from 'react-bootstrap/Toast'
import Home from '../Home';

const SignUpSection = ()=>{

  const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const [message , setMessage] = useState('')
    const [show,setShow] = useState(true)
   /*  const [isSubmit,setIsSubmit] = useState(false) */

    const SIGNUP_API_URL = "http://localhost:8080/api/signup"

    const addInfo = (serverurl)=>{
      fetch(serverurl,{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
          'Accept':'application/json'
        },
        body:JSON.stringify({
          username:formData.username,
          email:formData.email,
          password:formData.password
        })
      })
        .then(response=>{
          if(response.ok) return response.json()
          else if(response.status=='404') return response.json()
          else throw Error(`Server Error ${response.status}`)
        })
        .then(data=>setMessage(data.message))
        .catch(err=>console.error(err))
    }

  

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("user",JSON.stringify(formData));
        navigate("/login")
        addInfo(SIGNUP_API_URL+"/add-signup");
        alert("data submitted!");
        setFormData({
          username:'',
          email:'',
          password:''
        })
        /* setIsSubmit(true) */
    };
      

    return (
      <>
      {/* {!isSubmit && */}
      <div className='blur-background'>
        
        <div className="container" style={{marginTop:'200px'}}>
        <form onSubmit={handleSubmit}>
          <div className="row justify-content-center ">
            <div className="col-md-4">
              <div className="card">

              <div className="card-header">
                  <h1>Sign Up</h1>
              </div>

            <div className="card-body">
              
                  <div className="mb-2">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input type="text" className="form-control" id="username" name="username" value={formData.username} onChange={(e)=>setFormData({...formData,username:e.target.value})} required />
                  </div>
                  <div className="mb-2">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={(e)=>setFormData({...formData,email:e.target.value})} required />
                  </div>
                  <div className="">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name="password" value={formData.password} onChange={(e)=>setFormData({...formData,password:e.target.value})} required />
                  </div>
                  <div className='d-inline float-end '>
                      <p>Already have an account? <Link style={{textDecoration:'none'}} to='/login'>Login</Link>    </p>
                  </div>

                  <div className="container mt-5 mb-2 " style={{marginLeft:'3px'}}>
                    <div className="row">
                      <div className="col text-center">
                        <button type="submit" className="btn btn-primary col text-center">
                          {/* <Link style={{textDecoration:'none',color:'white'}}to='/'> */}
                            Sign Up
                          {/* </Link> */}
                        </button>
                      </div>
                    </div>
                  </div>


              
            </div>  
            
         <div>
          
         
        </div> 
    </div>
    </div>
    </div>
    </form>
        
    </div>
      {/* /* {message &&
        <ToastContainer position="middle-center">
            <Toast show={show} onClose={()=>setShow(!show)}>
                <Toast.Header>
                    <strong>Info</strong>
                </Toast.Header>
                <Toast.Body>
                    {message
                    }
                </Toast.Body>
            </Toast>
                        </ToastContainer>} 
         */}
        
    </div>
   {/*  }
    { isSubmit &&
        
          <Home/>
          
        } */}
      </>
      
    

    );

}

export default SignUpSection;