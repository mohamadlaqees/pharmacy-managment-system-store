import React, { useState, useRef, useEffect } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Checkbox, Divider } from "antd";
import { useNavigate } from "react-router-dom";
import { NavLink, Link } from "react-router-dom";

function Header({ set, check }) {
  const navigate = useNavigate();
  const CheckboxGroup = Checkbox.Group;
  const plainOptions = ["Apple", "Pear", "Orange"];
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
  const [indeterminate, setIndeterminate] = useState(true);
  const [checkAll, setCheckAll] = useState(false);
  const onChange = (list) => {
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < plainOptions.length);
    setCheckAll(list.length === plainOptions.length);
  };
  const onCheckAllChange = (e) => {
    console.log(e.target.checked);
    setCheckedList(e.target.checked ? plainOptions : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  };
  return (
    <div class=" p-1 flex justify-between   bg-white rounded-md shadow-sm ">
      <div>
        <i
          class="fa fa-light fa-align-left  text-gray-500 cursor-pointer hover:text-SSReg text-xl transition-all mt-2 ml-2"
          onClick={() => set(!check)}
        ></i>
      </div>
      <div class="w-1/2">
        <InputGroup>
          <InputGroup.Text
            id="basic-addon1"
            class="flex items-center justify-center  bg-SReg text-white p-2 rounded-md cursor-pointer hover:bg-SSReg duration-.3s"
          >
            <i class="fas fa-search"></i>
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
              <i class="fa-solid fa-sitemap"></i>
            </InputGroup.Text>
            <div
              class={`w-80 h-80 rounded-md bg-slate-100 absolute right-0 top-10 shadow-md transition duration-.3s overflow-auto ${
                showF ? "opacity-100 visible z-10" : "opacity-0 invisible"
              } `}
            >
              <div class="p-2  transition-all border border-b-4 border-gray-500">
                <Checkbox
                  indeterminate={indeterminate}
                  onChange={onCheckAllChange}
                  checked={checkAll}
                  class="mb-0"
                >
                  Check all
                </Checkbox>
                <Divider />
                <CheckboxGroup
                  options={plainOptions}
                  value={checkedList}
                  onChange={onChange}
                />
              </div>
            </div>
          </div>
        </InputGroup>
      </div>
      <div class="flex gap-3">
        <div>
          <NavLink to={"purchases"} className="route">
            <i class={`fa-solid fa-cart-shopping text-xl mt-2`}></i>
          </NavLink>
        </div>
        <div>
          <NavLink to={"upload-prescription"} className="route">
            <i
              class={`	fas fa-file-medical text-xl mt-2`}
              title={"order by only uploading your prescription"}
            ></i>
          </NavLink>
        </div>
        <div class=" border-r-2 border-gray-200 " ref={popN}>
          <i
            class={`fa-solid fa-bell w-fit -rotate-12 text-xl ${
              showN ? "text-SSReg" : "text-gray-500"
            } cursor-pointer transition-all hover:text-SSReg mt-2 mr-2 `}
            onClick={() => setShowN(!showN)}
          ></i>
          <div
            class={`w-80 h-80 rounded-md bg-slate-100 absolute right-44 top-12 shadow-md transition-all overflow-auto  ${
              showN ? "opacity-100 visible " : "opacity-0 invisible"
            } `}
          >
            <div class="p-2 hover:bg-slate-200 transition-all border border-b-4 border-gray-500">
              <h5>Title</h5>
              <span class="block h-11 overflow-hidden cursor-pointer text-ellipsis ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
                facilis maxime dignissimos iusto veritatis, vel modi non
                accusantium dolor! Asperiores sapiente possimus doloremque
                recusandae perferendis beatae unde earum, minima obcaecati?
              </span>
            </div>
            <div class="p-2 hover:bg-slate-200 transition-all border border-b-4 border-gray-500">
              <h5>Title</h5>
              <span class="block h-11 overflow-hidden cursor-pointer text-ellipsis ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
                facilis maxime dignissimos iusto veritatis, vel modi non
                accusantium dolor! Asperiores sapiente possimus doloremque
                recusandae perferendis beatae unde earum, minima obcaecati?
              </span>
            </div>
            <div class="p-2 hover:bg-slate-200 transition-all border border-b-4 border-gray-500">
              <h5>Title</h5>
              <span class="block h-11 overflow-hidden cursor-pointer text-ellipsis ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
                facilis maxime dignissimos iusto veritatis, vel modi non
                accusantium dolor! Asperiores sapiente possimus doloremque
                recusandae perferendis beatae unde earum, minima obcaecati?
              </span>
            </div>
            <div class="p-2 hover:bg-slate-200 transition-all border border-b-4 border-gray-500">
              <h5>Title</h5>
              <span class="block h-11 overflow-hidden cursor-pointer text-ellipsis ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
                facilis maxime dignissimos iusto veritatis, vel modi non
                accusantium dolor! Asperiores sapiente possimus doloremque
                recusandae perferendis beatae unde earum, minima obcaecati?
              </span>
            </div>
            <div class="p-2 hover:bg-slate-200 transition-all border border-b-4 border-gray-500">
              <h5>Title</h5>
              <span class="block h-11 overflow-hidden cursor-pointer text-ellipsis ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
                facilis maxime dignissimos iusto veritatis, vel modi non
                accusantium dolor! Asperiores sapiente possimus doloremque
                recusandae perferendis beatae unde earum, minima obcaecati?
              </span>
            </div>
          </div>
        </div>
        <div class=" transition-all  " ref={prof}>
          <div
            className="flex gap-3 cursor-pointer"
            onClick={() => setShowP(!showP)}
          >
            <div>
              <i
                class={`fa-solid fa-user text-xl ${"text-SSReg"} cursor-pointer transition-all hover:text-SSReg mt-2 mr-2 `}
              ></i>
            </div>
            <div class=" ">
              <span class="block text-sm">Mohammad Laqees</span>
              <span class="text-gray-500 block text-sm">Admin</span>
            </div>
          </div>
          <div
            class={`w-48 h-80 rounded-md bg-slate-100 absolute right-0 top-12 shadow-md transition duration-.3s overflow-auto ${
              showP ? "opacity-100 visible" : "opacity-0 invisible"
            } `}
          >
            <div class="p-2 flex gap-3 justify-center  hover:bg-slate-200  border border-b-4 border-gray-500 hover:text-SSReg transition-all">
              <div>
                <i class="fa-regular fa-user"></i>{" "}
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
            <div class="p-2 flex gap-3 justify-center  hover:bg-slate-200  border border-b-4 border-gray-500 hover:text-SSReg transition-all">
              <div>
                <i class="fa-regular fa-pen-to-square"></i>{" "}
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
