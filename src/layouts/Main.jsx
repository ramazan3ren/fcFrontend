import React from "react";
import { MainHeader } from "./MainHeader";
import { Outlet } from "react-router-dom";
import { MainFooter } from "./MainFooter";

export const Main = () => {
  return (
    <>
      <MainHeader />
      <Outlet />
      <MainFooter />
    </>
  );
};
