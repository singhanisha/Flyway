import { useEffect, useState } from "react";
import {Link, Outlet, useNavigate} from 'react-router-dom';
import ToastContainer from 'react-bootstrap/ToastContainer';
import Toast from 'react-bootstrap/Toast';
import { IoIosEye } from "react-icons/io";
import '../course/Course.css'

const View = () =>{

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

    return(
        <>
        <div className="container03">
            <table className="table table-secondary table-bordered table-striped" style={{border:'3px'}}>
                <thead className=" table table-dark">
                    <tr style={{textAlign:'center'}}>
                        <th>Course Name</th>
                        <th>Total Questions</th>
                        <th>Total Marks</th>
                        <th>View Question</th>
                    </tr>
                </thead>
                <tbody style={{textAlign:'center'}}>
                    {
                        viewcourse.map(view=> <tr key={view.id}>
                            <td>{view.coursename}</td>
                            <td>{view.coursequestion}</td>
                            <td>{view.coursemark}</td>
                            <td><Link to={'/question1/viewquestion'}><IoIosEye/></Link></td>
                            
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
export default View;
