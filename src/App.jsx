import "./App.css";
import FooterBboyLinkinStyle from "./components/FooterBboyLinkinStyle";
import MenuNavBar from "./components/pages/MenuNavBar";
import Inicio from "./components/pages/Inicio";
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  return (
    <>
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Inicio></Inicio>}/>
          </Routes>
        </BrowserRouter>
        {/*<MenuNavBar></MenuNavBar>
        
        <p>breaker life!♪</p>}
      */}
      </main>
      <FooterBboyLinkinStyle></FooterBboyLinkinStyle>
    </>
  );
}

export default App;
