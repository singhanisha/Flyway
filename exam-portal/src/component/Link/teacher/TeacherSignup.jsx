import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import '../Home.css'
import Login from "./Login";

const TeacherSignup = ()=>{

    const [ teacher, setTeacher] = useState([{
        name:'',
        mobileno:'',
        emailid:'',
        address:''
    }]);

    const [isShow,setIsShow] = useState(false)

    const [message,setMessage] = useState('')
    const [show ,setShow] = useState(true)

    const TEACHER_API_URL = "http://localhost:8080/api/teacher"

    const addTeacher = (serverUrl)=>{
        fetch(serverUrl,{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                'Accept':'application/json'
            },
            body:JSON.stringify({
                name:teacher.name,
                mobileno:teacher.mobileno,
                emailid:teacher.emailid,
                address:teacher.address
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
        addTeacher(TEACHER_API_URL+"/add-teacher");
        alert("You SignUp successfully! Please wait for the appruval.Thank You")
        setTeacher({
            name:'',
            mobileno:'',
            emailid:'',
            address:''
        })
        setIsShow(true)
    }

    return(
        <>
        <div className="body1">
            {!isShow &&
            <form onSubmit={handleSubmit}>

                <h1>Teacher SignUp</h1>

                <label className="form-group">Name</label>
                <input className="form-control mb-3 w-75 mx-auto text-center rounded-pill" type="text" value={teacher.name} onChange={(e)=>setTeacher({...teacher,name:e.target.value})}/>

                <label className="form-group">Mobile No.</label>
                <input className="form-control mb-3 w-75 mx-auto text-center rounded-pill" type="tel"  pattern="[0-9]{10}" value={teacher.mobileno} maxLength={10} onChange={(e)=>setTeacher({...teacher,mobileno:e.target.value})}/>

                <label className="form-group">Email Id</label>
                <input className="form-control mb-3 w-75 mx-auto text-center rounded-pill" type="email" value={teacher.emailid} onChange={(e)=>setTeacher({...teacher,emailid:e.target.value})}/>

                <label className="form-group">Address</label>
                <input className="form-control mb-3 w-75 mx-auto text-center rounded-pill" type="text" value={teacher.address} onChange={(e)=>setTeacher({...teacher,address:e.target.value})}/>

                <div>
                    <button type="submit" className="btn btn-primary mb-3 w-25 mx-auto text-center rounded-pill">Sign Up</button>
                </div>
                <Outlet/>
            </form>
            }
            
        </div>
        {
            isShow && 
            <Login/>
        }
        </>
    )

}
export default TeacherSignup;