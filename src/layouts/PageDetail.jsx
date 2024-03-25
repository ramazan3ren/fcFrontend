import React from "react";
import NavigateNextRoundedIcon from "@mui/icons-material/NavigateNextRounded";
import { Link } from "react-router-dom";
export const PageDetail = ({ pageName }) => {
  return (
    <>
      <section className="w-full h-36 md:h-52 mt-24 flex flex-col justify-center items-center py-12 border-b-2 border-fcGreen">
        <h1 className="text-3xl md:text-5xl font-extrabold font-josefin text-fcGreen mb-3 ">
          {pageName}
        </h1>
        <span className="flex flex-row justify-center">
          <Link to='/' className=" text-fcGreen font-bold">
            <h4 className=" font-josefin">Ana Sayfa</h4>
          </Link>

          <NavigateNextRoundedIcon className="dark:text-white text-black font-josefin font-bold mx-1" />
          <h4 className="dark:text-white text-black font-josefin font-bold">
            {pageName}
          </h4>
        </span>
      </section>
    </>
  );
};
