import { useState } from "react";
import { Button } from "react-bootstrap";
import Desayuno from "./categorias/Desayuno";
import DesayunoForm from "./administracion/DesayunoForm";

const Inicio = ({ admin, cargarRecetas, recetas }) => {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);

  return (
    <section className="d-flex">
      {/* Navegación lateral */}
      <aside className="bg-light border-end p-3 sticky-top aside">
        <h2 className="text-danger">Categorias</h2>
        <nav className="nav flex-column">
          <a href="#desayuno" className="nav-link text-primary">
            Desayuno
          </a>
          <a href="#almuerzo" className="nav-link text-primary">
            Almuerzo
          </a>
          <a href="#merienda" className="nav-link text-primary">
            Merienda
          </a>
          <a href="#cena" className="nav-link text-primary">
            Cena
          </a>
        </nav>
      </aside>

      {/* Contenido principal */}
      <div className="flex-grow-1 p-4">
        <section id="desayuno" className="mb-5">
          <h2 className="h4 fw-bold mb-3">Desayunos</h2>
          <Desayuno recetas={recetas} />

          {admin && (
            <>
              <Button className="me-2" onClick={() => setShowModal(true)}>
                Nueva receta...
              </Button>
              <Button variant="info">Datos de prueba</Button>
            </>
          )}

          {/* Modal */}
          <DesayunoForm
            show={showModal}
            handleClose={handleClose}
            cargarRecetas={cargarRecetas}
          />
        </section>

        <section id="almuerzo" className="mb-5">
          <h2 className="h4 fw-bold mb-3">Almuerzos</h2>
          <p>Ofrecemos opciones deliciosas para el almuerzo...</p>
        </section>

        <section id="merienda" className="mb-5">
          <h2 className="h4 fw-bold mb-3">Meriendas</h2>
          <p>Perfecto para la tarde...</p>
        </section>

        <section id="cena" className="mb-5">
          <h2 className="h4 fw-bold mb-3">Cenas</h2>
          <p>Disfrutá una cena nutritiva y sabrosa...</p>
        </section>
      </div>
    </section>
  );
};

export default Inicio;
