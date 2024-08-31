import Barchart from './Barchart';
import {useNavigate} from 'react-router-dom'
import './Dashboard.css'
import App from './Pie';

const Dashboard = ()=>{

    const navigate = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();
        navigate('/')
    }

    return(
        <div className="container0">
            <form onSubmit={handleSubmit}>
            
            <div className='head'>
                <h2 className='ms-2'>Dashboard</h2>
                <button style={{marginLeft:'1040px'}} className='btn btn-danger me-1'>Logout</button>
            </div>
            
            <div className='div'>
                <div className='div4'>
                    <h4>1000</h4>
                    <h6>Airline</h6>
                </div>
                <div className='div1'>
                    <h4>1,461</h4>
                    <h6>Travelers</h6>
                </div>
                <div className='div2'>
                    <h4>2,480</h4>
                    <h6>Bookings</h6>
                </div>
                <div className='div113'>
                    <h4>&#8377; 7,850</h4>
                    <h6>Earning</h6>
                </div>
            </div>
            
            <div style={{display:'flex',marginTop:'40px'}}>
                <Barchart/>
                <div style={{marginLeft:'60px'}}><App/></div>
                
            </div>

            </form>
        </div>
    )
}
export default Dashboard;
