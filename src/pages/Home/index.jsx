import { Container, Row, Col } from "react-bootstrap";
import profileImg from "/profileimg.jpg";
import './style.css';

const Home = () => {
    return (
        <Container fluid className="hero">
      <Row className="align-items-center">
        
        {/* LEFT SIDE */}
        <Col md={6} lg={8}className="hero-text">
          <h1>
            Hello, I’m <br />
            <strong>Cody Lin</strong>
          </h1>

          <p>
            I&apos;m a Freelance Environmental Consultant and a <strong>Full-Stack Web Developer</strong>. My professional experience stems from being
            an <strong>Environmental Project Manager</strong> in NJ where I engage in Environmental compliance and safety. I also build immersive and
            beautiful web applications for any business or organization.
          </p>
          <p>
            My services include <strong>Phase I Environmental Site Assessments, quality assurance and control for Health and Safety documentation, 
            ArcGIS Mapping, Graphic Design and Web Development.</strong>
          </p>
          <p>
            Feel free to reach out at for any inquiries or project collaborations!: 
          </p>
          <p>  
            <strong>codycclin@gmail.com</strong>
          </p>

        
        </Col>

        {/* RIGHT SIDE */}
        <Col md={6} lg={4} className="hero-image d-flex justify-content-center">
          <img src={profileImg} alt="profile" />
        </Col>

      </Row>
    </Container>
    );
}

export default Home;