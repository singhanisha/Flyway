import { useState } from "react";
import './Admin.css';
import { Link } from "react-router-dom";

const Admin = ()=>{

    const [admin,setAdmin] = useState([{
        login:'',
        password:''
    }]);

    const handleLoginChange = (e)=>{
        setAdmin({...admin,login:e.target.value})
    }

    const handlePasswordChange = (e)=>{
        setAdmin({...admin,password:e.target.value})
    }

    return(
        <>
       
        <div className="body">
            <div className="body3">
                <form> 
                    <div>
                        <div><h5 className="font">LOGIN</h5></div>
                        <div><p>Please enter your login Id and password</p></div>
                        <div><input className="form-control my-4 w-50 mx-auto text-center rounded-pill" type="text" onChange={handleLoginChange} placeholder="Login Id"></input></div>
                        <div><input className="form-control mb-4 w-50 mx-auto text-center rounded-pill" type="password" onChange={handlePasswordChange} placeholder="password"></input></div>
                        <div><button className="btn btn-outline-success mb-3 w-25 mx-auto text-center rounded-pill" type="button">
                            <Link to={'/dashboard'} style={{textDecoration:'none'}}>Login</Link></button></div>
                    </div>
                </form> 
            </div> 
        </div>    
        </>
        
    )
}
export default Admin;