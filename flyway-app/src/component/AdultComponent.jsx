import { useState } from "react"

const AdultComponent = ()=>{

    const [adultVal,setAdultVal] = useState([{name:'',lastName:'',gender:''}])

    const add = ()=>{
        setAdultVal([...adultVal,{name:'',lastName:'',gender:''}])
    }
    const remove = (i)=>{
       const newForm = [...adultVal]
       newForm.splice(i,1)
       setAdultVal(newForm) 
    }

    const handle =(i,e)=>{
        let newform = [...adultVal]
        newform[i][e.target.name]=e.target.value
        setAdultVal(newform)
    }

    const onSubmit= (e)=>{
        e.preventDefault();
    }

    return (
        <div>
        <form onSubmit={onSubmit}>
        {adultVal.map((item,i)=>(
            <div>
            <input type="text" name="name" value={item.name || ""} onChange={(e)=>handle(e,i)}/>
            <input type="text" name="lastName" value={item.lastName || ""} onChange={(e)=>handle(e,i)}/>
            <input type="radio" name="gender" value={item.gender || ""} onChange={(e)=>handle(e,i)}/>
            {
                i==0 ? " " : 
            <button onClick={()=>remove(i)}>Remove</button>
            }
            </div>
        ))}
        <button onClick={add}>Add</button>
        <button type="submit">Submit</button>
        </form>
        </div>
    )
}
export default AdultComponent;
{/* <div className="container w-25 border border-2 border-primary my-3 px-0">
            <div className="div1 px-0">
            <h3><button className="div1 me-2 border-end border-0 border-primary" onClick={()=>{setIsSubmitted(false)}}>&#8592;</button>Confirm Your Details</h3></div>
            <h5>ADULT</h5>
            <div>
                <h6>Name: {travellerProfile.name} {travellerProfile.lastname}</h6>
                <h6>Gender: {travellerProfile.gender}</h6>
                <h6></h6>
            </div>
            <h5>CHILD</h5>
            <div>
                <h6>Name: {travellerProfile.cname} {travellerProfile.clastname}</h6>
                <h6>Gender: {travellerProfile.cgender}</h6>
                <h6>Age: {travellerProfile.age}</h6>
            </div>
            <h5>INFANT</h5>
            <div>
                <h6>Name: {travellerProfile.iname} {travellerProfile.ilastname}</h6>
                <h6>Gender: {travellerProfile.igender}</h6>
                <h6>Date of Birth: {travellerProfile.dateofbirth}</h6>
            </div>
            <div>
                <h5>Email id and Mobile No</h5>
                <h6>MobileNo: {travellerProfile.mobileno}</h6>
                <h6>Email: {travellerProfile.email}</h6>
            </div>
            <div>
                <h5>Address</h5>
                <h6>Pincode: {travellerProfile.pincode}</h6>
                <h6>State: {travellerProfile.state}</h6>
                <h6>Address: {travellerProfile.address}</h6>
            </div>

            <button className="btn btn-primary m-2">Save and Confirm</button>
            
        </div> */}