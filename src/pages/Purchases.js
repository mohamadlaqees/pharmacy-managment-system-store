import React from "react";
import ProductTile from "../Components/ProductTile";
import { Col, Container, Row } from "react-bootstrap";

function Purchases() {
  return (
    <div className="page">
      <Container class="mt-10">
        <Row>
          <Col xs={12} md={3}>address data</Col>
          <Col md={9} xs={12}>
            <ProductTile />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Purchases;
