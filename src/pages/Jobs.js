import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Jobs() {
  const navigate = useNavigate();
  const map = [
    {
      job: "Pharmacy Employee",
    },
  ];
  return (
    <div className="page">
      <div className="bg-white pt-4 pb-4 shadow-md rounded-md  relative">
        <div className="absolute top-0 w-full p-1  bg-SReg text-white font-bold text-center rounded-md">
          Available jobs
        </div>
        <div className="absolute bottom-0 w-full h-7  bg-SReg text-white font-bold text-center rounded-md"></div>
        {map.map(({ job }, inx) => {
          return (
            <div
              className={`p-4 ${
                inx === map.length - 1 ? "border-b-0 mb-1" : "border-b-2"
              } border-gray-200 ${
                inx === 0 ? "mt-2" : ""
              } flex justify-between cursor-pointer hover:bg-slate-200 transition-all`}
              key={inx}
              onClick={() => navigate("jobDetails")}
            >
              <div className="flex gap-3">
                <div className="flex justify-center items-center">
                  <span className="text-gray-600">{job}</span>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <Link
                  to={`jobDetails`}
                  className="text-gray-500 hover:text-gray-600 text-xl transition-all"
                >
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Jobs;
