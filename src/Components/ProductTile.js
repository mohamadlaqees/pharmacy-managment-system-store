/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Button, ButtonGroup, Col, Container, Row } from "react-bootstrap";

function ProductTile() {
  return (
    <ol className="list-group">
      <li className="list-group-item border-info d-flex justify-content-between  mb-1 ">
        <Container>
          <Row>
            <Col sm={12} md={7} className="d-flex justify-content-start">
              <img src="data:image/jpeg;base64,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" />
              <div className="ml-2">
                <div className="fw-bold">Brand Name</div>
                Dosage form
              </div>
            </Col>
            <Col
              sm={12}
              md={4}
              className="d-flex justify-content-between align-items-sm-center"
            >
              <div style={{ marginLeft: "5%" }}> Price * Quantity</div>
              <ButtonGroup style={{ marginRight: "10px" }}>
                <Button variant="outline-secondary">-</Button>
                <div id="btnGroupAddon">14</div>
                <Button variant="outline-secondary">+</Button>
              </ButtonGroup>
              <span>
                <i className="far fa-trash-alt link-danger fs-5"></i>
              </span>
            </Col>
          </Row>
        </Container>
      </li>
    </ol>
  );
}

export default ProductTile;
