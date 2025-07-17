import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Desayuno from "./categorias/Desayuno";
import DesayunoForm from "./administracion/DesayunoForm";
import { recetasData } from "../../data/recetasPrueba";

const Inicio = ({ admin, recetasPrueba, setRecetasPrueba }) => {
  const [showModal, setShowModal] = useState(false);
  const [recetas, setRecetas] = useState([]);

  const handleClose = () => setShowModal(false);

  // Cargar recetas al montar
  useEffect(() => {
    const recetasGuardadas =
      JSON.parse(localStorage.getItem("desayunoRecetas")) || [];
    setRecetas(recetasGuardadas);
  }, []);

  // Función para agregar una receta nueva
  const agregarReceta = (nuevaReceta) => {
    const nuevasRecetas = [...recetas, nuevaReceta];
    setRecetas(nuevasRecetas);
    localStorage.setItem("desayunoRecetas", JSON.stringify(nuevasRecetas));
  };

  // función para agregar productos de prueba
  const cargarProductosPrueba = () => {
    const nuevasRecetas = recetasData.filter(
      (recetaPrueba) =>
        !recetas.some(
          (recetaExistente) => recetaExistente.titulo === recetaPrueba.titulo
        )
    );

    if (nuevasRecetas.length > 0) {
      const recetasActualizadas = [...recetas, ...nuevasRecetas];
      setRecetas(recetasActualizadas);
      localStorage.setItem(
        "desayunoRecetas",
        JSON.stringify(recetasActualizadas)
      );
    }
  };

  return (
    <section className="d-flex">
      {/* Navegación lateral */}
      <aside className="bg-light border-end p-3 sticky-top aside">
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
          <h2 className="h4 fw-bold mb-3">Desayuno</h2>
          <Desayuno recetas={recetas}></Desayuno>
          {admin && (
            <>
              <Button className="me-2" onClick={() => setShowModal(true)}>
                Nueva receta...
              </Button>
              <Button variant="info" onClick={cargarProductosPrueba}>
                Datos de prueba.
              </Button>
            </>
          )}
          {/* Modal */}
          <DesayunoForm
            show={showModal}
            handleClose={handleClose}
            agregarReceta={agregarReceta}
          />
        </section>

        <section id="almuerzo" className="mb-5">
          <h2 className="h4 fw-bold mb-3">Almuerzo</h2>
          <p>Ofrecemos opciones deliciosas para el almuerzo...</p>
        </section>

        <section id="merienda" className="mb-5">
          <h2 className="h4 fw-bold mb-3">Merienda</h2>
          <p>Perfecto para la tarde...</p>
        </section>

        <section id="cena" className="mb-5">
          <h2 className="h4 fw-bold mb-3">Cena</h2>
          <p>Disfrutá una cena nutritiva y sabrosa...</p>
        </section>
      </div>
    </section>
  );
};

export default Inicio;
