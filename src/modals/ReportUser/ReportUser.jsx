import clsx from "clsx";
import clone from "just-clone";
import { useDropzone } from "react-dropzone";
import { useState } from "react";

import Modal from "../../components/Modal";
import Button from "../../components/Button";
import Input from "../../components/Input";
import DropzoneContainer from "../../components/DropzoneContainer";
import "./ReportUser.scss";

const ReportUser = ({ onClickReport, className, ...rest }) => {
  const [formState, setFormState] = useState({ files: [] });

  const { getRootProps, getInputProps } = useDropzone({
    acceptedFiles: ["images/*"],
    onDrop: (acceptedFiles) => {
      setFormState((prevState) => {
        const newState = clone(prevState);
        newState.files = acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        );

        return newState;
      });
    },
  });

  return (
    <Modal id="report-modal" className={clsx("", className)} {...rest}>
      <div className="icon-wrap">
        <img src="/assets/vectors/icons/warning.svg" alt="warning" />
      </div>

      <h5 className="mt-20 mb-30 text-center">
        Please provide additional details about the report
      </h5>

      <Input transparent label="Details" textarea rows={5} />

      <DropzoneContainer
        filesOnTop
        exportIcon
        borderSolid
        title="File - Max 2MB"
        subTitle="Drag & Drop or choose Video to upload"
        textClassName="flex-column-reverse"
        getRootProps={getRootProps}
        getInputProps={getInputProps}
        formState={formState}
      />

      <div className="btns">
        <Button bordered onClick={rest.closeModal}>
          Cancel
        </Button>
        <Button
          red
          onClick={() => {
            rest.closeModal();
            onClickReport();
          }}
        >
          Report
        </Button>
      </div>
    </Modal>
  );
};

export default ReportUser;
