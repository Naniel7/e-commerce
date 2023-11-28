import React from "react";
import { Container } from "react-bootstrap";
import CardList from "./CardList";
import Hero from "./Hero";

const IndexHome = () => {
  return (
    <>
      <Hero/>
      <Container className="mt-4">
        <CardList />
      </Container>
    </>
  );
};

export default IndexHome;
