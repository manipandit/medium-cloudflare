import { Outlet, Navigate } from "react-router-dom";
export default function PrivateRoute() {
  const jwt = localStorage.getItem("jwt");
  return <div>{jwt ? <Outlet /> : <Navigate to={"/signin"} />}</div>;
}
