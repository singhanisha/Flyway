import { useState } from "react";
import departCities from "../../assets/database/searchdata/depart_cities";
import arrivalCities from "../../assets/database/searchdata/arrival_cities";

const FlightSearch = ({onSearch})=>{

  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [tripClass, setTripClass] = useState('Economy');
  const [tripType, setTripType] = useState('Round Trip');

  const handleSearch = () => {
    onSearch({ origin, destination, departureDate, returnDate, tripClass, tripType });
  };

  const handleDateChange = (event) => {
    setDepartureDate(event.target.value);
  };

  const today = new Date().toISOString().split('T')[0];


    return (

        <div className="flight-search">
            <form>

              <div className='row mb-3 container' style={{margin:'auto',width:'900px'}}>
                <div className="col-md-3 mt-3" >
                <label htmlFor="origin" className="form-label"  style={{fontSize:'20px',fontWeight:'bold',color:'midnightblue'}}>
                    From
                  </label>
                  <select className="form-select" id="origin" value={origin} onChange={(e) => setOrigin(e.target.value)}  
                           style={{fontSize:'20px'}} required >
                          <option value="">Select Origin</option>
                          {departCities.map((airport, index) => (
                          <option key={index} value={airport.name}>{airport.name}</option>
                    ))}                    
                  </select>  
                              
                </div>

                <div className="col-md-3 form-check mt-3" >
                  <label htmlFor="destination" className="form-label"  style={{fontSize:'20px',fontWeight:'bold',color:'midnightblue'}}>
                    To
                  </label>
                  <select className="form-select" id="destination" value={destination} 
                      onChange={(e) => setDestination(e.target.value)} style={{fontSize:'20px'}} required>
                          <option value="">Select Destination</option>
                          {arrivalCities.map((airport, index) => (
                          <option key={index} value={airport.name}>{airport.name}</option>
                    ))}                    
                  </select>                  
                </div>

                <div className="col-md-3 form-check mt-3" >
                  <label htmlFor="departureDate" className="form-label"  style={{fontSize:'20px',fontWeight:'bold',color:'midnightblue'}}>
                    Depart Date
                  </label>
                  <input type="date" className="form-control" id="departureDate" value={departureDate} min={today} 
                        onChange={handleDateChange}
                      //  onChange={(e) => setDepartureDate(e.target.value)} min="2024-02-20"
                        style={{fontSize:'20px'}}  required />
                </div>

                {tripType === 'Round-trip' && (

                <div className="col-md-3 form-check mt-3" >
                  <label htmlFor="returnDate" className="form-label"  style={{fontSize:'20px',fontWeight:'bold',color:'midnightblue'}}>
                    Return Date
                  </label>
                  <input  type="date" className="form-control" id="returnDate" value={returnDate}  min={today} 
                        onChange={(e) => setReturnDate(e.target.value)}
                        style={{fontSize:'20px'}} />
                </div>

                )}

              </div> 

              <div className='row mb-3 container text-center' style={{margin:'auto',width:'400px'}}>
                <div className='col mt-6' >
                  <label htmlFor="classType" className="form-label"  style={{fontSize:'20px',fontWeight:'bold',color:'midnightblue'}}>
                    Travel Class
                  </label>
                  <select className="form-select" id="classType" value={tripClass} 
                          onChange={(e) => setTripClass(e.target.value)} style={{fontSize:'20px'}} required >
                            <option value="Economy">Economy</option>
                            <option value="Business">Business Class</option>
                            <option value="First">First Class</option>                
                  </select>     
                </div>

                <div className='col mt-6' >
                  <label htmlFor="tripType" className="form-label"  style={{fontSize:'20px',fontWeight:'bold',color:'midnightblue'}}>
                    Trip Type
                  </label>
                  <select className="form-select" id="tripType" value={tripType} 
                          onChange={(e) => setTripType(e.target.value)} style={{fontSize:'20px'}} required >
                            <option value="One-way">One-way</option>
                            <option value="Round-trip">Round-trip</option>                
                  </select>     
                </div>
              </div> 


              <div className='row mb-3 container text-center' style={{margin:'auto'}}>
                <div className='col mt-5'>
                  <button onClick={handleSearch} className="btn btn-primary rounded-3 p-2" 
                          style={{fontSize:'20px',fontWeight:'bold'}} >
                            Search Flights                           
                  </button>
                </div>
              </div> 


            </form>

        </div> 

    );

}

export default FlightSearch;