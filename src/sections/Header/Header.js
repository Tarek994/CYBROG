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
      <Navbar className="cybrog-navbar" expand="md">
      <Container className="main-navbar">
        <div >
          <Link to="/CYBROG">
          <img src={logo} alt=""/>
        </Link>
        </div>
        <div>
        <Navbar.Toggle className="white-text"  aria-controls="basic-navbar-nav" />
        <Navbar.Collapse  id="basic-navbar-nav">
          <Nav className="me-auto ">
            <Link className="navigation"  to="/CYBROG">Home</Link>
            <Link className="navigation"  to="/profile">Library</Link>
          </Nav>
        </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
    );
  }
  
  export default Header;