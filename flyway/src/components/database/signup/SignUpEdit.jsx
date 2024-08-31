import { useState } from "react";
import {useParams} from 'react-router-dom';
import  Form  from "react-bootstrap/Form";
import  Button  from "react-bootstrap/Button";
import ToastContainer from 'react-bootstrap/ToastContainer';
import Toast from 'react-bootstrap/Toast'

const SignUpEdit = ()=>{

    const {id,un,em,pa} = useParams()

    const [signup,setSignup] = useState({
        username:un,
        email:em,
        password:pa
    })

    const [message,setMessage] = useState('')

    const [show,setShow] = useState(true)

    //restful web service url
    const SIGNUP_API_URL = "http://localhost:8080/api/singup"

    //edit the product on server
    const editData = (serverUrl,signinfo)=>{
        fetch(serverUrl,{
            method:'PUT',
            headers:{
                'Content-Type':'application/json',
                'Accept':'application/json'
            },
            body:JSON.stringify({
                id:signinfo.id,
                username:signinfo.username,
                email:signinfo.email,
                password:signinfo.password
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

    //event handler for form submit event
    const handleSubmit = e =>{
        e.preventDefault();
        editData(SIGNUP_API_URL+"/update-signup",signup);
        alert("Data saved!")
    }

    return(
        <>
        <div className="container p-3">
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                        <Form.Control style={{background:'lightgrey'}} type="text" value={signup.username} onChange={(e)=>setSignup({...signup,username:e.target.value})} required readOnly/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Email ID</Form.Label>
                        <Form.Control style={{background:'lightgrey'}} type="email" value={signup.email} onChange={(e)=>setSignup({...signup,email:e.target.value})} required readOnly/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                        <Form.Control  type="password" value={signup.password} onChange={(e)=>setSignup({...signup,password:e.target.value})} required />
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
        </>
    )
}

export default SignUpEdit;