/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import {
  Alert,
  Col,
  Container,
  Dropdown,
  DropdownButton,
  Row,
} from "react-bootstrap";

function MyOrders() {
  return (
    <div className="page ">
      <Container>
        <Row>
          <Col xs={1} className="p-20px">
            <DropdownButton className="primary-color" title={"Status"}>
              {["processing", "being delivered", "delivered", "cancelled"].map(
                (status) => {
                  return <Dropdown.Item eventKey="1">{status}</Dropdown.Item>;
                }
              )}
            </DropdownButton>
          </Col>
          <Col xs={5}>
            <DropdownButton title={"Date"}>
              {["processing", "being delivered", "delivered", "cancelled"].map(
                (Date) => {
                  return <Dropdown.Item eventKey="1">{Date}</Dropdown.Item>;
                }
              )}
            </DropdownButton>
          </Col>
          <Col xs={4}>
            <Alert
              className="d-flex justify-content-center align-items-center "
              style={{ maxHeight: "40px" }}
            >
              username
            </Alert>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MyOrders;
