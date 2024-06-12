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
          Hello, I am Cody, a fullstack web developer currently working as an environmental consultant for Federal and State agencies. 
          My employment as a consultant has given me perspective on acquiring on the job skills to adapt to client needs and deadlines.
          Driven by a passion for problem-solving, I enjoy exploring new technologies and expanding functionality of projects I build 
          as each project presents a unique opportunity for me to expand my technical skills.</strong>
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
