import { useEffect } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { crearReceta, editarReceta } from "../../../helpers/queries";

const DesayunoForm = ({
  show,
  handleClose,
  receta,
  actualizarListaRecetas,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const guardarReceta = async (data) => {
    try {
      let respuesta;

      if (data._id) {
        respuesta = await editarReceta(data, data._id);
      } else {
        respuesta = await crearReceta(data);
      }

      if (respuesta.status === 201 || respuesta.status === 200) {
        Swal.fire({
          title: data._id ? "Receta actualizada" : "Receta creada",
          text: `La receta "${data.titulo}" fue ${
            data._id ? "actualizada" : "creada"
          } correctamente`,
          icon: "success",
        });
        actualizarListaRecetas();
        handleClose();
        reset();
      } else {
        Swal.fire({
          title: "Error",
          text: "No se pudo guardar la receta. Intenta nuevamente.",
          icon: "error",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: error.message || "Ocurrió un problema con el servidor",
        icon: "error",
      });
    }
  };

  useEffect(() => {
    if (show) {
      if (receta?._id) {
        reset(receta);
      } else {
        reset({
          titulo: "",
          descripcion: "",
          ingredientes: "",
        });
      }
    }
  }, [show, receta, reset]);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          {receta?._id
            ? "Editar Receta del Desayuno"
            : "Agregar una Receta del Desayuno"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit(guardarReceta)}>
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
            {receta?._id ? "Guardar cambios" : "Agregar"}
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default DesayunoForm;
