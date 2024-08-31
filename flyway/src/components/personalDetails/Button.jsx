import { createContext, useState } from "react";
import AdultSection from "./data/adult/AdultSection";
import { Link, Outlet } from "react-router-dom";
import Travel from "./Travel";
import ChildButton from "./ChildButton";
import InfantButton from "./InfantButton";


export default function Button(){


  const [count,setCount] = useState(1);

  const [adults,setAdults]=useState([])

  const [isShown, setIsShown] = useState(false);


  const handleClick =()=>{
    setIsShown(true)
    setAdults([...adults,<AdultSection onClick={count}/>])
    setCount(count+1)
  }

  return (
    <>
    <div className="container w-50 rounded my-2 p-3">
        <div className="border border-primary rounded mb-2 div00" style={{marginTop:'170px'}}>
          <div className="div11 rounded"><h2>Traveller Details</h2></div>
            <div><h5 className="mx-2 mt-2">ADULT(12 yrs<sup>+</sup>)</h5> 
              <div className="border border-1 border-primary rounded mx-2 mb-1"></div>
                {isShown && 
                  <div>
                    {adults} 
                  </div>
                }  
                <button type='button' className="btn btn-primary btn-block m-2" style={{margin:'200px'}} onClick={handleClick}>+Add Adult</button>
                <div><h5 className="m-2">CHILDREN(2 to 12 yrs)</h5></div>
                <div className="border border-1 border-primary rounded mx-2 mb-1"></div>
                <ChildButton/>
                <div><h5 className="m-2">INFANT(15days to 2 yrs)</h5></div>
                <div className="border border-1 border-primary rounded mx-2 mb-1"></div>
                <InfantButton/>
                <Travel/>
            </div>
        </div>
    </div>
    </>
  )
           
}