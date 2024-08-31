import { useEffect, useState } from "react";

const ChildView = ()=>{

    const [child,setChild] = useState([]);
    const [travel,setTravel] = useState([]);
    const [ message,setMessage] = useState('');
    const [ show,setShow] = useState(true)

    const CHILDRENSECTION_API_URL = "http://localhost:8080/api/childrensections";
    const TRAVEL_API_URL = "http://localhost:8080/api/travel";

    const getAllInfo = (serverUrl)=>{

        fetch( serverUrl,{
            method:"GET",
            headers:{ 
                'Accept':'application/json'
            }
        }) 
            .then( response=>{
                if(response.ok)
                    return response.json()
                else if(response.status=="404")
                    return response.json()
                else
                    throw Error(`Server Error ${response.status}`)
            }) 
            .then( data=> setTravel(data)) 
            .catch( err=> console.error(err)) 
    }
    useEffect( ()=>{

        getAllInfo(TRAVEL_API_URL+"/all-travel");

    },[travel]);

    //child
    const getAllInfo2 = (serverUrl)=>{
        fetch( serverUrl,{
            method:"GET",
            headers:{ 
                'Accept':'application/json'
            }
        }) 
            .then( response=>{
                if(response.ok)
                    return response.json()
                else if(response.status=="404")
                    return response.json()
                else
                    throw Error(`Server Error ${response.status}`)
            }) 
            .then( data=> setChild(data)) 
            .catch( err=> console.error(err)) 
    }
    useEffect( ()=>{

        getAllInfo2(CHILDRENSECTION_API_URL+"/all-childrensection");

    },[child]);

    return(
        <>
        <div>
            <table className="table mb-5">
                <thead>
                    <tr style={{textAlign:'center'}}>
                        <th style={{backgroundColor:'rgb(194, 72, 16)',color:'white'}}>Child Name</th>
                        <th style={{backgroundColor:'rgb(194, 72, 16)',color:'white'}}>Child Gender</th>
                        <th style={{backgroundColor:'rgb(194, 72, 16)',color:'white'}}>Child Age</th>
                        <th style={{backgroundColor:'rgb(194, 72, 16)',color:'white'}}>Email</th>
                        <th style={{backgroundColor:'rgb(194, 72, 16)',color:'white'}}>Mobile Number</th>
                        <th style={{backgroundColor:'rgb(194, 72, 16)',color:'white'}}>Address</th>
                        <th style={{backgroundColor:'rgb(194, 72, 16)',color:'white'}}>State</th>
                        <th style={{backgroundColor:'rgb(194, 72, 16)',color:'white'}}>Pincode</th>
                    </tr>
                </thead>
                <tbody>
                {
                    child.map(c=> <tr style={{textAlign:'center'}}>
                        <td style={{backgroundColor:'wheat'}}>{c.childname} {c.childlastName}</td>
                        <td style={{backgroundColor:'wheat'}}>{c.childgender}</td>
                        <td style={{backgroundColor:'wheat'}}>{c.cage}</td>
                        <td style={{backgroundColor:'wheat'}}>{ travel.map(t=> <tr key={t.id}>
                                                    <td style={{border:'none'}}>{t.email}</td></tr>)}</td>
                        <td style={{backgroundColor:'wheat'}}>{ travel.map(t=> <tr key={t.id}>
                                                    <td style={{border:'none'}}>{t.mbNo}</td></tr>)}</td>
                        <td style={{backgroundColor:'wheat'}}>{ travel.map(t=> <tr key={t.id}>
                                                    <td style={{border:'none'}}>{t.address}</td></tr>)}</td>
                        <td style={{backgroundColor:'wheat'}}>{ travel.map(t=> <tr key={t.id}>
                                                    <td style={{border:'none'}}>{t.state}</td></tr>)}</td>
                        <td style={{backgroundColor:'wheat'}}>{ travel.map(t=> <tr key={t.id}>
                                                    <td style={{border:'none'}}>{t.pincode}</td></tr>)}</td>
                    </tr>)
                }
                </tbody>
            </table>
        </div>
        </>
    )
}
export default ChildView;