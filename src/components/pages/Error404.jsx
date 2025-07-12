import { Button } from "react-bootstrap";
import img404 from "../../img/pagina-error-404.jpg";

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
      <Button
        variant="warning"
        className="d-flex mx-auto my-4 fs-bold fst-italic"
      >
        Volver al inicio
      </Button>
    </section>
  );
};

export default Error404;
