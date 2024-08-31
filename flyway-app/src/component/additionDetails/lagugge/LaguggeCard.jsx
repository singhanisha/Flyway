import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CountLagugge from './CountLagugge';

const LaguggeCard = ({lagugge})=>{

    return (
        <Container className="mt-3">
            <Row className="border-bottom">
               
                <Col xs={2}>
                    <div className="m-2">
                        <img  src={lagugge.image} className="rounded" style={{width:'90px', height:'60px'}}/>
                    </div>
                </Col>
                <Col xs={3}>
                    <div className="mt-2 ms-0" >
                        <h6>{lagugge.name}</h6>
                        <h4>&#8377;{lagugge.price}</h4>
                    </div>
                </Col>
                    
               
                <Col>
                    <div className="mt-2"><CountLagugge/> </div>
                </Col>
               
                
            </Row>
        </Container>
        
    
        
    )
}
export default LaguggeCard;