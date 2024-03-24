import React from "react";
import picture from "../../assets/img/main-page-about-pic.png";
import DoneAllRoundedIcon from "@mui/icons-material/DoneAllRounded";
import { Link } from "react-router-dom";

export const WhyChooseUs = () => {
  return (
    <>
      <div className="w-full flex flex-col laptop:flex-row bg-whiteBg dark:bg-darkThemeAppColor py-20 tablet:py-32 items-center ">
        <div className="w-full laptop:w-1/2 flex justify-center items-center ">
          <img className="laptop:w-3/4" src={picture} />
        </div>
        <div className="w-full laptop:w-1/2 flex justify-center">
          <div className="laptop:w-3/4 px-8 laptop:px-12 py-12">
            <h3 className="font-josefin text-lg text-center tablet:text-left  laptop:text-2xl text-fcGreen uppercase font-bold">
              Neden Bizi Seçmelisiniz?
            </h3>
            <p className="text-darkThemeColor dark:text-white mt-5 mb-12">
              Futbol, sadece bir oyun değil, bir tutku, dostluk ve takım ruhunun
              en güzel ifadesidir. Biz, bu tutkuyu herkesle paylaşmak için
              buradayız. İşte bizi tercih etmeniz için birkaç neden:
            </p>
            <section className="text-darkThemeColor text-sm laptop:text-md dark:text-white grid grid-cols-1 tablet:grid-cols-2 gap-6 mb-16">
              <span className="flex flex-row">
                <DoneAllRoundedIcon className="text-fcGreen" />{" "}
                <h1 className="font-bold ml-3">Kolay Takım Oluşturma</h1>
              </span>
              <span className="flex flex-row">
                <DoneAllRoundedIcon className="text-fcGreen" />{" "}
                <h1 className="font-bold ml-3">Randevu Sistemi</h1>
              </span>
              <span className="flex flex-row">
                <DoneAllRoundedIcon className="text-fcGreen" />{" "}
                <h1 className="font-bold ml-3">Geniş Futbolsever Topluluğu</h1>
              </span>
              <span className="flex flex-row">
                <DoneAllRoundedIcon className="text-fcGreen" />{" "}
                <h1 className="font-bold ml-3">Güvenli ve Dostane Bir Ortam</h1>
              </span>
            </section>
            <Link
              to="hakkimizda"
              className="hover:bg-fcDarkGreen transition-all text-white bg-fcGreen px-6 py-4 rounded-full tablet:text-lg font-josefin  text-center"
            >
              Hakkımızda
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
