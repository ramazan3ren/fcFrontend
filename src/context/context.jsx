import { createContext, useState, useEffect } from "react";
import useDarkSide from "../hooks/useDarkSide";
//import LogoBlack from "../assets/fc-black-logo.png";
import LogoWhite from "../assets/fc-white-logo.png";
//import LogoGreen from "../assets/fc-logo.png";

const Context = createContext();

function Provider({ children }) {
  //* windowSize
  const [windowDimensions, setWindowDimensions] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  });

  const detectSize = () => {
    setWindowDimensions({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", detectSize);

    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [windowDimensions]);

  //! windowSize

  //* menu < >

  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "light" ? true : false
  );

  const [isOpen, setOpen] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [logo, setLogo] = useState(LogoWhite);

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);

    //? colorTheme === "light" ? LogoBlack :      colorTheme === "light" ?: LogoBlack
    setLogo(LogoWhite);
  };

  //! menu < >

  //* Accordion < >

  const [expanded, setExpanded] = useState(false);

  const accordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  //! Accordion < >

  const sharedValue = {
    colorTheme,
    darkSide,
    setDarkSide,
    setTheme,
    toggleDarkMode,
    logo,
    isOpen,
    setOpen,
    openMobileMenu,
    setOpenMobileMenu,
    windowDimensions,
    expanded,
    accordionChange
  };
  return <Context.Provider value={sharedValue}>{children}</Context.Provider>;
}

export { Provider };
export default Context;
