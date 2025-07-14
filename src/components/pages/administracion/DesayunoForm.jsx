import { Modal, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

const DesayunoForm = ({ show, handleClose }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Obtener recetas anteriores
    const recetasAnteriores =
      JSON.parse(localStorage.getItem("desayuno")) || [];

    // Agregar nueva receta
    const nuevasRecetas = [...recetasAnteriores, data];

    // Guardar en localStorage
    localStorage.setItem("desayuno", JSON.stringify(nuevasRecetas));

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
            <Form.Text>{errors.titulo?.message}</Form.Text>
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
            <Form.Text>{errors.descripcion?.message}</Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Ingredientes</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Agua, café molido..."
              {...register("ingredientes", {
                required: "Este campo es obligatorio",
              })}
            />
            <Form.Text>{errors.ingredientes?.message}</Form.Text>
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
