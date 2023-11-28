import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Home = () => {
  const cardsData = [
    {
      title: 'Card 1',
      content: 'Contenido de la tarjeta 1',
    },
    {
      title: 'Card 2',
      content: 'Contenido de la tarjeta 2',
    },
    {
      title: 'Card 3',
      content: 'Contenido de la tarjeta 3',
    },
  ];

  return (
    <Container className="mt-4">
      <h1 className="mb-4">Página de inicio</h1>
      <Row>
        {cardsData.map((card, index) => (
          <Col key={index} md={4}>
            <Card>
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.content}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
