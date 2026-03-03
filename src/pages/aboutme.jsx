import {Container, Col, Row, Card, CardBody } from 'react-bootstrap';
import "./Home/style.css";

const aboutme = () => {
  return (
    <Container fluid className='aboutme bg-dark text-light py-5'>

      {/* Row for image + text */}
      <Row className='align-items-center justify-content-center'>
        
        {/* LEFT SIDE: Image + heading */}
        <Col xs="auto" className="aboutme-img text-center text-md-start mb-4 mb-md-0">
          <h1 className='fw-bold mb-3'>About Me</h1>
          <img src='/Headshot.png' alt='portrait' className='img-fluid rounded' />
        </Col>
        
        {/* RIGHT SIDE: Text */}
        <Col md={6} lg={8} className='aboutme-text'>
          <Card className='bg-light text-dark border-0'>
            <CardBody>
              Hi, I&apos;m Cody! I&apos;m an environmental consultant and passionate full-stack web developer with a strong foundation in building 
              dynamic web applications. I have 3+ years of experience as an environmental consultant for Federal and State agencies in New Jersey. 
              My professional experience has instilled in me the ability to adapt quickly and deliver results under client-driven deadlines. 
              I have a strong passion for learning and am always eager to take on new challenges. I am excited to leverage my skills and experience to 
              contribute to impactful projects and continue growing as a developer.
            </CardBody>
          </Card>
        </Col>

      </Row>
      <Row className='align-items-center justify-content-center mt-5'>
        
        {/* Left SIDE: Text */}
        <Col md={6} lg={7} className='aboutme-text'>
        <h1 className='fw-bold mb-3'>My Work Experience</h1>
          <Card className='bg-light text-dark border-0'>
            <CardBody>
              <p>I was an Environmental Project Manager with experience supporting complex remediation and construction projects in collaboration with federal and private stakeholders. 
              I have worked on projects involving the management of contaminated soil and groundwater, hazardous waste management, soil and groundwater remediation, and environmental compliance.
              </p>
            <ul>
              <li>
                  I co-authored key regulatory and technical documents including Quality Assurance Project Plans (QAPP), Removal Work Plans, Community Air Monitoring Plans, and 
              Health and Safety Plans in coordination with the U.S. Environmental Protection Agency for contaminated site remediation at the Pierson Creek Globes Metals Site. 
               (https://response.epa.gov/site/site_profile.aspx?site_id=15373)
              </li>
              <li> I developed Job Safety Analyses (JSA) and Safety Data Sheets (SDS) to support hazard mitigation and ensure compliance with environmental and occupational safety standards. 
              </li>
              <li>I Contributed to the development of site-specific Health and Safety and Air Monitoring Plans for infrastructure projects, including work at Con Edison Astoria Yard, 
              addressing PCB-related risks. 
               </li>
              <li>Demonstrates strong technical initiative by independently building proficiency in GIS and drafting tools, including ArcGIS and AutoCAD, 
              to enhance project execution and data analysis.
              </li> 
            </ul>
            </CardBody>
          </Card>
        </Col>

{/* Right SIDE: Image*/}
        <Col md={6} lg={5} className="aboutme-pile text-center text-md-start mt-5 mb-4 mb-md-0">
          
          <img src='/Stockpile.jpg' alt='Stockpile' className='img-fluid rounded' />
        </Col>

      </Row>
      
{/* Row for image + text */}
      <Row className='align-items-center justify-content-center mt-5'>
        
        {/* LEFT SIDE: Image + heading */}
        <Col xs="auto" className="aboutme-img text-center text-md-start mb-4 mb-md-0">
          <h1 className='fw-bold mb-3'>Web Development</h1>
          <img src='/codingimg.png' alt='coding' className='img-fluid rounded' />
        </Col>
        
{/* RIGHT SIDE: Text */}
        <Col md={6} lg={8} className='aboutme-text'>
          <Card className='bg-light text-dark border-0 mt-5'>
            <CardBody>
              <p>
              Through a rigorous coding bootcamp at Rutgers University, I honed my technical expertise in frameworks like Node.js, React, Express.js, MySQL, 
              and MongoDB to build innovative web applications. My passion for software development and problem-solving translates into practical applications, 
              evident in projects deployed across platforms like Github, Heroku, Render, and Netlify. 
              </p>
              My portofolio showcases a range of projects, from a full-stack 
              MERN application to a React-based food ordering application, demonstrating my ability to create dynamic and user-friendly web applications.
            </CardBody>
          </Card>
        </Col>

      </Row>

      <Row className='align-items-center justify-content-center mt-5'>
        
        {/* Left SIDE: Text */}
        <Col md={6} lg={7} className='aboutme-text'>
        <h1 className='fw-bold mb-3'> Agricultural Researcher</h1>
          <Card className='bg-light text-dark border-0'>
            <CardBody>
              <p>
              I started as an Agricultural Researcher working on the Rutgers University Research Farm, a facility focused on the transplantation and cultivation of foreign
              and exotic crops under challenging nutrient-stressed conditions, and transitioning them from greenhouses to open farmland.
              </p>
            <ul>
              <li>
              Utilized data management skills to track and document the growth of multiple edible crop species using computer programs such as Microsoft Excel and Google Sheets, 
              ensuring accurate record-keeping and analysis of plant development.
              </li>
              <li> 
                Delivered a research presentation to a panel of professors at Rutgers University&apos;s Plant Biology Department. My presentation focused on data analysis, results and potential areas for 
                further investigation regarding the growth of transplanted crops under nutrient-stressed conditions. 
              </li>
              <li>
              Promoted and sold fresh produce at local farm markets across New Brunswick, engaging with customers and contributing to increased sales
               </li>
            </ul>
            </CardBody>
          </Card>
        </Col>

{/* Right SIDE: Image*/}
        <Col md={6} lg={5} className="aboutme-pile text-center text-md-start mt-5 mb-4 mb-md-0">
          
          <img src='/farmimg.jpg' alt='Farm' className='img-fluid rounded' />
        </Col>

      </Row>
    </Container>
  );
};

export default aboutme;
