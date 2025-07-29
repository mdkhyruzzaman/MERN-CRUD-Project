import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router";

export function Header() {
  const navigate = useNavigate();
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand onClick={() => navigate("/")}>CRUD</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={() => navigate("/book-list")}>Book List</Nav.Link>
        </Nav>
        <Button type="submit" onClick={() => navigate("/create")}>
          Add New
        </Button>
      </Container>
    </Navbar>
  );
}
