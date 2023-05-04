import React, { useState } from "react";
import { useDropzone } from "react-dropzone";

import GridContainer from "../../components/GridContainer";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Modal from "../../components/Modal";
import "./PurchaseReview.scss";

const PurchaseReview = ({ ...rest }) => {
  const [formState, setFormState] = useState({
    files: [],
  });

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    onDrop: (acceptedFiles) => {
      setFormState((prevState) => {
        return {
          ...prevState,
          files: acceptedFiles.map((file) =>
            Object.assign(file, {
              preview: URL.createObjectURL(file),
            })
          ),
        };
      });
    },
  });

  return (
    <Modal id="purchase-review-modal" {...rest}>
      <h4>Purchase Review</h4>

      <GridContainer rootClassName="mt-20">
        <div className="col-md-7">
          <Input
            className="h-100 d-flex flex-column"
            wrapperClassName="flex-grow-1"
            inputClassName="h-100"
            darkLabel
            rows={5}
            label="Write review"
            textarea
          />
        </div>
        <div className="col-md-5 d-flex flex-column">
          <label className="text-light-1 fw-500">File</label>

          <div className="dropzone-container flex-grow-1" {...getRootProps()}>
            <div>
              {formState.files.length > 0 ? (
                <>
                  {formState.files.map((el, idx) => {
                    return (
                      <div
                        key={"selected-file" + idx}
                        className="selected-file my-1 fs-14"
                      >
                        {el.name}
                      </div>
                    );
                  })}
                </>
              ) : (
                <>
                  <img
                    className="icon"
                    src="/assets/vectors/icons/import.svg"
                    alt="import"
                  />
                  <div className="mt-2 text-light-2">Drop your file</div>
                  <div className="mt-1">JPG, SVG, PDF etc</div>
                </>
              )}
            </div>
            <input {...getInputProps()} />
          </div>
        </div>
      </GridContainer>

      <div
        className="mt-30 d-flex justify-content-end"
        onClick={rest.toggleShow}
      >
        <Button primary className="h-40" onClick={rest.closeModal}>
          Submit
        </Button>
      </div>
    </Modal>
  );
};

export default PurchaseReview;
