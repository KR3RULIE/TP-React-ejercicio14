import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import Error404 from "./components/pages/Error404";
import Login from "./components/pages/Login";
import Inicio from "./components/pages/Inicio";
function App() {
  return (
    <>
      <Header></Header>
      <main>
        <Inicio></Inicio>
        {/* <Login></Login> */}
        {/* <Error404></Error404> */}
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
