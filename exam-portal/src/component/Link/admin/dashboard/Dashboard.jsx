import { useNavigate } from "react-router-dom";
import './DashboardNav.css'
import Barchart from "./Barchart";
import Linechart from "./Linechart";
import { PiChalkboardTeacherFill } from "react-icons/pi";
import { PiStudentFill } from "react-icons/pi";
import { RiQuestionAnswerFill } from "react-icons/ri";
import { FaDiscourse } from "react-icons/fa6";

const Dashboard = () =>{
    const navigate = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();
        navigate('/logout')
    }

    return(
        <div className="container11">
            <form onSubmit={handleSubmit}>
            
            <div className="h2">
                <h2>Dashboard</h2>
                <button style={{marginLeft:'1045px'}} className="btn btn-danger">Logout</button>
            </div>
            
            <div className="maindiv">
                <div className="div11">
                    <PiChalkboardTeacherFill/>
                    <h4>20</h4>
                    <h6>Teacher</h6>
                </div>
                <div className="div12">
                    <PiStudentFill/>
                    <h4>10</h4>
                    <h6>Student</h6>
                </div>
                <div className="div13">
                    <FaDiscourse/>
                    <h4>15</h4>
                    <h6>Course</h6>
                </div>
                <div className="div14">
                    <RiQuestionAnswerFill/>
                    <h4>25</h4>
                    <h6>Question</h6>
                </div>
            </div>
            <div style={{display:'flex',marginTop:'50px'}}>
                
                <Linechart/>
                <Barchart/>
            </div>
        </form>
    </div>
        
    )
}
export default Dashboard;