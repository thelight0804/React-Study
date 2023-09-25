import {Row, Col} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Product(props){
  let navigate = useNavigate();
  return(
    <div key="{i}">
      <Row>
        {props.cellphones.map((a, i) => {
          return (
            <Col sm>
              <img src={process.env.PUBLIC_URL + props.cellphones[i].img} width="80%"
              onClick={()=>{
                navigate('/detail/'+props.cellphones[i].id)
              }} />
              <h4>{props.cellphones[i].title}</h4>
              <p>{props.cellphones[i].content}</p>
              <h5>{props.cellphones[i].price}</h5>
            </Col>
        )})}
      </Row>
   </div>
  )
}

export default Product;