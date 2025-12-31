import React from 'react';
import { Link } from "react-router-dom";
// Importer les composants nécessaires de react-bootstrap
import { Navbar, Nav, NavDropdown, Container, Button } from 'react-bootstrap';

function Header() {
  return (
    <Navbar bg="light" expand="lg" fixed="top" className="shadow">
      <Container>
        {/* Logo : utiliser as={Link} pour que ça fonctionne avec react-router-dom */}
        <Navbar.Brand as={Link} to="/" className="fw-bold">
          ErrahmaouiShop
        </Navbar.Brand>

        {/* Hamburger mobile */}
        <Navbar.Toggle aria-controls="navbarMenu" />

        {/* Menu */}
        <Navbar.Collapse id="navbarMenu">
          <Nav className="mx-auto mb-2 mb-lg-0">

            <Nav.Item>
              <Nav.Link as={Link} to="/">Accueil</Nav.Link>
            </Nav.Item>
             <Nav.Item>
              <Nav.Link as={Link} to="/produits">Prosuits</Nav.Link>
            </Nav.Item>

            {/* Dropdown pour catégories */}
            <NavDropdown title="Catégories" id="categoriesDropdown">
              <NavDropdown.Item as={Link} to="/phone">Téléphones</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/recent">Produits Récents</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Pcportable">PC portable</NavDropdown.Item>
            </NavDropdown>

            <Nav.Item>
              <Nav.Link as={Link} to="/favoris">Favoris</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/panier">Panier</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            </Nav.Item>

          </Nav>

          {/* Boutons à droite */}
          <div className="d-flex gap-2">
            <Button as={Link} to="/forms" variant="outline-primary">
              Inscription
            </Button>
            <Button as={Link} to="/" variant="primary">
              Déconnexion
            </Button>
          </div>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;