import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import Error404 from "./components/pages/Error404";

function App() {
  return (
    <>
      <Header></Header>
      <main>
        <Error404></Error404>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
