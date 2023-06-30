import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import Button from "../../../../../components/Button";
import Badge from "../../../../../components/Badge";
import AddFormModal from "../../AddFormModal";

import "./FormHeading.scss";

const FormHeading = ({
  title,
  isInPreviewState,
  setIsInPreviewState,
  currPipe,
  setCurrPipe,
  setPipesData,
  introForm,
  setIsInEditState,
}) => {
  const [stageBeforeModalActive, setStageBeforeModalActive] = useState(false);
  const [stageAfterModalActive, setStageAfterModalActive] = useState(false);

  const deleteStageHandler = () => {
    if (currPipe === 1) return;
    setPipesData((prevState) => {
      const newState = [...prevState];
      newState.splice(currPipe - 1, 1);
      return newState;
    });
    setCurrPipe(currPipe - 1);
  };

  const addFormBeforeHandler = (label) => {
    setPipesData((prevState) => {
      const newState = [...prevState];
      newState.splice(currPipe - 1, 0, {
        type: label,
        description: "Vitae volutpat",
      });
      return newState;
    });
    setCurrPipe(currPipe);
  };

  const addFormAfterHandler = (label) => {
    setPipesData((prevState) => {
      const newState = [...prevState];
      newState.splice(currPipe, 0, {
        type: label,
        description: "Vitae volutpat",
      });
      return newState;
    });
    setCurrPipe(currPipe + 1);
  };

  return (
    <div>
      <div className="form-heading-main">
        <Badge green className="fs-24 fw-500 px-3">
          {title}
        </Badge>

        <div className="right">
          <div className="stage-actions">
            <Button
              className="h-40"
              primary
              bordered
              icon={{
                src: isInPreviewState
                  ? "/assets/vectors/icons/edit-2.svg"
                  : "/assets/vectors/icons/eye.svg",
                title: "eye",
                alt: "eye",
              }}
              onClick={() => setIsInPreviewState((prevState) => !prevState)}
            >
              {isInPreviewState ? "Edit" : "Preview"}
            </Button>
            {!introForm && (
              <Button
                className="h-40"
                red
                bordered
                icon={{
                  src: "/assets/vectors/icons/trash.svg",
                  title: "trash",
                  alt: "trash",
                }}
                onClick={() => {
                  deleteStageHandler();
                  setIsInEditState(false);
                }}
              >
                Remove Stage
              </Button>
            )}
          </div>
          <div className="pipeline-actions">
            <div className="p-relative">
              {!introForm && (
                <Button
                  className="h-40"
                  primary
                  bordered
                  icon={{
                    src: "/assets/vectors/icons/plus-2.svg",
                    title: "plus",
                    alt: "plus",
                  }}
                  onClick={() => {
                    setStageBeforeModalActive(true);
                  }}
                >
                  Stage Before
                </Button>
              )}
              <AnimatePresence>
                {stageBeforeModalActive && (
                  <AddFormModal
                    onRight
                    addFormHandler={addFormBeforeHandler}
                    setSelectNewFormActive={setStageBeforeModalActive}
                    setIsInEditState={setIsInEditState}
                  />
                )}
              </AnimatePresence>
            </div>
            <div className="p-relative">
              <Button
                className="h-40"
                primary
                icon={{
                  src: "/assets/vectors/icons/plus-white.svg",
                  title: "plus-white",
                  alt: "plus-white",
                }}
                onClick={() => {
                  setStageAfterModalActive(true);
                }}
              >
                Stage After
              </Button>

              <AnimatePresence>
                {stageAfterModalActive && (
                  <AddFormModal
                    onRight
                    addFormHandler={addFormAfterHandler}
                    setSelectNewFormActive={setStageAfterModalActive}
                  />
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormHeading;
