import { Divider, TextField } from "@mui/material";
import React from "react";
import { useContext } from "react";
import Context from "../../context/context";
import { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { Link } from "react-router-dom";
import axios from "axios";

export const UserCreate = () => {
  const { windowDimensions } = useContext(Context);

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

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
              <div className="w-full mb-3">
                <TextField
                  sx={{ width: "100%" }}
                  id="outlined-basic"
                  name="username"
                  onChange={(event) => {
                    setUsername(event.target.value);
                  }}
                  label="Kullanıcı Adı"
                  variant="outlined"
                  color="success"
                />
              </div>
              <div className="w-full mb-3">
                <TextField
                  sx={{ width: "100%" }}
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                  id="outlined-basic"
                  label="E-posta"
                  name="email"
                  variant="outlined"
                  color="success"
                />
              </div>
              <div className="w-full mb-3">
                <TextField
                  sx={{ width: "100%" }}
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                  id="outlined-basic"
                  label="Şifre"
                  name="password"
                  variant="outlined"
                  color="success"
                />
              </div>
              <div className="w-full mb-3">
                <TextField
                  sx={{ width: "100%" }}
                  onChange={(event) => {
                    setRePassword(event.target.value);
                  }}
                  id="outlined-basic"
                  color="success"
                  label="Şifre Tekrar"
                  variant="outlined"
                />
              </div>
              <div className="w-full flex justify-center items-center">
                <button
                  onClick={(event) => {
                    event.preventDefault();
                    axios.post("/api/v1/users", {
                      username,
                      email,
                      password,
                    });
                    
                  }}
                  className="px-4 py-2 bg-fcGreen rounded-lg text-white font-josefin "
                >
                  Kayıt Ol
                </button>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};
