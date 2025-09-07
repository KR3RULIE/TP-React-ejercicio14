import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Desayuno from "./categorias/Desayuno";
import DesayunoForm from "./administracion/DesayunoForm";
import Swal from "sweetalert2";
import { leerRecetas } from "../../helpers/queries";

const Inicio = ({ admin }) => {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => {
    setShowModal(false);
    setRecetaSeleccionada(null);
  };
  const [recetaSeleccionada, setRecetaSeleccionada] = useState(null);
  const [listaRecetas, setListaRecetas] = useState([]);

  useEffect(() => {
    obtenerRecetas();
    actualizarListaRecetas();
  }, []);

  const obtenerRecetas = async () => {
    const respuesta = await leerRecetas();
    if (respuesta.status === 200) {
      const datos = await respuesta.json();
      setListaRecetas(datos);
    } else {
      Swal.fire(
        "Ocurrió un error",
        "No se pudieron cargar las recetas",
        "error"
      );
    }
  };

  const actualizarListaRecetas = async () => {
    const respuestaTareas = await leerRecetas();
    const tareasActualizadas = await respuestaTareas.json();
    setListaRecetas(tareasActualizadas);
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
            setShowModal={setShowModal}
            listaRecetas={listaRecetas}
            setRecetaSeleccionada={setRecetaSeleccionada}
            actualizarListaRecetas={actualizarListaRecetas}
          />

          {admin && (
            <>
              <Button
                className="me-2"
                onClick={() => {
                  setRecetaSeleccionada(null);
                  setShowModal(true);
                }}
              >
                Nueva receta...
              </Button>
            </>
          )}

          {/* Modal */}
          <DesayunoForm
            show={showModal}
            handleClose={handleClose}
            receta={recetaSeleccionada}
            actualizarListaRecetas={actualizarListaRecetas}
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
