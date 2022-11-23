import {useState} from 'react';
import {product} from "../data/data";

function Detail(){
  let [cellphones] = useState(product);
  let [imageURL] = useState(["/img/Row_Galaxy-Z-Flip4.png", "/img/Row_Galaxy-Z-Fold4.png", "/img/Row_Galaxy-S22.png"])

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img
              src={process.env.PUBLIC_URL + imageURL[0]}
              width="100%"
            />
          </div>
          <div className="col-md-6">
            <h4 className="pt-5">{cellphones[0].title}</h4>
            <p>{cellphones[0].content}</p>
            <p>{cellphones[0].price}\</p>
            <button className="btn btn-danger">주문하기</button>
          </div>
        </div>
      </div>
    </>
  );
}


export default Detail