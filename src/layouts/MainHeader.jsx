import React from "react";
import { useContext } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import Context from "../context/context";
import { Cross as Hamburger } from "hamburger-react";
import { Link } from "react-router-dom";


export const MainHeader = () => {
  const {
    darkSide,
    toggleDarkMode,
    logo,
    isOpen,
    setOpen,
    setOpenMobileMenu,
    openMobileMenu
  } = useContext(Context);

  return (
    <>
      <header className="top-0 left-0 right-0 fixed h-24 w-full flex flex-row justify-between items-center bg-fcGreen dark:bg-darkThemeAppColor shadow-lg z-50">
        <div className="ml-7 tablet:ml-14 laptop:ml-16 laptopL:ml-20">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="" title="FC" style={{ height: 40 }} />
          </Link>
        </div>
        <div className="flex flex-row justify-center items-center">
          <div className="block laptop:hidden p-2 rounded-md mr-1 z-50">
            <Hamburger
              toggled={isOpen}
              toggle={setOpen}
              size={25}
              // colorTheme == "light" ? : "black"
              color={"white"}
              onToggle={(toggled) => {
                if (toggled) {
                  setOpenMobileMenu(true);
                } else {
                  setOpenMobileMenu(false);
                }
              }}
            />
          </div>

          <div className="hidden laptop:block mr-3">
            <ul className="flex flex-row">
              <li>
                <Link className="nav-link" to="/">
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="hakkimizda">
                  Hakkımızda
                </Link>
              </li>

              <li>
                <Link
                  className="ml-3 px-4 py-3 bg-white rounded-full text-fcGreen dark:text-white hover:bg-fcLightGray dark:bg-fcGreen dark:hover:bg-fcDarkGreen text-lg hover:transition-all"
                  to="/kullanici"
                >
                  Kullanıcı Girişi
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => {}}
                  className="ml-2 px-4 py-3 bg-white rounded-full text-fcGreen dark:text-white hover:bg-fcLightGray dark:bg-fcGreen dark:hover:bg-fcDarkGreen text-lg hover:transition-all"
                  to="/tesis"
                >
                  Tesis Girişi
                </Link>
              </li>
            </ul>
          </div>
          <div className="mr-6 border-l border-l-gray-400  laptopL:mr-10  transition-none">
            <DarkModeSwitch
              className="ml-5 transition-none"
              checked={darkSide}
              sunColor="white"
              onChange={toggleDarkMode}
              size={30}
            />
          </div>
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
