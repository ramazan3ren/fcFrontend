import React from "react";
import { PageDetail } from "../../../layouts/PageDetail";
import { AboutEntrance } from "../AboutEntrance";
import { ContactsPart } from "../ContactsPart";
import { WhatDoWeDo } from "../WhatDoWeDo";
import { WhyUs } from "../WhyUs";
import { JoinUsCommunity } from "../JoinUsCommunity";

export const AboutPage = () => {
  return (
    <>
      <div>
        <PageDetail pageName={"Hakkımızda"} />
        <AboutEntrance />
        <WhatDoWeDo />
        <WhyUs />
        <ContactsPart />
        <JoinUsCommunity />
      </div>
    </>
  );
};
