import CountMeal from "./CountMeal";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const MealCard = ({meal})=>{

    return (
        <Container className="mt-3">
            <Row className="border-bottom">
               
                <Col xs={2}>
                    <div className="m-2">
                        <img  src={meal.image} className="rounded" style={{width:'90px', height:'90px'}}/>
                    </div>
                </Col>
                <Col xs={5}>
                    <div className="mt-2 ms-0" >
                        <h6>{meal.name}</h6>
                        <h4>&#8377;{meal.price}</h4>
                    </div>
                </Col>
                    
               
                <Col>
                    <div className="mt-2"><CountMeal/> </div>
                </Col>
               
                
            </Row>
        </Container>
        
    
        
    )
}
export default MealCard;