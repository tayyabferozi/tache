import clsx from "clsx";

import Modal from "../../components/Modal";
import Button from "../../components/Button";

import "./Confirmation.scss";

const Confirmation = ({
  title,
  body,
  onClickDelete,
  className,
  dangerBtnTxt,
  safeBtnTxt,
  ...rest
}) => {
  return (
    <Modal
      id="confirmation-modal"
      className={clsx("text-center", className)}
      {...rest}
    >
      <div className="icon-wrap">
        <img src="/assets/vectors/icons/warning.svg" alt="warning" />
      </div>

      <h5 className="mt-20">{title}</h5>

      {body && <p className="mt-10">{body}</p>}

      <div className="btns">
        <Button bordered onClick={rest.closeModal}>
          {safeBtnTxt || "Cancel"}
        </Button>
        <Button
          red
          onClick={() => {
            rest.closeModal();
            onClickDelete();
          }}
        >
          {dangerBtnTxt || "Delete"}
        </Button>
      </div>
    </Modal>
  );
};

export default Confirmation;
