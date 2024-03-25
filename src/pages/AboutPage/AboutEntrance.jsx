import React from "react";
import { scroller } from "react-scroll";

export const AboutEntrance = () => {
  const scrollTo = () => {
    scroller.scrollTo("iletisim", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <>
      <div className="w-fulll laptop:px-80  text-left  mt-20 text-black dark:text-white">
        <h1 className="px-5 text-4xl font-bold text-fcGreen">Biz Kimiz?</h1>
        <p className="px-5  mt-6 text-lg">
          Futbolun Kalbi'nde, futbol tutkunlarının sahada buluştuğu noktadayız.
          2024 yılında futbolsever bir grup arkadaş tarafından kurulan
          platformumuz, amatör ve profesyonel futbolcuları bir araya getiriyor,
          herkes için oyunun erişilebilirliğini artırıyoruz. Misyonumuz,
          herkesin kolayca takım bulabileceği, maç düzenleyebileceği ve futbolun
          birleştirici gücünü yaşayabileceği bir ortam sağlamak.
        </p>
        <div className=" text-center">
          <button
            className=" my-6 ml-3 px-4 py-3 rounded-full text-white hover:bg-fcLightGray bg-fcGreen dark:hover:bg-fcDarkGreen text-lg hover:transition-all"
            onClick={() => scrollTo()}
          >
            Bizimle İletişime Geç
          </button>
        </div>
      </div>
    </>
  );
};
