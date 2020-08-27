import React from "react";
import { useSelector } from "react-redux";
import LoginFormContainer from "./LoginFormContainer";
import AdminMenu from "./AdminMenu";

export default function AdminPage() {
  const user = useSelector(({user}) => user);
  return <div>{!user.jwt ? <LoginFormContainer /> : <AdminMenu />}</div>;
}
