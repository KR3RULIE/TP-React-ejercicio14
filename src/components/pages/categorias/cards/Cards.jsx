import { Card, Button } from "react-bootstrap";
import Swal from "sweetalert2";

const Cards = ({ admin, receta, eliminarReceta, onEditar }) => {
  const borrarReceta = () => {
    Swal.fire({
      title: "Eliminar esta receta?",
      text: "No podras revertis este paso!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#146c43",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminalo!",
      cancelButtonText: "No, no elimines!",
    }).then((result) => {
      if (result.isConfirmed) {
        // aqui borro efectivamente el producto
        if (eliminarReceta(receta.id)) {
          Swal.fire({
            title: "Receta eliminada!",
            text: `La receta ${receta.titulo} fue eliminada correctamente!`,
            icon: "success",
          });
        } else {
          Swal.fire({
            title: "Ocurrio un error!",
            text: `La receta ${receta.titulo} no pudo ser eliminada correctamente!`,
            icon: "error",
          });
        }
      }
    });
  };

  return (
    <Card className="h-100 w-100 d-flex flex-column">
      <Card.Body className="d-flex flex-column">
        <Card.Title className="text-center mb-4">{receta.titulo}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          📖 Descripción
        </Card.Subtitle>
        <Card.Text>{receta.descripcion}</Card.Text>
        <Card.Subtitle className="mb-2 text-muted">
          🛒 Ingredientes / Tiempo de preparacion/cocción
        </Card.Subtitle>
        <Card.Text>{receta.ingredientes}</Card.Text>
        <div className="mt-auto d-flex flex-wrap gap-2 justify-content-between">
          <Button variant="success">Ver detalle...</Button>
          {admin && (
            <>
              <Button variant="info" onClick={() => onEditar(receta)}>
                Editar receta
              </Button>
              <Button variant="danger" onClick={borrarReceta}>
                Borrar 🗑
              </Button>
            </>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default Cards;
