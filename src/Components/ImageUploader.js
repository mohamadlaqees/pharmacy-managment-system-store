import React from 'react'
import { Alert, Col, Container, Row } from "react-bootstrap"
import { useRef, useState } from "react"


function ImageUploader() {
    const [file, setFile] = useState(null);
    const inputRef = useRef(null);
  
    const handleInputChange = (e) => {
      e.preventDefault();
      const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
      setFile(file);
    };
  return (
    <>
    <Container onDrop={handleInputChange} onDragOver={(e) => e.preventDefault()}>
      <Row>
        <Col>
          <Alert onClick={() => inputRef.current.click()}>
            <div className="w-100 h-100 d-flex justify-content-center align-items-center">
              <p>Drag and drop files here or click to upload</p>
              <input
                type="file"
                ref={inputRef}
                onChange={handleInputChange}
                className="d-none"
              />
            </div>
         </Alert>
        </Col>
      </Row>
      <Row>
        <Col>
          <ul>
            {file && <li key={file.name}>{file.name}</li>}
          </ul>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default ImageUploader