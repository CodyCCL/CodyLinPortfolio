import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Collapse,
} from "reactstrap";
import LinkedIn from "/LI-In-Bug.png";
import Github from "/github-mark.png";

const styles = {
  navbar: {
    backgroundColor: "#FFFFFF",
  },
  link: {
    color: "#2A9DB8",
    fontWeight: "700",
    paddingRight: "2rem",
  },
  linkIcons: {
    color: "#FD6801",
    
  },
};


function Navigation() {
  const [collapsed, setCollapsed] = useState(true);
  const location = useLocation();
  const lastHash = useRef("");

  const toggleNavbar = () => setCollapsed(!collapsed);

  useEffect(() => {
    if (location.hash) {
      lastHash.current = location.hash.slice(1);
    }

    if (lastHash.current && document.getElementById(lastHash.current)) {
      setTimeout(() => {
        document
          .getElementById(lastHash.current)
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
        lastHash.current = "";
      }, 100);
    }
  }, [location]);


  return (
    <>
    <Navbar expand="md" container light style={styles.navbar}>
        <NavbarBrand style={styles.link} tag={Link} to="/" className="me-auto">
          Cody Lin
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="me-2" />
        <Collapse isOpen={!collapsed} navbar>
        <Nav navbar className="ms-auto py-3">
            <NavItem>
              <NavLink style={styles.link} tag={Link} to="/aboutme">
                About Me
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={styles.link} tag={Link} to="/portfolio">
                Portfolio
              </NavLink>
            </NavItem>
            {/* <NavItem>
              <NavLink style={styles.link} tag={Link} to="/contact">
                Contact
              </NavLink>
            </NavItem> */}
            <NavItem>
              <NavLink style={styles.link} tag={Link} to="/resume">
                Resume
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={styles.linkIcons} href="https://www.linkedin.com/in/codycclin/" target="_blank" rel="noopener noreferrer">
                <img src={LinkedIn} alt="LinkedIn logo" height="26"></img>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={styles.linkIcons} href="https://github.com/CodyCCL" target="_blank" rel="noopener noreferrer">
              <img src={Github} alt="Github logo" height="26"></img>
              </NavLink>
            </NavItem>
          </Nav>
          </Collapse>
          </Navbar>
     </>
  );
}

export default Navigation;
