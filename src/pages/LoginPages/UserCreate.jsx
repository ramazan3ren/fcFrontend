import {
  Alert,
  AlertTitle,
  CircularProgress,
  Divider,
  TextField,
} from "@mui/material";
import React from "react";
import { useContext } from "react";
import Context from "../../context/context";
import { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { Link } from "react-router-dom";
import { Api } from "./LoginApi";
import { useEffect } from "react";
import { Input } from "./UserCreateInput";

export const UserCreate = () => {
  const { windowDimensions } = useContext(Context);

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [apiProgress, setApiProgress] = useState(false);
  const [apiMessage, setApiMessage] = useState();
  const [generalError, setGeneralError] = useState();

  const [errors, setErrors] = useState();

  useEffect(() => {
    setErrors(function (lastErrors) {
      return {
        ...lastErrors,
        username: undefined,
      };
    });
  }, [username]);

  useEffect(() => {
    setErrors(function (lastErrors) {
      return {
        ...lastErrors,
        email: undefined,
      };
    });
  }, [email]);

  const onSubmit = async (event) => {
    event.preventDefault();
    setApiProgress(true);

    try {
      const response = await Api({
        username,
        email,
        password,
      });
      setApiMessage(response.data.message);
    } catch (axiosErrors) {
      if (
        axiosErrors.response?.data &&
        axiosErrors.response.data.status === 400
      ) {
        setApiMessage();
        setErrors(axiosErrors.response.data.validationErrors);
        console.log(axiosErrors.response.data.validationErrors);
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
        {apiMessage && (
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
        )}

        <form>
          <div
            className={`flex flex-col mobileM:w-[375px] mobileL:w-[415px]  bg-whiteBg ${
              windowDimensions.winHeight <= 700
                ? "rounded-none px-10 py-20"
                : "rounded-2xl p-10"
            }`}
            style={{
              height:
                windowDimensions.winHeight <= 700
                  ? windowDimensions.winHeight + "px"
                  : "566px",
            }}
          >
            <div>
              <h1 className="font-josefin font-bold text-3xl text-fcDarkGreen">
                Kayıt Ol
              </h1>
              <h4 className="mt-2 text-[13px] font-publicSans">
                Hesabınız varsa.{" "}
                <Link
                  to="/kullanici"
                  className="text-fcGreen underline font-bold"
                >
                  Giriş Yap
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
              <Input
                error={errors != null ? errors.username : null}
                name={"username"}
                labelError={errors != null ? errors.username : null}
                label={"Kullanıcı Adı"}
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
              />
              <Input
                error={errors != null ? errors.email : null}
                name={"email"}
                labelError={errors != null ? errors.email : null}
                label={"E-posta"}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <Input
                error={null}
                name={"password"}
                labelError={"Lütfen Şifre Giriniz!"}
                label={"Şifre"}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
              <Input
                error={null}
                name={"password"}
                labelError={"Lütfen Şifre Tekrarı Giriniz!"}
                label={"Şifre Tekrar"}
                onChange={(event) => {
                  setRePassword(event.target.value);
                }}
              />

              <div className="w-full flex justify-center items-center">
                <button
                  disabled={apiProgress || !password || password !== rePassword}
                  onClick={onSubmit}
                  className="px-4 py-2 bg-fcGreen rounded-lg text-white font-josefin disabled:bg-opacity-50 "
                >
                  {apiProgress == false ? (
                    <span>Kayıt Ol</span>
                  ) : (
                    <span>Kaydediliyor</span>
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
