import React from 'react';
import { Container } from 'react-bootstrap';
import CardList from './CardList';

const IndexHome = () => {
  return (
    <Container className="mt-4">
      <h1 className="mb-4">Página de inicio</h1>
      <CardList />
    </Container>
  );
};

export default IndexHome;
