import { Outlet } from "react-router-dom";
import LaguggeList from "./LaguggeList";

const Lagugge = ()=>{
    return(
        <div>
            <LaguggeList/>
            <Outlet/>
        </div>
        
    ) 

}
export default Lagugge;