import Cards from "./cards/Cards";
import { Container, Row, Col } from "react-bootstrap";

const Desayuno = ({
  admin,
  listaRecetas,
  setShowModal,
  setRecetaSeleccionada,
  actualizarListaRecetas,
}) => {
  return (
    <section>
      {listaRecetas.length === 0 && (
        <p className="text-info">Aún no hay recetas...</p>
      )}
      {listaRecetas.length !== 0 && (
        <Container>
          <Row sm={1} md={2} lg={3} xl={4} className="g-4">
            {listaRecetas.map((receta) => (
              <Col key={receta._id} className="mb-4">
                <Cards
                  admin={admin}
                  receta={receta}
                  onEditar={() => {
                    setRecetaSeleccionada(receta);
                    setShowModal(true);
                  }}
                  actualizarListaRecetas={actualizarListaRecetas}
                ></Cards>
              </Col>
            ))}
          </Row>
        </Container>
      )}
    </section>
  );
};

export default Desayuno;
