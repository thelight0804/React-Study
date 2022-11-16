/*
  Reference
  https://www.samsung.com/sec/
*/

import './App.css';
import { useState } from 'react';
import {Container, Nav, Navbar, Row, Col} from 'react-bootstrap';

import col1 from './img/Row_Galaxy-Z-Flip4.png';
import col2 from './img/Row_Galaxy-Z-Fold4.png';

// import a from "./data.js";
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
     {/* <div className = "main-bg" style={{backgroundImage : 'url('+main_bg+')'}}> </div> */}
     <div className = "main-bg"> </div>
     {/* <div className = "flipper-middle"></div> */}
      <Row>
        <Col sm>
          <img src={col1} width="80%"/>
          <h4>{cellphones[0].title}</h4>
          <p>{cellphones[0].content}</p>
          <h5>{cellphones[0].price}</h5>
        </Col>
        <Col sm>
          {/* <div className = "flipper-middle"></div> */}
          <img src={col2} width="80%"/>
          <h4>{cellphones[1].title}</h4>
          <p>{cellphones[1].content}</p>
          <h5>{cellphones[1].price}</h5>
        </Col>
        <Col sm>
          <img src={process.env.PUBLIC_URL + "/img/Row_Galaxy-S22.png"} width="80%"/>
          <h4>{cellphones[2].title}</h4>
          <p>{cellphones[2].content}</p>
          <h5>{cellphones[2].price}</h5>
        </Col>
      </Row>
     </div>
  );
}

export default App;