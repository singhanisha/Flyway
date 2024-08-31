import { useState } from "react";
import { useParams } from "react-router-dom";

const EditQuestion = ()=>{

    const [id,qu,ma,o1,o2,o3,o4,ans] = useParams()

    const [editquestion,setEditquestion] = useState({
        question:qu,
        mark:ma,
        option1:o1,
        option2:o2,
        option3:o3,
        option4:o4,
        answer:ans
    })

    const [ message ,setMessage] = useState('')
    const [ show, setShow] = useState(true)

    const ADDQUESTION_API_URL = "http://localhost:8080/api/addquestion"

    const editQuestion = (serverUrl,questiondata)=>{
        fetch(serverUrl,{
            method:'PUT',
            headers:{
                'Content-Type':'application/json',
                'Accept':'application/json'
            },
            body:JSON.stringify({
                Id:id,
                question:questiondata.question,
                mark:questiondata.mark,
                option1:questiondata.option1,
                option2:questiondata.option2,
                option3:questiondata.option3,
                option4:questiondata.option4,
                answer:questiondata.answer
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
        editQuestion(ADDQUESTION_API_URL+"/update-addquestion",editquestion);
        alert("Question is updated successfully!");
    }

    return(
        <>
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Question</label>
                    <input type="text" value={editquestion.question} onChange={(e)=>setEditquestion({...editQuestion,question:e.target.value})} readOnly></input>
                </div>
                <div>
                    <label>Mark</label>
                    <input type="number" value={editquestion.mark} onChange={(e)=>setEditquestion({...editQuestion,mark:e.target.value})}></input>
                </div>
                <div>
                    <label>Option1</label>
                    <input type="text" value={editquestion.option1} onChange={(e)=>setEditquestion({...editQuestion,option1:e.target.value})} readOnly></input>
                </div>
                <div>
                    <label>Option2</label>
                    <input type="text" value={editquestion.option2} onChange={(e)=>setEditquestion({...editQuestion,option2:e.target.value})} readOnly></input>
                </div>
                <div>
                    <label>Option3</label>
                    <input type="text" value={editquestion.option3} onChange={(e)=>setEditquestion({...editQuestion,option3:e.target.value})} readOnly></input>
                </div>
                <div>
                    <label>option4</label>
                    <input type="text" value={editquestion.option4} onChange={(e)=>setEditquestion({...editQuestion,option4:e.target.value})} readOnly></input>
                </div>
                <div>
                    <label>Answer</label>
                    <input type="text" value={editquestion.answer} onChange={(e)=>setEditquestion({...editQuestion,answer:e.target.value})} readOnly></input>
                </div>
                <div>
                    <button type="sumbit" className="btn btn-success">Save</button>
                </div>
            </form>
        </div>
        </>
    )

}
export default EditQuestion;