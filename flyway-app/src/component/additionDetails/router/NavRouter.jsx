import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import Seats from "../seats1/Seats";
import Lagugge from "../lagugge/Lagugge";
import Meals1 from "../meals/Meals1";
import MealList from "../meals/MealList";

const NavRouter = ()=>{

    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<NavBar/>}>
                    <Route path='/seats' element={<Seats/>}/>
                    <Route path='/meals' element={<Meals1/>}/>
                    <Route path='/lagugge' element={<Lagugge/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default NavRouter;