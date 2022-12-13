import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


function Detail(props){

  let {id} = useParams();
  let dataId = props.cellphones.find(function(x){
    return x.id == id;
  })
  let [alert, setAlert] = useState(true);
  let [amount, setAmount] = useState(0);
  let [numAlert, setNumAlert] = useState(true);

  useEffect(()=>{
    let timer = setTimeout(()=>{setAlert(false)}, 2000);
    isNaN(amount) ? setNumAlert(false) : setNumAlert(true);
    return() => {
      clearTimeout(timer);
    }
    }, [amount])
  
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
            <div>
              {numAlert ? null : <NumAlert/>}
              <p style={{display:'inline'}}>수량 </p>
              <input type="text" placeholder={amount} onChange={(e)=>{
                setAmount(e.target.value);
              }}/>
            </div>
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

function NumAlert(){
  return(
    <div className='alert alert-warning'>
      숫자만 입력이 가능합니다.
    </div>
  )
}


export default Detail