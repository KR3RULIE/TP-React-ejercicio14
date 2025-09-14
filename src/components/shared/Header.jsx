import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, Link, useNavigate } from "react-router";

const Header = ({ admin, setAdmin }) => {
  const navegacion = useNavigate();
  const logout = () => {
    setAdmin({});
    navegacion("/");
  };

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
            {admin.token ? (
              <>
                <div className="d-flex gap-1 my-auto">
                  <p className="text-center text-warning my-auto">
                    ADMIN:
                    <span className="text-danger my-auto">
                      {" "}
                      {admin.nombreUsuario}
                    </span>
                  </p>
                </div>
                <Button variant="link" className="nav-link" onClick={logout}>
                  Cerrar Sesión
                </Button>
              </>
            ) : (
              <>
                <NavLink className="nav-link" to={"/login"}>
                  Iniciar Sesión
                </NavLink>
                <NavLink className="nav-link" to={"/register"}>
                  Registrarse
                </NavLink>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
