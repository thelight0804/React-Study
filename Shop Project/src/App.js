/*
  Reference
  https://www.samsung.com/sec/
*/

import './App.css';
import { useState } from 'react';
import {Container, Nav, Navbar, Row, Col} from 'react-bootstrap';

import ProductList from "./productList";
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
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Brand</Nav.Link>
              <Nav.Link href="#pricing">Community</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
      
      <div className='main-bg'></div>
        <ProductList/>
     </div>
  );
}

export default App;