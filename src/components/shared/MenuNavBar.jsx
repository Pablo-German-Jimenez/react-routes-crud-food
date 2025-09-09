import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { NavLink, Link, useNavigate } from "react-router";

const MenuNavBar = ({ usuarioLogueado, setUsuarioLogueado }) => {
const usenavigate = useNavigate()

const logout = ()=>{
  setUsuarioLogueado(false)
  usenavigate("/")
}

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/" className="titulo fs-2">
          <i className="bi bi-fork-knife text-secondary fs-2  "></i>React-Food
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/Inicio">
              Inicio
            </Nav.Link>
            {usuarioLogueado ?(<> 
              <Nav.Link as={Link} to="/Administrador">
                Administrador
              </Nav.Link>
              <Button className="btn btn-danger" onClick={(logout)}>
                Logout
              </Button></>
            ):( 
              <Nav.Link as={Link} to="/Login">
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MenuNavBar;
