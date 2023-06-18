import Modal from "../../components/Modal";
import Button from "../../components/Button";

import "./DeletePipeline.scss";

const DeletePipeline = ({ onClickDelete, ...rest }) => {
  return (
    <Modal id="delete-pipeline-modal" className="text-center" {...rest}>
      <div className="icon-wrap">
        <img src="/assets/vectors/icons/warning.svg" alt="warning" />
      </div>

      <h5 className="mt-20">Are you sure you want to delete the pipeline?</h5>

      <p className="mt-10">This action cannot be undone</p>

      <div className="btns">
        <Button bordered onClick={rest.closeModal}>
          Cancel
        </Button>
        <Button
          red
          onClick={() => {
            rest.closeModal();
            onClickDelete();
          }}
        >
          Delete
        </Button>
      </div>
    </Modal>
  );
};

export default DeletePipeline;
