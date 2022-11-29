import logo from "../images/logo.jpg";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

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
              <Nav.Link href="/">League of legends</Nav.Link>
              <Nav.Link href="/metin2">Metin2</Nav.Link>
              <Nav.Link href="/counterstrike">CounterStrike</Nav.Link>
              <Nav.Link href="/dota2">Dota2</Nav.Link>
            </Nav>
            <Nav className="justify-content-end d-inline-flex    ">
              <Nav.Link>Login</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default NavBar;
