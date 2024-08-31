import { useNavigate } from "react-router-dom";
import { useState } from "react";
import AdultSection from "./data/adult/AdultSection";

const Travel = ()=>{

    const navigate = useNavigate();

    const [info,setInfo] = useState({
        mbNo:'',
        email:'',
        pincode:'',
        state:'',
        address:''
    })

    const [message,setMessage] = useState('')

    const [show,setShow] = useState(true)

    //restful web service url
    const TRAVEL_API_URL = "http://localhost:8080/api/travel"

    const travelInfo = (serverurl)=>{
        fetch( serverurl,{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                'Accept':'application/json'
            },
            body:JSON.stringify({ 
                mbNo:info.mbNo,
                email:info.email,
                pincode:info.pincode,
                address:info.address,
                state:info.state
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

    const [save,setSave] = useState();

    const handleMobileNoChange = (e)=>{
        setInfo({...info,mbNo:e.target.value})
    }
    const handleEmailChange = (e)=>{
        setInfo({...info,email:e.target.value})
    }
    const handlePincodeChange = (e)=>{
        setInfo({...info,pincode:e.target.value})
    }
    const handleStateChange = (e)=>{
        setInfo({...info,state:e.target.value})
    }
    const handleAddressChange = (e)=>{
        setInfo({...info,address:e.target.value})
    }
    
    /* const onclick = ()=>{
        setSave(<AdultSection/>);
    } */

    const handleSubmit = (e)=>{
        e.preventDefault();
        travelInfo(TRAVEL_API_URL+"/add-travel");
        alert("Thanks for filling the details");
        navigate("/payment-methods");
        /* setInfo({
            mbNo:'',
            email:'',
            pincode:'',
            state:'',
            address:''
        }) */
    }

    return (
        <>
       <div>
        <form onSubmit={handleSubmit}>
        <div className="border border-primary rounded m-2">
                <h5 className="mx-3">Booking details will be send to</h5>
                <div className="mx-5 mb-2">
                    <label className="me-3" htmlFor="mb"><b>Mobile No:</b> </label>
                    <input id="mb" className="me-5 rounded" type="tel" name="moblieno" value={info.mbNo} onChange={handleMobileNoChange} placeholder="Mobile No" pattern="[0-9]{10}" maxLength={10} />
                    <label className="me-3" htmlFor="eml"><b>Email:</b> </label>
                    <input id="eml" className="rounded" type="email" name="email" value={info.email} onChange={handleEmailChange} placeholder="Email" />
                </div>
            </div>
            <div className="border border-primary rounded m-2">
                <h5 className="mx-3">Your Pincode and Address<small> (Required for generating invoice)</small></h5>
                <div className="mb-2">
                    <label htmlFor="pc" className="div13"><b>Pincode:</b></label>
                    <label htmlFor="st" className="div14"><b>State:</b></label>
                    <label htmlFor="ad" ><b>Address:</b></label><br/>
                    <input id="pc" className="rounded me-4 ms-3 mt-1" name="pincode" value={info.pincode} onChange={handlePincodeChange} pattern="[0-9]{6}" maxLength={6} />
                    <input id="st" className="rounded me-4" name="state" value={info.state} onChange={handleStateChange}/>
                    <input id="ad" className="rounded me-5" name="address" value={info.address} onChange={handleAddressChange} />
                </div>
            </div> 

            
             <div className="my-2 text-center">
                <button className="btn btn-primary rounded-3 p-2 m-3" type="submit" style={{textDecoration:'none',color:'white'}} /* onClick={onclick} */>
                    Continue 
                </button>       
            </div>
        </form> 
        </div>
        </>    
    )

}
export default Travel;
