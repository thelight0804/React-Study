import { useState } from 'react';
import {Row, Col} from 'react-bootstrap';

import {product} from "./data.js";

function Product(){
  let [cellphones] = useState(product);
  let [imageURL] = useState(["/img/Row_Galaxy-Z-Flip4.png", "/img/Row_Galaxy-Z-Fold4.png", "/img/Row_Galaxy-S22.png"])
  return(
    <>
      <Row>
        {cellphones.map((a, i) => {
          return (
            <Col sm>
              <img src={process.env.PUBLIC_URL + imageURL[i]} width="80%"/>
              <h4>{cellphones[i].title}</h4>
              <p>{cellphones[i].content}</p>
              <h5>{cellphones[i].price}</h5>
            </Col>
        )})}
      </Row>
   </>
  )
}

export default Product;