import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import ToastContainer from 'react-bootstrap/ToastContainer';
import Toast from 'react-bootstrap/Toast'
import { useNavigate } from "react-router-dom";

const LoginView = ()=>{

    const [login,setLogin] = useState([]);
     
    const [message,setMessage] = useState('');
    const [show,setShow] = useState(true)
    const navigate = useNavigate()

    const LOGIN_API_URL = "http://localhost:8080/api/logins"

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
            .then( data=> setLogin(data)) //if response ok (successful), then gets response data
            .catch( err=> console.error(err)) // handles server error, if any
    }

    // call react hook useEffect to fetch data from server continously
    useEffect( ()=>{

        getAllInfo(LOGIN_API_URL+"/all-login");

    },[login]);

    const handleEdit = logininfo=>{
        navigate(`/login1/edit/${logininfo.id}/${logininfo.username}/${logininfo.password}`)
    }

    const handleDelete = logininfo=>{
        setShow(true)
        deleteData(LOGIN_API_URL+"/delete-login",logininfo)
    }

    const deleteData = (serverUrl,logininfo)=>{
        fetch(serverUrl,{
            method:'DELETE',
            headers:{
                'Content-Type':'application/json',
                'Accept':'application/json'
            },
            body:JSON.stringify({
                id:logininfo.id,
                username:logininfo.username,
                password:logininfo.password
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
            <table className="table table-striped">
                <thead>
                    <tr style={{textAlign:'center'}}>
                        <th style={{backgroundColor:'rgb(194, 72, 16)',color:'white'}}>No.</th>
                        <th style={{backgroundColor:'rgb(194, 72, 16)',color:'white'}}>Name</th>
                        <th style={{backgroundColor:'rgb(194, 72, 16)',color:'white'}}>Password</th>
                        {/* <th></th> */}
                        <th style={{backgroundColor:'rgb(194, 72, 16)',color:'white'}}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        login.map(l=> <tr key={l.id} style={{textAlign:'center'}}>
                            <td style={{backgroundColor:'wheat'}}>{l.id}</td>
                            <td style={{backgroundColor:'wheat'}}>{l.username}</td>
                            <td style={{backgroundColor:'wheat'}}>{l.password}</td>
                            {/* <td> <Button title="Edit" variant="warning" onClick={()=>handleEdit(l)}><i className="bi bi-pencil"></i></Button> </td> */}
                            <td style={{backgroundColor:'wheat'}}> <Button title="Delete" variant="danger" onClick={()=>handleDelete(l)}><i className="bi bi-trash"></i></Button> </td>
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
export default LoginView;