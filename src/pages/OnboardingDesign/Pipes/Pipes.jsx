import React, { useState } from "react";

import ProjectLayoutSection from "../../../components/ProjectLayoutSection";
import PipesList from "./PipesList";
import PipeContent from "./PipeContent";

import "./Pipes.scss";

const pipesData = [
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
];

const Pipes = () => {
  const [currPipe, setCurrPipe] = useState(1);

  return (
    <ProjectLayoutSection className="pipes pb-50">
      <div className="pipe-content-container">
        <PipesList
          currPipe={currPipe}
          setCurrPipe={setCurrPipe}
          pipesData={pipesData}
        />
        <PipeContent
          currPipe={currPipe}
          setCurrPipe={setCurrPipe}
          pipesData={pipesData}
        />
      </div>
    </ProjectLayoutSection>
  );
};

export default Pipes;
