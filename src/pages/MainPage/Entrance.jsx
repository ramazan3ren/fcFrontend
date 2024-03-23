import React from "react";
import Context from "../../context/context";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import FootballVector from "../../assets/img/main-page-pic.png";
import { Link } from "react-router-dom";

export const Entrance = () => {
  const { windowDimensions } = useContext(Context);
  const [height, setHeight] = useState(windowDimensions.winHeight - 90);
  useEffect(() => {
    setHeight(windowDimensions.winHeight / 1.2);
  }, [height]);

  return (
    <>
      <div
       
        className="w-full bg-fcLightGreen dark:bg-darkThemeAppColor laptop:rounded-b-[200px] laptopL:rounded-b-[400px] flex flex-col items-center justify-center mt-24  text-center"
      >
        <div className="flex flex-col laptop:flex-row items-center justify-center mt-10 ">
          <div className="flex flex-col text-center text-fcDarkGreen laptop:text-left dark:text-fcLightGray mt-10  laptop:mr-14 px-6">
            <h1 className="font-josefin font-bold text-xl laptopL:text-[44px]">
              SAHAYA ÇIKMA ZAMANI!
            </h1>
            <h2 className="font-josefin text-lg text-bold laptop:text-lg laptopL:text-3xl mt-2 ">
              FUTBOLUN HEYECANINI YENİDEN KEŞFET!
            </h2>
            <h3 className="font-josefin text-md laptopL:text-xl mt-4">
              BİRKAÇ TIKLA TAKIMINI OLUŞTUR, <br /> RANDEVUNU AL VE SAHADA
              BULUŞALIM. <br />
              HADİ, FUTBOL TUTKUNU SERBEST <br /> BIRAK VE MACERAYA ATIL!
            </h3>
          </div>
          <img
            src={FootballVector}
            className="mobileM:w-[300px] mobileL:w-[350px] laptopL:w-[600px]"
          />
        </div>
        <Link to="/kullanici" className="hover:bg-fcDarkGreen transition-all text-white bg-fcGreen px-6 py-4 rounded-full tablet:text-lg font-josefin  text-center mb-20">
          HEYECANA KATIL!
        </Link>
      </div>
    </>
  );
};
