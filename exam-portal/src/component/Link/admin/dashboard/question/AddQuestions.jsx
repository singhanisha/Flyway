import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import './question.css'

const AddQuestions = ()=>{

    const [addQuestions,setAddQuestions] = useState([{question:'',mark:'',option1:'',option2:'',option3:'',option4:'',answer:''}]);

    const [course,setCourse] = useState([]);

    const [ message,setMessage] = useState('');
    const [ show,setShow] = useState(true)

    const ADDQUESTION_API_URL = "http://localhost:8080/api/addquestion"

      const addquestion = (serverUrl)=>{
        fetch(serverUrl,{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                'Accept':'application/json'
            },
            body:JSON.stringify({
                question:addQuestions.question,
                mark:addQuestions.mark,
                option1:addQuestions.option1,
                option2:addQuestions.option2,
                option3:addQuestions.option3,
                option4:addQuestions.option4,
                answer:addQuestions.answer
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

      const handleSubmit = (e)=>{
        e.preventDefault();
        addquestion(ADDQUESTION_API_URL+"/add-question");
        alert("Question is added!");
    }

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
            .then( data=> setCourse(data)) //if response ok (successful), then gets response data
            .catch( err=> console.error(err)) // handles server error, if any
    }

    // call react hook useEffect to fetch data from server continously
    useEffect( ()=>{

        getAllInfo(ADDCOURSE_API_URL+"/all-course");

    },[course]);

    return(
        <div className="container002">
            <form onSubmit={handleSubmit}>

                <div>
                    <label htmlFor="course" className="form-label"><b>Course</b></label>
                    <select name="course" id="course" className="form-control">
                        {course.map(c=> 
                        <option>{c.coursename}</option>)}
                    </select>
                </div>
                

                <label className="form-label"><b>Question</b></label>
                <textarea className="form-control" value={addQuestions.question} onChange={(e)=>setAddQuestions({...addQuestions,question:e.target.value})}></textarea>

                <label className="form-label"><b>Marks</b></label>
                <input className="form-control" type="number" value={addQuestions.mark} placeholder="10" onChange={(e)=>setAddQuestions({...addQuestions,mark:e.target.value})}></input>

                <label className="form-label"><b>Option 1</b></label>
                <input className="form-control" type="text" value={addQuestions.option1} onChange={(e)=>setAddQuestions({...addQuestions,option1:e.target.value})}></input>
                <label className="form-label"><b>Option 2</b></label>
                <input className="form-control" type="text" value={addQuestions.option2} onChange={(e)=>setAddQuestions({...addQuestions,option2:e.target.value})}></input>
                <label className="form-label"><b>Option 3</b></label>
                <input className="form-control" type="text" value={addQuestions.option3} onChange={(e)=>setAddQuestions({...addQuestions,option3:e.target.value})}></input>
                <label className="form-label"><b>Option 4</b></label>
                <input className="form-control" type="text" value={addQuestions.option4} onChange={(e)=>setAddQuestions({...addQuestions,option4:e.target.value})}></input>

                <label className="form-label"><b>Answer</b></label>
                <input className="form-control" type="text" value={addQuestions.answer} placeholder="-------" onChange={(e)=>setAddQuestions({...addQuestions,answer:e.target.value})}></input>

                <button className="btn003 btn btn-primary" type="submit">ADD</button>

                <Outlet/>
            </form>
        </div>
    )
}
export default AddQuestions;