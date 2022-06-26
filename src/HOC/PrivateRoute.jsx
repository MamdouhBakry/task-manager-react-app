import React from "react";
import { Outlet, Navigate } from "react-router-dom";

export default function PrivateRoute() {
  let userid;
  if (localStorage.getItem("token")) {
    userid = true;
  } else {
    userid = false;
  }

  return <>{userid ? <Outlet /> : <Navigate to="/signin" />}</>;
}
