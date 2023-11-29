import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Container, Badge } from 'react-bootstrap'; 
import { FaShoppingCart, FaUser } from 'react-icons/fa';

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <NavLink to="/" className="navbar-brand">
            Mi Ecommerce
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <NavLink to="/cart" className="nav-link">
                <FaShoppingCart /> Carrito{' '}
                <Badge variant="primary">0</Badge>
              </NavLink>
              <NavLink to="/login" className="nav-link">
                <FaUser /> Iniciar sesión
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
