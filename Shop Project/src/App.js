/*
  Reference
  `https://www.samsung.com/sec/`
*/
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import axios from 'axios'
import { createContext, useEffect, useState } from 'react'
import {Container, Nav, Navbar, Button, Row, Col} from 'react-bootstrap'
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'

import ProductList from "./productList"
import Detail from "./pages/Detail"
import NotFound from "./pages/NotFound"
import Cart from "./pages/Cart"

import {product} from "./data/data.js"

export let Context1 = createContext();

function App() {
  let navigate = useNavigate();
  let [cellphones, setCellphones] = useState(product);
  let [moreClick, setMoreClick] = useState(0);
  let [moreAlert, setmoreAlert] = useState(true);
  let [nowLoading, setNowLoading] = useState(false);
  let [stock, setStock] = useState([102, 230, 185]);
  useEffect(()=>{
    if(localStorage.getItem("watched") == null){
      localStorage.setItem("watched", JSON.stringify([]))
    }
  },[])
  
  return (
    <div className="App">
      <div>
        <Navbar bg="white" variant="white" className="nav">
          <Container>
            <Navbar.Brand className='button' onClick={() => { navigate('/') } }>GOS Shop</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link onClick={()=>{ navigate(-1) }}> &lt; </Nav.Link>
              <Nav.Link onClick={()=>{ navigate('/cart') }}>cart</Nav.Link>
              <Nav.Link onClick={()=>{ navigate('/copyright') }}>Copyright</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>

      <Routes>
        <Route path="/" element={
          <>
            <div className='main-bg'> </div>
            <Button variant="secondary" onClick={()=>{
                let copyPhone = [...cellphones];
                setCellphones(copyPhone.sort(
                  (p1, p2) => (
                    p1.price > p2.price ? 1 : (p1.price < p2.price) ? -1 : 0
                  )
                ));
              }}>Sort by low price</Button>
              { (moreClick > 2 && moreAlert) ? <NotMoreProduct/> : null }
              { nowLoading ? <Loading/> : null }
              <ProductList cellphones = {cellphones} />
              <Button variant="dark" className='btn-more' onClick={()=>{
                setNowLoading(true);
                setMoreClick(moreClick + 1);
                if (moreClick == 0){
                  axios.get('https://codingapple1.github.io/shop/data2.json')
                  .then((result)=>{ 
                    let copy = [...cellphones, ...result.data];
                    setCellphones(copy);
                    setNowLoading(false);
                   })
                  .catch(()=>{
                    console.log('Error');
                    setNowLoading(false);
                  })
                }
                else if (moreClick == 1){
                  axios.get('https://codingapple1.github.io/shop/data3.json')
                  .then((result)=>{ 
                    let copy = [...cellphones, ...result.data];
                    setCellphones(copy);
                    setNowLoading(false);
                   })
                  .catch(()=>{
                    console.log('Error');
                    setNowLoading(false);
                  })
                }
                else{
                  let timer = setTimeout(()=>{setmoreAlert(false)}, 2000);
                  setmoreAlert(true);
                  setNowLoading(false);
                }
              }}>More</Button>
            </>
          }>
        </Route>
        <Route path="/detail/:id" element={ 
          <Context1.Provider value={{stock}}>
            <Detail cellphones = {cellphones}/>
          </Context1.Provider>
        } />
        <Route path="/copyright" element={ <Copyright/> }>
          <Route path="year" element={<div>© 1995-1999</div>}/>
          <Route path="id" element={<div>Thelight0804</div>}/>
        </Route>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="*" element={<NotFound/>} />
      </Routes>
     </div>
  );
}

function Copyright(){
  return(
    <div>
      <h4>Copyright</h4>
      <Outlet></Outlet>
    </div>
  )
}
function NotMoreProduct(){
  return(
    <div className = 'alert alert-warning'>
      더 이상 상품이 존재하지 않습니다.  
    </div>
  )
}
function Loading(){
  return(
    <>
      <img src = {process.env.PUBLIC_URL + "/img/ajax-loader-white.gif"}></img>
    </>
  )
}
export default App;