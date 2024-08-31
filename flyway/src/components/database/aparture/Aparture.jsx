import { Link, Outlet, useNavigate } from "react-router-dom";
import '../../login/LoginSection.css';
import '../AirlinesInfo/Airlinesinfo.css'

const Aparture = ()=>{

    return(
        <div className="container10">
            <div>
                <ul>
                    <li><b>To add new Aparture Destination <i><Link to="add">click here</Link></i></b></li>
                </ul>
                <Outlet/>    
            </div>
        </div>
        
    )
}
export default Aparture;
