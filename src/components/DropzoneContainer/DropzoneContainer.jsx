import clsx from "clsx";
import React from "react";

import "./DropzoneContainer.scss";

const DropzoneContainer = ({
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
}) => {
  return (
    <div
      className={clsx(
        "dropzone-container flex-grow-1",
        className,
        borderSolid && "solid-border"
      )}
      {...getRootProps()}
    >
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

                  <img src="/assets/vectors/icons/trash.svg" alt="trash" />
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
      <input {...getInputProps()} />
    </div>
  );
};

export default DropzoneContainer;
