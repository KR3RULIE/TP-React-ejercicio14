import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import Error404 from "./components/pages/Error404";
import Login from "./components/pages/Login";
import Inicio from "./components/pages/Inicio";
import { useState } from "react";

function App() {
  const adminLogeado = sessionStorage.getItem("adminKey") || false;
  const [admin, setAdmin] = useState(adminLogeado);

  return (
    <>
      <BrowserRouter>
        <Header admin={admin} setAdmin={setAdmin}></Header>
        <main>
          <Routes>
            <Route path="/" element={<Inicio admin={admin} />}></Route>
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
