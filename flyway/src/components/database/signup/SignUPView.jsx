import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import ToastContainer from 'react-bootstrap/ToastContainer';
import Toast from 'react-bootstrap/Toast'
import { useNavigate } from "react-router-dom";

const SignUPView = ()=>{

    const [sign,setSign] = useState([]);
     
    const [message,setMessage] = useState('');
    const [show,setShow] = useState(true)
    const navigate = useNavigate()

    const SIGNUP_API_URL = "http://localhost:8080/api/signup"

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
            .then( data=> setSign(data)) //if response ok (successful), then gets response data
            .catch( err=> console.error(err)) // handles server error, if any
    }

    // call react hook useEffect to fetch data from server continously
    useEffect( ()=>{

        getAllInfo(SIGNUP_API_URL+"/all");

    },[sign]);

    const handleEdit = signinfo=>{
        navigate(`/signup1/edit/${signinfo.id}/${signinfo.username}/${signinfo.email}/${signinfo.password}`)
    }

    const handleDelete = signinfo=>{
        setShow(true)
        deleteData(SIGNUP_API_URL+"/delete-signup",signinfo)
    }

    const deleteData = (serverUrl,signinfo)=>{
        fetch(serverUrl,{
            method:'DELETE',
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

    return(
        <>
        <div>
            <table className="table">
                <thead>
                    <tr style={{textAlign:'center'}}>
                        <th style={{backgroundColor:'rgb(194, 72, 16)',color:'white'}}>No.</th>
                        <th style={{backgroundColor:'rgb(194, 72, 16)',color:'white'}}>Name</th>
                        <th style={{backgroundColor:'rgb(194, 72, 16)',color:'white'}}>Email</th>
                        <th style={{backgroundColor:'rgb(194, 72, 16)',color:'white'}}>Password</th>
                        <th style={{backgroundColor:'rgb(194, 72, 16)',color:'white'}}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        sign.map(a=> <tr key={a.id} style={{textAlign:'center'}}>
                            <td style={{backgroundColor:'wheat'}}>{a.id}</td>
                            <td style={{backgroundColor:'wheat'}}>{a.username}</td>
                            <td style={{backgroundColor:'wheat'}}>{a.email}</td>
                            <td style={{backgroundColor:'wheat'}}>{a.password}</td>
                            {/* <td style={{backgroundColor:'wheat'}}> <Button title="Edit" variant="warning" onClick={()=>handleEdit(a)}><i className="bi bi-pencil"></i></Button> </td> */}
                            <td style={{backgroundColor:'wheat'}}> <Button title="Delete" variant="danger" onClick={()=>handleDelete(a)}><i className="bi bi-trash"></i></Button> </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
        {message &&
            <div>
               <ToastContainer position="bottom-center">
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
export default SignUPView;