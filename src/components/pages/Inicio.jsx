import { useState } from "react";
import { Button } from "react-bootstrap";
import Desayuno from "./categorias/Desayuno";
import DesayunoForm from "./administracion/DesayunoForm";
import { recetasData } from "../../data/recetasPrueba";
import Swal from "sweetalert2";

const Inicio = ({
  admin,
  cargarRecetas,
  recetas,
  eliminarReceta,
  recetaEditando,
  setRecetaEditando,
}) => {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);

  const cargarRecetasDePrueba = () => {
    const nuevasRecetas = recetasData.filter(
      (recetaPrueba) => !recetas.some((r) => r.id === recetaPrueba.id)
    );

    nuevasRecetas.forEach((receta) => {
      cargarRecetas({ ...receta }); // mantiene el id original
    });

    Swal.fire({
      title: "¡Recetas cargadas!",
      text:
        nuevasRecetas.length > 0
          ? "Se agregaron recetas de prueba correctamente."
          : "Todas las recetas de prueba ya están cargadas.",
      icon: "success",
    });
  };

  return (
    <section className="d-flex flex-column flex-md-row">
      <aside
        className="bg-light border-bottom border-md-end p-3 sticky-top bg-dark-subtle"
        style={{ zIndex: 1020 }}
      >
        <h2 className="text-danger">Categorias</h2>
        <nav className="nav flex-row flex-md-column overflow-auto">
          <a href="#desayuno" className="nav-link text-primary px-2 px-md-0">
            Desayuno
          </a>
          <a href="#almuerzo" className="nav-link text-primary px-2 px-md-0">
            Almuerzo
          </a>
          <a href="#merienda" className="nav-link text-primary px-2 px-md-0">
            Merienda
          </a>
          <a href="#cena" className="nav-link text-primary px-2 px-md-0">
            Cena
          </a>
        </nav>
      </aside>

      {/* Contenido principal */}
      <div className="flex-grow-1 p-4">
        <section id="desayuno" className="mb-5">
          <h2 className="h4 fw-bold mb-3">Desayunos</h2>
          <Desayuno
            admin={admin}
            recetas={recetas}
            eliminarReceta={eliminarReceta}
            setRecetaEditando={setRecetaEditando}
            setShowModal={setShowModal}
          />

          {admin && (
            <>
              <Button
                className="me-2"
                onClick={() => {
                  setRecetaEditando(null);
                  setShowModal(true);
                }}
              >
                Nueva receta...
              </Button>
              <Button variant="info" onClick={cargarRecetasDePrueba}>
                Datos de prueba
              </Button>
            </>
          )}

          {/* Modal */}
          <DesayunoForm
            show={showModal}
            handleClose={handleClose}
            cargarRecetas={cargarRecetas}
            recetaEditando={recetaEditando}
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
