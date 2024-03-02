import { useNavigate, useParams } from 'react-router-dom'
import '../login/LoginSection.css'
import airlines from '../../assets/database/airlines/airlines_info'

const AirlinesDesc = ()=>{

    const {aid} = useParams()
    const navigate = useNavigate()

    const airlineObj = airlines.find(air=>air.id==aid)

    const handleClick = ()=>{
        navigate("/")
    }

    return(
        <div className='blur-background'>
            <div className="container" style={{marginTop:'200px'}}>
                <div className="row justify-content-center">
                    <div className="col-md-6" >
                        <div className="card mb-5">
                            <div className="card-header d-inline">
                                <button className='btn-close row-1 float-start' onClick={handleClick}></button>
                                <h1 className='d-inline-block row-6'>{airlineObj.name}</h1>
                            </div>

                            <div className="card-body" style={{maxHeight:'500px',overflowY:'auto'}}>
                                <div>
                                    <p>
                                        {airlineObj.information}
                                    </p>
                                </div>
                                <div>
                                    <h4>Rating</h4>
                                    <p> {airlineObj.rating} </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )

}

export default AirlinesDesc;