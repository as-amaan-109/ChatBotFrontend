import React from "react";
import Card1 from "./cards/Card1"
import Card2 from "./cards/Card2";
import Card3 from "./cards/Card3";

const FeaturePage = () => {
  return (
    <div className="featurePage relative">
        <div className="absolute w-52 h-52 bg-violet-600 blur-xl rotate-45 right-20 -z-10"></div>
        <div className="absolute w-52 h-52 bg-violet-600 blur-xl top-[20rem] md:top-0 md:left-10 rounded-full -z-10"></div>
        <div className="absolute w-52 h-52 bg-violet-600 blur-xl bottom-0 right-20  rounded-full -z-10"></div>
        <div className="absolute w-52 h-52 bg-violet-600 blur-xl rotate-45 bottom-[40rem] md:bottom-0 md:left-10 -z-10"></div>
      <Card1 />
      <Card2/>
      <Card3/>
    </div>
  );
};

export default FeaturePage;
