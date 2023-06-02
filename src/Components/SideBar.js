import React, { Fragment, useContext } from "react";
import { NavLink } from "react-router-dom";
import { checkContext } from "../layout/Ph-store";
function SideBar() {
  const check = useContext(checkContext);
  return (
    <Fragment>
      <div
        className={` hidden show:block shadow-xl ${
          check ? "w-14" : "w-12%"
        }  rounded-m transition-all  `}
      >
        <div className="text-SReg text-3xl  mt-2 border-b-2">
          <i className="fa-solid fa-hospital ml-3 mb-2"></i>
        </div>
        <div className="mt-2 ">
          <ul className="p-0">
            <li className={`link`}>
              <NavLink className="route" to={"/ph-store"} end>
                <i className="fa fa-home "></i>
                {check ? "" : "Home"}
              </NavLink>
            </li>
            <li className={`link`}>
              <NavLink className="route" to={"my-orders"} end>
                <i className="fas fa-money-check "></i>
                {check ? "" : "My Orders"}
              </NavLink>
            </li>
            <li className={`link`}>
              <NavLink className="route" to={"interaction"} end>
                <i className="	fas fa-compress-alt "></i>
                {check ? "" :"Interction"}
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="  text-gray-500   cursor-pointer absolute bottom-0 mb-4">
          <NavLink
            className=" route  hover:text-red-500 "
            to={"/ph-login"}
            replace={true}
          >
            <i className="fa-solid fa-right-from-bracket mr-5"></i>
            {check ? "" : "Logout"}
          </NavLink>
        </div>
      </div>
      <div
        className={` h-mobileS  block  show:hidden show:invisible shadow-xl ${
          check ? "w-14" : "w-14"
        }  rounded-m transition-all sm:h-page  `}
      >
        <div className="text-SReg text-3xl  mt-2 border-b-2">
          <i className="fa-solid fa-hospital ml-2 mb-2"></i>
        </div>
        <div className="mt-2 ">
          <ul className="p-0">
            <li className={`link`}>
              <NavLink className="route" to={"/ph-store"} end>
                <span>
                  <i className="fa fa-home "></i>
                </span>
                <span className="invisible show:visible">
                  {check ? "" : "Home"}
                </span>
              </NavLink>
            </li>
            <li className={`link`}>
              <NavLink className="route" to={"my-orders"} >
                <span>
                  <i className="fas fa-money-check "></i>
                </span>
                <span className="invisible show:visible">
                  {check ? "" : "My Orders"}
                </span>
              </NavLink>
            </li>
            <li className={`link`}>
              <NavLink className="route" to={"interaction"} >
                <span>
                  <i className="fas fa-compress-alt"></i>
                </span>
                <span className="invisible show:visible">
                  {check ? "" : "Interactions"}
                </span>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="  text-gray-500   cursor-pointer absolute -bottom-16 sm:bottom-0 sm:mb-4">
          <NavLink
            className=" route  hover:text-red-500 "
            to={"/ph-login"}
            replace={true}
          >
            <span>
              <i className="fa-solid fa-right-from-bracket mr-5"></i>
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
