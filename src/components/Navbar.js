import React from 'react';
import { Navbar ,Nav ,NavDropdown ,Container ,Button ,ButtonGroup} from "react-bootstrap";
import "./Navbar.scss";
import logo from "../assets/logo.svg";

const Navigation = () =>(
    <Navbar variant="dark" expand="lg">
  <Container>
    <Navbar.Brand href="#home">
    <img
        src={logo}
        height="30"
        className="d-inline-block align-top"
        alt="Lkz logo"
      />

    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#Sobre">Sobre</Nav.Link>
      </Nav>
        <ButtonGroup aria-label="Basic example">
          <Button variant="outline-light">
        <NavDropdown title="Noticias" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Agenda</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Fotos</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Jogadas</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Redes sociais</NavDropdown.Item>
        </NavDropdown>
        </Button>
            <Button variant="outline-light">Contato</Button>
        </ButtonGroup>
    </Navbar.Collapse>
  </Container>
</Navbar>
);

export default Navigation;