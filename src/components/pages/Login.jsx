import { Form, Button, Container, Row, Col } from "react-bootstrap";

const Login = () => {
  import.meta.env.VITE_API_EMAIL;
  import.meta.env.VITE_API_PW;
  
  return (
    <section className="container my-5">
      <h1 className="text-center fs-bold fst-italic text-info">Login Admin</h1>
      <Container>
        <Row xs={1} md={2}>
          <Col className="my-3">
            <Form>
              <Form.Text className="text-muted">
                los compos con un <span className="text-danger">*</span> son
                obligatorios.
              </Form.Text>

              <Form.Group className="my-3" controlId="formBasicEmail">
                <Form.Label>
                  Email admin: (<span className="text-danger">*</span>)
                </Form.Label>
                <Form.Control type="email" placeholder="ejemplo@gmail.com" />
                <Form.Text className="text-danger">
                  Este campo es obligatorio.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>
                  Contraseña admin: (<span className="text-danger">*</span>)
                </Form.Label>
                <Form.Control type="password" placeholder="Contraseña" />
                <Form.Text className="text-danger">
                  Este campo es obligatorio.
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
