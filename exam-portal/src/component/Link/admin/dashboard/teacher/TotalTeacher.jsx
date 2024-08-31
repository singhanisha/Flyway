import { useEffect, useState } from "react";
import { ImCross } from "react-icons/im";
import { FaCheck } from "react-icons/fa";
import ToastContainer from 'react-bootstrap/ToastContainer';
import Toast from 'react-bootstrap/Toast'

const TotalTeacher = ()=>{

    const [total,setTotal] = useState([]);
    /* const [message,setMessage] = useState('');
    const [show,setShow] = useState(true) */

    const TEACHER_API_URL = "http://localhost:8080/api/teacher"

    const getAllTeacher = (serverUrl)=>{
        fetch( serverUrl,{
            method:"GET",
            headers:{'Accept':'application/json'}
        })
            .then( response=>{
                if(response.ok) return response.json()
                else if(response.status=="404") return response.json()
                else throw Error(`Server Error ${response.status}`)
            })
            .then( data=> setTotal(data))
            .catch( err=> console.error(err))
    }

    useEffect( ()=>{
        getAllTeacher(TEACHER_API_URL+"/all-teacher")
    },[total]);

    /* const handleDelete = teacher =>{
        setShow(true)
        deleteTeacher(TEACHER_API_URL+"/delete-teacher",teacher)
    }

    const deleteTeacher = (serverUrl,teacher)=>{
        fetch(serverUrl,{
            method:'DELETE',
            headers:{
                'Content-Type':'application/json',
                'Accept':'application/json'
            },
            body:JSON.stringify({
                id:teacher.id,
                name:teacher.name,
                mobileno:teacher.mobileno,
                address:teacher.address
            })
        })
            .then(response=>{
                if(response.ok) return response.json()
                else if(response.status=="404") return response.json()
                else throw Error(`Server Error ${response.status}`)
            })
            .then(data=>setMessage(data.message))
            .catch(err=>console.error(err))
    } */

    return(
        <>
        <div style={{margin:'50px'}}>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Mobile No</th>
                        <th>Email ID</th>
                        <th>Address</th>
                        {/* <th>Approval</th>
                        <th>Reject</th> */}
                    </tr>
                </thead>
                <tbody>
                    {
                        total.map(t=> <tr key={t.id}>
                            <td>{t.name}</td>
                            <td>{t.mobileno}</td>
                            <td>{t.emailid}</td>
                            <td>{t.address}</td>
                            {/* <td className="input-submit"> <FaCheck fill="blue"/> </td>
                            <td className="input-submit" onClick={()=>handleDelete(t)}> <ImCross fill="red"/> </td> */}
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
        {/* {message &&
            <div>
               <ToastContainer position="middle-center">
                   <Toast show={show} onClose={()=>setShow(!show)}>
                       <Toast.Header>
                           <strong>Info</strong>
                       </Toast.Header>
                       <Toast.Body>
                           {message}
                       </Toast.Body>
                   </Toast>
               </ToastContainer>
           </div> } */}
           </>
    )
}
export default TotalTeacher;