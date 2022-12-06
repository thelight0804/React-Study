/*
  Reference
  https://www.samsung.com/sec/
*/
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { useState } from 'react';
import {Container, Nav, Navbar, Button, Row, Col} from 'react-bootstrap';
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'

import ProductList from "./productList";
import Detail from "./pages/detail"
import NotFound from "./pages/notFound"


import {product} from "./data/data.js";

function App() {

  let navigate = useNavigate();
  let [cellphones, setCellphones] = useState(product);

  return (
    <div className="App">
      <div>
        <Navbar bg="white" variant="white" className="nav">
          <Container>
            <Navbar.Brand className='button' onClick={() => { navigate('/') } }>GOS Shop</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link onClick={()=>{ navigate(-1) }}> &lt; </Nav.Link>
              <Nav.Link onClick={()=>{ navigate('/detail') }}>Detail</Nav.Link>
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
              <ProductList cellphones = {cellphones} />
            </>
          }>
        </Route>
        <Route path="/detail/:id" element={ <Detail cellphones = {cellphones} /> } />
        <Route path="/copyright" element={ <Copyright/> }>
          <Route path="year" element={<div>© 1995-1999</div>}/>
          <Route path="id" element={<div>Thelight0804</div>}/>
        </Route>
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

export default App;