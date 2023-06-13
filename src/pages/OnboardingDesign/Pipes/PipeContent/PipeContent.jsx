import React from "react";
import { Link } from "react-router-dom";

import Intro from "./Intro";
import Regular from "./Regular";
import Video from "./Video";
import Image from "./Image";
import Files from "./Files";
import Button from "../../../../components/Button";

import "./PipeContent.scss";

const PipeContent = ({ pipesData, currPipe, setCurrPipe }) => {
  return (
    <div className="pipe-content">
      <DynamicPipeContent {...pipesData[currPipe - 1]} />

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

const DynamicPipeContent = ({ type }) => {
  switch (type) {
    case "reg":
      return <Regular />;
    case "vid":
      return <Video />;
    case "img":
      return <Image />;
    case "file":
      return <Files />;
    default:
      return <Intro />;
  }
};

export default PipeContent;
