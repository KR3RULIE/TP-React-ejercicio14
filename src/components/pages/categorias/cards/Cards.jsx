import { Card, Button } from "react-bootstrap";

const Cards = ({ admin, receta }) => {
  return (
    <Card>
      <Card.Header className="text-center text-warning mb-4">
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
      <Card.Footer className="text-muted text-center">
        <div className="mt-auto d-flex flex-wrap gap-2 justify-content-between">
          <Button variant="success">Ver detalle...</Button>
          {admin && (
            <>
              <Button variant="info">Editar receta</Button>
              <Button variant="danger">Borrar 🗑</Button>
            </>
          )}
        </div>
      </Card.Footer>
    </Card>
  );
};

export default Cards;
