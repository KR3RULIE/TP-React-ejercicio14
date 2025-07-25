import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import Error404 from "./components/pages/Error404";
import Login from "./components/pages/Login";
import Inicio from "./components/pages/Inicio";
import { useEffect, useState } from "react";

function App() {
  const adminLogeado = sessionStorage.getItem("adminKey") || false;
  const recetasLocalstorage =
    JSON.parse(localStorage.getItem("recetasDesayuno")) || [];
  const [admin, setAdmin] = useState(adminLogeado);
  const [recetas, setRecetas] = useState(recetasLocalstorage);
  const [recetaEditando, setRecetaEditando] = useState(null);

  useEffect(() => {
    localStorage.setItem("recetasDesayuno", JSON.stringify(recetas));
  }, [recetas]);

  const cargarRecetas = (recetaNueva) => {
    const existe = recetas.find((r) => r.id === recetaNueva.id);

    if (existe) {
      // Actualiza
      const nuevasRecetas = recetas.map((r) =>
        r.id === recetaNueva.id ? recetaNueva : r
      );
      setRecetas(nuevasRecetas);
    } else {
      // Agrega
      setRecetas([...recetas, recetaNueva]);
    }
    return true;
  };

  const eliminarReceta = (idReceta) => {
    const recetasFiltradas = recetas.filter(
      (itemReceta) => itemReceta.id !== idReceta
    );
    setRecetas(recetasFiltradas);
    return true;
  };

  return (
    <>
      <BrowserRouter>
        <Header admin={admin} setAdmin={setAdmin}></Header>
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <Inicio
                  admin={admin}
                  cargarRecetas={cargarRecetas}
                  recetas={recetas}
                  eliminarReceta={eliminarReceta}
                  recetaEditando={recetaEditando}
                  setRecetaEditando={setRecetaEditando}
                />
              }
            ></Route>
            <Route
              path="/login"
              element={<Login setAdmin={setAdmin} />}
            ></Route>
            <Route path="*" element={<Error404 />}></Route>
          </Routes>
        </main>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
