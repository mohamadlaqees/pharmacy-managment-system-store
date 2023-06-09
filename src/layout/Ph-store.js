import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import SideBar from "../Components/SideBar";
import { getUserData } from "../states/loginSlice";
export const checkContext = React.createContext();
const CheckProvider = checkContext.Provider;
function Dashboard() {
  const { errorL, successL } = useSelector((state) => state.loginSlice);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [check, setCheck] = useState(false);
  useEffect(() => {
    dispatch(getUserData());
  }, [dispatch]);
  return (
    <Fragment>
      <div className="flex">
        <CheckProvider value={check}>
          <SideBar />
        </CheckProvider>
        <div className={`w-full ${check ? "show:w-full" : "show:w-88%"}`}>
          <div
            className={`fixed w-custom2 ${
              check ? "show:w-custom" : "show:w-88%"
            } z-20 `}
          >
            <Header set={setCheck} check={check} />
          </div>
          <Outlet />
        </div>
      </div>
    </Fragment>
  );
}

export default Dashboard;
