import { useState } from "react";
import  Form  from "react-bootstrap/Form";
import  Button  from "react-bootstrap/Button";
import ToastContainer from 'react-bootstrap/ToastContainer';
import Toast from 'react-bootstrap/Toast'
import { useNavigate } from "react-router-dom";

const ApartureAdd = ()=>{

    const navigate = useNavigate();

    const [aparture,setAparture] = useState({
        cityname:''
    })

    const [message,setMessage] = useState('')

    const [show,setShow] = useState(true)

    //restful web service url
    const APARTURE_API_URL = "http://localhost:8080/api/aparture"

    // submit the data to server to add the product
    const addInfo = (serverurl)=>{
        fetch(serverurl,{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                'Accept':'application/json'
            },
            body:JSON.stringify({
                citynamename:aparture.cityname
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
        addInfo(APARTURE_API_URL+"/add-aparture");
        alert("Data submitted!")
        setAparture({
            cityname:''
        })
    }

    return(
        <>
        <div className="container11 p-3">
            <Form onSubmit={handleSubmit}>
                <h3><b>Here you can add about Aparture City</b></h3>
                <Form.Group className="mb-3">
                    <Form.Label><b>City Name</b></Form.Label>
                        <Form.Control type="text" value={aparture.cityname} onChange={(e)=>setAparture({...aparture,cityname:e.target.value})} placeholder="Enter new city name" required/>
                </Form.Group>
                <Button variant="success" type="submit">Submit</Button>
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
                        {message
                        }
                    </Toast.Body>
                </Toast>
            </ToastContainer>
        </div> }
        </>
    )

}
export default ApartureAdd;