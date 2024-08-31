import { useEffect, useState } from "react";

const AdultView = ()=>{

    const [adult,setAdult] = useState([]);
    const [travel,setTravel] = useState([]);
    const [ message,setMessage] = useState('');
    const [ show,setShow] = useState(true)

    const TRAVEL_API_URL = "http://localhost:8080/api/travel";
    const ADULT_API_URL = "http://localhost:8080/api/adults";

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

    //adult
    const getAllInfo1 = (serverUrl)=>{
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
            .then( data=> setAdult(data)) 
            .catch( err=> console.error(err)) 
    }
    useEffect( ()=>{

        getAllInfo1(ADULT_API_URL+"/all-adult");

    },[adult]);

    return(
        <>
        <div>
            <table className="table mb-5">
                <thead>
                    <tr style={{textAlign:'center'}}>
                        <th style={{backgroundColor:'rgb(194, 72, 16)',color:'white'}}>Adult Name</th>
                        <th style={{backgroundColor:'rgb(194, 72, 16)',color:'white'}}>Adult Gender</th>
                        <th style={{backgroundColor:'rgb(194, 72, 16)',color:'white'}}>Email</th>
                        <th style={{backgroundColor:'rgb(194, 72, 16)',color:'white'}}>Mobile Number</th>
                        <th style={{backgroundColor:'rgb(194, 72, 16)',color:'white'}}>Address</th>
                        <th style={{backgroundColor:'rgb(194, 72, 16)',color:'white'}}>State</th>
                        <th style={{backgroundColor:'rgb(194, 72, 16)',color:'white'}}>Pincode</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        adult.map(a=> <tr key={a.id} style={{textAlign:'center'}}>
                            <td style={{backgroundColor:'wheat'}}>{a.name} {a.lastName}</td>
                            <td style={{backgroundColor:'wheat'}}>{a.gender}</td>
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
export default AdultView;