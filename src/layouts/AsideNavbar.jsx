import React from "react";
import { UserNavbarItem } from "./UserNavbarItem";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import SportsSoccerRoundedIcon from "@mui/icons-material/SportsSoccerRounded";
import Diversity3RoundedIcon from "@mui/icons-material/Diversity3Rounded";
import GroupRoundedIcon from "@mui/icons-material/GroupRounded";
import StadiumRoundedIcon from "@mui/icons-material/StadiumRounded";
import PersonSearchRoundedIcon from "@mui/icons-material/PersonSearchRounded";
import MarkunreadRoundedIcon from "@mui/icons-material/MarkunreadRounded";

export const AsideNavbar = () => {
  const size = 40;
  const asideNav = [
    {
      id: 1,
      name: "Ana Sayfa",
      to: "/anasayfa",
      Icon: () => <HomeRoundedIcon sx={{ fontSize: size }} />,
    },
    {
      id: 2,
      name: "Maç Yap",
      to: "macyap",
      Icon: () => <SportsSoccerRoundedIcon sx={{ fontSize: size }} />,
    },
    {
      id: 3,
      name: "Takımım",
      to: "takimim",
      Icon: () => <Diversity3RoundedIcon sx={{ fontSize: size }} />,
    },
    {
      id: 4,
      name: "Arkadaşlarım",
      to: "arkadaslarim",
      Icon: () => <GroupRoundedIcon sx={{ fontSize: size }} />,
    },
    {
      id: 5,
      name: "Tesisler",
      to: "tesisler",
      Icon: () => <StadiumRoundedIcon sx={{ fontSize: size }} />,
    },
    {
      id: 6,
      name: "Oyuncu Ara",
      to: "oyuncuara",
      Icon: () => <PersonSearchRoundedIcon sx={{ fontSize: size }} />,
    },
    {
      id: 7,
      name: "Mesajlarım",
      to: "mesajlarim",
      Icon: () => <MarkunreadRoundedIcon sx={{ fontSize: size }} />,
    },
  ];

  return (
    <>
      <aside className="fixed bg-fcGreen w-80 pt-32 flex flex-col h-svh ">
        {asideNav.map((item) => {
          return <UserNavbarItem item={item} key={item.id} Icon={item.Icon} />;
        })}
      </aside>
    </>
  );
};
