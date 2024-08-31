import { Outlet } from "react-router-dom";
import MealList from "./MealList";

const Meals1 = ()=>{
    return(
        <div>
            <MealList/>
            <Outlet/>
        </div>
        
    ) 
}
export default Meals1;