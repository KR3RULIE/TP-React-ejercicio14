import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, Link } from "react-router";

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to={"/"} className="fst-italic fw-bold color">
          Simple: Recetas
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="nav-link" to={"/"}>
              Inicio
            </NavLink>
            <NavLink className="nav-link" to={"*"}>
              ¿Sobre nosotros?
            </NavLink>
          </Nav>
          <Nav className="ms-auto">
            <div className="d-flex gap-1 my-auto">
              <div className="circle"></div>
              <p className="text-center text-warning my-auto">
                ADMIN <small className="text-success my-auto">(activo)</small>
              </p>
            </div>
            <NavLink className="nav-link" to={"/login"}>
              Iniciar Sesión
            </NavLink>
            <NavLink className="nav-link" to={"*"}>
              Cerrar Sesión
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
