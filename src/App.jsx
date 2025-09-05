import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import FooterBboyLinkinStyle from "./components/FooterBboyLinkinStyle";
import MenuNavBar from "./components/pages/MenuNavBar";
import Inicio from "./components/pages/Inicio";
import DetalleProducto from "./components/pages/DetalleProducto";
import Footer from "./components/pages/Footer";
import Administrador from "./components/pages/Administrador"
import Login from "./components/pages/Login"
import Error404 from "./components/pages/Error404";
import FormularioProducto from "./components/pages/products/FormularioProducto";


function App() {
  return (
    <>
      <main>
        <BrowserRouter>
          <MenuNavBar></MenuNavBar>
          <Routes>
            <Route path="/Inicio" element={<Inicio></Inicio>} />
            <Route
              path="/detalle-producto"
              element={<DetalleProducto></DetalleProducto>}
            ></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="administrador" element={<Administrador></Administrador>}></Route>
            <Route path="*" element={<Error404></Error404>}></Route>
            <Route path="administrador/crear" element={<FormularioProducto></FormularioProducto>}></Route>
            <Route path="administrador/editar" element={<FormularioProducto></FormularioProducto>}></Route>
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </main>
      <FooterBboyLinkinStyle></FooterBboyLinkinStyle>
    </>
  );
}

export default App;
