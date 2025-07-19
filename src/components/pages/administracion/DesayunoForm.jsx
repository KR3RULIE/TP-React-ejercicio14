import { useEffect } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const DesayunoForm = ({ show, handleClose, cargarRecetas, recetaEditando }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (recetaEditando) {
      reset(recetaEditando); // rellena el form
    }
  }, [recetaEditando, reset]);

  const onSubmit = (data) => {
    if (recetaEditando) {
      // Modo editar
      data.id = recetaEditando.id; // mantener el mismo id
    } else {
      // Modo crear
      data.id = uuidv4();
    }

    cargarRecetas(data); // sea nueva o editada
    Swal.fire({
      title: recetaEditando ? "Receta actualizada" : "Producto creado",
      text: `La receta ${data.titulo} fue ${
        recetaEditando ? "actualizada" : "creada"
      } correctamente`,
      icon: "success",
    });
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
