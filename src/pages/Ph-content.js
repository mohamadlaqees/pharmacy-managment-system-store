import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function PhContent() {
  const navigate = useNavigate();
  let map = [
    {
      name: "bla",
      price: "bla",
      img: "/images/med.jpg",
      brand: "brand",
    },
    {
      name: "bla",
      price: "bla",
      img: "/images/med.jpg",
      brand: "brand",
    },
    {
      name: "bla",
      price: "bla",
      img: "/images/med.jpg",
      brand: "brand",
    },
    {
      name: "bla",
      price: "bla",
      img: "/images/med.jpg",
      brand: "brand",
    },
    {
      name: "bla",
      price: "bla",
      img: "/images/med.jpg",
      brand: "brand",
    },
    {
      name: "bla",
      price: "bla",
      img: "/images/med.jpg",
      brand: "brand",
    },
    {
      name: "bla",
      price: "bla",
      img: "/images/med.jpg",
      brand: "brand",
    },
    {
      name: "bla",
      price: "bla",
      img: "/images/med.jpg",
      brand: "brand",
    },
    {
      name: "bla",
      price: "bla",
      img: "/images/med.jpg",
      brand: "brand",
    },
    {
      name: "bla",
      price: "bla",
      img: "/images/med.jpg",
      brand: "brand",
    },
    {
      name: "bla",
      price: "bla",
      img: "/images/med.jpg",
      brand: "brand",
    },
    {
      name: "bla",
      price: "bla",
      img: "/images/med.jpg",
      brand: "brand",
    },
    {
      name: "bla",
      price: "bla",
      img: "/images/med.jpg",
      brand: "brand",
    },
    {
      name: "bla",
      price: "bla",
      img: "/images/med.jpg",
      brand: "brand",
    },
    {
      name: "bla",
      price: "bla",
      img: "/images/med.jpg",
      brand: "brand",
    },
    {
      name: "bla",
      price: "bla",
      img: "/images/med.jpg",
      brand: "brand",
    },
    {
      name: "bla",
      price: "bla",
      img: "/images/med.jpg",
      brand: "brand",
    },
    {
      name: "bla",
      price: "bla",
      img: "/images/med.jpg",
      brand: "brand",
    },
    {
      name: "bla",
      price: "bla",
      img: "/images/med.jpg",
      brand: "brand",
    },
    {
      name: "bla",
      price: "bla",
      img: "/images/med.jpg",
      brand: "brand",
    },
    {
      name: "bla",
      price: "bla",
      img: "/images/med.jpg",
      brand: "brand",
    },
  ];
  return (
    <div className="page">
      <div className="grid grid-cols-4 grid-rows-2   ">
        {map.map((e, inx) => (
          <Link
            to={`product/${inx}`}
            className="w-72 h-form rounded-md shadow-md hover:bg-slate-100 p-3 mb-3 cursor-pointer transition-all no-underline "
          >
            <div className="rounded-md p-2 w-full bg-white m-auto bg-cover ">
              <img src={`${e.img}`} alt="" />
            </div>
            <div className="p-3 ">
              <span className=" block text-sm text-font2">{e.brand}</span>
              <Link
                className="no-underline text-font2 hover:text-SSReg"
                to={`product/${inx}`}
              >
                <span className="text-3xl">{e.name}</span>
              </Link>
              <span className=" mb-1 block mt-4 text-SReg text-xl">
                {e.price}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default PhContent;
