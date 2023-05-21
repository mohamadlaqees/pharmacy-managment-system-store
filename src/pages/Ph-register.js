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
    },
    validationSchema: SignupSchema,
    onSubmit: async () => {
      console.log('registered')
      msg(
        "success",
        "register success"
      );
      navigate("/ph-store");
    },
  });
  return (
    <React.Fragment>
      <div class="flex justify-between">
        <div class="w-96  m-auto relative translate-y-1/2  text-start shadow-xl p-5 rounded-md bg-secondry xl:-translate-x-10% xl:bottom-48 tra">
          <Form onSubmit={formik.handleSubmit}>
            <div class="flex gap-3 mb-3">
              <Form.Group className="col-sm-6 " controlId="formBasicEmail">
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

              <Form.Group className="col-sm-6 " controlId="formBasicEmail">
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

            <Form.Group className="mb-3" controlId="formBasicEmail">
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
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
              <Form.Control.Feedback type="invalid">
                {formik.errors.email}
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label class="text-SWord">Password</Form.Label>
              <Form.Control
                name="password"
                type="password"
                vlaue={formik.values.password}
                onChange={formik.handleChange}
                isInvalid={formik.touched.password && !!formik.errors.password}
                isValid={formik.touched.password && !formik.errors.password}
                placeholder="Password"
                onBlur={formik.handleBlur}
              />
            </Form.Group>

            <div className="d-grid gap-2 mb-8">
            <button type="submit"  class='p-1 border-SReg border-2 text-SReg rounded-md hover:text-white hover:bg-SReg hover:border-SReg duration-.3s'  >Register</button>
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
        <div class="h-full">
          <img src="/images/pharmacist_1.jpg" alt="" class="h-photo hidden xl:block " />
        </div>
      </div>
    </React.Fragment>
  );
}
