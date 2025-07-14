import { useState, useEffect } from "react";
import { Card, Row, Col } from "react-bootstrap";

const Desayuno = () => {
  const [recetas, setRecetas] = useState([]);

  useEffect(() => {
    // Cargar recetas desde localStorage al montar el componente
    const recetasGuardadas = JSON.parse(localStorage.getItem("desayuno")) || [];
    setRecetas(recetasGuardadas);
  }, []);

  return (
    <Row>
      {recetas.length === 0 ? (
        <p>No hay recetas cargadas.</p>
      ) : (
        recetas.map((receta, index) => (
          <Col key={index} md={4} className="mb-3">
            <Card>
              <Card.Body>
                <Card.Title>{receta.titulo}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {receta.descripcion}
                </Card.Subtitle>
                <Card.Text>
                  <strong>Ingredientes:</strong>
                  <br />
                  {receta.ingredientes}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))
      )}
    </Row>
  );
};

export default Desayuno;
