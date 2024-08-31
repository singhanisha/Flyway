import { useState } from "react";
import ChildrenSection from "./data/children/ChildrenSection";
import { Link, Outlet } from "react-router-dom";

export default function ChildButton(){

  const [count,setCount] = useState(1)

  const [childs,setChilds]=useState([])

    const [isShown, setIsShown] = useState(false);
  
    const handleClick =(e)=>{
      setIsShown(true)
      setChilds([...childs,<ChildrenSection onClick={count}/>])
      setCount(count+1)
    }
  
    return (
      <div>
          <div>
            {isShown && 
            <div>
              {childs}
            </div>
            }
          </div>
        <button type="button" className="btn btn-primary m-2" onClick={handleClick}>+Add Child</button>
        {/* <button type='button' className="btn btn-primary btn-block mt-3" onClick={handleClick}>
                <Link style={{textDecoration:'none',color:'white'}} to="add2" >
                    ADD Child
                </Link>
            </button>
            <Outlet/> */}
        </div>
    )
  
}