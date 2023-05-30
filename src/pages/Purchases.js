import React from "react";
import ProductTile from "../Components/ProductTile";
import { Button, Col, Container, Row } from "react-bootstrap";
import AddressData from "../Components/AddressData";
import ImageUploader from "../Components/ImageUploader";
function Purchases() {
  return (
    <div className="page">
      <Container className="mt-1">
      <AddressData />
        <ProductTile />
        <ImageUploader />
</Container>
    </div>
  );
}

export default Purchases;
