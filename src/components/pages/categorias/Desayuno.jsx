import Cards from "./cards/Cards";
import { Container, Row, Col } from "react-bootstrap";

const Desayuno = ({ admin, listaRecetas }) => {
  return (
    <section>
      {listaRecetas.length === 0 && (
        <p className="text-info">Aún no hay recetas...</p>
      )}
      {listaRecetas.length !== 0 && (
        <Container>
          <Row>
            {listaRecetas.map((receta) => (
              <Col key={receta._id} className="mb-4">
                <Cards admin={admin} receta={receta}></Cards>
              </Col>
            ))}
          </Row>
        </Container>
      )}
    </section>
  );
};

export default Desayuno;
