import { Modal, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const DesayunoForm = ({ show, handleClose, cargarRecetas }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (cargarRecetas(data)) {
      Swal.fire({
        title: "Producto creado",
        text: `El producto ${data.titulo} fue creado correctamente`,
        icon: "success",
      });
    }
    handleClose();
    reset(); // limpia el formulario
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Agregar una Receta del Desayuno</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3">
            <Form.Label>Título</Form.Label>
            <Form.Control
              type="text"
              placeholder="Café Negro"
              {...register("titulo", { required: "Este campo es obligatorio" })}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              type="text"
              placeholder="Café fuerte para arrancar el día"
              {...register("descripcion", {
                required: "Este campo es obligatorio",
              })}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>
              Ingredientes / Tiempo de preparacion/cocción
            </Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Agua, café molido..."
              {...register("ingredientes", {
                required: "Este campo es obligatorio",
              })}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Agregar
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default DesayunoForm;
