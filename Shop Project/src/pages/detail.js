import { useParams } from 'react-router-dom';

import styled from 'styled-components'

let Btn = styled.button`
  background : ${props => props.bg};
  color : ${props => props.bg == 'blue' ? "white" : "black"};
  padding : 10px;
`

function Detail(props){
  let {id} = useParams();
  let dataId = props.cellphones.find(function(x){
    return x.id == id;
  })
  return (
    <>
      <div className="container">
          <Btn> Button </Btn>
          <Btn bg = "blue"> Blue Button </Btn>
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


export default Detail