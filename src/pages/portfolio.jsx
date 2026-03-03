
import {Container, Row, Col} from 'react-bootstrap';
import Project from '../components/Project';
//import { Link } from 'react-router-dom';
const portfolio = () => {
  const projects = [
    /*{ 
    title: "Online Food Ordering Site - 'Chow' ", 
    description: "This is a cooperative full stack website where I developed the frontend UI using React and coordinated the connection to the backend built using MongoDB. This is deployed on Heroku.", 
    image: '/Chow.png', 
    link: "https://chow-6cdd847b467b.herokuapp.com/"
  },*/
  { 
    title: "Fitness/Wellness Blog - WellMates", 
    description: "This website was created with HTML, Javascript and CSS. This was a cooperative project with limited website functionality. I focused on building the interactive UI and APIs.", 
    image: "/p1.jpg",
    link: "https://codyccl.github.io/Wellmates/"
  },
  { 
    title: "HSE Static Website", 
    description: "This is a responsive website built using HTML and CSS. It was created to demonstrate my understanding of semantic HTML and CSS best practices.", 
    image: "/HSE.png",
    link: "https://codyccl.github.io/Challenge-HSE/" 
  },
  { 
    title: "Workday Scheduler", 
    description: "A simple calendar application that allows a user to save events for each hour of a typical working day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.", 
    image: "/schedulerpic.png",
    link: "https://codyccl.github.io/work-day-scheduler5/" 
  },
  
  /*{ 
    title: "Book Search Engine", 
    description: "This MERN stack website I created allows users to search for google books and allows signed up users to favorite books in their account. This is deployed on Render.", 
    image: "/p3.png", 
    link: "https://booksearchapi-tai0.onrender.com"
  },*/
  { 
    title: "Javascript quiz", 
    description: "Using Javascript to create a timed quiz that tally correct responses. Still a work in progress!", 
    image: "/p4.png",
    link: "https://codyccl.github.io/CodeQuizRe/" 
  },
  { 
    title: "Cody's Landing Page", 
    description: "My landing page is built using React. It introduces users about me as a software developer and showcases my technical skills. This site is deployed through Netlify.", 
    image: "/Lighthouse.jpg",
    link: "https://codylinportfolio.netlify.app"
  },
  { 
    title: "TBD", 
    description: "Coming Soon", 
    image: "/wip.png",
    link: "" 
  },

  ];
  return (
    <>
      <div className="text-light bg-dark p-5">
        <Container>
          <h1>Portfolio Projects</h1>
          <Row className='text-center'>
              {projects.map((project) => (
                <Col key={project.title} className='my-5' xs={12} md={4}>
        <Project key={project.title} {...project} />
      </Col>
    ))}
  
              
        </Row>
      </Container>
      </div>
    </>
  );
};

export default portfolio;
