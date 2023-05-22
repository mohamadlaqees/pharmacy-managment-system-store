import React, { Fragment, useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { checkContext } from "../layout/Ph-store";
function SideBar() {
  const check = useContext(checkContext);
  return (
    <Fragment>
      <div
        class={`shadow-xl ${
          check ? "w-14" : "w-12%"
        }  rounded-m transition-all h-page`}
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
              <NavLink className="route" to={"store"}>
                <i class="fas fa-shopping-cart "></i>
                {check ? "" : "Store"}
              </NavLink>
            </li>
            <li className={`link`}>
              <NavLink className="route" to={"users"}>
                <i class="fa-solid fa-users"></i>
                {check ? "" : "Users"}
              </NavLink>
            </li>
            <li className={`link`}>
              <NavLink className="route" to={"stock"}>
                <i class="fa-sharp fa-solid fa-layer-group"></i>
                {check ? "" : "Stock"}
              </NavLink>
            </li>
            <li className={`link`}>
              <NavLink className="route" to={"reports"}>
                <i class="fas fa-file"></i> {check ? "" : "Reports"}
              </NavLink>
            </li>
            <li className={`link`}>
              <NavLink className="route" to={"backups"}>
                <i class="fa-solid fa-database"></i>
                {check ? "" : "Backups"}
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
    </Fragment>
  );
}

export default SideBar;
