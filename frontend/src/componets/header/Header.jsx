import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router";

export function Header() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand>
          <NavLink to="/">CRUD</NavLink>
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link>
            {/* <NavLink to="/book-list">Book List</NavLink> */}
          </Nav.Link>
        </Nav>
        <Button type="submit">{/* <NavLink>Add</NavLink> */}</Button>
      </Container>
    </Navbar>
  );
}
