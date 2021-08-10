import React from 'react';
import { Navbar ,Nav ,NavDropdown ,Container ,Button ,ButtonGroup} from "react-bootstrap";
import "./Navbar.scss";

const Navigation = () =>(
    <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">LCN</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#Sobre">Sobre</Nav.Link>
      </Nav>
        <ButtonGroup aria-label="Basic example">
        <NavDropdown title="Noticias" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Agenda</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Fotos</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Jogadas</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Redes sociais</NavDropdown.Item>
        </NavDropdown>
            <Button variant="outline-secondary">Contato</Button>
        </ButtonGroup>
    </Navbar.Collapse>
  </Container>
</Navbar>
);

export default Navigation;