import React from "react";
import { Link } from "react-router-dom";

import Intro from "./Intro";
import Regular from "./Regular";
import Video from "./Video";
import Image from "./Image";
import Files from "./Files";
import Button from "../../../../components/Button";

import "./PipeContent.scss";

const PipeContent = ({
  isInEditState,
  setIsInEditState,
  pipesData,
  currPipe,
  setCurrPipe,
}) => {
  return (
    <div className="pipe-content">
      <DynamicPipeContent
        {...pipesData[currPipe - 1]}
        isInEditState={isInEditState}
        setIsInEditState={setIsInEditState}
      />

      <div className="d-flex flex-column align-items-start gap-575-10 flex-sm-row justify-content-between mt-50">
        <div className="d-flex gap-3">
          {pipesData[currPipe - 1].type !== "intro" && (
            <>
              <Button className="h-40 px-3" primary bordered>
                Add to Project
              </Button>
              {pipesData[currPipe - 1].type !== "vid" && (
                <Button bordered className="h-40 px-3">
                  Download All
                </Button>
              )}
            </>
          )}
        </div>
        <Button
          className="h-40"
          primary
          onClick={() => setCurrPipe((prevState) => ++prevState)}
        >
          Next
        </Button>
      </div>

      {pipesData[currPipe - 1].type !== "intro" && (
        <div className="mt-10 fs-14">
          <Link to="/signup" className="link fs-14">
            Sign up
          </Link>{" "}
          to Tache to persist this pipeline
        </div>
      )}
    </div>
  );
};

const DynamicPipeContent = ({
  type,
  md,
  files,
  isInEditState,
  setIsInEditState,
}) => {
  const props = { md, files, isInEditState, setIsInEditState };

  switch (type) {
    case "reg":
      return <Regular {...props} />;
    case "vid":
      return <Video {...props} />;
    case "img":
      return <Image {...props} />;
    case "file":
      return <Files {...props} />;
    default:
      return <Intro {...props} />;
  }
};

export default PipeContent;
