import { Card, Button } from "react-bootstrap";
import { borrarRecetasPorID } from "../../../../helpers/queries";
import Swal from "sweetalert2";
import { Link } from "react-router";

const Cards = ({ admin, receta, onEditar, actualizarListaRecetas }) => {
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
        <div className="mt-auto d-flex justify-content-center">
          <Link className="me-2 btn btn-success" to={"/detalle/" + receta._id}>
            Ver detalle...
          </Link>
          {admin.token && (
            <div className="d-flex gap-2">
              <Button variant="info" onClick={onEditar}>
                Editar
              </Button>
              <Button
                variant="danger"
                onClick={() => {
                  Swal.fire({
                    title: "Estas seguro/a?",
                    text: "Esta acción es irrevercible!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Sí, borrar!",
                    cancelButtonText: "No lo borres!",
                  }).then(async (result) => {
                    if (result.isConfirmed) {
                      const respuesta = await borrarRecetasPorID(receta._id);
                      if (respuesta.status === 200) {
                        Swal.fire({
                          title: "Borrado!",
                          text: `La receta fue borrada exitosamente`,
                          icon: "success",
                        });
                        actualizarListaRecetas();
                      } else {
                        Swal.fire({
                          title: "Ocurrio un error!",
                          text: `La receta no pudo ser borrada`,
                          icon: "error",
                        });
                      }
                    }
                  });
                }}
              >
                🗑
              </Button>
            </div>
          )}
        </div>
      </Card.Footer>
    </Card>
  );
};

export default Cards;
