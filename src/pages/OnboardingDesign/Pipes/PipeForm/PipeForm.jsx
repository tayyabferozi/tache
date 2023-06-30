import { useState } from "react";
import clsx from "clsx";

import Intro from "./Intro";
import Regular from "./Regular";
import Video from "./Video";
import Image from "./Image";
import Files from "./Files";
import Loader from "../../../../components/Loader";

import "./PipeForm.scss";

const PipeForm = ({
  pipesData,
  currPipe,
  isInEditState,
  setIsInEditState,
  setCurrPipe,
  setPipesData,
  takePipeSnapshot,
  setIsPipeTouched,
}) => {
  const [isSaving, setIsSaving] = useState(false);

  const saveData = () => {
    setIsSaving(true);

    setTimeout(() => {
      setIsSaving(false);
      setIsInEditState(false);
    }, 3000);
  };

  return (
    <div className="pipe-form">
      {isSaving && (
        <div className="saving">
          <Loader />
        </div>
      )}

      <div className={clsx(isSaving && "saving-form")}>
        <DynamicPipeForm
          {...pipesData[currPipe - 1]}
          saveData={saveData}
          isInEditState={isInEditState}
          setIsInEditState={setIsInEditState}
          pipesData={pipesData}
          currPipe={currPipe}
          setCurrPipe={setCurrPipe}
          setPipesData={setPipesData}
          takePipeSnapshot={takePipeSnapshot}
          setIsPipeTouched={setIsPipeTouched}
        />
      </div>
    </div>
  );
};

export default PipeForm;

const DynamicPipeForm = (props) => {
  switch (props.type) {
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
