import { useState } from "react";
import ToastContainer from 'react-bootstrap/ToastContainer';
import Toast from 'react-bootstrap/Toast'

function ChildrenSection(props){

    const [childProfile,setchildProfile] = useState([{
        childname:'',
        childlastName:'',
        childgender:'',
        cage:''
    }])

    const [message,setMessage] = useState('')

    const [show,setShow] = useState(true)

    //restful web service url
    const CHILDRENSECTION_API_URL = "http://localhost:8080/api/childrensections"

    const childInfo = (serverurl)=>{
        fetch( serverurl,{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                'Accept':'application/json'
            },
            body:JSON.stringify({ 
                childname:childProfile.childname,
                childlastName:childProfile.childlastName,
                childgender:childProfile.childgender,
                cage:childProfile.cage
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


    /* const handleChildNameChange = (e,index)=>{
        let newform = [...childProfile]
        newform[index][e.target.name]=e.target.value
        setchildProfile(newform)
    }
    const handleChildLastnameChange = (e,index)=>{
        let newform = [...childProfile]
        newform[index][e.target.name]=e.target.value
        setchildProfile(newform)
    }
    const handleChildGenderChange = (e,index)=>{
        let newform = [...childProfile]
        newform[index][e.target.name]=e.target.value
        setchildProfile(newform)
    }
    const handlecAgeChange = (e,index)=>{
        let newform = [...childProfile]
        newform[index][e.target.name]=e.target.value
        setchildProfile(newform)
    } */

        const handlecNameChange = (e)=>{
            setchildProfile({...childProfile,childname:e.target.value})
        }
        const handleCLastnameChange = (e)=>{
            setchildProfile({...childProfile,childlastName:e.target.value})
        }
        const handleCGenderChange = (e)=>{
            setchildProfile({...childProfile,childgender:e.target.value})
        }
        const handleAgeChange = (e)=>{
            setchildProfile({...childProfile,cage:e.target.value})
        }
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        childInfo(CHILDRENSECTION_API_URL+"/add-childrensection");
        /* alert("Data submitted"); */
        /* setchildProfile({
            childname:'',
            childlastName:'',
            childgender:'',
            cage:''
        }) */
    }

    return(
        <>
        <div>
        <form onSubmit={handleSubmit}>
        {/* {childProfile.map ( (e,index)=>(
            <div className="border border-1 border-primary rounded mx-2 mt-2">
                <h5 className="div2 rounded">CHILD {props.onClick}</h5>
                <div className="mb-2">
                    <input className="mx-4 rounded" name="childname" value={e.childname} onChange={(e)=>handleChildNameChange(e,index)} placeholder="First and Middle Name" required/>
                    <input className="me-4 rounded" name="childlastName" value={e.childlastName} onChange={(e)=>handleChildLastnameChange(e,index)} placeholder="Last Name" required/>
                    <input  type="radio" name="childgender" value="male" checked={e.childgender=="male"} onChange={(e)=>handleChildGenderChange(e,index)} required></input>
                    <label className="me-4">Male</label>
                    <input  type="radio" name="childgender" value="female" checked={e.childgender=="female"} onChange={(e)=>handleChildGenderChange(e,index)} required></input>
                    <label>Female</label>
                    <div >
                        <input type="number" className=" rounded mx-4 mt-2" name="cage" placeholder="Age" value={e.cage} onChange={(e)=>handlecAgeChange(e,index)} max="12" min="2" required/>
                    </div>
                    <button type="submit">save</button>
                </div>
            </div>
            ) ) }  */}

            <div className="border border-1 border-primary rounded mx-2 mb-1">
                <h5 className="div12 rounded">CHILD {props.onClick}</h5>
                <div className="mb-2">
                    <input id="cfn" className="mx-4 rounded" value={childProfile.childname} onChange={handlecNameChange} placeholder="First and Middle Name" />
                    <input id="cln" className="me-4 rounded" value={childProfile.childlastName} onChange={handleCLastnameChange} placeholder="Last Name" />
                    <input  type="radio" id="gc1" name="cGender" value="male" checked={childProfile.childgender=="male"} onChange={handleCGenderChange} ></input>
                    <label className="me-4" htmlFor="gc1">Male</label>
                    <input  type="radio" id="gc2" name="cGender" value="female" checked={childProfile.childgender=="female"} onChange={handleCGenderChange} ></input>
                    <label  htmlFor="gc2">Female</label>
                    <div >
                        <input type="number" className=" rounded mx-4 mt-2" name="age" placeholder="Age" value={childProfile.cage} onChange={handleAgeChange} max="12" min="2"/>
                        <button type="submit" className="btn btn-success" style={{marginLeft:'500px'}}>save</button>
                    </div>
                </div>
                
            </div>
            
            </form>
            </div>
           {/*  {message &&
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
            </div> } */}
        </>
    )
}
export default ChildrenSection;