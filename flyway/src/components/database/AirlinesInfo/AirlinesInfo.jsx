import { Link, Outlet, useNavigate } from "react-router-dom";
import '../../login/LoginSection.css';
import './Airlinesinfo.css';

const AirlinesInfo = ()=>{

    return(
        <div className="container10">
            <div>
                <ul>
                    <li><b>To add new Airline and its view <i><Link to="add">click here</Link></i></b></li>
                    <li><b>To view all details about Airline <i><Link to="view">click here</Link></i></b></li>
                </ul>
                <Outlet/>    
            </div>
        </div>
        
    )
}
export default AirlinesInfo;
