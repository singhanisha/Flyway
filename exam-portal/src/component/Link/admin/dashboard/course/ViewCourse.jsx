import { useEffect, useState } from "react";
import {Outlet, useNavigate} from 'react-router-dom';
import ToastContainer from 'react-bootstrap/ToastContainer';
import Toast from 'react-bootstrap/Toast';
import { FaTrash } from "react-icons/fa";
import { MdModeEditOutline } from "react-icons/md";
import './Course.css'

const ViewCourse = () =>{

    const [viewcourse,setViewcourse] = useState([]);
    const [message,setMessage] = useState('')
    const [show,setShow] = useState(true)
    const navigate = useNavigate()

    //restful web service url
    const ADDCOURSE_API_URL = "http://localhost:8080/api/addcourse"

    //get all the products from restful web service
    const getAllInfo = (serverUrl)=>{

        //react fetch api to get data from backend
        //asychronous call (AJAX)
        fetch( serverUrl,{
            method:"GET",
            headers:{ //represents request header
                'Accept':'application/json'
            }
        }) // fetches data from server and provides request header configuration
            .then( response=>{
                if(response.ok)
                    return response.json()
                else if(response.status=="404")
                    return response.json()
                else
                    throw Error(`Server Error ${response.status}`)
            }) // gets the response object from server
            .then( data=> setViewcourse(data)) //if response ok (successful), then gets response data
            .catch( err=> console.error(err)) // handles server error, if any
    }

    // call react hook useEffect to fetch data from server continously
    useEffect( ()=>{

        getAllInfo(ADDCOURSE_API_URL+"/all-course");

    },[viewcourse]);

    //event handler to handle edit event
    const handleEdit = courseinfo=>{
          navigate(`/course/edit/${courseinfo.id}/${courseinfo.coursename}/${courseinfo.coursequestion}/${courseinfo.coursemark}`)
    }

    //event handler to handle delete event
    const handleDelete = courseinfo=>{
        setShow(true)
        deleteCourse(ADDCOURSE_API_URL+"/delete-course",courseinfo)
    }

    //event handler to handle delete event
    const deleteCourse = (serverUrl,courseinfo)=>{
        fetch(serverUrl,{
            method:'DELETE',
            headers:{
                'Content-Type':'application/json',
                'Accept':'application/json'
            },
            body:JSON.stringify({
                id:courseinfo.id,
                coursename:courseinfo.coursename,
                coursequestion:courseinfo.coursequestion,
                coursemark:courseinfo.coursemark
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

    //rendering logic
    return(
        <>
        <div className="container03">
            <table className="table table-secondary table-bordered table-striped" style={{border:'3px'}}>
                <thead className=" table table-dark">
                    <tr style={{textAlign:'center'}}>
                        <th>Course Name</th>
                        <th>Questions</th>
                        <th>Marks</th>
                        <th colSpan={2}>Action</th>
                    </tr>
                </thead>
                <tbody style={{textAlign:'center'}}>
                    {
                        viewcourse.map(view=> <tr key={view.id}>
                            <td>{view.coursename}</td>
                            <td>{view.coursequestion}</td>
                            <td>{view.coursemark}</td>
                            <td className="input-submit" onClick={()=>handleEdit(view)}><MdModeEditOutline style={{ fill: 'blue' }}/></td>
                            <td className="input-submit" onClick={()=>handleDelete(view)}> <FaTrash style={{ fill: 'red' }}/> </td>
                            
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
        {message &&
            <div>
               <ToastContainer position="top-center">
                   <Toast show={show} onClose={()=>setShow(!show)}>
                       <Toast.Header>
                           <strong>Info</strong>
                       </Toast.Header>
                       <Toast.Body>
                           {message}
                       </Toast.Body>
                   </Toast>
               </ToastContainer>
           </div> }
           <Outlet/>
           </>
    )
}
export default ViewCourse;
