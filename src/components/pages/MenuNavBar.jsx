import{ Container,Navbar,Nav} from "react-bootstrap";
import { NavLink, Link }  from "react-router";

const MenuNavBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/" className="titulo fs-2"><i className="bi bi-fork-knife text-secondary fs-2  " ></i>React-Food</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/Inicio">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/Administrador">Administrador</Nav.Link>
            <Nav.Link as={Link} to="/Login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>   
  );
};

export default MenuNavBar;
