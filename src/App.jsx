
import "./App.css";
import FooterBboyLinkinStyle from "./components/FooterBboyLinkinStyle";
import MenuNavBar from "./components/pages/MenuNavBar";
import Inicio from "./components/pages/Inicio";
import { BrowserRouter, Routes, Route } from "react-router";
import DetalleProducto from "./components/pages/DetalleProducto"
import Footer from "./components/pages/Footer";

function App() {
  return (
    <>
      <main>
        <BrowserRouter>
          <MenuNavBar></MenuNavBar>
          <Routes>
            <Route path="/" element={<Inicio></Inicio>} />
            <Route path="/" element={<DetalleProducto></DetalleProducto>}></Route>
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </main>
      <FooterBboyLinkinStyle></FooterBboyLinkinStyle>
    </>
  );
}

export default App;
