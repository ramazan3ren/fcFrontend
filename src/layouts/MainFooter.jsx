import React from "react";
import Context from "../context/context";
import { useContext } from "react";
import SocialMedia from "./SocialMedia";

export const MainFooter = () => {
  const { LogoWhite, LogoGreen, colorTheme } = useContext(Context);

  return (
    <>
      <footer className="w-full h-auto bg-fcGreen dark:bg-darkThemeAppColor border-t-2 border-fcGreen flex flex-col items-center">
        <div className="w-10/12 tablet:w-2/5 border-b-2 border-fcDarkGreen dark:border-fcGreen flex flex-col items-center mt-10 mb-6">
          <img
            className="w-2/12 tablet:w-1/12"
            src={colorTheme === "light" ? LogoGreen : LogoWhite}
            alt=""
          />
          <p className="text-white dark:text-white text-center mt-6 mb-6 font-bold">
            Futbol Macerana Başla! Sahada Yeni Arkadaşlıklar Kur, Heyecanı
            Birlikte Yaşa!
          </p>
        </div>
        <div className="text-center px-5">
          <p className="text-white font-bold mb-4">Konya / Türkiye</p>
          <p className="text-white font-bold">
            +90 553 242 7501 | +90 539 330 3193
          </p>
        </div>
        <div className="mt-6">
          <SocialMedia />
        </div>
        <div className="mt-6 w-full h-24 border-t-2  flex flex-row justify-center items-center border-fcDarkGreen dark:border-fcGreen text-white ">
          Copyright © 2024
          <img
            className="w-7 h-7 mx-2"
            src={colorTheme === "light" ? LogoGreen : LogoWhite}
          />
          All Rights Reserved.
        </div>
      </footer>
    </>
  );
};
