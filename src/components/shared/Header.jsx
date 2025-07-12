import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>Simple Recetas</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>Inicio</Nav.Link>
            <Nav.Link>¿Sobre nosotros?</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <div className="d-flex gap-1 my-auto">
              <div className="circle"></div>
              <p className="text-center text-warning my-auto">
                ADMIN <small className="text-success my-auto">(activo)</small>
              </p>
            </div>
            <Nav.Link>Iniciar Sesión</Nav.Link>
            <Nav.Link>Cerrar Sesión</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
