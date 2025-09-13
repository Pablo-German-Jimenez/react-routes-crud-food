import { Container, Form, Row } from "react-bootstrap";
import CardProducto from "./products/CardProducto";

const Inicio = () => {
    return (
        <section>
            <img className="container  shadow-lg rounded" src="https://static.vecteezy.com/system/resources/thumbnails/025/282/026/small/stock-of-mix-a-cup-coffee-latte-more-motive-top-view-foodgraphy-generative-ai-photo.jpg" alt="cafecitoo" />
            <Container className="display-4 cabin-sketch-regular">
                <h1 className="display-4 cabin-sketch-bold">Nuestros productos</h1>
                    <Form>
                    <Form.Group controlId="formBasicProducto">
                        <Form.Label>Buscar producto</Form.Label>
                            <Form.Control type="text" placeholder="Ingresar el nombre del producto"></Form.Control>
                    </Form.Group>
                    </Form>
                    <Row>
                        <CardProducto></CardProducto>
                    </Row>
             </Container>
        </section>
    );
};

export default Inicio;