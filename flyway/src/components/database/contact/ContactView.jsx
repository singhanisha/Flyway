import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import ToastContainer from 'react-bootstrap/ToastContainer';
import Toast from 'react-bootstrap/Toast'
import { useNavigate } from "react-router-dom";

const ContactView = ()=>{

    const [contact,setContact] = useState([]);
     
    const [message,setMessage] = useState('');
    const [show,setShow] = useState(true)
    const navigate = useNavigate()

    const CONTACT_API_URL = "http://localhost:8080/api/contact"

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
            .then( data=> setContact(data)) //if response ok (successful), then gets response data
            .catch( err=> console.error(err)) // handles server error, if any
    }

    // call react hook useEffect to fetch data from server continously
    useEffect( ()=>{

        getAllInfo(CONTACT_API_URL+"/all-contact");

    },[contact]);

    return(
        <>
        <div>
            <table className="table table-striped">
                <thead>
                    <tr style={{textAlign:'center'}}>
                        <th style={{backgroundColor:'rgb(194, 72, 16)',color:'white'}}>No.</th>
                        <th style={{backgroundColor:'rgb(194, 72, 16)',color:'white'}}>Name</th>
                        <th style={{backgroundColor:'rgb(194, 72, 16)',color:'white'}}>Email</th>
                        <th style={{backgroundColor:'rgb(194, 72, 16)',color:'white'}}>Message</th>
                        {/* <th style={{backgroundColor:'rgb(194, 72, 16)',color:'white'}}>Action</th> */}
                    </tr>
                </thead>
                <tbody>
                    {
                        contact.map(c=> <tr key={c.id} style={{textAlign:'center'}}>
                            <td style={{backgroundColor:'wheat'}}>{c.id}</td>
                            <td style={{backgroundColor:'wheat'}}>{c.name}</td>
                            <td style={{backgroundColor:'wheat'}}>{c.email}</td>
                            <td style={{backgroundColor:'wheat'}}>{c.message}</td>
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
export default ContactView;