import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

import FormHeading from "../FormHeading";
import CustomMDEditor from "../../../../../components/CustomMDEditor";
import Button from "../../../../../components/Button";

import "./Intro.scss";

const Intro = ({
  md,
  pipesData,
  saveData,
  currPipe,
  setCurrPipe,
  setPipesData,
  takePipeSnapshot,
  setIsPipeTouched,
  setIsInEditState,
}) => {
  const [isInPreviewState, setIsInPreviewState] = useState(false);

  const inputChangeHandler = (e) => {
    setIsPipeTouched(true);

    setPipesData((prevState) => {
      const newState = JSON.parse(JSON.stringify(prevState));
      newState[currPipe - 1].md = e.target.value;
      return newState;
    });
  };

  useEffect(() => {
    takePipeSnapshot();
  }, []);

  useEffect(() => {
    setIsPipeTouched(false);
  }, [setIsPipeTouched]);

  return (
    <div className="intro">
      <FormHeading
        introForm
        title="Introduction"
        isInPreviewState={isInPreviewState}
        setIsInPreviewState={setIsInPreviewState}
        pipesData={pipesData}
        currPipe={currPipe}
        setCurrPipe={setCurrPipe}
        setPipesData={setPipesData}
        setIsInEditState={setIsInEditState}
      />
      {isInPreviewState ? (
        <div className="md mt-20">
          <ReactMarkdown children={md} />
        </div>
      ) : (
        <div className="custom-form-control mt-20">
          <label htmlFor="">Introductory information</label>
          <CustomMDEditor
            noExtraCommands
            value={md}
            inputChangeHandler={inputChangeHandler}
            maxChar={5000}
          />
        </div>
      )}

      <div className="d-flex justify-content-end mt-30">
        <Button primary className="h-40" onClick={saveData}>
          Save
        </Button>
      </div>
    </div>
  );
};

export default Intro;
