//import React from "react";
import { Card, CardBody, CardTitle, CardText, CardImg,Button } from "reactstrap";

const styles = {
  button: {
    fontSize: "22px",
    padding: "10px"
  },
  text: {
    fontSize: "10px"
  }
};

const Project = ({ title, description, image, link }) => {
  return (
    
      <Card>
      
       <CardBody>
        <Button style={styles.button} href={link} target="_blank" rel="noopener noreferrer"><CardImg src={image} alt={title} height={200}/></Button>
       <CardTitle>{title}</CardTitle>
       <CardText style={styles.text}>{description}</CardText>
       
       </CardBody>
    </Card>
  );
};

export default Project;
