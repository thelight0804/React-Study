import './detail.css';

import React, { useEffect, useState, } from 'react';
import { useParams } from 'react-router-dom';

import {Nav} from 'react-bootstrap';

function Detail(props){
  let[fade, setFade] = useState('');

  useEffect(()=>{
    let timer = setTimeout(()=>{ setFade('end');}, 100);

    return ()=>{
      clearTimeout(timer);
      setFade('');
    }
  }, [])

  let {id} = useParams();
  let dataId = props.cellphones.find(function(x){
    return x.id == id;
  })
  let [alert, setAlert] = useState(true);
  let [amount, setAmount] = useState(0);
  let [numAlert, setNumAlert] = useState(true);
  let [tab, setTab] = useState(0);

  useEffect(()=>{
    let timer = setTimeout(()=>{setAlert(false)}, 2000);
    isNaN(amount) ? setNumAlert(false) : setNumAlert(true);
    return() => {
      clearTimeout(timer);
    }
    }, [amount])
  
  return (
    <div className={`start ${fade}`}>
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
          <h3>구매시 유의사항</h3>
        </div>
          <Nav variant="tabs" defaultActiveKey="link-1" >
            <Nav.Item>
                <Nav.Link eventKey="link-1" className='nav' onClick={()=>{ setTab(0); }}>
                  배송정책 안내</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-2" className='nav'onClick={()=>{ setTab(1); }}>
                  교환/반품/AS 안내</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-3" className='nav'onClick={()=>{ setTab(2); }}>
                  교환/반품 불가 안내</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-4" className='nav'onClick={()=>{ setTab(3); }}>
                  판매자 정보</Nav.Link>
            </Nav.Item>
          </Nav>
          <TabContent tab = {tab} />
      </div>
    </div>
  );
}

function TabContent({tab}){
  let[fade, setFade] = useState('');

  useEffect(()=>{
    let timer = setTimeout(()=>{ setFade('end');}, 100);

    return ()=>{
      clearTimeout(timer);
      setFade('');
    }
  }, [tab])

  return (
    <div className={`start ${fade}`}>{
      [ <div className='link'>
          <h4 className='link-title'>배송지역</h4>
          <h>도서 산간지역은 배송이 제한될 수 있습니다.</h>
      </div>,
      <div className='link'>
          <h4 className='link-title'>교환/반품 기간</h4>
          <h>단순변심에 의한 상품의 교환ㆍ반품은 실제 상품 등을 수령하신 날부터 7일 이내에 가능합니다. 단, 상품안내 페이지에 표시된 교환/반품 기간이 7일보다 긴 경우에는 그 기간을 따릅니다.<br></br>
          휴대폰/PC/프린터/태블릿/웨어러블 제품의 교환은 서비스센터에서 발급받은 불량판정서 지참시 배송완료+7일 가능합니다.<br></br>
          수령한 상품 등의 내용이 표시ㆍ광고 내용과 다르거나 오배송 등 계약내용과 다르게 이행된 경우에는 수령하신 날부터 3개월 이내, 그 사실을 안 날 또는 알 수 있었던 날부터 30일 이내에 가능합니다.<br></br>
          제품을 교환/반품 하기 전 고객센터로 미리 연락을 주셔야 합니다.<br></br>
          제품 자체에 하자가 있는 경우 삼성전자 서비스센터(1588-3366)로 접수하시면 A/S 기사의 판정을 거친 후 소비자분쟁해결기준에 의거하여 삼성전자 서비스 센터를 통해 교환/환불/수리해드립니다.<br></br>
          미성년자인 고객이 구매계약을 체결한 후, 법정대리인이 그 계약에 동의하지 아니하면 본인 또는 법정대리인이 취소할 수 있습니다.<br></br></h>
      </div>,
      <div className='link'>
        <h4 className='link-title'>교환/반품 불가사유</h4>
        <h>- 고객님의 책임 있는 사유로 상품이 멸실 또는 훼손된 경우<br></br>
        (다만, 단순히 상품의 내용을 확인하기 위해 포장 등을 훼손한 경우는 제외)<br></br>
        - 고객님의 사용으로 상품가치가 현저히 감소된 경우<br></br></h>
      </div>,
      <div className='link'>
        <h4 className='link-title'>판매자명/상호명</h4>
        <h>thelight0804</h>
      </div> ][tab]
    }</div>
  )
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
