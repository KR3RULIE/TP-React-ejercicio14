import { Button } from "react-bootstrap";
import img404 from "../../img/pagina-error-404.jpg";
import { NavLink } from "react-router";

const Error404 = () => {
  return (
    <section>
      <div className="d-flex justify-content-center">
        <img
          src={img404}
          alt="Donut error 404"
          className="img-fluid rounded mt-5"
        />
      </div>
      <div className="d-flex flex-column">
        <NavLink
          to={"/"}
          className="btn btn-warning d-block mx-auto my-5 fw-bold fst-italic"
        >
          Volver al inicio
        </NavLink>
      </div>
    </section>
  );
};

export default Error404;
