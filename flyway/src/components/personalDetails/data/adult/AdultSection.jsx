import { useState } from "react";
import ToastContainer from 'react-bootstrap/ToastContainer';
import Toast from 'react-bootstrap/Toast'

const AdultSection = (props)=>{

    const [adultProfile,setadultProfile] = useState([{
        name:'',
        lastName:'',
        gender:''
    }])

    const [message,setMessage] = useState('')

    const [show,setShow] = useState(true)

    //restful web service url
    const ADULT_API_URL = "http://localhost:8080/api/adults"

    const adultInfo = (serverurl)=>{
        fetch( serverurl,{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                'Accept':'application/json'
            },
            body:JSON.stringify({ 
                name:adultProfile.name,
                lastName:adultProfile.lastName,
                gender:adultProfile.gender
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

    /* const handleNameChange = (e,index)=>{
        let newform = [...adultProfile]
        newform[index][e.target.name]=e.target.value
        setadultProfile(newform)
        
    }
    const handleLastnameChange = (e,index)=>{
        let newform = [...adultProfile]
        newform[index][e.target.name]=e.target.value
        setadultProfile(newform)
    }
    const handleGenderChange = (e,index)=>{
        let newform = [...adultProfile]
        newform[index][e.target.name]=e.target.value
        setadultProfile(newform)
    } */


    const handleNameChange = (e)=>{
        setadultProfile({...adultProfile,name:e.target.value})
    }
    const handleLastnameChange = (e)=>{
        setadultProfile({...adultProfile,lastName:e.target.value})
    }
    const handleGenderChange = (e)=>{
        setadultProfile({...adultProfile,gender:e.target.value})
    }
   
    const handleSubmit = (e)=>{
        e.preventDefault();
        adultInfo(ADULT_API_URL+"/add-adult")
        /* alert("data submitted!") */
        /* console.log("success"); */
        /* setadultProfile({
            name:'',
            lastName:'',
            gender:''
        }) */
        
    }

   /*  const remove = (index)=>{
        const newForm = [...adultProfile]
        newForm.splice(index,1)
        setadultProfile(newForm) 
     } */

    
    

    return (
        <>
       <div>
        <form onSubmit={handleSubmit}>
         {/* {adultProfile.map ( (e,index)=>(
         <div className="border border-1 border-primary rounded mx-2 mt-2">
            <div><h5 className="div2 rounded">ADULT {props.onClick}</h5>
                <div className="mb-1">
                    <input className="mx-4 rounded" name="name" value={e.name} onChange={(e)=>handleNameChange(e,index)} placeholder="First and Middle Name" required/>
                    <input className="me-4 rounded" name="lastName" value={e.lastName} onChange={(e)=>handleLastnameChange(e,index)} placeholder="Last Name" required/>
                    <input  type="radio" name="gender" value="male" checked={e.gender=="male"} onChange={(e)=>handleGenderChange(e,index)} ></input>
                    <label className="me-4">Male</label>
                    <input  type="radio" name="gender" value="female" checked={e.gender=="female"} onChange={(e)=>handleGenderChange(e,index)} ></input>
                    <label>Female</label>
                    
                </div>
            </div>
        </div> 
      ) ) }  */}
      
      <div className="border border-1 border-primary rounded mx-2 mb-1">
                <h5 className="div12 rounded">ADULT {props.onClick}</h5>
                <div className="mb-2">
                    <input id="fn" className="mx-4 rounded" value={adultProfile.name} onChange={handleNameChange} placeholder="First and Middle Name" required/>
                    <input id="ln" className="me-4 rounded" value={adultProfile.lastName} onChange={handleLastnameChange} placeholder="Last Name" required/>
                    <input  type="radio" id="g1" name="gender" value="male" checked={adultProfile.gender=="male"} onChange={handleGenderChange} required/>
                    <label className="me-4" htmlFor="g1">Male</label>
                    <input  type="radio" id="g2" name="gender" value="female" checked={adultProfile.gender=="female"} onChange={handleGenderChange} required></input>
                    <label  htmlFor="g2">Female</label>
                    <button type="submit" className="btn btn-success" style={{marginLeft:'35px'}}>save</button>
                </div>
        </div>
        
    </form> 
    </div>
   {/* {message &&
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
export default AdultSection;

