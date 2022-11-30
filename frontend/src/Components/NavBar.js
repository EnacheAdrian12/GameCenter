import logo from "../images/logo.jpg";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar key="false" bg="dark" variant="dark" expand="md" className="mb-3">
      <Container fluid>
        <Navbar.Brand href="#">
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          GameCenter
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-false`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-false`}
          aria-labelledby={`offcanvasNavbarLabel-expand-false`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-false`}>
              Offcanvas
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-center flex-grow-1 gap-md-5 ">
              <Link className="btn btn-dark " to="/leagueoflegends">
                League of legends
              </Link>
              <Link className="btn btn-dark " to="/metin2">
                Metin2
              </Link>
              <Link className="btn btn-dark " to="/counterstrike">
                CounterStrike
              </Link>
              <Link className="btn btn-dark " to="/dota2">
                Dota2
              </Link>
            </Nav>
            <Nav className="justify-content-end d-inline-flex    ">
              <Link className="btn btn-dark ">Login</Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default NavBar;
