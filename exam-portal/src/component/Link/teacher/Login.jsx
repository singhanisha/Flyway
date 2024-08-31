import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import './login.css'

const Login = ()=>{

    const [login,setLogin] = useState([{
        name:'',
        email:''
    }])

    const [show,setShow] = useState(false)

    const handleSubmit = (e)=>{
        e.preventDefault();
        setShow(true);
    }

    return(
        <>
        {!show &&
        <div className="login">
            <form onSubmit={handleSubmit}>

                <h1 className="heading1">Teacher Login</h1>
                
                <div className="name">
                    <label className="form-input mb-2"><b>Name</b></label>
                    <input className="form-control mb-3" type="text" value={login.name} onChange={(e)=>setLogin({...login,name:e.target.value})}/>
                </div>
                
                
                <div className="email">
                    <label className="from-input mb-2"><b>Email</b></label>
                    <input className="form-control mb-3" type="email" value={login.email} onChange={(e)=>setLogin({...login,email:e.target.value})}/>
                </div>  

                <button type="submit" className="btn btn-primary" style={{textDecoration:'none',color:'white', marginLeft:'220px'}}>Login</button>
            </form>
        </div>
        }
        {
            show && 
            <div className="login1">
                <h1>Hello</h1>
                <div className="p">
                    <p>Your Account is not approved till now</p>
                    <p>Our Team is checking your profile</p>
                    <p>Soon Your Account Will Be Approved</p>
                </div>
                <div>
                    <p>----------------------------------------------------------------------</p>
                </div>
                <h6><b>Check Later</b></h6>
                <button type="submit" className="btn btn-primary"><Link to={'/'} style={{textDecoration:'none',color:'white'}}>Logout For Now</Link></button>
            </div>
        }
        </>
    )
}
export default Login;