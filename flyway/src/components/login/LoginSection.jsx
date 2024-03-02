import React from 'react';
import './LoginSection.css'
import {Link} from 'react-router-dom'

const LoginSection = ()=>{

    return (

        <div className='blur-background'>
          <div className="container" style={{marginTop:'200px'}}>
            <div className="row justify-content-center">
              <div className="col-md-4">
                <div className="card ">

                  <div className="card-header">
                    <h1>Welcome</h1>
                  </div>

                  <div className="card-body">

                    <form>
                      <div className="form-group mb-2">
                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control" id="username" required/>
                      </div>

                      <div className="form-group ">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="password" required />
                      </div>
                      
                      <div className='d-inline float-end'>
                         <p>Don't have an account? <Link style={{textDecoration:'none'}} to='/signup'>SignUp</Link> </p>
                    
                        
                      </div>

                      <div className="container mt-5 mb-2 ">
                        <div className="row">
                          <div className="col text-center">
                            <button type='submit' className="btn btn-primary btn-block mt-3">
                              <Link style={{textDecoration:'none',color:'white'}}to='/'>
                                Login
                              </Link>
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

    );

}

export default LoginSection;