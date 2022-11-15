/*
  Reference
  https://www.samsung.com/sec/
*/

import './App.css';
import {Container, Nav, Navbar, Row, Col} from 'react-bootstrap';
import col1 from './img/Row_Galaxy-Z-Flip4.png';
import col2 from './img/Row_Galaxy-Z-Fold4.png';

function App() {
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
          <h4>Galaxy Z Flip4</h4>
          <p>Style and function that fits in your pocket</p>
        </Col>
        <Col sm>
          {/* <div className = "flipper-middle"></div> */}
          <img src={col2} width="80%"/>
          <h4>Galaxy Z Fold4</h4>
          <p>Lighter. More durable And now with our most powerful processor.</p>
        </Col>
        <Col sm>
          <img src={process.env.PUBLIC_URL + "/img/Row_Galaxy-S22.png"} width="80%"/>
          <h4>Galaxy S22</h4>
          <p>Feast your eyes on the Galaxy S22 Ultra. Slim silhouette. Gorgeous colors. Mirrored lens ring. A polished elegant frame. Oh. So. Beautiful.</p>
        </Col>
      </Row>
     </div>
  );
}

export default App;