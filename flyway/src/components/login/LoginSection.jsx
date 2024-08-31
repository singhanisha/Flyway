import React, { useState } from 'react';
import './LoginSection.css'
import {Link, useNavigate} from 'react-router-dom'
import Home from '../Home';

const LoginSection = ()=>{

  const navigate = useNavigate();

  const [login,setLogin] = useState({
    username:'',
    password:''
  })

  const [message,setMessage] = useState('')
  const [show,setShow] = useState(true)
 /*  const [isSubmit,setIsSubmit] = useState(false) */

    const LOGIN_API_URL = "http://localhost:8080/api/logins"

    const loginInfo = (serverurl)=>{
      fetch(serverurl,{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
          'Accept':'application/json'
        },
        body:JSON.stringify({
          username:login.username,
          password:login.password
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
      const loggeduser = JSON.parse(localStorage.getItem("user"));
      if(login.username === loggeduser.username && login.password === loggeduser.password)
      {
        localStorage.setItem("loggedin",true);
        navigate("/")
      }
      else{
        alert("Worng username and password!")
      }
      loginInfo(LOGIN_API_URL+"/add-login");
      /* alert("data submitted!");
      setLogin({
        username:'',
        password:''
      }) */
      /* setIsSubmit(true) */
  };

    return (

      <>
      {/* {
        !isSubmit && */}
      
        <div className='blur-background'>
          <div className="container" style={{marginTop:'200px'}}>
            <form onSubmit={handleSubmit}>  
              <div className="row justify-content-center">
                <div className="col-md-4">
                  <div className="card ">

                    <div className="card-header">
                      <h1>Welcome</h1>
                    </div>

                    <div className="card-body">

                        <div className="form-group mb-2">
                          <label htmlFor="username">Username</label>
                          <input type="text" className="form-control" id="username" name="username" value={login.username} onChange={(e)=>setLogin({...login,username:e.target.value})} required/>
                        </div>

                        <div className="form-group ">
                          <label htmlFor="password">Password</label>
                          <input type="password" className="form-control" id="password" name="password" value={login.password} onChange={(e)=>setLogin({...login,password:e.target.value})} required />
                        </div>
                        
                        <div className='d-inline float-end'>
                          <p>Don't have an account? <Link style={{textDecoration:'none'}} to='/signup'>SignUp</Link> </p>
                      
                          
                        </div>

                        <div className="container mt-5 mb-2" style={{marginLeft:'3px'}}>
                          <div className="row">
                            <div className="col text-center">
                              <button type='submit' className="btn btn-primary btn-block mt-3">
                                {/* <Link style={{textDecoration:'none',color:'white'}}to='/'> */}
                                  Login
                                {/* </Link> */}
                              </button>
                            </div>
                          </div>
                        </div>   

                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
   
        </div>
      {/* }
      {
        isSubmit &&
        <Home/>
      } */}
      </>

        

    );

}

export default LoginSection;