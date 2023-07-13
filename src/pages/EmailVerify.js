import * as React from "react";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { reset, verify } from "../states/authSalice";
import Loading from "../Components/loading";
export default function EmailVerify() {
  const { errorA, successA, loadingA } = useSelector(
    (state) => state.authSlice
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  React.useEffect(() => {
    if (successA !== null) {
      navigate("/ph-store");
      msg("success", successA);
      dispatch(reset());
      localStorage.removeItem("email");
    } else {
      if (errorA !== null) {
        msg("error", errorA);
      }
    }
  }, [successA, errorA, navigate, dispatch]);
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

  return (
    <React.Fragment>
      <div className="flex justify-between">
        <div className="email">
          <div className="mt-20 text-lg text-center ">
            click to verify your email :
            <div className="text-SWord mt-10">
              {localStorage.getItem("email")}
            </div>
            <div className="d-grid gap-2 mt-28">
              <Loading error={errorA} loading={loadingA}>
                <button
                  type="submit"
                  className="p-1 border-SReg border-2 text-SReg rounded-md hover:text-white hover:bg-SReg hover:border-SReg duration-.3s"
                  onClick={() => dispatch(verify())}
                >
                  Verify
                </button>
              </Loading>
            </div>
          </div>
        </div>
        <div className="h-full">
          <img
            src="/images/pharmacist_1.jpg"
            alt=""
            className="h-photo hidden xl:block "
          />
        </div>
      </div>
    </React.Fragment>
  );
}
