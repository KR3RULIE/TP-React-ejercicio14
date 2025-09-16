import { useForm } from "react-hook-form";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import { crearUsuario } from "../../helpers/queries";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

const Register = () => {
  const navegacion = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const respuesta = await crearUsuario(data);
      if (respuesta.status === 409) {
        Swal.fire({
          title: "Error",
          text: `Error el email ${data.email} ya está registrado`,
          icon: "error",
        });
      } else if (respuesta.status === 201) {
        Swal.fire({
          title: "Usuario/a creado/a",
          text: `El usuario ${data.nombreUsuario} fue creado correctamente`,
          icon: "success",
        }).then(() => {
          navegacion("/login");
        });
      } else {
        Swal.fire({
          title: "Error",
          text: "Error al intentar crear el usuario",
          icon: "error",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "Ocurrió un problema con el servidor",
        icon: "error",
      });
    }
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <Card className="shadow-lg border-0">
            <Card.Header className="bg-primary text-white text-center">
              <h3>Registro de Usuario</h3>
            </Card.Header>
            <Card.Body>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="nombreUsuario">
                  <Form.Label>Nombre de usuario</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ingrese su nombre de usuario"
                    {...register("nombreUsuario", {
                      required: "El nombre de usuario es obligatorio",
                      minLength: {
                        value: 2,
                        message: "Debe tener al menos 2 caracteres",
                      },
                      maxLength: {
                        value: 100,
                        message: "Máximo 100 caracteres",
                      },
                    })}
                  />
                  {errors.nombreUsuario && (
                    <p className="text-danger mt-1">
                      {errors.nombreUsuario.message}
                    </p>
                  )}
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Ingrese su email"
                    {...register("email", {
                      required: "El email es obligatorio",
                      pattern: {
                        value:
                          /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                        message: "Ingrese un email válido",
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="text-danger mt-1">{errors.email.message}</p>
                  )}
                </Form.Group>

                <Form.Group className="mb-3" controlId="pw">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Ingrese su contraseña"
                    {...register("pw", {
                      required: "La contraseña es obligatoria",
                      pattern: {
                        value:
                          /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,100}$/,
                        message:
                          "Debe incluir mayúsculas, minúsculas, números y caracteres especiales",
                      },
                      minLength: {
                        value: 8,
                        message: "Debe tener al menos 6 caracteres",
                      },
                      maxLength: {
                        value: 100,
                        message: "Máximo 100 caracteres",
                      },
                    })}
                  />
                  {errors.pw && (
                    <p className="text-danger mt-1">{errors.pw.message}</p>
                  )}
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                  Registrarse
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
