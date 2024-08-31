import { useState } from "react"

function InfantSection(props){

    const [infantProfile,setinfantProfile] = useState([{
        infantname:'',
        infantlastName:'',
        infantgender:'',
        idateofbirth:''
    }])

    const [message,setMessage] = useState('')

    const [show,setShow] = useState(true)

    //restful web service url
    const INFANTSECTION_API_URL = "http://localhost:8080/api/infantsections"

    const infantInfo = (serverurl)=>{
        fetch( serverurl,{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                'Accept':'application/json'
            },
            body:JSON.stringify({ 
                infantname:infantProfile.infantname,
                infantlastname:infantProfile.infantlastName,
                infantgender:infantProfile.infantgender,
                idateofbirth:infantProfile.idateofbirth
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


    /* const handleInfantNameChange = (e,index)=>{
        let newform = [...infantProfile]
        newform[index][e.target.name]=e.target.value
        setinfantProfile(newform)
    }
    const handleInfantLastnameChange = (e,index)=>{
        let newform = [...infantProfile]
        newform[index][e.target.name]=e.target.value
        setinfantProfile(newform)
    }
    const handleInfantGenderChange = (e,index)=>{
        let newform = [...infantProfile]
        newform[index][e.target.name]=e.target.value
        setinfantProfile(newform)
    }
    const handleIDateofBirthChange = (e,index)=>{
        let newform = [...infantProfile]
        newform[index][e.target.name]=e.target.value
        setinfantProfile(newform)
    } */

        const handleINameChange = (e)=>{
            setinfantProfile({...infantProfile,infantname:e.target.value})
        }
        const handleILastnameChange = (e)=>{
            setinfantProfile({...infantProfile,infantlastName:e.target.value})
        }
        const handleIGenderChange = (e)=>{
            setinfantProfile({...infantProfile,infantgender:e.target.value})
        }
        const handleDateofBirthChange = (e)=>{
            setinfantProfile({...infantProfile,idateofbirth:e.target.value})
        }
   
    const handleSubmit = (e)=>{
        e.preventDefault();
        infantInfo(INFANTSECTION_API_URL+"/add-infantsection");
       /*  alert("data submitted!"); */
        /* setinfantProfile({
            infantname:'',
            infantlastname:'',
            infantgender:'',
            idateofbirth:''
        }) */
    }

    return(
        <>
        <div>
        <form onSubmit={handleSubmit}>
        {/* {infantProfile.map ( (e,index)=>(
            <div className="border border-1 border-primary rounded mx-2 mt-2">
                <h5 className="div2 rounded">INFANT {props.onClick}</h5>
                <div className="mb-2">
                    <input className="mx-4 rounded" name="infantname" value={e.infantname} onChange={(e)=>handleInfantNameChange(e,index)} placeholder="First and Middle Name" required/>
                    <input className="me-4 rounded" name="infantlastname" value={e.infantlastname} onChange={(e)=>handleInfantLastnameChange(e,index)} placeholder="Last Name" required/>
                    <input  type="radio" name="infantgender" value="male" checked={e.infantgender=="male"} onChange={(e)=>handleInfantGenderChange(e,index)} required></input>
                    <label className="me-4">Male</label>
                    <input  type="radio" name="infantgender" value="female" checked={e.infantgender=="female"} onChange={(e)=>handleInfantGenderChange(e,index)} required></input>
                    <label>Female</label>
                    <div >
                        <input type="date" className=" rounded mx-4 mt-2" name="idateofbirth" value={e.idateofbirth} onChange={(e)=>handleIDateofBirthChange(e,index)} required/>
                    </div>
                </div>
            </div>
            ) ) }  */}
            <div className="border border-1 border-primary rounded mx-2 mb-1">
                <h5 className="div12 rounded">INFANT {props.onClick}</h5>
                <div className="mb-2">
                    <input id="ifn" className="mx-4 rounded" value={infantProfile.infantname} onChange={handleINameChange} placeholder="First and Middle Name" />
                    <input id="iln" className="me-4 rounded" value={infantProfile.infantlastName} onChange={handleILastnameChange} placeholder="Last Name" />
                    <input  type="radio" id="gi1" name="iGender" value="male" checked={infantProfile.infantgender=="male"} onChange={handleIGenderChange} ></input>
                    <label className="me-4" htmlFor="gi1">Male</label>
                    <input  type="radio" id="gi2" name="iGender" value="female" checked={infantProfile.infantgender=="female"} onChange={handleIGenderChange} ></input>
                    <label  htmlFor="gi2">Female</label>
                    <div >
                        <input type="date" className=" rounded mx-4 mt-2" name="dateOfBirth" value={infantProfile.idateofbirth} onChange={handleDateofBirthChange} min="15 days" max="2 years"/>
                        <button type="submit" className="btn btn-success" style={{marginLeft:'430px'}}>save</button>
                    </div>
                </div>
            </div>
            </form>
            </div>
        </>
    )

}
export default InfantSection;