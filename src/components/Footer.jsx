//import React from "react";
import { Input, Button, Row, Col, Container } from "reactstrap";

const styles = {
  icon: {
    fontSize: "1.5rem",
    margin: "auto .5rem",
    color: "#FD6801",
  },
  input: {
    fontSize: "22px",
    height: "74px",
  },
  button: {
    fontSize: "22px",
    backgroundColor: "#FD6801",
  },
};

const Footer = () => {
  return (
    <Container  fluid style={{ backgroundColor: "#77C7CE" }}>
        hi
          <Col className="py-0">
            hi
            {/* <Input
              type="email"
              placeholder="Enter your email address"
              style={styles.input}
            />
              <Button style={styles.button}>Contact Me</Button> */}
          </Col>
        
    </Container>
  );
};

export default Footer;
