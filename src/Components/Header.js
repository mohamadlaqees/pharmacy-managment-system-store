import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
function Header({ set, check }) {
  const [showN, setShowN] = useState(false);
  const [showF, setShowF] = useState(false);
  const onSearch = (value) => console.log(value);
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
          {/* <input type={'text'} class=' p-1 border-2 border-SReg outline-none w-88%' placeholder="Search"/> */}
          <Form.Control
            placeholder="Search"
            aria-label="Search"
            aria-describedby="basic-addon2"
            style={{
              boxShadow: "none",
              border: "2px solid #52b0ed",
            }}
          />
          <InputGroup.Text
            id="basic-addon1"
            class={` flex items-center justify-center ${
              showF ? "bg-SSReg" : "bg-SReg"
            }  text-white p-2 w-14  cursor-pointer hover:bg-SSReg duration-.3s`}
            onClick={() => {
              setShowF(!showF);
            }}
          >
            <i class="fa-solid fa-sitemap"></i>
          </InputGroup.Text>
          <div
            class={`w-80 h-80 rounded-md bg-slate-100 absolute right-0 top-10 shadow-md transition duration-.3s overflow-auto ${
              showF ? "block" : "hidden"
            } `}
          >
            <div class="p-2 hover:bg-slate-200 transition-all border border-b-4 border-gray-500">
              {["checkbox"].map((type) => (
                <div key={`default-${type}`} className="mb-1">
                  <Form.Check
                    type={type}
                    id={`default-${type}`}
                    label={`default ${type}`}
                    onChange={(e) => console.log(e.target.id)}
                  />
                </div>
              ))}
            </div>
          </div>
        </InputGroup>
      </div>
      <div class="flex gap-3">
        <div class=" border-r-2 border-gray-200 ">
          <i
            class={`fa-solid fa-bell w-fit -rotate-12 text-xl ${
              showN ? "text-SSReg" : "text-gray-500"
            } cursor-pointer transition-all hover:text-SSReg mt-2 mr-2 `}
            onClick={() => setShowN(!showN)}
          ></i>
          <div
            class={`w-80 h-80 rounded-md bg-slate-100 absolute right-44 top-12 shadow-md transition duration-.3s overflow-auto ${
              showN ? "block" : "hidden"
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
        <div>
          <i class="fa-solid fa-user text-SSReg   transition-all mt-2"></i>
        </div>
        <div class="">
          <span class="block text-sm">Mohammad Laqees</span>
          <span class="text-gray-500 block text-sm">Admin</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
