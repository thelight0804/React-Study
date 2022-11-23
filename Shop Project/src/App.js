/*
  Reference
  https://www.samsung.com/sec/
*/

import './App.css';
import { useState } from 'react';
import {Container, Nav, Navbar, Row, Col} from 'react-bootstrap';
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'

import ProductList from "./productList";
import Detail from "./pages/detail"
import NotFound from "./pages/notFound"

import {product} from "./data/data.js";

function App() {

  let [cellphones] = useState(product);
  let navigate = useNavigate();

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
            <div className='main-bg'></div>
            <ProductList/>
          </>
        } />
        <Route path="/detail" element={ <Detail/> } />
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