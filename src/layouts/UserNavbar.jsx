import React from "react";
import { useContext } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import Context from "@/context/context";
import { Cross as Hamburger } from "hamburger-react";
import { Link } from "react-router-dom";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { useAuth } from "@/context/authContext";
import defaultImage from "@/assets/img/profile-icon.jpg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserNavbar = () => {
  const {
    darkSide,
    toggleDarkMode,
    colorTheme,
    isOpen,
    setOpen,
    setOpenMobileMenu,
    openMobileMenu,
    LogoGreen,
    LogoWhite,
  } = useContext(Context);
  const navigate = useNavigate();

  const [profileOpen, setProfileOpen] = useState(false);

  const { auth, onLogoutSuccess } = useAuth();

  return (
    <>
      <header className="top-0 left-0 right-0 fixed h-24 w-full flex flex-row justify-between items-center bg-white dark:bg-darkThemeAppColor z-50 ">
        <div className="ml-5  flex flex-row items-center justify-center">
          <div className="block laptop:hidden rounded-md mr-3 z-50">
            <Hamburger
              toggled={isOpen}
              toggle={setOpen}
              size={25}
              // colorTheme == "light" ? : "black"
              color={colorTheme == "light" ? "white" : "#609966"}
              onToggle={(toggled) => {
                if (toggled) {
                  setOpenMobileMenu(true);
                  setProfileOpen(false);
                } else {
                  setOpenMobileMenu(false);
                }
              }}
            />
          </div>
          <div className="navbar-brand">
            <Link to="/anasayfa">
              <img
                src={colorTheme == "light" ? LogoWhite : LogoGreen}
                alt=""
                title="FC"
                style={{ height: 40 }}
              />
            </Link>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center">
          <div className="flex flex-row justify-center items-center mr-6  laptopL:mr-5  transition-none text-fcGreen dark:text-white">
            <Link
              className="hidden laptop:block"
              to={`${auth.username}/ayarlar`}
            >
              <SettingsRoundedIcon sx={{ fontSize: 27 }} />
            </Link>
            <Link className="mx-4 laptop:mx-6">
              <NotificationsRoundedIcon sx={{ fontSize: 27 }} />
            </Link>
            <DarkModeSwitch
              className="transition-none"
              checked={darkSide}
              sunColor="#609966"
              onChange={toggleDarkMode}
              size={27}
            />
          </div>
          <div className="mr-2 laptop:mr-7 border-l border-l-gray-400 ">
            <ul className="flex flex-row ml-5">
              <li>
                <button
                  className="flex flex-row items-center justify-center"
                  onClick={() => {
                    setProfileOpen(!profileOpen);
                  }}
                >
                  <div
                    className="bg-fcGreen rounded-full flex flex-row items-center justify-center mr-3 "
                    style={{ height: 36, width: 36 }}
                  >
                    <img
                      src={auth.image === null ? defaultImage : auth.image}
                      className="rounded-full"
                      style={{ height: 30 }}
                    />
                  </div>
                  <span className="hidden laptop:block font-extrabold text-fcGreen dark:text-white">
                    <span className="text-lg mr-1">{auth.username}</span>
                    <span>
                      <KeyboardArrowDownRoundedIcon sx={{ fontSize: 30 }} />
                    </span>
                  </span>
                </button>
              </li>
            </ul>
          </div>
          {profileOpen && (
            <div className="transition-all  w-56 bg-whiteBg dark:bg-fcGreen shadow-md dark:shadow-none text-black dark:text-white absolute top-20 right-4 laptop:right-8 rounded-2xl flex flex-col ">
              <span className="px-5 border-b border-fcGreen dark:border-whiteBg">
                <h2 className="text-sm w-full mt-3 mb-1 font-bold">
                  {auth.fullName === "null null"
                    ? auth.username
                    : auth.fullName}
                </h2>
                <h3 className="text-[12px] w-full text-gray-700 dark:text-gray-200 mb-3 font-bold">
                  {auth.email}
                </h3>
              </span>

              <span className="flex flex-col py-1">
                <Link
                  className="px-5 py-1 hover:bg-white dark:hover:bg-fcDarkGreen transition-all"
                  to="/anasayfa"
                  onClick={() => {
                    setProfileOpen(false);
                  }}
                >
                  Ana Sayfa
                </Link>
                <Link
                  className="px-5 py-1 hover:bg-white dark:hover:bg-fcDarkGreen transition-all"
                  to={`${auth.username}`}
                  onClick={() => {
                    setProfileOpen(false);
                  }}
                >
                  Profilim
                </Link>
                <Link
                  className="block laptop:hidden px-5 py-1 hover:bg-white dark:hover:bg-fcDarkGreen transition-all"
                  to={`${auth.username}/ayarlar`}
                  onClick={() => {
                    setProfileOpen(false);
                  }}
                >
                  Ayarlar
                </Link>
              </span>

              <span>
                <button
                  className="text-center text-white hover:bg-red-500 rounded-b-2xl py-1 bg-red-400 w-full transition-all"
                  onClick={() => {
                    onLogoutSuccess();
                    navigate("/kullanici");
                  }}
                >
                  Çıkış Yap
                </button>
              </span>
            </div>
          )}
        </div>
      </header>

      <div
        className={`bg-fcGreen  dark:bg-darkThemeAppColor  dark:text-white text-black z-50 ${
          openMobileMenu == true
            ? "w-screen h-screen fixed top-24"
            : "w-0 h-0 hidden"
        }`}
      >
        <div>
          <ul className="flex flex-col items-center h-screen">
            <li className="nav-link-dropdown">
              <Link
                to="/"
                onClick={() => {
                  setOpenMobileMenu(!openMobileMenu);
                  setOpen(!openMobileMenu);
                }}
              >
                Ana Sayfa
              </Link>
            </li>
            <li className="nav-link-dropdown">
              <Link
                to="hakkimizda"
                onClick={() => {
                  setOpenMobileMenu(!openMobileMenu);
                  setOpen(!openMobileMenu);
                }}
              >
                Hakkımızda
              </Link>
            </li>

            <li className="px-5 py-3 text-fcGreen dark:text-white hover:text-fcLightGray dark:hover:bg-opacity-50 text-lg hover:transition-all mt-5 dark:bg-fcGreen bg-white hover:bg-fcDarkGreen rounded-full">
              <Link
                to="/kullanici"
                onClick={() => {
                  setOpenMobileMenu(!openMobileMenu);
                  setOpen(!openMobileMenu);
                }}
              >
                Kullanıcı Girişi
              </Link>
            </li>

            <li className="px-[37px] py-3 text-fcGreen bg-white dark:text-white dark:hover:bg-opacity-50 hover:text-fcLightGray dark:bg-fcGreen text-lg hover:transition-all mt-5  hover:bg-fcDarkGreen rounded-full">
              <Link
                to="/tesis"
                onClick={() => {
                  setOpenMobileMenu(!openMobileMenu);
                  setOpen(!openMobileMenu);
                }}
              >
                Tesis Girişi
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
