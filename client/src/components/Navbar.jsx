import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const CustomNavbar = () => {
  // Function to determine the class name based on active state
  const getActiveClass = (isActive) => (isActive ? "active" : "");

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `navbar-brand ${getActiveClass(isActive)}`
          }
        >
          Workout Buddy
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `nav-link ${getActiveClass(isActive)}`
              }
            >
              Home
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
