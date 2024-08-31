import { useContext, useState } from "react";
import './TravellerDetails.css';
import Button, { MyContext } from "./Button";
import ChildButton from "./ChildButton"
import InfantButton from "./InfantButton";
import PaymentMethod from "../payment/PaymentMethod";
import { Link, Outlet, useNavigate } from "react-router-dom";
import ToastContainer from "react-bootstrap/esm/ToastContainer";
import ToastHeader from "react-bootstrap/esm/ToastHeader";
import ToastBody from "react-bootstrap/esm/ToastBody";
import Toast from 'react-bootstrap/Toast'
import AdultSection from "./data/adult/AdultSection";




const TravellerDetails = (props)=>{

    const navigate = useNavigate();

    const [travellerProfile,setTravellerProfile] = useState([{
        name:'',
        lastName:'',
        gender:'',
        cName:'',
        cLastName:'',
        cGender:'',
        age:'',
        iName:'',
        iLastName:'',
        iGender:'',
        dateOfBirth:'',
        mbNo:'',
        email:'',
        pincode:'',
        state:'',
        address:'' 

    }])

    const [adult,setadult] = useState([])

    const [message,setMessage] = useState('')
    const [show,setShow] = useState(true)

    // restful web service url
    const TRAVELLERDETAIL_API_URL = "http://localhost:8080/api/travellerdetails"
    

    // submit the data to server to add the product
    const addDetail = (serverUrl)=>{
        fetch( serverUrl,{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                'Accept':'application/json'
            },
            body:JSON.stringify({
                name:travellerProfile.name,lastName:travellerProfile.lastName,gender:travellerProfile.gender,
                cName:travellerProfile.cName,cLastName:travellerProfile.cLastName,cGender:travellerProfile.cGender,age:travellerProfile.age,
                iName:travellerProfile.iName,iLastName:travellerProfile.iLastName,iGender:travellerProfile.iGender,dateOfBirth:travellerProfile.dateOfBirth,
                email:travellerProfile.email,pincode:travellerProfile.pincode,address:travellerProfile.address,state:travellerProfile.state,
                mbNo:travellerProfile.mbNo
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

    const handleNameChange = (e)=>{
        setTravellerProfile({...travellerProfile,name:e.target.value})
    }
    const handleLastnameChange = (e)=>{
        setTravellerProfile({...travellerProfile,lastName:e.target.value})
    }
    const handleGenderChange = (e)=>{
        setTravellerProfile({...travellerProfile,gender:e.target.value})
    }
    const handlecNameChange = (e)=>{
        setTravellerProfile({...travellerProfile,cName:e.target.value})
    }
    const handleCLastnameChange = (e)=>{
        setTravellerProfile({...travellerProfile,cLastName:e.target.value})
    }
    const handleCGenderChange = (e)=>{
        setTravellerProfile({...travellerProfile,cGender:e.target.value})
    }
    const handleAgeChange = (e)=>{
        setTravellerProfile({...travellerProfile,age:e.target.value})
    }
    const handleINameChange = (e)=>{
        setTravellerProfile({...travellerProfile,iName:e.target.value})
    }
    const handleILastnameChange = (e)=>{
        setTravellerProfile({...travellerProfile,iLastName:e.target.value})
    }
    const handleIGenderChange = (e)=>{
        setTravellerProfile({...travellerProfile,iGender:e.target.value})
    }
    const handleDateofBirthChange = (e)=>{
        setTravellerProfile({...travellerProfile,dateOfBirth:e.target.value})
    }
    const handleMobileNoChange = (e)=>{
        setTravellerProfile({...travellerProfile,mbNo:e.target.value})
    }
    const handleEmailChange = (e)=>{
        setTravellerProfile({...travellerProfile,email:e.target.value})
    }
    const handlePincodeChange = (e)=>{
        setTravellerProfile({...travellerProfile,pincode:e.target.value})
    }
    const handleStateChange = (e)=>{
        setTravellerProfile({...travellerProfile,state:e.target.value})
    }
    const handleAddressChange = (e)=>{
        setTravellerProfile({...travellerProfile,address:e.target.value})
    } 
    
   /*  const handleinputchange=(e,index)=>{
        const {name,value} = e.target;
        const list = [...travellerProfile];
        list[index][name] = value;
        setTravellerProfile(list);
    } */

    /* const handleaddclick = ()=>{
        setTravellerProfile([...travellerProfile,{name:'',lastName:'',gender:''}])
    }

    const handleaddclick2 = ()=>{
        setTravellerProfile([...travellerProfile,{cName:'',cLastName:'',cGendergender:'',age:''}])
    }

    const handleaddclick3 = ()=>{
        setTravellerProfile([...travellerProfile,{iNamename:'',iLastNamelastName:'',iGendergender:'',dateOfBirth:''}])
    } */

  /*   const [isSubmit,setSubmit] = useState(false) */

     const handleSubmit = (e)=>{
        e.preventDefault()
        navigate("/payment-methods")
        addDetail(TRAVELLERDETAIL_API_URL+"/add")
        alert("Thanks For filling the details!")
        /* setSubmit(true) */
        setTravellerProfile({
            adults:[],
            name:'',
            lastName:'',
            gender:'',
            cName:'',
            cLastName:'',
            cGender:'',
            age:'',
            iName:'',
            iLastName:'',
            iGender:'',
            dateOfBirth:'',
            mbNo:'',
            email:'',
            pincode:'',
            state:'',
            address:''
        }) 
    }

 
    
    return ( 
        <>
        {/* {!isSubmit && */}
        <div className="container w-50 rounded my-2 p-3">
            <form onSubmit={handleSubmit}>
            <div className="border border-primary rounded mb-2 div" style={{marginTop:'170px'}}>
            <div className="div1 rounded"><h2>Traveller Details</h2></div>
            <div><h5 className="mx-2 mt-2">ADULT(12 yrs<sup>+</sup>)</h5> 
            <div className="border border-1 border-primary rounded mx-2">
                <h5 className="div2 rounded">ADULT 1</h5>
                <div className="mb-2">
                    <input id="fn" className="mx-4 rounded" value={travellerProfile.name} onChange={handleNameChange} placeholder="First and Middle Name" required/>
                    <input id="ln" className="me-4 rounded" value={travellerProfile.lastName} onChange={handleLastnameChange} placeholder="Last Name" required/>
                    <input  type="radio" id="g1" name="gender" value="male" checked={travellerProfile.gender=="male"} onChange={handleGenderChange} />
                    <label className="me-4" htmlFor="g1">Male</label>
                    <input  type="radio" id="g2" name="gender" value="female" checked={travellerProfile.gender=="female"} onChange={handleGenderChange} ></input>
                    <label  htmlFor="g2">Female</label>
                </div>
            </div>  
            <Button/> 
            
            
            </div>
            
            <div><h5 className="m-2">CHILDREN(2 to 12 yrs)</h5></div>
            <div className="border border-1 border-primary rounded mx-2">
                <h5 className="div2 rounded">CHILD 1</h5>
                <div className="mb-2">
                    <input id="cfn" className="mx-4 rounded" value={travellerProfile.cName} onChange={handlecNameChange} placeholder="First and Middle Name" />
                    <input id="cln" className="me-4 rounded" value={travellerProfile.cLastName} onChange={handleCLastnameChange} placeholder="Last Name" />
                    <input  type="radio" id="gc1" name="cGender" value="male" checked={travellerProfile.cGender=="male"} onChange={handleCGenderChange} ></input>
                    <label className="me-4" htmlFor="gc1">Male</label>
                    <input  type="radio" id="gc2" name="cGender" value="female" checked={travellerProfile.cGender=="female"} onChange={handleCGenderChange} ></input>
                    <label  htmlFor="gc2">Female</label>
                    <div >
                        <input type="number" className=" rounded mx-4 mt-2" name="age" placeholder="Age" value={travellerProfile.age} onChange={handleAgeChange} max="12" min="2"/>
                    </div>
                </div>
            </div>
            <ChildButton/>


            <div><h5 className="m-2">INFANT(15days to 2 yrs)</h5></div>
            <div className="border border-1 border-primary rounded mx-2">
                <h5 className="div2 rounded">INFANT 1</h5>
                <div className="mb-2">
                    <input id="ifn" className="mx-4 rounded" value={travellerProfile.iName} onChange={handleINameChange} placeholder="First and Middle Name" />
                    <input id="iln" className="me-4 rounded" value={travellerProfile.iLastName} onChange={handleILastnameChange} placeholder="Last Name" />
                    <input  type="radio" id="gi1" name="iGender" value="male" checked={travellerProfile.iGender=="male"} onChange={handleIGenderChange} ></input>
                    <label className="me-4" htmlFor="gi1">Male</label>
                    <input  type="radio" id="gi2" name="iGender" value="female" checked={travellerProfile.iGender=="female"} onChange={handleIGenderChange} ></input>
                    <label  htmlFor="gi2">Female</label>
                    <div >
                        <input type="date" className=" rounded mx-4 mt-2" name="dateOfBirth" value={travellerProfile.dateOfBirth} onChange={handleDateofBirthChange} min="15 days" max="2 years"/>
                    </div>
                </div>
            </div>
            <InfantButton/>



            <div className="border border-primary rounded m-2">
                <h5 className="mx-3">Booking details will be send to</h5>
                <div className="mx-5 mb-2">
                    <label className="me-3" htmlFor="mb"><b>Mobile No:</b> </label>
                    <input id="mb" className="me-5 rounded" type="tel" name="moblieno" value={travellerProfile.mbNo} onChange={handleMobileNoChange} placeholder="Mobile No" pattern="[0-9]{10}" maxLength={10} />
                    <label className="me-3" htmlFor="eml"><b>Email:</b> </label>
                    <input id="eml" className="rounded" type="email" name="email" value={travellerProfile.email} onChange={handleEmailChange} placeholder="Email" />
                </div>
            </div>
            <div className="border border-primary rounded m-2">
                <h5 className="mx-3">Your Pincode and Address<small> (Required for generating invoice)</small></h5>
                <div className="mb-2">
                    <label htmlFor="pc" className="div3"><b>Pincode:</b></label>
                    <label htmlFor="st" className="div4"><b>State:</b></label>
                    <label htmlFor="ad" ><b>Address:</b></label><br/>
                    <input id="pc" className="rounded me-4 ms-3 mt-1" name="pincode" value={travellerProfile.pincode} onChange={handlePincodeChange} pattern="[0-9]{6}" maxLength={6} />
                    
                    <input id="st" className="rounded me-4" name="state" value={travellerProfile.state} onChange={handleStateChange}/>
                    
                    <input id="ad" className="rounded me-5" name="address" value={travellerProfile.address} onChange={handleAddressChange} />
                </div>
            </div> 

            
             <div className="my-2 text-center">
                <button className="btn btn-primary rounded-3 p-2 m-3" type="submit" style={{textDecoration:'none',color:'white'}} >
                    {/* <Link to={'/payment-methods'}></Link> */}
                    Continue 
                </button>       
            </div>
            </div>
            </form>
        </div> 
       {/*  } */}
        
        {/* {
            message &&
            <div>
                <ToastContainer>
                    <Toast>
                        <ToastHeader>
                            <strong>Info</strong>
                        </ToastHeader>
                        <ToastBody>
                            {message}
                        </ToastBody>
                    </Toast>
                </ToastContainer>
            </div>
        } */}
        <Outlet/>
        </>
    ) 
}
export default TravellerDetails;