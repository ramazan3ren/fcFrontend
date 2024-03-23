import { createBrowserRouter } from "react-router-dom";
import { Main } from "../layouts/Main";
import { MainPage } from "../pages/MainPage/page/MainPage";
import { UserLogin } from "../pages/LoginPages/UserLogin";
import { FacilityLogin } from "../pages/LoginPages/FacilityLogin";
import { UserCreate } from "../pages/LoginPages/UserCreate";




const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        index: true,
        element: <MainPage />,
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
    path: "/kayitol",
    element: <UserCreate />,
  },
]);

export default routes;


