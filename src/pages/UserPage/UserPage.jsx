import { useAuth } from "@/context/authContext";
import React from "react";
import AnimatedNumbers from "react-animated-numbers";
import FastRewindRoundedIcon from "@mui/icons-material/FastRewindRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import MarkunreadRoundedIcon from "@mui/icons-material/MarkunreadRounded";
import image from "@/assets/img/match-create-pic.png";
import { Link } from "react-router-dom";

export const UserPage = () => {
  const { auth } = useAuth();
  return (
    <div className="h-dvh pt-40 px-5 laptop:pl-10 bg-whiteBg dark:bg-darkThemeColor text-black dark:text-white ">
      <h1 className="font-josefin font-bold text-2xl text-fcGreen select-none">
        <span className="mr-1 font-josefin font-bold">Hoşgeldin</span>
        {auth.firstname === null ? auth.username : auth.firstname},
      </h1>
      <div className="grid grid-rows-12 mt-10 ">
        <div className="row-span-6 grid grid-cols-1 laptop:grid-cols-12 laptop:mb-5">
          <div className="mb-5 laptop:mb-0 transition-all col-span-4 laptop:w-12/13 h-80 bg-white dark:text-white dark:bg-darkThemeAppColor border-2 border-fcGreen rounded-customFull flex flex-col justify-center items-center text-fcGreen select-none">
            <span>
              <FastRewindRoundedIcon sx={{ fontSize: 80 }} />
            </span>
            <span className="font-extrabold font-josefin text-[80px] mb-2 ">
              <AnimatedNumbers
                includeComma
                transitions={(index) => ({
                  type: "spring",
                  duration: index + 0.3,
                })}
                animateToNumber={"10"}
              />
            </span>
            <h1 className="font-bold font-josefin text-3xl">Geçmiş Maçlar</h1>
          </div>

          <div className="mb-5 laptop:mb-0 transition-all col-span-4 laptop:w-12/13 h-80 bg-white dark:text-white dark:bg-darkThemeAppColor border-2 border-fcGreen rounded-customFull flex flex-col justify-center items-center text-fcGreen select-none">
            <span>
              <LocationOnRoundedIcon sx={{ fontSize: 80 }} />
            </span>
            <span className="font-extrabold font-josefin text-[80px] mb-2 ">
              <AnimatedNumbers
                includeComma
                transitions={(index) => ({
                  type: "spring",
                  duration: index + 0.3,
                })}
                animateToNumber={"25"}
              />
            </span>
            <h1 className="font-bold font-josefin text-3xl">
              Bana Yakın Maçlar
            </h1>
          </div>
          <div className="transition-all col-span-4 laptop:w-12/13 h-80 bg-fcGreen rounded-customFull flex relative select-none">
            <img
              src={image}
              alt=""
              className="object-scale-down rounded-customFull"
            />
            <Link
              to="macyap"
              className="absolute bottom-5 rounded-customFull py-2 px-10 bg-white text-fcGreen hover:text-white hover:bg-fcGreen transition-all translate-x-20 laptop:translate-x-36"
            >
              <span className="font-josefin text-xl font-bold">
                Maç Oluştur
              </span>
            </Link>
          </div>
        </div>
        <div className="row-span-6 grid grid-cols-1 laptop:grid-cols-12 ">
          <div className="transition-all p-6 w-[97.5%] col-span-8 h-full bg-white dark:text-white dark:bg-darkThemeAppColor border-2 border-fcGreen rounded-customFull flex flex-col text-fcGreen select-none">
            <span className="flex flex-row items-center ml-4">
              <MarkunreadRoundedIcon sx={{ fontSize: 50 }} />
              <h1 className="font-bold mt-1 ml-3 text-3xl font-josefin">
                Son Gelen Mesajlar
              </h1>
            </span>
            <span className="flex flex-col justify-center items-center h-full">
              <h1 className="text-center font-bold text-lg">
                Maalesef Mesajınız Yok
              </h1>
            </span>
          </div>
          <div className="col-span-4">
            <div className="laptop:mb-0 transition-all col-span-4 laptop:w-12/13 h-full bg-white dark:text-white dark:bg-darkThemeAppColor border-2 border-fcGreen rounded-customFull flex flex-col justify-center items-center text-fcGreen select-none">
              <iframe
                className="rounded-customFull"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5285.48290359412!2d32.50741007357775!3d38.029212513288186!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d08d1635b829f1%3A0xab4869a2c2cd27e0!2sTeknik%20Bilimler%20Meslek%20Y%C3%BCksekokulu%20TBMYO!5e0!3m2!1str!2str!4v1714502082445!5m2!1str!2str"
                width="100%"
                height="100%"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
