import { Form, Button, Container, Row, Col } from "react-bootstrap";

const Login = () => {
  return (
    <section className="container my-5">
      <h1 className="text-center fs-bold fst-italic text-info">Login Admin</h1>
      <Container>
        <Row>
          <Col>
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
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>
                  Contraseña admin: (<span className="text-danger">*</span>)
                </Form.Label>
                <Form.Control type="password" placeholder="********" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Enviar
              </Button>
            </Form>
          </Col>
          <Col>
            <img src="#" alt="Aqui va una imagen al lado del form" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Login;
