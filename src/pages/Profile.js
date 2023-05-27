import React from "react";
import Form from "react-bootstrap/Form";

function Profile() {
  return (
    <div className="page">
      <div class="w-form  rounded-md flex justify-center items-center relative top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 ">
        <Form onSubmit={"x"}>
          <Form.Group className="mb-3 " controlId="formBasicName">
            <Form.Label class="text-SWord">First name</Form.Label>
            <Form.Control name="Fname" type="text" placeholder="First name" />
          </Form.Group>

          <Form.Group className="mb-3 " controlId="formBasicLastName">
            <Form.Label class="text-SWord">Last name</Form.Label>
            <Form.Control name="Lname" type="text" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPhone">
            <Form.Label class="text-SWord">Phone</Form.Label>
            <Form.Control name="phone" type="phone" placeholder="Phone" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicAddress">
            <Form.Label class="text-SWord">Address</Form.Label>
            <Form.Control name="address" type="address" placeholder="Address" />
          </Form.Group>
        </Form>
      </div>
    </div>
  );
}

export default Profile;
