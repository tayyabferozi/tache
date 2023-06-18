import { useState } from "react";
import ReactMarkdown from "react-markdown";

import FormHeading from "../FormHeading";
import CustomMDEditor from "../../../../../components/CustomMDEditor";

import "./Intro.scss";

const Intro = ({ pipesData, currPipe, setCurrPipe, setPipesData }) => {
  const [isInPreviewState, setIsInPreviewState] = useState(false);
  const [formState, setFormState] = useState({
    intro: "",
  });

  const inputChangeHandler = (e) => {
    setFormState((prevState) => ({ ...prevState, intro: e.target.value }));
  };

  return (
    <div className="intro">
      <FormHeading
        title="Introduction"
        isInPreviewState={isInPreviewState}
        setIsInPreviewState={setIsInPreviewState}
        pipesData={pipesData}
        currPipe={currPipe}
        setCurrPipe={setCurrPipe}
        setPipesData={setPipesData}
      />
      {isInPreviewState ? (
        <div className="md mt-20">
          <ReactMarkdown children={formState.intro} />
        </div>
      ) : (
        <div className="custom-form-control mt-20">
          <label htmlFor="">Introductory information</label>
          <CustomMDEditor
            noExtraCommands
            value={formState.intro}
            inputChangeHandler={inputChangeHandler}
            maxChar={5000}
          />
        </div>
      )}
    </div>
  );
};

export default Intro;
