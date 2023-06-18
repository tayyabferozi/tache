import React from "react";

import Intro from "./Intro";
import Regular from "./Regular";
import Video from "./Video";
import Image from "./Image";
import Files from "./Files";

import "./PipeForm.scss";

const PipeForm = ({
  pipesData,
  currPipe,
  isInEditState,
  setIsInEditState,
  setCurrPipe,
  setPipesData,
}) => {
  return (
    <div className="pipe-form">
      <DynamicPipeForm
        {...pipesData[currPipe - 1]}
        isInEditState={isInEditState}
        setIsInEditState={setIsInEditState}
        pipesData={pipesData}
        currPipe={currPipe}
        setCurrPipe={setCurrPipe}
        setPipesData={setPipesData}
      />
    </div>
  );
};

export default PipeForm;

const DynamicPipeForm = ({
  type,
  isInEditState,
  setIsInEditState,
  pipesData,
  currPipe,
  setCurrPipe,
  setPipesData,
}) => {
  switch (type) {
    case "reg":
      return (
        <Regular
          isInEditState={isInEditState}
          setIsInEditState={setIsInEditState}
          pipesData={pipesData}
          currPipe={currPipe}
          setCurrPipe={setCurrPipe}
          setPipesData={setPipesData}
        />
      );
    case "vid":
      return (
        <Video
          isInEditState={isInEditState}
          setIsInEditState={setIsInEditState}
          pipesData={pipesData}
          currPipe={currPipe}
          setCurrPipe={setCurrPipe}
          setPipesData={setPipesData}
        />
      );
    case "img":
      return (
        <Image
          isInEditState={isInEditState}
          setIsInEditState={setIsInEditState}
          pipesData={pipesData}
          currPipe={currPipe}
          setCurrPipe={setCurrPipe}
          setPipesData={setPipesData}
        />
      );
    case "file":
      return (
        <Files
          isInEditState={isInEditState}
          setIsInEditState={setIsInEditState}
          pipesData={pipesData}
          currPipe={currPipe}
          setCurrPipe={setCurrPipe}
          setPipesData={setPipesData}
        />
      );
    default:
      return (
        <Intro
          isInEditState={isInEditState}
          setIsInEditState={setIsInEditState}
          pipesData={pipesData}
          currPipe={currPipe}
          setCurrPipe={setCurrPipe}
          setPipesData={setPipesData}
        />
      );
  }
};
