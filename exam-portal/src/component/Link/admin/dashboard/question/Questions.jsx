import { Link, Outlet } from 'react-router-dom';
import '../course/Course.css'

const Questions = ()=>{


    
    return(
        <div className="container01">
        <div style={{display:'flex'}}> 
            <h3 style={{color:"blue",margin:'10px'}}>This Component is for Adding and Viewing Questions</h3>
            <button style={{marginLeft:'500px',marginTop:'10px'}} className="btn btn-danger"><Link to={'/logout'} style={{textDecoration:'none',color:'white'}}>Logout</Link></button>
        </div>
        <button type="button" className="btn01" style={{marginLeft:'540px'}}><Link to={'addQuestion'} style={{textDecoration:'none',color:'whitesmoke'}}><b>Add Question</b></Link></button>
        <button type="button" className="btn02"><Link to={'view'}  style={{textDecoration:'none',color:'whitesmoke'}}><b>View Question</b></Link></button>
    <Outlet/>
    </div>
    )
}
export default Questions;