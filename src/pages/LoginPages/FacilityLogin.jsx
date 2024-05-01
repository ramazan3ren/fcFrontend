import { Divider } from "@mui/material";
import React from "react";
import { useContext } from "react";
import Context from "@/context/context";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { Link } from "react-router-dom";
import { Input } from "./UserCreateInput";
import { useState } from "react";

export const FacilityLogin = () => {
  const { windowDimensions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [apiProgress, setApiProgress] = useState(false);
  const [apiMessage, setApiMessage] = useState();
  const [generalError, setGeneralError] = useState();
  const [showPassword, setShowPassword] = useState(false);

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
      if (axiosErrors.response?.data) {
        if (axiosErrors.response.data.status === 400) {
          setApiMessage();
          setErrors(axiosErrors.response.data.validationErrors);
          console.log(axiosErrors.response.data.validationErrors);
        } else if (axiosErrors.response.data.status === 502) {
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
        className={`w-full bg-fcFacility flex flex-col justify-center items-center selection:text-white selection:bg-fcFacility`}
      >
        <Link
          to="/"
          className="mr-3 mt-3 laptop:mt-2 h-12 absolute right-0 top-0 flex items-center text-fcFacilityDark mobileL:text-white"
        >
          <CloseRoundedIcon sx={{ fontSize: 50 }} />
        </Link>
        <form>
          <div
            // className="flex flex-col bg-whiteBg  rounded-none px-10 py-20 w-full"
            className={`flex flex-col mobileM:w-[375px] mobileL:w-[415px]  bg-whiteBg ${
              windowDimensions.winHeight <= 700
                ? "rounded-none px-10 py-20"
                : "rounded-2xl p-10"
            }`}
            style={{
              height:
                windowDimensions.winHeight <= 700
                  ? windowDimensions.winHeight + "px"
                  : "490px",
            }}
          >
            <div>
              <h1 className="font-josefin font-bold text-3xl text-fcFacilityDark">
                Giriş Yap
              </h1>
              <h4 className="mt-2 text-[13px] font-publicSans">
                Henüz bir işletme hesabınız yok mu? <br />
                <Link
                  to="/tesis-kayitol"
                  className="text-fcFacility underline font-bold"
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
              <Divider sx={{ color: "#008972" }}>YADA</Divider>
            </div>

            <div className="w-full flex flex-col justify-center items-center">
              <div className="w-full mb-3">
                <Input
                  name="email"
                  label="E-posta"
                  type="text"
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                  color="primary"
                />
                {/* <TextField
                  sx={{ width: "100%" }}
                  id="outlined-basic"
                  label="E-posta"
                  variant="outlined"
                  color="success"
                /> */}
              </div>
              <div className="w-full mb-3">
                <Input
                  name="password"
                  label="Şifre"
                  type="password"
                  showPassword={showPassword}
                  setShowPassword={setShowPassword}
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                  color="primary"
                />
              </div>

              <div className="w-full flex justify-center items-center">
                <button
                  disabled={
                    apiProgress || password == "" || email == "" ? true : false
                  }
                  onClick={onSubmit}
                  className="px-4 py-2 bg-fcFacility rounded-lg text-white font-josefin disabled:bg-opacity-50 "
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
