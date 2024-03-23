import React from "react";
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import DomainDisabledRoundedIcon from '@mui/icons-material/DomainDisabledRounded';
import EmojiEventsRoundedIcon from "@mui/icons-material/EmojiEventsRounded";
import BusinessRoundedIcon from '@mui/icons-material/BusinessRounded';
import { IstatisticItems } from "./IstatisticItems";

export const Istatistics = () => {
  const istatisticItems = [
    {
      id: "1",
      title: "Kullanıcı Sayısı",
      count: 13871,
      Icon: () => <PeopleAltRoundedIcon sx={{ fontSize: 70 }} />,
    },
    {
      id: "2",
      title: "Kayıtlı Tesis",
      count: 689,
      Icon: () => <BusinessRoundedIcon sx={{ fontSize: 70 }} />,
    },
    {
      id: "3",
      title: "Kayıtsız Tesis",
      count: 598,
      Icon: () => <DomainDisabledRoundedIcon sx={{ fontSize: 70 }} />,
    },
    {
      id: "4",
      title: "Tamamlanan Maç",
      count: 89000,
      Icon: () => <EmojiEventsRoundedIcon sx={{ fontSize: 70 }} />,
    },
  ];

  return (
    <>
      <div className="w-full bg-white dark:bg-darkThemeColor flex flex-row flex-wrap items-center justify-center py-14 px-0 lg:px-4 lg:py-24 ">
        {istatisticItems.map((istatisticItem) => {
          return (
            <IstatisticItems
              detail={istatisticItem}
              key={istatisticItem.id}
              Icon={istatisticItem.Icon}
            />
          );
        })}
      </div>
    </>
  );
};
