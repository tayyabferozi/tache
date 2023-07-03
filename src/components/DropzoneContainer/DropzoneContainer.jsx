import clsx from "clsx";
import React from "react";

import "./DropzoneContainer.scss";
import GridContainer from "../GridContainer/GridContainer";

const DropzoneContainer = ({
  filesOnTop,
  className,
  exportIcon,
  borderSolid,
  textClassName,
  title,
  titleClassName,
  subTitle,
  subTitleClassName,
  getRootProps,
  getInputProps,
  formState,
  deleteFile,
}) => {
  return (
    <>
      {filesOnTop && formState?.files?.length > 0 && (
        <div>
          <GridContainer rootClassName="my-30">
            {formState.files.map((el, idx) => {
              return (
                <div
                  key={"selected-file" + idx}
                  className="selected-file my-1 fs-14 d-flex gap-10 my-10 col-xxl-3 col-lg-4 col-md-4 col-sm-4 col-6"
                >
                  <img
                    className="c-pointer"
                    src="/assets/vectors/icons/trash.svg"
                    alt="trash"
                    onClick={() => deleteFile(idx)}
                  />

                  <div className="restrict-one-line">{el.name}</div>
                </div>
              );
            })}
          </GridContainer>
        </div>
      )}
      <div
        className={clsx(
          "dropzone-container flex-grow-1",
          className,
          borderSolid && "solid-border"
        )}
        {...getRootProps()}
      >
        {filesOnTop ? (
          <div>
            <img
              className="icon"
              src={
                exportIcon
                  ? "/assets/vectors/icons/export.svg"
                  : "/assets/vectors/icons/import.svg"
              }
              alt="import"
            />
            <div
              className={clsx(
                "d-flex flex-column align-items-center gap-1 mt-2",
                textClassName
              )}
            >
              <div className={clsx("text-light-2", titleClassName)}>
                {title || "Drop your file"}
              </div>
              <div className={clsx(subTitleClassName)}>
                {subTitle || "JPG, SVG, PDF etc"}
              </div>
            </div>
          </div>
        ) : (
          <div>
            {formState?.files?.length > 0 ? (
              <>
                {formState.files.map((el, idx) => {
                  return (
                    <div
                      key={"selected-file" + idx}
                      className="selected-file my-1 fs-14"
                    >
                      <div className="restrict-one-line">{el.name}</div>

                      {/* <img src="/assets/vectors/icons/trash.svg" alt="trash" /> */}
                    </div>
                  );
                })}
              </>
            ) : (
              <>
                <img
                  className="icon"
                  src={
                    exportIcon
                      ? "/assets/vectors/icons/export.svg"
                      : "/assets/vectors/icons/import.svg"
                  }
                  alt="import"
                />
                <div
                  className={clsx(
                    "d-flex flex-column align-items-center gap-1 mt-2",
                    textClassName
                  )}
                >
                  <div className={clsx("text-light-2", titleClassName)}>
                    {title || "Drop your file"}
                  </div>
                  <div className={clsx(subTitleClassName)}>
                    {subTitle || "JPG, SVG, PDF etc"}
                  </div>
                </div>
              </>
            )}
          </div>
        )}
        <input {...getInputProps()} />
      </div>
    </>
  );
};

export default DropzoneContainer;
