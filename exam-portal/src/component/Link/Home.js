import { useState } from 'react'
import './Home.css'
import { Link } from 'react-router-dom';

const Home = ()=>{

    const [home,setHome] = useState(false);
    
    const handleClick = ()=>{setHome(true)}
        const [Data, setData] = useState({
            name: '',
            email: '',
            password: ''
          });
        
          const handleChange = (e) => {
            const { name, value } = e.target;
            setData({ ...Data, [name]: value });
          };

          const handleSubmit = (e)=>{
            e.preventDefault();
          }

    return(
        <>
        <div className='body4'>
        {!home && 
        <div>
            <p className="div5">Let's Start The Quiz</p>
            <p className='p1'>Test Your skills and become a master.</p>
            <p className='p2'>We organize quizzes on various topics.</p>
            <p className='p3'>Sign up if you haven't already and get access to millions of quizzes on the topics of your interest.</p>
            <h6><b className='text-light my-3' style={{marginLeft:'650px'}}>Start Your Journey Here:</b></h6>
            <button className='btn btn-primary text-dark mt-2' style={{marginLeft:'680px'}} type="button" onClick={handleClick}><img src='https://cdn-icons-png.freepik.com/512/5654/5654864.png' style={{width:'50px',height:'50px'}}></img>Sign Up</button>
        </div>
        }


        {home &&
        <div>
            <div className='body1'>
                <form onSubmit={handleSubmit}>
                    <h1 className="font1">Sign Up</h1>
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input type="text" className="form-control mb-4 w-75 mx-auto text-center rounded-pill" id="name" name="name" value={Data.name} onChange={handleChange} required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" className="form-control mb-4 w-75 mx-auto text-center rounded-pill" id="email" name="email" value={Data.email} onChange={handleChange} required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Password:</label>
                            <input type="password" className="form-control mb-4 w-75 mx-auto text-center rounded-pill" id="message" name="password" value={Data.password} onChange={handleChange} required />
                        </div>

                        <div className='mb-4 mx-auto text-center rounded-pill'>
                            <p>Already have an account? <Link style={{textDecoration:'none'}} to='/admin'>Login</Link></p>
                        </div>

                        <div>
                            <button type="submit" className="btn btn-primary mb-3 w-25 mx-auto text-center rounded-pill">Sign Up</button>
                        </div>
                                    
                    </form>
                </div>
        </div>}
        </div>
        </>

    )
}
export default Home;