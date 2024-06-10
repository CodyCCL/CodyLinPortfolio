import { Container, Row, Col } from "react-bootstrap";
// Just a test page for experimental work
import './style.css';
function Home() {
    return (
        <Container>
        <Row>
          <Col className="Menu">About Me</Col>
        </Row>
        <Row className="detail">
          <Col>Description</Col>
          <p>text</p>
          <Col><img className='detail-img' /></Col>
        </Row>
        
        
      </Container>
    );
}

export default Home;