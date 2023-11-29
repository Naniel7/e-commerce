import React from "react";
import { Container } from "react-bootstrap";
import CardList from "./CardList";
import Hero from "./Hero";
import Call from "./Call";

const IndexHome = () => {
  return (
    <>
    <div className="banner">
      <Hero/>
      <Call/>
      </div>
      <Container className="mt-4">
        <CardList />
      </Container>
    </>
  );
};

export default IndexHome;
