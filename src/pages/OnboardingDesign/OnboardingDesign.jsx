import React, { useState } from "react";

import Header from "./Header";
import Pipes from "./Pipes";

import "./OnboardingDesign.scss";

const OnboardingDesign = () => {
  const [isInEditState, setIsInEditState] = useState(false);
  const [currPipe, setCurrPipe] = useState(1);
  const [pipesDataState, setPipesDataState] = useState([
    {
      type: "intro",
      description: "Vitae volutpat",
    },
    {
      type: "reg",
      description: "Vitae volutpat",
    },
    {
      type: "vid",
      description: "Vitae volutpat",
    },
    {
      type: "img",
      description: "Vitae volutpat",
    },
    {
      type: "file",
      description: "Vitae volutpat",
    },
  ]);

  return (
    <div id="onboarding-design">
      <Header
        isInEditState={isInEditState}
        setIsInEditState={setIsInEditState}
        setPipesData={setPipesDataState}
      />
      <Pipes
        setPipesDataState={setPipesDataState}
        isInEditState={isInEditState}
        setIsInEditState={setIsInEditState}
        pipesData={pipesDataState}
        setPipesData={setPipesDataState}
        currPipe={currPipe}
        setCurrPipe={setCurrPipe}
      />
    </div>
  );
};

export default OnboardingDesign;
