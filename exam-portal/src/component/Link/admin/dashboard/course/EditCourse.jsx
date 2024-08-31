import { useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import  Form  from "react-bootstrap/Form";
import  Button  from "react-bootstrap/Button";
import ToastContainer from 'react-bootstrap/ToastContainer';
import Toast from 'react-bootstrap/Toast'

const EditCourse = ()=>{

    const {id,cn,cq,cm} = useParams()

    const [ editCourse,setEditCourse ] = useState({
        coursename:cn,
        coursequestion:cq,
        coursemark:cm
    })

    const [message,setMessage] = useState('')
     
    const [show,setShow] = useState(true)

    const ADDCOURSE_API_URL = "http://localhost:8080/api/addcourse"

    const editinfo = (serverUrl,addcourse)=>{
        fetch(serverUrl,{
            method:'PUT',
            headers:{
                'Content-Type':'application/json',
                'Accept':'application/json'
            },
            body:JSON.stringify({
                Id:id,
                coursename:addcourse.coursename,
                coursequestion:addcourse.coursequestion,
                coursemark:addcourse.coursemark
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

    const handleSubmit = e =>{
        e.preventDefault();
        editinfo(ADDCOURSE_API_URL+"/update-course",editCourse);
        alert("Your data is updated successfully!");
    }

    return(
        <>
            <div className="container p-3">
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Course Name</Form.Label>
                        <Form.Control style={{background:'lightgrey'}} type="text" value={editCourse.coursename} onChange={(e)=>setEditCourse({...editCourse,coursename:e.target.value})} placeholder="Enter new product name" required readOnly/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Course Question</Form.Label>
                        <Form.Control  type="text" value={editCourse.coursequestion} onChange={(e)=>setEditCourse({...editCourse,coursequestion:e.target.value})} placeholder="Enter new product brand" required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Course Mark</Form.Label>
                        <Form.Control style={{background:'lightgrey'}} type="text" value={editCourse.coursemark} onChange={(e)=>setEditCourse({...editCourse,coursemark:e.target.value})} placeholder="price in Indian rupees" required readOnly/>
                </Form.Group>
                <Button variant="success" type="submit">Save</Button>
            </Form>
        </div>
        {message &&
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
        </div> }
        <Outlet/>
        </>
    )

}
export default EditCourse;