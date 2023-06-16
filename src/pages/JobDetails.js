import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { message } from "antd";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Checkbox } from "antd";
import { useNavigate } from "react-router-dom";
import { Modal, Upload } from "antd";
import { PlusOutlined } from "@ant-design/icons";

function JobDetails() {
  const [file, setFile] = useState([]);
  const navigate = useNavigate();
  const downloadFile = (fileName = "CV-PDF-file.pdf") => {
    // fetch("https://cors-anywhere.herokuapp.com/" + filePath, {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/pdf",
    //   },
    // })
    //   .then((response) => response.blob())
    //   .then((blob) => {
    //     const url = window.URL.createObjectURL(new Blob([blob]));
    //     const link = document.createElement("a");
    //     link.href = url;
    //     link.download = fileName;
    //     document.body.appendChild(link);
    //     link.click();
    //     link.parentNode.removeChild(link);
    //   });
  };

  const SignupSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    fullName: Yup.string().required("Required").min(2, "Too Short!"),
    phone: Yup.number().required("Required").min(3, "Too Short!"),
    address: Yup.string().required("Required"),
    date: Yup.date().required("Required"),
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
    enableReinitialize: true,
    initialValues: {
      fullName: "",
      email: "",
      phone: "",
      address: "",
      date: "",
    },
    validationSchema: SignupSchema,
    onSubmit: async () => {
      console.log("registered");
      msg("success", "Updated");
      navigate("profile");
    },
  });
  const plainOptions = [
    "Saturday",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
  ];
  const onChange = (checkedValues) => {
    console.log("checked = ", checkedValues);
  };

  const [image, setImage] = useState({ preview: "", raw: "" });

  const handleChange = (e) => {
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
    }
  };

  return (
    <div className="page">
      <div className="bg-white rounded-md p-4 shadow-lg  ">
        <div className="flex gap-4">
          <div className="rounded-md bg-white shadow-md  w-64 h-form    ">
            <div className=" text-center ">
              <label htmlFor="upload-button">
                {image.preview ? (
                  <img
                    src={image.preview}
                    alt="dummy"
                    className="rounded-full w-64 h-64"
                  />
                ) : (
                  <>
                    <span className="fa-stack fa-2x mt-3 mb-2">
                      <i className="fas fa-circle fa-stack-2x" />
                      <i className="fas fa-store fa-stack-1x fa-inverse" />
                    </span>
                    <h5 className="text-center">Upload your photo</h5>
                  </>
                )}
              </label>
              <div className="hidden">
                <input type="file" id="upload-button" onChange={handleChange} />{" "}
              </div>
            </div>
            <span className="p-2 block text-center text-font2">Jop title:</span>
            <span className="p-2 block text-center text-SReg text-lg">
              Pharmacy Employee
            </span>
          </div>
          <div
            className="rounded-md bg-white shadow-md p-4  h-form flex justify-between  "
            style={{ width: "1000px" }}
          >
            <div className="w-job">
              <Form.Group>
                <div className="flex justify-between mb-2 border-b-2 border-slate-100 p-3 text-font1">
                  <span className="flex item-center">Full name</span>
                  <Form.Control
                    name="fullName"
                    type="text"
                    value={formik.values.fullName}
                    onChange={formik.handleChange}
                    isInvalid={
                      formik.touched.fullName && !!formik.errors.fullName
                    }
                    isValid={formik.touched.fullName && !formik.errors.fullName}
                    onBlur={formik.handleBlur}
                    style={{
                      width: "300px",
                      color: "#757575",
                    }}
                  />
                </div>
              </Form.Group>
              <Form.Group>
                <div className="flex justify-between mb-2 border-b-2 border-slate-100 p-3 text-font1">
                  <span className="flex item-center"> Email</span>
                  <Form.Control
                    name="email"
                    type="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    isInvalid={formik.touched.email && !!formik.errors.email}
                    isValid={formik.touched.email && !formik.errors.email}
                    onBlur={formik.handleBlur}
                    style={{
                      width: "300px",
                      color: "#757575",
                    }}
                  />
                </div>
              </Form.Group>
              <Form.Group>
                <div className="flex justify-between mb-2 border-b-2 border-slate-100 p-3 text-font1">
                  <span className="flex item-center"> Phone</span>
                  <Form.Control
                    name="phone"
                    type="text"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    isInvalid={formik.touched.phone && !!formik.errors.phone}
                    isValid={formik.touched.phone && !formik.errors.phone}
                    onBlur={formik.handleBlur}
                    style={{
                      width: "300px",
                      color: "#757575",
                    }}
                  />
                </div>
              </Form.Group>
              <Form.Group>
                <div className="flex justify-between mb-2 border-b-2 border-slate-100 p-3 text-font1">
                  <span className="flex item-center"> Address</span>
                  <Form.Control
                    name="address"
                    type="text"
                    value={formik.values.address}
                    onChange={formik.handleChange}
                    isInvalid={
                      formik.touched.address && !!formik.errors.address
                    }
                    isValid={formik.touched.address && !formik.errors.address}
                    onBlur={formik.handleBlur}
                    style={{
                      width: "300px",
                      color: "#757575",
                    }}
                  />
                </div>
              </Form.Group>
              <Form.Group>
                <div className="flex justify-between mb-2  p-3 text-font1">
                  <span className="flex item-center">Birthdate</span>
                  <Form.Control
                    name="date"
                    type="date"
                    value={formik.values.date}
                    onChange={formik.handleChange}
                    isInvalid={formik.touched.date && !!formik.errors.date}
                    isValid={formik.touched.date && !formik.errors.date}
                    onBlur={formik.handleBlur}
                    style={{
                      width: "300px",
                      color: "#757575",
                    }}
                  />
                </div>
              </Form.Group>
            </div>
            <div className="text-font1 w-job">
              <div className="mb-2">
                <label htmlFor="ex">Experiences</label>
              </div>
              <textarea
                name=""
                id="ex"
                cols="40"
                rows="4"
                className="border border-gray-600 outline-SReg p-2 "
                style={{
                  color: "#757575",
                }}
              ></textarea>
              <div className="mt-4">
                <span className=" text-font1">WorkDays</span>
                <Checkbox.Group
                  className="days"
                  options={plainOptions}
                  onChange={onChange}
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "20px",
                    marginTop: "10px",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex mt-4 gap-2 ">
          <div className="d-grid  ">
            <button
              type="submit"
              className="  w-64 p-1 border-SReg border-2 text-SReg rounded-md hover:text-white hover:bg-SReg hover:border-SReg duration-.3s  text-center"
            >
              Send{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobDetails;
