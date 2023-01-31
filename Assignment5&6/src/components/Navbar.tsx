import { Link, NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
function Navbar1(){
    return(
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Users</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    end
                    className={({ isActive }) =>
                      isActive ? "n-active nav-link" : "nav-link"
                    }
                    aria-current="page"
                    to="/users/add"
                  >
                    <i className="fa fa-plus-circle" aria-hidden="true"></i> Add
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    end
                    className={({ isActive }) =>
                      isActive ? "n-active nav-link" : "nav-link"
                    }
                    to="/users"
                  >
                    <i className="fa fa-list" aria-hidden="true"></i> List
                  </NavLink>
                </li>
              </ul>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default Navbar1;