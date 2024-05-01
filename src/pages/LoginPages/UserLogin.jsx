import { Alert, AlertTitle, CircularProgress, Divider } from "@mui/material";
import React from "react";
import { useContext } from "react";
import Context from "@/context/context";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { Link } from "react-router-dom";
import { LoginApi } from "./LoginApi";
import { Input } from "./UserCreateInput";
import { useState } from "react";
import { useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/authContext";

export const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [apiProgress, setApiProgress] = useState(false);
  // const [apiMessage, setApiMessage] = useState();
  const [generalError, setGeneralError] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState();
  const { windowDimensions } = useContext(Context);
  const { onLoginSuccess } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    setErrors(function (lastErrors) {
      return {
        ...lastErrors,
        email: undefined,
      };
    });
  }, [email]);

  useEffect(() => {
    setErrors(function (lastErrors) {
      return {
        ...lastErrors,
        password: undefined,
      };
    });
  }, [password]);

  const onSubmit = async (event) => {
    event.preventDefault();
    setApiProgress(true);

    try {
      const response = await LoginApi({
        email,
        password,
      });
      onLoginSuccess(response.data.user);
      navigate("/anasayfa");
      // setApiMessage(response.data.message);
    } catch (axiosErrors) {
      if (axiosErrors.response?.data) {
        if (axiosErrors.response.data.status === 400) {
          // setApiMessage();
          setErrors(axiosErrors.response.data.validationErrors);
          console.log(axiosErrors.response.data.validationErrors);
        } else if (axiosErrors.response.data.status === 500) {
          setGeneralError(axiosErrors.response.data.message);
        } else if (axiosErrors.response.data.status === 401) {
          setGeneralError(axiosErrors.response.data.message);
        }
      } else {
        setGeneralError("Bilinmeyen bir hata oluştu!");
      }
    } finally {
      setApiProgress(false);
    }
  };

  return (
    <>
      <section
        style={{ height: windowDimensions.winHeight }}
        className={`w-full bg-fcLightGreen flex flex-col justify-center items-center`}
      >
        <Link
          to="/"
          className="mr-3 mt-3 laptop:mt-2 h-12 absolute right-0 top-0 flex items-center text-fcDarkGreen"
        >
          <CloseRoundedIcon sx={{ fontSize: 50 }} />
        </Link>
        {/* {apiMessage && (
          <div className="absolute tablet:right-0 top-16 mr-4">
            <Alert severity="success">
              <button
                className="absolute right-[3px] top-[3px] "
                onClick={() => {
                  setApiMessage();
                }}
              >
                <CloseRoundedIcon size="small" />
              </button>
              <AlertTitle>
                <span className="font-bold">İşlem Başarılı</span>
              </AlertTitle>
              {apiMessage}
            </Alert>
          </div>
        )} */}

        {generalError && (
          <div className="absolute tablet:right-0 top-16 mr-4 z-50">
            <Alert severity="error">
              <button
                className="absolute right-[3px] top-[3px] "
                onClick={() => {
                  setGeneralError();
                }}
              >
                <CloseRoundedIcon size="small" />
              </button>
              <AlertTitle>
                <span className="font-bold">Bir Sorun Oluştu</span>
              </AlertTitle>
              {generalError}
            </Alert>
          </div>
        )}
        <form>
          <div
            className={`flex flex-col mobileM:w-[375px] mobileL:w-[415px]  bg-whiteBg ${
              windowDimensions.winHeight <= 700
                ? "rounded-none px-10 py-20"
                : "rounded-2xl p-10"
            }`}
          >
            <div>
              <h1 className="font-josefin font-bold text-3xl text-fcDarkGreen">
                Giriş Yap
              </h1>
              <h4 className="mt-2 text-[13px] font-publicSans">
                Henüz bir hesabınız yok mu?{" "}
                <Link
                  to="/kayitol"
                  className="text-fcGreen underline font-bold"
                >
                  Hesap Oluştur
                </Link>
              </h4>
            </div>
            <div className="flex justify-center items-center my-7 ">
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  const credentialResponseDecoded = jwtDecode(
                    credentialResponse.credential
                  );
                  console.log(credentialResponseDecoded);
                }}
                onError={() => {
                  console.log("Login Failed");
                }}
              />
            </div>
            <div className="mb-4 text-gray-50">
              <Divider sx={{ color: "#609966" }}>YADA</Divider>
            </div>

            <div className="w-full flex flex-col justify-center items-center">
              <div className="w-full mb-3">
                <Input
                  error={errors != null ? errors.email : null}
                  name={"email"}
                  color={"success"}
                  type={"email"}
                  labelError={errors != null ? errors.email : null}
                  label={"E-posta"}
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
              </div>
              <div className="w-full mb-3">
                <Input
                  error={errors != null ? errors.password : null}
                  name={"password"}
                  color={"success"}
                  type={"password"}
                  labelError={errors != null ? errors.password : null}
                  label={"Şifre"}
                  setShowPassword={setShowPassword}
                  showPassword={showPassword}
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                />
              </div>
              <div className="w-full flex justify-center items-center">
                <button
                  disabled={
                    apiProgress || password == "" || email == "" ? true : false
                  }
                  onClick={onSubmit}
                  className="px-4 py-2 bg-fcGreen rounded-lg text-white font-josefin disabled:bg-opacity-50 "
                >
                  {apiProgress == false ? (
                    <span>Giriş Yap</span>
                  ) : (
                    <span>Giriş Yapılıyor</span>
                  )}
                </button>

                {apiProgress && (
                  <CircularProgress
                    size={26}
                    sx={{
                      color: "#609966",
                      position: "absolute",
                    }}
                  />
                )}
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};
