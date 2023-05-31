import React, { Fragment, useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { checkContext } from "../layout/Ph-store";
function SideBar() {
  const check = useContext(checkContext);
  return (
    <Fragment>
      <div
        class={` hidden show:block shadow-xl ${
          check ? "w-14" : "w-12%"
        }  rounded-m transition-all h-page `}
      >
        <div class="text-SReg text-3xl  mt-2 border-b-2">
          <i class="fa-solid fa-hospital ml-3 mb-2"></i>
        </div>
        <div class="mt-2 ">
          <ul class="p-0">
            <li className={`link`}>
              <NavLink className="route" to={"/ph-store"} end>
                <i class="fa fa-home "></i>
                {check ? "" : "Home"}
              </NavLink>
            </li>
            <li className={`link`}>
              <NavLink className="route" to={"my-orders"} end>
                <i class="fas fa-money-check "></i>
                {check ? "" : "My Orders"}
              </NavLink>
            </li>
            <li className={`link`}>
              <NavLink className="route" to={"interaction"} end>
                <i class="	fas fa-compress-alt "></i>
                {check ? "" :"Drugs Interction"}
              </NavLink>
            </li>
          </ul>
        </div>
        <div class="  text-gray-500   cursor-pointer absolute bottom-0 mb-4">
          <NavLink
            className=" route  hover:text-red-500 "
            to={"/ph-login"}
            replace={true}
          >
            <i class="fa-solid fa-right-from-bracket mr-5"></i>
            {check ? "" : "Logout"}
          </NavLink>
        </div>
      </div>
      <div
        class={` block  show:hidden show:invisible shadow-xl ${
          check ? "w-14" : "w-14"
        }  rounded-m transition-all h-page `}
      >
        <div class="text-SReg text-3xl  mt-2 border-b-2">
          <i class="fa-solid fa-hospital ml-2 mb-2"></i>
        </div>
        <div class="mt-2 ">
          <ul class="p-0">
            <li className={`link`}>
              <NavLink className="route" to={"/ph-store"} end>
                <span>
                  <i class="fa fa-home "></i>
                </span>
                <span className="invisible show:visible">
                  {check ? "" : "Home"}
                </span>
              </NavLink>
            </li>
          </ul>
        </div>
        <div class="  text-gray-500   cursor-pointer absolute bottom-0 mb-4">
          <NavLink
            className=" route  hover:text-red-500 "
            to={"/ph-login"}
            replace={true}
          >
            <span>
              <i class="fa-solid fa-right-from-bracket mr-5"></i>
            </span>
            <span className="invisible show:visible">
              {check ? "" : "Logout"}
            </span>
          </NavLink>
        </div>
      </div>
    </Fragment>
  );
}

export default SideBar;
