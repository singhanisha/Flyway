import { Outlet,Link } from "react-router-dom";
import Sidebar from "../components/database/Sidebar";
import './DatabaseNavBar.css'

const DatabaseNavBar = ()=>{

    return(
        <div>
            {/* <nav  >
                <ul className="navbar-nav"> */}
                <Sidebar>
                {/* <b className="b my-auto ms-3 me-4 text-light">Database</b>
                    <li className="navbar-item">
                        <Link className="nav-link active" to='/dashboard'>Dashboard</Link>
                    </li>
                    <li className="navbar-item">
                        <Link className="nav-link active" to='/airline'>Airline</Link>
                    </li>
                    <li className="navbar-item">
                        <Link className="nav-link" to='/aparture'>Aparture</Link>
                    </li>
                    <li className="navbar-item">
                        <Link className="nav-link" to='/departure'>Departure</Link>
                    </li>
                    <li className="navbar-item">
                        <Link className="nav-link" to='/airlinesinfo'>AirlinesInfo</Link>
                    </li>
                    <li className="navbar-item li">
                        <Link className="nav-link " to='/travellerdetail'>Travellerdetail</Link>
                    </li>
                    <li className="navbar-item li">
                        <Link className="nav-link " to='/signup1'>SignUp</Link>
                    </li>
                    <li className="navbar-item li">
                        <Link className="nav-link " to='/login1'>Login</Link>
                    </li> */}
                    </Sidebar>
                {/* </ul>
            </nav>
            <Outlet/> */}
        </div>
    )
}
export default DatabaseNavBar;