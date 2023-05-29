import React, { useRef, useState } from "react";
import AddressData from "../Components/AddressData";
import ImageUploader from "../Components/ImageUploader";
import { Fragment } from "react";

function UploadPrescription() {
  return (
    <div className="page">
    <ImageUploader />
    </div>
  );
}
export default UploadPrescription;
