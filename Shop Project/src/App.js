/*
  Reference
  https://www.samsung.com/sec/
*/

import './App.css';
import { useState } from 'react';
import {Container, Nav, Navbar, Row, Col} from 'react-bootstrap';
import {Routes, Route, Link} from 'react-router-dom'

import ProductList from "./productList";
import Detail from "./detail"
import {product} from "./data.js";

function App() {

  let [cellphones] = useState(product);

  return (
    <div className="App">
      <div>
        <Navbar bg="white" variant="white" className="nav">
          <Container>
            <Navbar.Brand href="#home">GOS Shop</Navbar.Brand>
            <Nav className="me-auto">
              <Link to="/" className="navBtn">Home</Link>
              <Link to="/detail" className="navBtn">detail</Link>
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
        <Route path="/detail" element={
          <> <Detail/> </>
        } />
      </Routes>
      

     </div>
  );
}

export default App;