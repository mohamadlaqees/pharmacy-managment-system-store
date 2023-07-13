import React from "react";
import { useSelector } from "react-redux";

function Profile() {
  const { userData } = useSelector((state) => state.loginSlice);
  return (
    <div className="page2">
      <div className="md:flex md:justify-center md:gap-4">
        <div className=" ml-auto  mr-auto mb-2 w-64 sm:w-80 rounded-md bg-white shadow-md p-4 md:w-64 h-96  md:mt-24 md:ml-0 md:mr-0 md-mb-0 ">
          <div className="p-3">
            <img src="/images/user.jpg" alt="" className="rounded-full" />
          </div>
          <span className="p-2 block text-center font-bold">
            {`${userData.first_name} ${userData.last_name}`}{" "}
          </span>
          <span className="p-2 block text-center text-font2">{`${userData.type}`}</span>
        </div>
        <div className=" ml-auto mr-auto rounded-md bg-white shadow-md p-4 w-96 md:w-form h-96   md:mt-24  md:ml-0 md:mr-0">
          <div className="flex justify-between mb-2 border-b-2 border-slate-100 p-3 text-font1">
            <span className="block">Full name</span>
            <span className="text-font2 md:mr-56 block">{`${userData.first_name} ${userData.last_name}`}</span>
          </div>
          <div className="flex justify-between mb-2 border-b-2 border-slate-100 p-3 text-font1">
            <span className="block"> Email</span>
            <span className="text-font2 md:mr-36 block">{`${userData.email}`}</span>
          </div>
          <div className="flex justify-between mb-2 border-b-2 border-slate-100 p-3 text-font1">
            <span className="block"> Address</span>
            <span className="text-font2 md:mr-56 block">{`${userData.address}`}</span>
          </div>
          <div className="flex justify-between mb-2 border-b-2 border-slate-100 p-3 text-font1">
            <span className="block"> Budget</span>
            <span className="text-font2 md:mr-56 block">{`${userData.money}`}</span>
          </div>
          <div className="flex justify-between mb-2  p-3 text-font1">
            <span className="block"> Birth date</span>
            <span className="text-font2 md:mr-56 block">{`${userData.date_of_birth}`}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
