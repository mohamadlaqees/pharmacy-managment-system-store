import React from "react";
import ProductTile from "../Components/ProductTile";
import { Button, Col, Container, Row } from "react-bootstrap";
import AddressData from "../Components/AddressData";
function Purchases() {
  return (
    <div className="page">
      <Container className="mt-1">
      <AddressData />
        <ProductTile />
      </Container>
    </div>
  );
}

export default Purchases;
