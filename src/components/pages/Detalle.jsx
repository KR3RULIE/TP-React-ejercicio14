import { useEffect, useState } from "react";
import { Row, Col, Card } from "react-bootstrap";
import { Link, useParams } from "react-router";
import { obtenerRecetaPorID } from "../../helpers/queries";

const Detalle = () => {
  const { id } = useParams();
  const [receta, setReceta] = useState({});

  useEffect(() => {
    const obtenerRecetas = async () => {
      const respuesta = await obtenerRecetaPorID(id);
      if (respuesta.status === 200) {
        const datos = await respuesta.json();
        setReceta(datos);
      }
    };

    obtenerRecetas();
  }, [id]);

  return (
    <div className="container my-5">
      <Row className="justify-content-center">
        <Col>
          <Card className="shadow-lg border-0">
            <Card.Header className="bg-primary text-white text-center">
              <h2>{receta.titulo}</h2>
            </Card.Header>
            <Card.Body>
              <section className="mb-4">
                <h5 className="text-info">📖 Descripción</h5>
                <p>{receta.descripcion}</p>
              </section>

              <section className="mb-4">
                <h5 className="text-success">
                  🛒 Ingredientes / Tiempo de preparación
                </h5>
                <p>{receta.ingredientes}</p>
              </section>

              <Link className="btn btn-warning" to="/">
                Volver
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Detalle;
