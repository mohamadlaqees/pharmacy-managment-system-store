import React, { useState, useRef, useEffect } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Checkbox, Divider } from "antd";
import { useNavigate } from "react-router-dom";
import { NavLink, Link } from "react-router-dom";
import { Col, InputNumber, Row, Slider, Space } from "antd";
import { useCallback } from "react";

function Header({ set, check }) {
  const CheckboxGroup = Checkbox.Group;
  const defaultCheckedList = [];
  const [showN, setShowN] = useState(false);
  const [showF, setShowF] = useState(false);
  const [showP, setShowP] = useState(false);
  const popF = useRef();
  const popN = useRef();
  const prof = useRef();
  useEffect(() => {
    let popHandler = (e) => {
      if (!popF.current.contains(e.target)) {
        setShowF(false);
      }
      if (!popN.current.contains(e.target)) {
        setShowN(false);
      }
      if (!prof.current.contains(e.target)) {
        setShowP(false);
      }
    };
    document.addEventListener("mousedown", popHandler);
    return () => {
      document.removeEventListener("mousedown", popHandler);
    };
  });
  const onSearch = (value) => console.log(value);

  const [checkedList, setCheckedList] = useState(defaultCheckedList);
  const [checkB, setCheckB] = useState(false);
  const [checkW, setCheckW] = useState(false);
  const [inputValue, setInputValue] = useState(1);
  const onChange = useCallback((list) => {
    setCheckedList(list);
  }, []);
  const onChangeB = useCallback(() => {
    setCheckB(!checkB);
  }, [checkB]);
  const onChangeW = () => {
    setCheckW(!checkW);
  };
  const onChangeI = (newValue) => {
    console.log(newValue);
    setInputValue(newValue);
  };

  return (
    <div className=" p-1 flex justify-center md:justify-between   bg-white rounded-md shadow-sm ">
      <div className="hidden show:block">
        <i
          className="  fa fa-light fa-align-left  text-gray-500 cursor-pointer hover:text-SSReg text-xl transition-all mt-2 ml-2"
          onClick={() => set(!check)}
        ></i>
      </div>
      <div className="ml-5 w-1/2 show:w-1/2 hidden md:block ">
        <InputGroup>
          <InputGroup.Text
            id="basic-addon1"
            class="flex items-center justify-center  bg-SReg text-white p-2 rounded-md cursor-pointer hover:bg-SSReg duration-.3s"
          >
            <i className="fas fa-search"></i>
          </InputGroup.Text>
          <Form.Control
            placeholder="Search"
            aria-label="Search"
            aria-describedby="basic-addon2"
            style={{
              boxShadow: "none",
              border: "2px solid #52b0ed",
            }}
          />
          <div ref={popF}>
            <InputGroup.Text
              id="basic-addon1"
              class={` flex items-center justify-center ${
                showF ? "bg-SSReg" : "bg-SReg"
              }  text-white p-2 h-full w-14  cursor-pointer hover:bg-SSReg duration-.3s`}
              onClick={() => {
                setShowF(!showF);
              }}
            >
              <i className="fa-solid fa-sitemap"></i>
            </InputGroup.Text>
            <div
              className={`w-80 h-80 rounded-md bg-slate-100 absolute right-0 top-10 shadow-md transition duration-.3s overflow-auto ${
                showF ? "opacity-100 visible z-10" : "opacity-0 invisible"
              } `}
            >
              <div className="p-2  transition-all border border-b-4 border-gray-500">
                <Checkbox onChange={onChangeB} checked={checkB}>
                  Brand
                </Checkbox>
              </div>
              <div className="p-2  transition-all border border-b-4 border-gray-500">
                <div className="text-sm">Price</div>
                <Space
                  style={{
                    width: "100%",
                  }}
                  direction="vertical"
                >
                  <Row>
                    <Col span={12}>
                      <Slider
                        min={10}
                        max={1000}
                        onChange={onChangeI}
                        value={typeof inputValue === "number" ? inputValue : 0}
                      />
                    </Col>
                    <Col span={4}>
                      <InputNumber
                        min={10}
                        max={1000}
                        style={{
                          margin: "0 16px",
                        }}
                        value={inputValue}
                        onChange={onChangeI}
                      />
                    </Col>
                  </Row>
                </Space>
              </div>
              <div className="p-2  transition-all border border-b-4 border-gray-500">
                <Checkbox onChange={onChangeW} checked={checkW}>
                  without prescription
                </Checkbox>
              </div>
              <div className="p-2  transition-all border border-b-4 border-gray-500">
                <div className="text-sm">Type</div>
                <CheckboxGroup
                  options={["Needle", "Capsule", "syrups"]}
                  value={checkedList}
                  onChange={onChange}
                />
              </div>
            </div>
          </div>
        </InputGroup>
      </div>
      <div className="flex gap-3 ">
        <div>
          <NavLink to={"purchases"} className="route">
            <i className={`fa-solid fa-cart-shopping text-xl mt-2`}></i>
          </NavLink>
        </div>
        <div>
          <NavLink to={"upload-prescription"} className="route">
            <i
              className={`	fas fa-file-medical text-xl mt-2`}
              title={"order by only uploading your prescription"}
            ></i>
          </NavLink>
        </div>
        <div className=" border-r-2 border-gray-200 " ref={popN}>
          <i
            className={`fa-solid fa-bell w-fit -rotate-12 text-xl ${
              showN ? "text-SSReg" : "text-gray-500"
            } cursor-pointer transition-all hover:text-SSReg mt-2 mr-2 `}
            onClick={() => setShowN(!showN)}
          ></i>
          <div
            className={`w-80 h-80 rounded-md bg-slate-100 absolute sm:top-12 top-12 right-16 sm:right-96 md:right-44 md:top-12 shadow-md transition-all overflow-auto  ${
              showN ? "opacity-100 visible " : "opacity-0 invisible"
            } `}
          >
            <div className="p-2 hover:bg-slate-200 transition-all border border-b-4 border-gray-500">
              <h5>Title</h5>
              <span className="block h-11 overflow-hidden cursor-pointer text-ellipsis ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
                facilis maxime dignissimos iusto veritatis, vel modi non
                accusantium dolor! Asperiores sapiente possimus doloremque
                recusandae perferendis beatae unde earum, minima obcaecati?
              </span>
            </div>
            <div className="p-2 hover:bg-slate-200 transition-all border border-b-4 border-gray-500">
              <h5>Title</h5>
              <span className="block h-11 overflow-hidden cursor-pointer text-ellipsis ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
                facilis maxime dignissimos iusto veritatis, vel modi non
                accusantium dolor! Asperiores sapiente possimus doloremque
                recusandae perferendis beatae unde earum, minima obcaecati?
              </span>
            </div>
            <div className="p-2 hover:bg-slate-200 transition-all border border-b-4 border-gray-500">
              <h5>Title</h5>
              <span className="block h-11 overflow-hidden cursor-pointer text-ellipsis ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
                facilis maxime dignissimos iusto veritatis, vel modi non
                accusantium dolor! Asperiores sapiente possimus doloremque
                recusandae perferendis beatae unde earum, minima obcaecati?
              </span>
            </div>
            <div className="p-2 hover:bg-slate-200 transition-all border border-b-4 border-gray-500">
              <h5>Title</h5>
              <span className="block h-11 overflow-hidden cursor-pointer text-ellipsis ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
                facilis maxime dignissimos iusto veritatis, vel modi non
                accusantium dolor! Asperiores sapiente possimus doloremque
                recusandae perferendis beatae unde earum, minima obcaecati?
              </span>
            </div>
            <div className="p-2 hover:bg-slate-200 transition-all border border-b-4 border-gray-500">
              <h5>Title</h5>
              <span className="block h-11 overflow-hidden cursor-pointer text-ellipsis ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
                facilis maxime dignissimos iusto veritatis, vel modi non
                accusantium dolor! Asperiores sapiente possimus doloremque
                recusandae perferendis beatae unde earum, minima obcaecati?
              </span>
            </div>
          </div>
        </div>
        <div className=" transition-all  " ref={prof}>
          <div
            className="flex gap-3 cursor-pointer"
            onClick={() => setShowP(!showP)}
          >
            <div>
              <i
                className={`fa-solid fa-user text-xl ${"text-SSReg"} cursor-pointer transition-all hover:text-SSReg mt-2 mr-2 `}
              ></i>
            </div>
            <div className=" ">
              <span className="block text-sm">Mohammad Laqees</span>
              <span className="text-gray-500 block text-sm">Admin</span>
            </div>
          </div>
          <div
            className={`w-48 h-80 rounded-md bg-slate-100 absolute top-12 right-8 sm:top-12 sm:right-48  md:right-0 md:top-12 shadow-md transition duration-.3s overflow-auto ${
              showP ? "opacity-100 visible" : "opacity-0 invisible"
            } `}
          >
            <div className="p-2 flex gap-3 justify-center  hover:bg-slate-200  border border-b-4 border-gray-500 hover:text-SSReg transition-all">
              <div>
                <i className="fa-regular fa-user"></i>{" "}
              </div>
              <div>
                <Link
                  className="no-underline text-gray-500 hover:text-gray-500"
                  to={"profile"}
                >
                  My profile
                </Link>
              </div>
            </div>
            <div className="p-2 flex gap-3 justify-center  hover:bg-slate-200  border border-b-4 border-gray-500 hover:text-SSReg transition-all">
              <div>
                <i className="fa-regular fa-pen-to-square"></i>{" "}
              </div>
              <div>
                <Link
                  className="no-underline text-gray-500 hover:text-gray-500"
                  to={"editProfile"}
                >
                  Edit profile
                </Link>
              </div>
            </div>

            <div className="  show:hidden show:invisible  p-2  flex gap-3 justify-center   hover:text-red-500 border border-b-4 border-gray-500 hover:text-SSReg transition-all">
              <div>
                <i class="fa-solid fa-arrow-right-from-bracket"></i>{" "}
              </div>
              <div>
                <Link
                  className="no-underline text-gray-500 hover:text-gray-500"
                  to={"/ph-login"}
                >
                  Logout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
