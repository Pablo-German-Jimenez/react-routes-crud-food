import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import FooterBboyLinkinStyle from "./components/FooterBboyLinkinStyle";
import MenuNavBar from "./components/shared/MenuNavBar";
import Inicio from "./components/pages/Inicio";
import DetalleProducto from "./components/pages/DetalleProducto";
import Footer from "./components/pages/Footer";
import Administrador from "./components/pages/Administrador";
import Login from "./components/pages/Login";
import Error404 from "./components/pages/Error404";
import FormularioProducto from "./components/pages/products/FormularioProducto";
import { useEffect, useState } from "react";
import ProtectorAdmin from "./components/routes/ProtectorAdmin";

function App() {
  
  const sesionUsuario =
    JSON.parse(sessionStorage.getItem("usuarioKey")) || false;
  
    const productsLocalStorage =
    JSON.parse(sessionStorage.getItem("productsKey")) || [];
  
    const [usuarioLogueado, setUsuarioLogueado] = useState(sesionUsuario);
  
    const [products, setProducts] = useState([productsLocalStorage]);
  
  
  useEffect(() => {
    sessionStorage.setItem("usuarioKey", JSON.stringify(usuarioLogueado)),
      [usuarioLogueado];
  });

  useEffect(()=>{
    localStorage.setItem("productsKey", JSON.stringify(products)),[products]
  })


  return (
    <>
      <BrowserRouter>
        <MenuNavBar
          usuarioLogueado={usuarioLogueado}
          setUsuarioLogueado={setUsuarioLogueado}
        ></MenuNavBar>
        <main className="container my-3">
          <Routes>
            <Route path="/Inicio" element={<Inicio></Inicio>} />
            <Route
              path="/detalle-producto"
              element={<DetalleProducto></DetalleProducto>}
            ></Route>
            <Route
              path="/login"
              element={<Login setUsuarioLogueado={setUsuarioLogueado}></Login>}
            ></Route>
            <Route
              path="/administrador"
              element={
                <Administrador
                  usuarioLogueado={usuarioLogueado}
                ></Administrador>
              }
            >
              <Route
                index
                element={
                  <Administrador
                    products={products}
                    setProducts={setProducts}
                  ></Administrador>
                }
              ></Route>
            </Route>
            <Route
              path="crear"
              element={<ProtectorAdmin></ProtectorAdmin>}
            ></Route>
            <Route path="*" element={<Error404></Error404>}></Route>
            <Route
              path="editar"
              element={<FormularioProducto></FormularioProducto>}
            ></Route>
          </Routes>
          <Footer></Footer>
        </main>
      </BrowserRouter>
      <FooterBboyLinkinStyle></FooterBboyLinkinStyle>
    </>
  );
}

export default App;
