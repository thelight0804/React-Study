import {Row, Col} from 'react-bootstrap';


function Product(props){
  return(
    <>
      <Row>
        {props.cellphones.map((a, i) => {
          return (
            <Col sm>
              <img src={process.env.PUBLIC_URL + props.cellphones[i].img} width="80%"/>
              <h4>{props.cellphones[i].title}</h4>
              <p>{props.cellphones[i].content}</p>
              <h5>{props.cellphones[i].price}</h5>
            </Col>
        )})}
      </Row>
   </>
  )
}

export default Product;