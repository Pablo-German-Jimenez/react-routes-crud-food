import { Button } from "react-bootstrap";
import productos from "../../data/productoPrueba";

const Administrador = (products,setProducts) => {

    const cargaProductosPrueba = setProducts(productos)
    return (
        <div>
            <h1>Pagina de Administrador</h1>
            <Button variant="primary" className="storage" onClick={cargaProductosPrueba}></Button>
        </div>
    );
};

export default Administrador;