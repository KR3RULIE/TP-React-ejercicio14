import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

const Login = ({ setAdmin }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navegacion = useNavigate();

  const iniciarSesion = (usuario) => {
    if (
      usuario.email === import.meta.env.VITE_API_EMAIL &&
      usuario.pw === import.meta.env.VITE_API_PW
    ) {
      setAdmin(true);
      sessionStorage.setItem("adminKey", true);
      navegacion("/");
    } else {
      console.log("Email o Contraseña incorrecta");
    }
  };

  return (
    <section className="container my-5">
      <h1 className="text-center fs-bold fst-italic text-info">Login Admin</h1>
      <Container>
        <Row xs={1} md={2}>
          <Col className="my-3">
            <Form onSubmit={handleSubmit(iniciarSesion)}>
              <Form.Text className="text-muted">
                los compos con un <span className="text-danger">*</span> son
                obligatorios.
              </Form.Text>

              <Form.Group className="my-3" controlId="formBasicEmail">
                <Form.Label>
                  Email admin: (<span className="text-danger">*</span>)
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="ejemplo@gmail.com"
                  {...register("email", {
                    required: "El Email es un dato obligatorio",
                    pattern: {
                      value:
                        /^(?!\.)[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+)*@(?!-)[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/,
                      message:
                        "El email debe tener un formato valido: ej: ejemplo@gmail.com",
                    },
                  })}
                />
                <Form.Text className="text-danger">
                  {errors.email?.message}
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>
                  Contraseña admin: (<span className="text-danger">*</span>)
                </Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Contraseña"
                  {...register("pw", {
                    required: "La Contraseña es un dato obligatorio",
                    pattern: {
                      value:
                        /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/,
                      message:
                        "La contraseña debe tener un formato valido: ej: Qw1#23!5",
                    },
                  })}
                />
                <Form.Text className="text-danger">
                  {errors.pw?.message}
                </Form.Text>
              </Form.Group>

              <Button variant="primary" type="submit">
                Enviar
              </Button>
            </Form>
          </Col>
          <Col className="my-3">
            <img
              src="https://www.newyorkertips.com/wp-content/uploads/2017/11/coffee-shops-wifi-work-800x445.jpg"
              alt="Aqui va una imagen al lado del form"
              className="img-fluid rounded"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Login;
