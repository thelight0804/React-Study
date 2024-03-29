import {useEffect, useState} from 'react';
import {Table} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {addCount, delItem} from './../data/store/productSlice.js'

function Cart(){
  let data = useSelector((state)=> state );
  let dispatch = useDispatch();
  return(
    <>
      <div>
        {data.user.name}의 장바구니
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>id</th>
              <th>Goods</th>
              <th>Amount</th>
              <th>Add</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {data.productCart.map((a, i) => 
              <tr key={i}>
                <td>{i+1}</td>
                <td>{data.productCart[i].id}</td>
                <td>{data.productCart[i].name}</td>
                <td>{data.productCart[i].count}</td>
                <td>
                  <button onClick={()=>{
                    dispatch(addCount(data.productCart[i].id));
                  }}>+</button>
                </td>
                <td>
                  <button onClick={()=>{
                    dispatch(delItem(data.productCart[i].id));
                  }}>-</button>
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