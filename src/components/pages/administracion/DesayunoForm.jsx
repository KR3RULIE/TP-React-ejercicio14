const DesayunoForm = () => {
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Titulo: </Form.Label>
        <Form.Control type="text" placeholder="Café Negro" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Descripción: </Form.Label>
        <Form.Control
          type="text"
          placeholder="Café algo amargo, perfecto para despertar"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Ingredientes</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Escribí los ingredientes de la receta..."
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Agregar
      </Button>
    </Form>
  );
};

export default DesayunoForm;
