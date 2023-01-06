import {Table} from 'react-bootstrap';
import { useSelector } from 'react-redux';

function Cart(){
  let data = useSelector((state)=> state );
  //{return } 생략 가능
  return(
    <>
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Goods</th>
              <th>Amount</th>
              <th>Change</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>0</td>
              <td>{data.productCart[0].name}</td>
              <td>{data.productCart[0].count}</td>
              <td>O</td>
            </tr>
            <tr>
              <td>1</td>
              <td>{data.productCart[1].name}</td>
              <td>{data.productCart[1].count}</td>
              <td>O</td>
            </tr>
          </tbody>
       </Table>
      </div>
    </>
  )
}
export default Cart;