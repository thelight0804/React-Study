/*
  Reference
  https://www.samsung.com/sec/
*/

import './App.css';
import { Button, Container, Nav, Navbar} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <div>
        <Navbar bg="white" variant="white" className="nav">
          <Container>
            <Navbar.Brand href="#home">Light Shop</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Brand</Nav.Link>
              <Nav.Link href="#pricing">Community</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
      <div>
        <Button variant="primary">Primary</Button>
      </div>
    </div>
  );
}

export default App;