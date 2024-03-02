import { Link, } from 'react-router-dom'
import airlines from '../../assets/database/airlines_data'
import './FlightResults.css'
import { useState } from 'react';


const FlightResults = ({searchData})=>{

   

    const { origin, destination, departureDate, returnDate, classType, tripType } = searchData;

    return (
        <>
        <div className='text-center mx-3 mb-3'>
            

            <div className='row'>
                <div className='col-md-9'>

                {airlines.map(air=>
                    <div key={air.id} value={air.id} className="card container d-flex justify-content-center mb-3" 
                        style={{height:'100px',width:'1000px',backgroundColor:'rgb(220, 237, 252)'}} >

                        <div className="row ">
                            <div className="col-md-1 mt-3">
                                <img src={air.logo} alt='logo' className="d-inline-block img-fluid rounded-2" 
                                    style={{height:'3rem',width:'3rem'}} />
                            </div>

                            <div className='col-md-2 mt-2'>
                                <h4 className='mt-3'> {air.title} </h4>
                                {/* <Link to={"/viewdetail/"+air.id} key={air.id}> 
                                <p>View Details</p></Link> */}
                            </div>

                            <div className='col-md-3 mt-2'>
                                <h5> {air.departTime} </h5>
                                <p>{origin} - {destination} </p>
                            </div>
                            <div className='col-md-1 mt-4'>
                                <h5> {air.arriveTime} </h5>
                            </div>
                            <div className='col-md-2 mt-2'>
                                <h5> {air.timing} </h5>
                                <p> {air.nonStop} </p>
                            </div>
                            <div className='col-md-1 mt-4 '>
                                <h6>&#8377; {air.farePrice} </h6>
                            </div>
                            <div className='col-md-2 mt-2'>
                                <Link to="/traveller-details" style={{textDecoration:'none'}}>
                                    <button className="rounded rounded-2 p-2 bg-warning" style={{color:'black',fontWeight:'bold'}}> 
                                        Book Now  
                                    </button>
                                </Link> 
                            </div>

                        </div>
                    </div>
                    )}

                    {/* <div className="card container d-flex justify-content-center mb-3" style={{height:'80px',width:'900px',backgroundColor:'lightskyblue'}} >
                        <div className="row">
                            <div className="col-md-2 mt-3">
                                <img src={alaska_logo} alt='alaska' className="d-inline-block img-fluid rounded-2" 
                                    style={{height:'3rem',width:'3rem'}} />
                            </div>
                            <div className='col-md-2 mt-2'>
                                <h4> Alaska </h4>
                                <p>View Details</p>
                            </div>
                            <div className='col-md-2 mt-2'>
                                <h5>03:40</h5>
                                <p>{origin} - {destination} </p>
                            </div>
                            <div className='col-md-1 mt-4'>
                                <h5>05:45</h5>
                            </div>
                            <div className='col-md-2 mt-2'>
                                <h5>0.2h 05m</h5>
                                <p>Non-Stop</p>
                            </div>
                            <div className='col-md-1 mt-4 '>
                                <h6>&#8377; 5398</h6>
                            </div>
                            <div className='col-md-2 mt-4'>
                                <button className='btn btn-warning'>Book Now</button>
                            </div>

                        </div>
                    </div>

                    <div className="card container d-flex justify-content-center mb-3" style={{height:'80px',width:'900px',backgroundColor:'lightskyblue'}} >
                        <div className="row">
                            <div className="col-md-2 mt-3">
                                <img src={delta_logo} alt='delta' className="d-inline-block img-fluid rounded-2" 
                                    style={{height:'3rem',width:'3rem'}} />
                            </div>
                            <div className='col-md-2 mt-2'>
                                <h4> Delta </h4>
                                <p>View Details</p>
                            </div>
                            <div className='col-md-2 mt-2'>
                                <h5>05:30</h5>
                                <p>{origin} - {destination} </p>
                            </div>
                            <div className='col-md-1 mt-4'>
                                <h5>07:35</h5>
                            </div>
                            <div className='col-md-2 mt-2'>
                                <h5>0.2h 05m</h5>
                                <p>Non-Stop</p>
                            </div>
                            <div className='col-md-1 mt-4 '>
                                <h6>&#8377; 5407</h6>
                            </div>
                            <div className='col-md-2 mt-4'>
                                <button className='btn btn-warning'>Book Now</button>
                            </div>

                        </div>
                    </div>

                    <div className="card container d-flex justify-content-center mb-3" style={{height:'80px',width:'900px',backgroundColor:'lightskyblue'}} >
                        <div className="row">
                            <div className="col-md-2 mt-3">
                                <img src={expedia_logo} alt='expedia' className="d-inline-block img-fluid rounded-2" 
                                    style={{height:'3rem',width:'3rem'}} />
                            </div>
                            <div className='col-md-2 mt-2'>
                                <h4> Expedia </h4>
                                <p>View Details</p>
                            </div>
                            <div className='col-md-2 mt-2'>
                                <h5>20:10</h5>
                                <p>{origin} - {destination} </p>
                            </div>
                            <div className='col-md-1 mt-4'>
                                <h5>22:25</h5>
                            </div>
                            <div className='col-md-2 mt-2'>
                                <h5>0.2h 15m</h5>
                                <p>Non-Stop</p>
                            </div>
                            <div className='col-md-1 mt-4 '>
                                <h6>&#8377; 6500</h6>
                            </div>
                            <div className='col-md-2 mt-4'>
                                <button className='btn btn-warning'>Book Now</button>
                            </div>

                        </div>
                    </div>

                    <div className="card container d-flex justify-content-center mb-3" style={{height:'80px',width:'900px',backgroundColor:'lightskyblue'}} >
                        <div className="row">
                            <div className="col-md-2 mt-3">
                                <img src={justfly_logo} alt='justfly' className="d-inline-block img-fluid rounded-2" 
                                    style={{height:'3rem',width:'3rem'}} />
                            </div>
                            <div className='col-md-2 mt-2'>
                                <h4> Justfly.com </h4>
                                <p>View Details</p>
                            </div>
                            <div className='col-md-2 mt-2'>
                                <h5>19:10</h5>
                                <p>{origin} - {destination} </p>
                            </div>
                            <div className='col-md-1 mt-4'>
                                <h5>21:25</h5>
                            </div>
                            <div className='col-md-2 mt-2'>
                                <h5>0.2h 15m</h5>
                                <p>Non-Stop</p>
                            </div>
                            <div className='col-md-1 mt-4 '>
                                <h6>&#8377; 7500</h6>
                            </div>
                            <div className='col-md-2 mt-4'>
                                <button className='btn btn-warning'>Book Now</button>
                            </div>

                        </div>
                    </div>

                    <div className="card container d-flex justify-content-center mb-3" style={{height:'80px',width:'900px',backgroundColor:'lightskyblue'}} >
                        <div className="row">
                            <div className="col-md-2 mt-3">
                                <img src={priceline_logo} alt='priceline' className="d-inline-block img-fluid rounded-2" 
                                    style={{height:'3rem',width:'3rem'}} />
                            </div>
                            <div className='col-md-2 mt-2'>
                                <h4> Priceline </h4>
                                <p>View Details</p>
                            </div>
                            <div className='col-md-2 mt-2'>
                                <h5>20:10</h5>
                                <p>{origin} - {destination} </p>
                            </div>
                            <div className='col-md-1 mt-4'>
                                <h5>22:25</h5>
                            </div>
                            <div className='col-md-2 mt-2'>
                                <h5>0.2h 15m</h5>
                                <p>Non-Stop</p>
                            </div>
                            <div className='col-md-1 mt-4 '>
                                <h6>&#8377; 8000</h6>
                            </div>
                            <div className='col-md-2 mt-4'>
                                <button className='btn btn-warning'>Book Now</button>
                            </div>

                        </div>
                    </div> */}


                </div>

                {/* <BookingModal isOpen={isModalOpen} onClose={handleCloseModal} bookingDetails={selectedFlight} /> */}


                <div className='col-md-3 ' style={{paddingRight:'20px'}}>
                    <div className='hero-img' style={{height:'600px'}}>
                        <p className='text-center text-light fs-4 font-weight-bold mt-5 float-end' 
                            style={{fontFamily: "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif"}}>
                                Get Up to INR 5000 off on International Flights Booking
                        </p>   
                    </div>
                </div>

            </div>

        </div>

    

    
</>
  
    );

}

export default FlightResults;