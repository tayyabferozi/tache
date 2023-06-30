import React, { useRef } from "react";
import { motion } from "framer-motion";

import useOnClickOutside from "../../../../hooks/useOnClickOutside";

import "./AddFormModal.scss";
import clsx from "clsx";

const addFormOptions = [
  {
    icon: "/assets/vectors/icons/regular-mini.svg",
    label: "reg",
    title: "Regular",
  },
  {
    icon: "/assets/vectors/icons/video-mini.svg",
    label: "vid",
    title: "Video",
  },
  {
    icon: "/assets/vectors/icons/images-mini.svg",
    label: "img",
    title: "Images",
  },
  {
    icon: "/assets/vectors/icons/files-mini.svg",
    label: "file",
    title: "Files",
  },
];

const AddFormModal = ({
  onRight,
  addFormHandler,
  setSelectNewFormActive,
  setIsInEditState,
}) => {
  const newFormRef = useRef();

  useOnClickOutside(newFormRef, () => setSelectNewFormActive(false));

  return (
    <motion.div
      ref={newFormRef}
      key={"choose-new-form-options"}
      className={clsx(onRight && "on-right", "add-form-modal choose-options")}
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
    >
      {addFormOptions.map((el, idx) => {
        return (
          <div
            key={"add-form-option-" + el.title + idx}
            className="option"
            onClick={() => {
              addFormHandler(el.label);
              setIsInEditState(true);
            }}
          >
            <img src={el.icon} alt={el.title} />
            {el.title}
          </div>
        );
      })}
    </motion.div>
  );
};

export default AddFormModal;
