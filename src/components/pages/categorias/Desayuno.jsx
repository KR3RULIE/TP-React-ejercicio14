import Cards from "./cards/Cards";
import { Container, Row, Col } from "react-bootstrap";

const Desayuno = ({ recetas }) => {
  return (
    <section>
      {recetas.length === 0 && (
        <p className="text-info">Aún no hay recetas...</p>
      )}
      {recetas.length !== 0 && (
        <Container>
          <Row className="align-items-stretch">
            {recetas.map((receta, indice) => (
              <Col key={indice} xs={12} md={6} lg={4} className="mb-4">
                <Cards receta={receta} />
              </Col>
            ))}
          </Row>
        </Container>
      )}
    </section>
  );
};

export default Desayuno;
