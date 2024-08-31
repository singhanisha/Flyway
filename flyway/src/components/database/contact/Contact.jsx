import { Link, Outlet } from "react-router-dom";
import '../AirlinesInfo/Airlinesinfo.css'

const Contact = ()=>{
    return(
        <div className="container10">
            <ul>
               <li><b>To view Contact details <i><Link to="view">click here</Link></i></b></li>
            </ul>
            <Outlet/> 
        </div>
    )
}
export default Contact;