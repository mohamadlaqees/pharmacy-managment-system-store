import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import ProductTile from './ProductTile'
import { useState } from 'react';
import { useEffect } from 'react';

function OrderCard() {
    const [expanded, setExpanded] = useState(false);
    const expand = () => {
      setExpanded(!expanded);
    };
    useEffect(() => {
      const card = document.getElementById("card-body");
      const height = card.scrollHeight + "px";
      console.log(typeof height);
      if (expanded) {
        card.style.height = height;
      } else {
        card.style.height = "150px";
      }
    }, [expanded]);
  return (
    <Container className="shadow  rounded p-2 ">
        <Card border="primary">
          <Card.Header className="text-center">
            <Row>
              <Col md={5}>Datete</Col>
              <Col>cost</Col>
              <Col>status</Col>
              <Col md={1}>delet</Col>
            </Row>
          </Card.Header>
          <Card.Body
            style={{
              height: "150px",
              transition: "height 0.4s cubic-bezier(0, 1.33, 0.09, 0.99) 0s ",
              overflow: "hidden",
            }}
            id="card-body"
          >
            <ProductTile />
            <ProductTile />
            <ProductTile />
            <ProductTile />
          </Card.Body>

          <Card.Footer onClick={expand} className="text-center">
            {expanded ? (
              <i className="fa fa-chevron-circle-up link-primary" />
            ) : (
              <i className="fa fa-chevron-circle-down link-primary" />
            )}
          </Card.Footer>
        </Card>
      </Container>
  )
}

export default OrderCard