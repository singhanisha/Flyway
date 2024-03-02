import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../login/LoginSection.css'

const SignUpSection = ()=>{

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };

    const handleSubmit = (e) => {
        e.preventDefault();
       
        console.log(formData);
    };
      

    return (
      <div className='blur-background'>
        <div className="container" style={{marginTop:'200px'}}>
          <div className="row justify-content-center ">
            <div className="col-md-4">
              <div className="card">

              <div className="card-header">
                  <h1>Sign Up</h1>
              </div>

            <div className="card-body">
              <form onSubmit={handleSubmit}>
                  <div className="mb-2">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input type="text" className="form-control" id="username" name="username" value={formData.username} onChange={handleChange} required />
                  </div>
                  <div className="mb-2">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
                  </div>
                  <div className="">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name="password" value={formData.password} onChange={handleChange} required />
                  </div>
                  <div className='d-inline float-end '>
                      <p>Already have an account? <Link style={{textDecoration:'none'}} to='/login'>Login</Link>    </p>
                  </div>

                  <div className="container mt-5 mb-2 ">
                    <div className="row">
                      <div className="col text-center">
                        <button type="submit" className="btn btn-primary col text-center">
                          <Link style={{textDecoration:'none',color:'white'}}to='/'>
                            Sign Up
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

export default SignUpSection;