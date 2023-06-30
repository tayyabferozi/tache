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
  takePipeSnapshot,
  toggleConfirmationModal,
  setIsPipeTouched,
}) => {
  return (
    <ProjectLayoutSection className="pipes pb-50">
      <div className="pipe-content-container">
        <PipesList
          setPipesDataState={setPipesDataState}
          isInEditState={isInEditState}
          setIsInEditState={setIsInEditState}
          currPipe={currPipe}
          setCurrPipe={setCurrPipe}
          pipesData={pipesData}
          toggleConfirmationModal={toggleConfirmationModal}
        />
        {isInEditState ? (
          <PipeForm
            isInEditState={isInEditState}
            setIsInEditState={setIsInEditState}
            currPipe={currPipe}
            setCurrPipe={setCurrPipe}
            pipesData={pipesData}
            setPipesData={setPipesDataState}
            takePipeSnapshot={takePipeSnapshot}
            setIsPipeTouched={setIsPipeTouched}
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
