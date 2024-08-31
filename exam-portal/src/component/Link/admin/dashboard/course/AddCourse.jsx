import { useState } from "react";
import { BsTrashFill } from "react-icons/bs";
import { Link, Outlet } from "react-router-dom";

const AddCourse = ()=>{

    const [add,setAdd] = useState([{coursename:'',coursequestion:'',coursemark:''}]);

    const [ message,setMessage] = useState('')
    const [ show,setShow] = useState(true)

    const ADDCOURSE_API_URL = "http://localhost:8080/api/addcourse"

      const addcourse = (serverUrl)=>{
        fetch(serverUrl,{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                'Accept':'application/json'
            },
            body:JSON.stringify({
                coursename:add.coursename,
                coursequestion:add.coursequestion,
                coursemark:add.coursemark
            })
        })
            .then(response=>{
                if(response.ok) return response.json()
                else if(response.status=="404") return response.json()
                else throw Error(`Server Error ${response.status}`)
            })
            .then(data=>setMessage(data.message))
            .catch(err=>console.error(err))
      }

    const handleCourseChange = (e)=>{
        setAdd({...add,coursename:e.target.value})
    }

    const handleQuestionChange = (e)=>{
        setAdd({...add,coursequestion:e.target.value})
    }

    const handleMarkChange = (e)=>{
        setAdd({...add,coursemark:e.target.value})
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        addcourse(ADDCOURSE_API_URL+"/add-course");
        alert("Courses are added!");
    }

    return(
        <>
            <div className="container02">
            <form onSubmit={handleSubmit}>
                <h1 style={{marginLeft:'190px'}}>ADD COUSRE</h1>
                
                <label className="form-label"><b>Course Name</b></label>
                <input className="form-control" type="text" onChange={handleCourseChange} placeholder="Java"></input>
                
                <label className="form-label"><b>Total Question</b></label>
                <input className="form-control" type="number" onChange={handleQuestionChange} placeholder="10"></input>
                
                <label className="form-label"><b>Total Marks</b></label>
                <input className="form-control" type="number" onChange={handleMarkChange} placeholder="50"></input>
                
                <button className="btn03 btn btn-primary"  type="submit">ADD</button>
                
            </form>
            
        </div>
        <Outlet/>
        </>
    )
}
export default AddCourse;

