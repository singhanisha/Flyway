import { Link, Outlet } from "react-router-dom";
import '../AirlinesInfo/Airlinesinfo.css'

const SignUp = ()=>{
    return(
        <div className="container10">
            <ul>
            <li><b>To view SignUp Details <i><Link to="view">click here</Link></i></b></li>
            </ul>
            <Outlet/> 
        </div>
    )
}
export default SignUp;