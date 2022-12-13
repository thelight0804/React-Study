import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


function Detail(props){

  useEffect(()=>{
    setTimeout(()=>{setAlert(false)}, 2000);
  })

  

  let {id} = useParams();
  let dataId = props.cellphones.find(function(x){
    return x.id == id;
  })
  let [alert, setAlert] = useState(true);
  return (
    <>
      <div className="container">
        {alert ? <Sale/> : null}
        <div className="row">
          <div className="col-md-6">
            <img
              src={process.env.PUBLIC_URL + dataId.img}
              width="100%"
            />
          </div>
          <div className="col-md-6">
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

function Sale(){
  return(
    <div className='alert alert-warning'>
    2초이내 구매시 할인!
    </div>
  )
}


export default Detail