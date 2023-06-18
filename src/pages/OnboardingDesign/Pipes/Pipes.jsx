import React from "react";

import ProjectLayoutSection from "../../../components/ProjectLayoutSection";
import PipesList from "./PipesList";
import PipeContent from "./PipeContent";
import PipeForm from "./PipeForm";

import "./Pipes.scss";

const Pipes = ({
  isInEditState,
  setIsInEditState,
  setPipesDataState,
  pipesData,
  currPipe,
  setCurrPipe,
}) => {
  return (
    <ProjectLayoutSection className="pipes pb-50">
      <div className="pipe-content-container">
        <PipesList
          setPipesDataState={setPipesDataState}
          isInEditState={isInEditState}
          currPipe={currPipe}
          setCurrPipe={setCurrPipe}
          pipesData={pipesData}
        />
        {isInEditState ? (
          <PipeForm
            isInEditState={isInEditState}
            setIsInEditState={setIsInEditState}
            currPipe={currPipe}
            setCurrPipe={setCurrPipe}
            pipesData={pipesData}
            setPipesData={setPipesDataState}
          />
        ) : (
          <PipeContent
            isInEditState={isInEditState}
            setIsInEditState={setIsInEditState}
            currPipe={currPipe}
            setCurrPipe={setCurrPipe}
            pipesData={pipesData}
          />
        )}
      </div>
    </ProjectLayoutSection>
  );
};

export default Pipes;
