import React from "react";
import { useParams } from "react-router-dom";
import picture from "@/assets/img/activation-page-pic.png";
import failPicture from "@/assets/img/activation-page-fail-pic.png";
import { MainHeader } from "@/layouts/MainHeader";
import { useEffect } from "react";
import { activateUser } from "./api";
import { useState } from "react";
import { CircularProgress } from "@mui/material";
import { Link } from "react-router-dom";

export const ActivationPage = () => {
  const { token } = useParams();
  const [apiProgress, setApiProgress] = useState();
  const [successMessage, setSuccessMessage] = useState();
  const [errorMessage, setErrorMessage] = useState();

  useEffect(() => {
    async function activate() {
      setApiProgress(true);
      try {
        const response = await activateUser(token);
        setSuccessMessage(response.data.message);
      } catch (axiosError) {
        setErrorMessage(axiosError.response.data.message);
      } finally {
        setApiProgress(false);
      }
    }
    activate();
  }, []);

  return (
    <>
      <MainHeader />
      <div className="w-full bg-white dark:bg-darkThemeColor flex flex-col justify-center items-center mt-24 py-10 laptop:py-20">
        <div className="w-full h-full flex justify-center items-center">
          {apiProgress == true ? <CircularProgress color="success" /> : null}
        </div>
        <div className="w-11/12 tablet:w-[450px]">
          {successMessage && <img src={picture} />}
          {errorMessage && <img src={failPicture} />}
        </div>
        <div className="text-center px-5 laptop:px-48 ">
          {successMessage && (
            <h1 className="font-josefin font-extrabold text-fcGreen text-3xl mb-6">
              Hesabınız Başarıyla Aktif Edildi!
            </h1>
          )}
          {errorMessage && (
            <h1 className="font-josefin font-extrabold text-fcGreen text-3xl mb-6">
              Hesabınız Zaten Aktif Edilmiş!
            </h1>
          )}

          {successMessage && (
            <>
              <p className="font-bold font-montserrat text-black dark:text-white laptop:px-36 mb-3">
                Hesabınız başarıyla aktive edilmiştir! Artık platformumuzun tüm
                özelliklerine erişebilir ve deneyimleyebilirsiniz. Aramıza hoş
                geldiniz!
              </p>
              <p className="font-bold font-montserrat text-black dark:text-white laptop:px-36 ">
                Platformumuzu kullanmaya başlamak için giriş yapabilir ve size
                sunulan hizmetlerden faydalanabilirsiniz. Hesabınızla ilgili
                herhangi bir sorunuz veya geri bildiriminiz varsa, lütfen
                bizimle iletişime geçmekten çekinmeyin.
              </p>
            </>
          )}
          {errorMessage && (
            <>
              <p className="font-bold font-montserrat text-black dark:text-white laptop:px-36 mb-3">
                Görünüşe göre hesabınız zaten aktif edilmiş. Dolayısıyla,
                platformumuzun tüm özelliklerinden yararlanmaya devam
                edebilirsiniz. Sizi aramızda görmekten dolayı mutluluk
                duyuyoruz!
              </p>
              <p className="font-bold font-montserrat text-black dark:text-white laptop:px-36 ">
                Eğer platformumuzda gezinirken herhangi bir sorunla
                karşılaşırsanız veya hesabınızla ilgili herhangi bir yardıma
                ihtiyacınız olursa, lütfen destek ekibimize başvurun.
                Sorunlarınızın çözümü ve deneyiminizin iyileştirilmesi için
                buradayız.
              </p>
            </>
          )}
        </div>
        <Link
          to="/"
          className="hover:bg-fcDarkGreen transition-all text-white bg-fcGreen px-6 py-3 rounded-full tablet:text-lg font-josefin  text-center mt-5"
        >
          Ana Sayfaya Dön
        </Link>
      </div>
    </>
  );
};
