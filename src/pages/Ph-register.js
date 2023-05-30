import * as React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import * as Yup from "yup";
import { message } from "antd";
import { useFormik } from "formik";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
export default function Register() {
  const navigate = useNavigate();
  const SignupSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().required("Required").min(8, "Too Short!"),
    Fname: Yup.string().required("Required").min(2, "Too Short!"),
    Lname: Yup.string().required("Required").min(2, "Too Short!"),
    phone: Yup.number().required("Required"),
    address: Yup.string().required("Required"),
  });
  const msg = (type, msg) => {
    switch (type) {
      case "success":
        message.success(msg);
        break;
      case "error":
        message.error(msg);
        break;
      default:
        return "";
    }
  };
  const formik = useFormik({
    initialValues: {
      Fname: "",
      Lname: "",
      email: "",
      password: "",
      phone: "",
      address: "",
    },
    validationSchema: SignupSchema,
    onSubmit: async () => {
      console.log("registered");
      msg("success", "register success");
      navigate("/ph-store");
    },
  });
  return (
    <React.Fragment>
      <div class=" xl:flex xl:justify-between">
        <div class="w-96 mt-20 ml-auto mr-auto   xl:w-form h-fit relative xl:m-auto shadow-xl p-5 rounded-md bg-secondry  ">
          <Form onSubmit={formik.handleSubmit}>
            <div class="xl:flex xl:gap-3">
              <Form.Group
                className="mb-3 xl:col-md-6 "
                controlId="formBasicName"
              >
                <Form.Label class="text-SWord">First name</Form.Label>
                <Form.Control
                  name="Fname"
                  type="text"
                  placeholder="First name"
                  value={formik.values.Fname}
                  onChange={formik.handleChange}
                  isInvalid={formik.touched.Fname && !!formik.errors.Fname}
                  isValid={formik.touched.Fname && !formik.errors.Fname}
                  onBlur={formik.handleBlur}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.Fname}
                </Form.Control.Feedback>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>

              <Form.Group
                className="mb-3 xl:col-md-6 "
                controlId="formBasicLastName"
              >
                <Form.Label class="text-SWord">Last name</Form.Label>
                <Form.Control
                  name="Lname"
                  type="text"
                  placeholder="Last name"
                  value={formik.values.Lname}
                  onChange={formik.handleChange}
                  isInvalid={formik.touched.Lname && !!formik.errors.Lname}
                  isValid={formik.touched.Lname && !formik.errors.Lname}
                  onBlur={formik.handleBlur}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.Lname}
                </Form.Control.Feedback>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </div>

            <div class="xl:flex xl:gap-3">
              <Form.Group
                className="mb-3 xl:col-md-6"
                controlId="formBasicEmail"
              >
                <Form.Label class="text-SWord">Email</Form.Label>
                <Form.Control
                  name="email"
                  type="email"
                  placeholder="Enter email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  isInvalid={formik.touched.email && !!formik.errors.email}
                  isValid={formik.touched.email && !formik.errors.email}
                  onBlur={formik.handleBlur}
                />

                <Form.Control.Feedback type="invalid">
                  {formik.errors.email}
                </Form.Control.Feedback>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>

              <Form.Group
                className="mb-3 xl:col-md-6"
                controlId="formBasicPassword"
              >
                <Form.Label class="text-SWord">Password</Form.Label>
                <Form.Control
                  name="password"
                  type="password"
                  vlaue={formik.values.password}
                  onChange={formik.handleChange}
                  isInvalid={
                    formik.touched.password && !!formik.errors.password
                  }
                  isValid={formik.touched.password && !formik.errors.password}
                  placeholder="Password"
                  onBlur={formik.handleBlur}
                />
              </Form.Group>
            </div>

            <Form.Group className="mb-3" controlId="formBasicPhone">
              <Form.Label class="text-SWord">Phone</Form.Label>
              <Form.Control
                name="phone"
                type="phone"
                vlaue={formik.values.phone}
                onChange={formik.handleChange}
                isInvalid={formik.touched.phone && !!formik.errors.phone}
                isValid={formik.touched.phone && !formik.errors.phone}
                placeholder="Phone"
                onBlur={formik.handleBlur}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicAddress">
              <Form.Label class="text-SWord">Address</Form.Label>
              <Form.Control
                name="address"
                type="address"
                vlaue={formik.values.address}
                onChange={formik.handleChange}
                isInvalid={formik.touched.address && !!formik.errors.address}
                isValid={formik.touched.address && !formik.errors.address}
                placeholder="Address"
                onBlur={formik.handleBlur}
              />
            </Form.Group>

            <div className="d-grid gap-2 mb-8">
              <button
                type="submit"
                class="p-1 border-SReg border-2 text-SReg rounded-md hover:text-white hover:bg-SReg hover:border-SReg duration-.3s"
              >
                Register
              </button>
            </div>
            <span class=" block text-center text-SReg">
              Already have an account{" ? "}
              <span>
                <Link
                  class="hover:hover:text-SReg text-gray-400  transition no-underline"
                  to={"/ph-login"}
                >
                  Login
                </Link>
              </span>
            </span>
          </Form>
        </div>
        <div class="h-full w-photo">
          <img
            src="/images/pharmacist_1.jpg"
            alt=""
            class="h-photo hidden xl:block "
          />
        </div>
      </div>
    </React.Fragment>
  );
}
