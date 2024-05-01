import { createBrowserRouter } from "react-router-dom";
import { Main } from "@/layouts/Main";
import { MainPage } from "@/pages/MainPage/page/MainPage";
import { UserLogin } from "@/pages/LoginPages/UserLogin";
import { FacilityLogin } from "@/pages/LoginPages/FacilityLogin";
import { UserCreate } from "@/pages/LoginPages/UserCreate";
import { AboutPage } from "@/pages/AboutPage/page/AboutPage";
import { ActivationPage } from "@/pages/ActivationPage/ActivationPage";
import { FacilityCreate } from "@/pages/LoginPages/FacilityCreate";

import { UserPage } from "@/pages/UserPage/UserPage";
import { UserProfile } from "@/pages/UserProfilePage/UserProfile";
import { User } from "@/layouts/User";
import { PlayMatch } from "@/pages/PlayMatchPage/PlayMatch";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: "hakkimizda",
        element: <AboutPage />,
      },
    ],
  },
  {
    path: "/kullanici",
    element: <UserLogin />,
  },
  {
    path: "/tesis",
    element: <FacilityLogin />,
  },
  {
    path: "/tesis-kayitol",
    element: <FacilityCreate />,
  },
  {
    path: "/kayitol",
    element: <UserCreate />,
  },
  {
    path: "/activation/:token",
    element: <ActivationPage />,
  },
  {
    path: "/anasayfa",
    element: <User />,
    children: [
      {
        index: true,
        element: <UserPage />,
      },
      {
        path: ":username",
        element: <UserProfile />,
      },
      {
        path: "macyap",
        element: <PlayMatch />,
      },
    ],
  },
]);

export default routes;
