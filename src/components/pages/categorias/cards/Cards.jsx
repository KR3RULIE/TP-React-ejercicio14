import { Card, Button } from "react-bootstrap";

const Cards = ({ admin, receta }) => {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Header className="text-center text-warning mb-4 bg-light-subtle">
        {receta.titulo}
      </Card.Header>
      <Card.Body>
        <Card.Subtitle className="mb-2 text-info">📖 Descripción</Card.Subtitle>
        <Card.Text>{receta.descripcion}</Card.Text>
        <Card.Subtitle className="mb-2 text-success">
          🛒 Ingredientes / Tiempo de preparacion/cocción
        </Card.Subtitle>
        <Card.Text>{receta.ingredientes}</Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted text-center bg-light-subtle">
        <div className="mt-auto d-flex justify-content-center gap-2">
          <Button variant="success">Ver detalle...</Button>
          {admin && (
            <>
              <Button variant="info">Editar</Button>
              <Button variant="danger">🗑</Button>
            </>
          )}
        </div>
      </Card.Footer>
    </Card>
  );
};

export default Cards;
