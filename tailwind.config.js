/** @type {import('tailwindcss').Config} */

export const mode = "jit";
export const darkMode = "class";
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  extend: {
    width: {
      "12/13": "95%",
      99: "99%",
    },
    height: {},
    colors: {
      whiteBg: "#F7F7F7",
      fcLightGray: "#EDF1D6",
      fcGreen: "#609966",
      fcDarkGreen: "#40513B",
      fcLightGreen: "#9DC08B",
      fcFacility: "#008972",
      fcFacilityDark: "#005547",
      darkThemeColor: "#121212",
      darkThemeAppColor: "#1f1f1f",
    },

    borderRadius: {
      customFull: "2.7rem",
    },
    screens: {
      mobileS: "320px",
      mobileM: "375px",
      mobileL: "425px",
      tablet: "768px",
      laptop: "1024px",
      laptopL: "1440px",
      "4k": "2560px",
    },
  },
  fontFamily: {
    montserrat: "Montserrat",
    publicSans: "Public Sans",
    josefin: ["Josefin Sans", "sans-serif"],
  },
};
export const plugins = [];
