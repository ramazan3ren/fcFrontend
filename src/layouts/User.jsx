import React from "react";

import { UserNavbar } from "./UserNavbar";
import { AsideNavbar } from "./AsideNavbar";
import { Outlet } from "react-router-dom";

export const User = () => {
  return (
    <>
      <UserNavbar />

      <div className="w-full grid laptop:grid-cols-12 ">
        <div className=" hidden laptop:block laptop:col-span-2">
          <AsideNavbar />
        </div>
        <div className="h-dvh laptop:col-span-10 ">
          <Outlet />
        </div>
      </div>
    </>
  );
};
