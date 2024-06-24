import {Container, Col, Row, Card, CardBody } from 'react-bootstrap';
import Hero from '/Lighthouse1.jpg'
//import portrait from '/headshot.png';
//import { Row } from 'reactstrap';

const styles ={
  text: {
    fontSize: "17px",
    fontFamily: 'sans-serif'
  },
  Hero: {
    width: '100%',

  }
}


const aboutme = () => {
  
  return (
      <div>
      <img src={Hero} alt='lighthouse' style={styles.Hero} height={300}></img>

      <div className="text-light bg-dark p-5">
        
          <Container>
           <h1 className='ms-5 fw-bold'>About Me</h1>
           <Row className='p-5'> 
            <Col>{/* <Col className="text-light bg-dark p-5"> */}
          
      
          <h2><img src='/Headshot.png' alt='portrait' height={300}></img>
        </h2>
        </Col>
        
        <Col className='col-md-8'>
        <Card className='text-dark '>
          <CardBody style={styles.text}> <strong>
          Hi, I'm Cody! I'm a passionate full-stack web developer with a strong foundation in building 
          dynamic web applications. While currently working as an environmental consultant for Federal and State agencies, 
          my experience has instilled in me the ability to adapt quickly and deliver results under client-driven deadlines.<br></br><br></br>

          Fueled by a problem-solving mindset, I thrive in environments that encourage exploration of new technologies. 
          Each project I tackle becomes an opportunity to expand my technical skillset and deliver projects with enhanced functionality.</strong>
        </CardBody>
        </Card>
        </Col>
        </Row>
        
      
      </Container>
      </div>
    </div>
  );
};

export default aboutme;
