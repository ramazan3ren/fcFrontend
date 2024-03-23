import React from "react";
import { Entrance } from "../Entrance";
import { AboutPart } from "../AboutPart";
import { WhyChooseUs } from "../WhyChooseUs";
import { Istatistics } from "../Istatistics";
import { QuestionPart } from "../QuestionPart";

export const MainPage = () => {
  return (
    <>
      <Entrance />
      <AboutPart />
      <WhyChooseUs />
      <Istatistics />
      <QuestionPart />
    </>
  );
};
