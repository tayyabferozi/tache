import React, { useEffect, useState, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import clsx from "clsx";

import Regular from "./Icons/Regular";
import Video from "./Icons/Video";
import Image from "./Icons/Image";
import File from "./Icons/File";
import Intro from "./Icons/Intro";
import AddForm from "./Icons/AddForm";
import AddFormModal from "../AddFormModal";

import "./PipesList.scss";

const PipesList = ({
  setPipesDataState,
  isInEditState,
  pipesData,
  currPipe,
  setCurrPipe,
  setIsInEditState,
}) => {
  const [selectNewFormActive, setSelectNewFormActive] = useState(false);
  const itemsContainerRef = useRef();

  useEffect(() => {
    if (selectNewFormActive) {
      setTimeout(() => {
        const elem = itemsContainerRef.current;
        elem.scrollTop = elem.scrollHeight;
      }, 350);
    }
  }, [selectNewFormActive, itemsContainerRef]);

  const addFormHandler = (label) => {
    setPipesDataState((prevState) => {
      return [
        ...prevState,
        {
          type: label,
          description: "Vitae volutpat",
          files: [],
        },
      ];
    });
    setCurrPipe(pipesData.length + 1);
    setIsInEditState(true);
  };

  return (
    <div className="pipes-list" ref={itemsContainerRef}>
      {pipesData.map((el, idx) => {
        let icon, name;
        switch (el.type) {
          case "reg":
            icon = <Regular />;
            name = "Regular";
            break;
          case "vid":
            icon = <Video />;
            name = "Video";
            break;
          case "img":
            icon = <Image />;
            name = "Images";
            break;
          case "file":
            icon = <File />;
            name = "Files";
            break;
          default:
            icon = <Intro />;
            name = "Introduction";
            break;
        }

        return (
          <div
            className={clsx(
              currPipe === idx + 1 && "active",
              currPipe > idx + 1 && "passed",
              isInEditState &&
                (currPipe < idx + 1 || currPipe > idx + 1) &&
                "passed",
              "pipe-list-item"
            )}
            key={"pipe-list-items" + idx}
            onClick={() => {
              setCurrPipe(idx + 1, true);
            }}
          >
            <div className="icon-container">{icon}</div>
            <div className="text">
              <div className="fs-18 fw-500 name">{name}</div>
              <div className="fs-12 desc">{el.description}</div>
            </div>
          </div>
        );
      })}

      <div
        className="pipe-list-item"
        onClick={() => setSelectNewFormActive((prevState) => !prevState)}
      >
        <AnimatePresence>
          {selectNewFormActive && (
            <AddFormModal
              setIsInEditState={setIsInEditState}
              addFormHandler={addFormHandler}
              setSelectNewFormActive={setSelectNewFormActive}
            />
          )}
        </AnimatePresence>

        <div className="icon-container">
          <AddForm />
        </div>
        <div className="text">
          <div className="fs-18 fw-500 name">Add Form</div>
          <div className="fs-12 desc">Vitae volutpat</div>
        </div>
      </div>
    </div>
  );
};

export default PipesList;
