import {useState} from 'react';
import { useParams } from 'react-router-dom';

function Detail(props){
  let {id} = useParams();
  let dataId = props.cellphones.find(function(x){
    return x.id == id;
  })
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img
              src={process.env.PUBLIC_URL + dataId.img}
              width="100%"
            />
          </div>
          <div className="col-md-6">
            {console.log(dataId)}
            <h4 className="pt-5">{dataId.title}</h4>
            <p>{dataId.content}</p>
            <p>{dataId.price}\</p>
            <button className="btn btn-danger">주문하기</button>
          </div>
        </div>
      </div>
    </>
  );
}


export default Detail