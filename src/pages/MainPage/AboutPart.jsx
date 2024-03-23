import React from "react";
import SportsSoccerRoundedIcon from "@mui/icons-material/SportsSoccerRounded";
import Diversity3RoundedIcon from "@mui/icons-material/Diversity3Rounded";
import TaskAltRoundedIcon from '@mui/icons-material/TaskAltRounded';

export const AboutPart = () => {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center px-5 py-28 ">
        <div className="w-full flex flex-col laptop:flex-row justify-center items-center">
          <div className="w-full flex flex-col px-5 mb-7 laptop:mb-0 laptop:pl-32">
            <h4 className="text-xl text-fcGreen mb-3 font-josefin dark:text-fcLightGreen font-bold">
              Hakkımızda
            </h4>
            <h1 className="text-xl tablet:text-4xl font-josefin text-fcDarkGreen dark:text-white font-bold">
              Futbol Tutkusunun Yeni Adresi
            </h1>
          </div>

          <div className="px-5 laptop:px-28 text-black dark:text-white text-lg">
            Biz, futbolun sadece bir oyun olmadığını; dostluk, tutku ve eşsiz
            bir birliktelik deneyimi olduğuna inanan bir ekibiz. Sahalarda
            yaşanan heyecanı, takım ruhunu ve rekabetin tadını daha geniş
            kitlelere ulaştırmak amacıyla yola çıktık.
          </div>
        </div>
        <div className="w-full flex flex-col laptop:flex-row mt-14 laptop:px-24 text-black dark:text-white">
          <div className="laptop:w-1/3 h-auto rounded-3xl bg-fcGreen laptop:mr-5 flex flex-col">
            <div className="flex flex-row justify-between items-center mt-11 mb-8">
              <h1 className="ml-10">
                <SportsSoccerRoundedIcon
                  sx={{ width: "50px", height: "50px" }}
                />
              </h1>
              <h1 className="font-josefin text-6xl mr-10 font-bold">01</h1>
            </div>

            <h1 className="text-center laptop:text-left laptop:ml-8 font-bold text-xl laptop:text-2xl font-josefin">
              Futbol Tutkusunu Paylaşıyoruz
            </h1>
            <p className="px-7 mt-4 mb-7">
              Biz, futbol tutkunlarının bir araya geldiği bir platformuz. Sahada
              yaşanan heyecanı ve arkadaşlığı paylaşıyor, futbolseverlerin
              birbirleriyle bağ kurmasını sağlıyoruz. Takım oluşturma, maç
              planlama ve daha fazlası için buradayız.
            </p>
          </div>
          <div className="laptop:w-1/3 h-auto rounded-3xl bg-fcGreen max-laptop:mt-5 laptop:mr-5">
            <div className="flex flex-row justify-between items-center mt-11 mb-8">
              <h1 className="ml-10">
                <Diversity3RoundedIcon sx={{ width: "50px", height: "50px" }} />
              </h1>
              <h1 className="font-josefin text-6xl mr-10 font-bold">02</h1>
            </div>

            <h1 className="text-center laptop:text-left laptop:ml-8 font-bold text-xl laptop:text-2xl font-josefin">
              Futbolsever Topluluğu
            </h1>
            <p className="px-7 mt-4 mb-7">
              FC, geniş futbolsever topluluğumuzda yeni arkadaşlar bulabilir ve
              saha deneyimlerinizi paylaşabilirsiniz. Futbolun birleştirici
              gücünü herkesle paylaşmak için buradayız. Gel, futbol tutkusunu
              birlikte yaşayalım!
            </p>
          </div>
          <div className="laptop:w-1/3 h-auto rounded-3xl bg-fcGreen max-laptop:mt-5">
            <div className="flex flex-row justify-between items-center mt-11 mb-8">
              <h1 className="ml-10">
                <TaskAltRoundedIcon
                  sx={{ width: "50px", height: "50px" }}
                />
              </h1>
              <h1 className="font-josefin text-6xl mr-10 font-bold">03</h1>
            </div>

            <h1 className="text-center laptop:text-left laptop:ml-8 font-bold text-xl laptop:text-2xl font-josefin">
              Misyonumuz ve Vizyonumuz
            </h1>
            <p className="px-7 mt-4 mb-7">
              Misyonumuz, futbolun güzelliklerini herkesle paylaşmak ve
              futbolseverleri bir araya getirmektir. Vizyonumuz, her yaştan ve
              her seviyeden insanın futbol oynama deneyimini kolaylaştırmak ve
              daha erişilebilir hale getirmektir.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
