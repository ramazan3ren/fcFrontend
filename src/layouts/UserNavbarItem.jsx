import React from "react";
import { Link } from "react-router-dom";

export const UserNavbarItem = ({ item, Icon }) => {
  return (
    <>
      <Link
        to={item.to}
        className="text-white pl-14 py-5 hover:bg-whiteBg hover:text-fcGreen flex flex-row items-center transition-all"
      >
        <Icon />
        <span className="text-xl font-montserrat font-bold ml-3">
          {item.name}
        </span>
      </Link>
    </>
  );
};
