import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import "./all.min.css";
import App from "./App";
import PhLogin from "./pages/Ph-login";
import PhRegister from "./pages/Ph-register";
import PhContent from "./pages/Ph-content";
import PhStore from "./layout/Ph-store";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Purchases from "./pages/Purchases";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import UploadPrescription from "./pages/UploadPrescription";
import MyOrders from "./pages/MyOrders";
const root = ReactDOM.createRoot(document.getElementById("root"));
const routes = createBrowserRouter([
  {
    path: "/",
    element: <PhLogin />,
  },
  {
    path: "ph-login",
    element: <PhLogin />,
  },
  {
    path: "ph-register",
    element: <PhRegister />,
  },
  {
    path: "ph-store",
    element: <PhStore />,
    children: [
      { index: true, element: <PhContent /> },
      { path: "purchases", element: <Purchases /> },
      { path: "profile", element: <Profile /> },
      { path: "upload-prescription", element: <UploadPrescription /> },
      { path: "my-orders", element: <MyOrders /> },
      { path: "editProfile", element: <EditProfile /> },
    ],
  },
]);
root.render(
  <RouterProvider router={routes}>
    <App />
  </RouterProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
