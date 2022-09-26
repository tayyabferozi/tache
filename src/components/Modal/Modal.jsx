import clsx from "clsx";
import React from "react";
import { useRef } from "react";

const Modal = ({ show, closeModal, className, children, ...rest }) => {
  const modalWrapperRef = useRef(null);

  const closeModalHandler = (e, origin) => {
    if (e.target === modalWrapperRef.current || origin === "button") {
      closeModal();
    }
  };

  return (
    <div
      className={clsx("modal-wrapper", className, { active: show })}
      {...rest}
      ref={modalWrapperRef}
      onClick={closeModalHandler}
    >
      <div className="modal-sub-wrapper">
        <div className="modal-main">
          <img
            className="close"
            src="/assets/vectors/icons/close.svg"
            alt="close"
            title="close"
            onClick={(e) => closeModalHandler(e, "button")}
          />
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
