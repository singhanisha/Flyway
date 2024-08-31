import { useEffect, useState } from "react";
import {Outlet, useNavigate} from 'react-router-dom';
import ToastContainer from 'react-bootstrap/ToastContainer';
import Toast from 'react-bootstrap/Toast';
import { FaTrash } from "react-icons/fa";
import { MdModeEditOutline } from "react-icons/md";
/* import './Course.css'
 */
const ViewQuestion = () =>{

    const [viewquestion,setViewquestion] = useState([]);
    const [message,setMessage] = useState('')
    const [show,setShow] = useState(true)
    const navigate = useNavigate()

    //restful web service url
    const ADDQUESTION_API_URL = "http://localhost:8080/api/addquestion"

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
            .then( data=> setViewquestion(data)) //if response ok (successful), then gets response data
            .catch( err=> console.error(err)) // handles server error, if any
    }

    // call react hook useEffect to fetch data from server continously
    useEffect( ()=>{

        getAllInfo(ADDQUESTION_API_URL+"/all-question");

    },[viewquestion]);

    //event handler to handle edit event
    const handleEdit = questioninfo=>{
          navigate(`/question1/edit/${questioninfo.id}/${questioninfo.question}/${questioninfo.mark}/${questioninfo.option1}/${questioninfo.option2}/${questioninfo.option3}/${questioninfo.option4}/${questioninfo.answer}`)
    }

    //event handler to handle delete event
    const handleDelete = questioninfo=>{
        setShow(true)
        deleteQuestion(ADDQUESTION_API_URL+"/delete-question",questioninfo)
    }

    //event handler to handle delete event
    const deleteQuestion = (serverUrl,questioninfo)=>{
        fetch(serverUrl,{
            method:'DELETE',
            headers:{
                'Content-Type':'application/json',
                'Accept':'application/json'
            },
            body:JSON.stringify({
                id:questioninfo.id,
                question:questioninfo.question,
                mark:questioninfo.mark,
                option1:questioninfo.option1,
                option2:questioninfo.option2,
                option3:questioninfo.option3,
                option4:questioninfo.option4,
                answer:questioninfo.answer
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
                        {/* <th>No.</th> */}
                        <th>Question</th>
                        <th>Mark</th>
                        <th>Option1</th>
                        <th>Option2</th>
                        <th>Option3</th>
                        <th>Option4</th>
                        <th>Answer</th>
                        <th colSpan={2}>Action</th>
                    </tr>
                </thead>
                <tbody style={{textAlign:'center'}}>
                    {
                        viewquestion.map(view=> <tr key={view.id}>
                            <td>{view.question}</td>
                            <td>{view.mark}</td>
                            <td>{view.option1}</td>
                            <td>{view.option2}</td>
                            <td>{view.option3}</td>
                            <td>{view.option4}</td>
                            <td>{view.answer}</td>
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
export default ViewQuestion;
