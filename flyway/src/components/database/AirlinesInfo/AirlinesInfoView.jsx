import { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ToastContainer from 'react-bootstrap/ToastContainer';
import Toast from 'react-bootstrap/Toast'

const AirlinesInfoView = ()=>{

    const [airlinesinfos,setAirlinesinfos] = useState([]);
    const [message,setMessage] = useState('')
    const [show,setShow] = useState(true)
    const navigate = useNavigate()

    //restful web service url
    const AIRLINESINFO_API_URL = "http://localhost:8080/api/airlinesinfos"

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
            .then( data=> setAirlinesinfos(data)) //if response ok (successful), then gets response data
            .catch( err=> console.error(err)) // handles server error, if any
    }

    // call react hook useEffect to fetch data from server continously
    useEffect( ()=>{

        getAllInfo(AIRLINESINFO_API_URL+"/all");

    },[airlinesinfos]);

    //event handler to handle edit event
    const handleEdit = airinfo=>{
        //navigate("/edit/"+product.id+"/"+product.name+"/"+product.brand+"/"+product.price)
          navigate(`/airlinesinfo/edit/${airinfo.airlines_Id}/${airinfo.name}/${airinfo.rating}/${airinfo.information}`)
    }

    //event handler to handle delete event
    const handleDelete = airinfo=>{
        setShow(true)
        deleteProduct(AIRLINESINFO_API_URL+"/delete-airlinesinfo",airinfo)
    }

    //event handler to handle delete event
    const deleteProduct = (serverUrl,airinfo)=>{
        fetch(serverUrl,{
            method:'DELETE',
            headers:{
                'Content-Type':'application/json',
                'Accept':'application/json'
            },
            body:JSON.stringify({
                airlines_Id:airinfo.airlines_Id,
                name:airinfo.name,
                rating:airinfo.rating,
                information:airinfo.information
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
        <div>
            <div>
            <table className="table">
                <thead>
                    <tr style={{textAlign:'center'}} >
                        <th style={{backgroundColor:'rgb(194, 72, 16)',color:'white'}}>Airline Id</th>
                        <th style={{backgroundColor:'rgb(194, 72, 16)',color:'white'}}>Airline Name</th>
                        <th style={{backgroundColor:'rgb(194, 72, 16)',color:'white'}}>Rating</th>
                        <th style={{backgroundColor:'rgb(194, 72, 16)',color:'white'}}>Information</th>
                        <th colSpan={2} style={{backgroundColor:'rgb(194, 72, 16)',color:'white'}}>Action</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        airlinesinfos.map(a=> <tr key={a.airlines_Id}>
                            <td style={{textAlign:'center', backgroundColor:'wheat'}}>{a.airlines_Id}</td>
                            <td style={{textAlign:'center' ,backgroundColor:'wheat'}}>{a.name}</td>
                            <td style={{textAlign:'center' ,backgroundColor:'wheat'}}>{a.rating}</td>
                            <td style={{backgroundColor:'wheat'}}>{a.information}</td>
                            <td style={{backgroundColor:'wheat'}}> <Button title="Edit" variant="primary" onClick={()=>handleEdit(a)}><i className="bi bi-pencil"></i></Button> </td>
                            <td style={{backgroundColor:'wheat'}}> <Button title="Delete" variant="danger" onClick={()=>handleDelete(a)}><i className="bi bi-trash"></i></Button> </td>
                        </tr>)
                    }
                </tbody>
            </table>
            </div>
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
export default AirlinesInfoView;