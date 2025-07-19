import Cards from "./cards/Cards";
import { Container, Row, Col } from "react-bootstrap";

const Desayuno = ({
  recetas,
  eliminarReceta,
  setRecetaEditando,
  setShowModal,
}) => {
  return (
    <section>
      {recetas.length === 0 && (
        <p className="text-info">Aún no hay recetas...</p>
      )}
      {recetas.length !== 0 && (
        <Container>
          <Row className="align-items-stretch">
            {recetas.map((receta, indice) => (
              <Col key={receta.id} xs={12} md={6} lg={4} className="mb-4">
                <Cards
                  receta={receta}
                  indice={indice}
                  eliminarReceta={eliminarReceta}
                  onEditar={(recetaSeleccionada) => {
                    setRecetaEditando(recetaSeleccionada); // guardás la receta actual
                    setShowModal(true); // abrís el modal
                  }}
                />
              </Col>
            ))}
          </Row>
        </Container>
      )}
    </section>
  );
};

export default Desayuno;
