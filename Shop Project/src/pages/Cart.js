import {Table} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {getProductCart, changeName} from './../data/store.js'

function Cart(){
  let data = useSelector((state)=> state );
  let dispatch = useDispatch();
  return(
    <>
      <div>
        <button onClick={()=>{
          dispatch(changeName());
          }}>name</button>
        {data.user}의 장바구니
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Goods</th>
              <th>Amount</th>
              <th>Plus</th>
            </tr>
          </thead>
          <tbody>
            {data.productCart.map((a, i) => 
              <tr key={i}>
                <td>{i+1}</td>
                <td>{data.productCart[i].name}</td>
                <td>{data.productCart[i].count}</td>
                <td>
                  <button>+</button>
                </td>
              </tr>  
            )}
          </tbody>
       </Table>
      </div>
    </>
  )
}
export default Cart;