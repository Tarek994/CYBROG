import { Link } from "react-router-dom";
import logo  from "../../assets/images/logo.png";
import "./Header.css";
import NavItem from "../../components/NavItem/NavItem";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Header = () => {
    return (
      <>
      {['sm'].map((expand) => (
        <Navbar key={expand}  expand={expand} className="mb-3 cybrog-navbar">
          <Container className="main-cybrog" fluid>
            <Link to="/CYBROG">
              <img src={logo} alt=""/>
            </Link>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`}/>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title  id={`offcanvasNavbarLabel-expand-${expand}`}>
                  CY-BROG
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                <Link className="navigation" to="/CYBROG">Home</Link>
                <Link className="navigation" to="/profile">Profile</Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
    );
  }
  
  export default Header;