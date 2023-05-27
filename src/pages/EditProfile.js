import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { DatePicker, Space } from "antd";
function EditProfile() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [birthDate, setbirthDate] = useState(null);
  const onChange = (date, dateString) => {
    setbirthDate(date);
  };
  return (
    <div className="page flex justify-center gap-4">
      <div className="rounded-md bg-white shadow-md p-4 w-64 h-96  mt-24  ">
        <div className="p-3">
          <img src="/images/user.jpg" alt="" className="rounded-full" />
        </div>
        <span className="p-2 block text-center font-bold">Mohammad laqees</span>
        <span className="p-2 block text-center text-font2">User</span>
        <div className="d-grid gap-2 mb-8">
          <Link
            class="p-1 border-SReg border-2 text-SReg rounded-md hover:text-white hover:bg-SReg hover:border-SReg duration-.3s no-underline text-center"
            to={"profile"}
          >
            Save
          </Link>
        </div>
      </div>
      <div className="rounded-md bg-white shadow-md p-4 w-form h-96   mt-24  ">
        <div className="flex justify-between mb-2 border-b-2 border-slate-100 p-3 text-font1">
          <span className="block">Full name</span>
          <span className="text-font2 mr-32 block">
            <input
              className="outline-none"
              type="text"
              value={fullName}
              onChange={(e) => {
                setFullName(e.target.value);
              }}
            />
          </span>
        </div>
        <div className="flex justify-between mb-2 border-b-2 border-slate-100 p-3 text-font1">
          <span className="block"> Email</span>
          <span className="text-font2 mr-32 block">
            <input
              className="outline-none"
              type="text"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </span>
        </div>
        <div className="flex justify-between mb-2 border-b-2 border-slate-100 p-3 text-font1">
          <span className="block"> Phone</span>
          <span className="text-font2 mr-32 block">
            <input
              className="outline-none"
              type="text"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
          </span>
        </div>
        <div className="flex justify-between mb-2 border-b-2 border-slate-100 p-3 text-font1">
          <span className="block"> Address</span>
          <span className="text-font2 mr-32 block">
            <input
              className="outline-none"
              type="text"
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />
          </span>
        </div>
        <div className="flex justify-between mb-2  p-3 text-font1">
          <span className="block">Birthdate</span>
          <span className="text-font2 mr-32 block">
            <Space direction="vertical" size={12}>
              <DatePicker
                bordered={false}
                style={{
                  width: "350px",
                  marginLeft: "25px",
                }}
                value={birthDate}
                onChange={onChange}
              />
            </Space>
          </span>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
