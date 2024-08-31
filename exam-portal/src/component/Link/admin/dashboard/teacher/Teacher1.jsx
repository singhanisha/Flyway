import { PiChalkboardTeacherFill } from "react-icons/pi";
import { MdPending } from "react-icons/md";
import './teacher1.css'
import { Link } from "react-router-dom";

const Teacher1 = ()=>{

    return(
        <>
        <div className="teach">
            <div className="totalteacher">
                <button style={{backgroundColor:'rgb(254, 107, 54)',border:'0px'}}><Link to={'/totalteacher'} style={{textDecoration:'none',color:'black'}}>
                    <h4>Total Teacher</h4>
                    <h5 /* style={{marginLeft:'0px'}} */><PiChalkboardTeacherFill/></h5>
                    <h6>1</h6></Link>
                </button>
                
            </div>
            
            <div className="pendingteacher">
                <button style={{backgroundColor:'rgb(169, 1, 169)',border:'0px'}}><Link to={'/pendingTeacher'} style={{textDecoration:'none',color:'black'}}>
                    <h4>Total Pending Teacher</h4>
                    <h5><MdPending/></h5>
                    <h6>1</h6></Link> 
                 </button>   
            </div>
           
            <div>
                <button style={{marginLeft:'420px',marginTop:'10px'}} className="btn btn-danger"><Link to={'/logout'} style={{textDecoration:'none',color:'white'}}>Logout</Link></button>
            </div>
        </div>
        </>
    )
}
export default Teacher1;