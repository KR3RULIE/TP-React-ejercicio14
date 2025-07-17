import { Card, Button } from "react-bootstrap";

const Cards = ({ receta }) => {
  return (
    <Card className="h-100 d-flex flex-column">
      <Card.Body className="d-flex flex-column">
        <Card.Title className="text-center mb-4">{receta.titulo}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          📖 Descripción
        </Card.Subtitle>
        <Card.Text>{receta.descripcion}</Card.Text>
        <Card.Subtitle className="mb-2 text-muted">
          🛒 Ingredientes
        </Card.Subtitle>
        <Card.Text>{receta.ingredientes}</Card.Text>
        <div className="mt-auto d-flex justify-content-between">
          <Button variant="success">Ver detalle...</Button>
          <Button variant="danger">Borrar 🗑</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Cards;
