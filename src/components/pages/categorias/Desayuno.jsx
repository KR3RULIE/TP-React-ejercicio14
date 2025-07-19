import Cards from "./cards/Cards";
import { Container, Row, Col } from "react-bootstrap";

const Desayuno = ({
  admin,
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
          <Row xs={1} lg={3} className="align-items-stretch">
            {recetas.map((receta) => (
              <Col key={receta.id} className="mb-4">
                <Cards
                  admin={admin}
                  receta={receta}
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
