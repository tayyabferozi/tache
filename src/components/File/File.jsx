import { useState } from "react";

import "./File.scss";
import clsx from "clsx";

const File = ({
  className,
  onCross,
  vid,
  img,
  name,
  fileType,
  noDownload,
  long,
  isUploading,
  uploadingProgress,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);

  const downloadHandler = () => {
    setLoadingProgress(0);
    setIsLoading(true);

    setTimeout(() => {
      setLoadingProgress(33.33);
    }, 500);

    setTimeout(() => {
      setLoadingProgress(66.66);
    }, 1000);

    setTimeout(() => {
      setLoadingProgress(100);
    }, 1500);

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div
      className={clsx(
        "msg-file",
        !name && !fileType && "without-text",
        noDownload && "no-download",
        !noDownload && "c-pointer",
        className
      )}
      onClick={noDownload ? () => {} : downloadHandler}
    >
      {onCross && (
        <div className="cross" onClick={onCross}>
          <img src="/assets/vectors/icons/close-6.svg" alt="cross" />
        </div>
      )}
      <div className="img">
        {img ? (
          <img src={img} alt="document" />
        ) : vid ? (
          <video className="w-100" muted src={vid} />
        ) : (
          <div className="placeholder">
            <img
              className="file"
              src="/assets/vectors/icons/document-1.svg"
              alt="document"
            />
          </div>
        )}
        <div className="placeholder overlay">
          <img
            className="file download"
            src="/assets/vectors/icons/download.svg"
            alt="download"
          />
        </div>
      </div>

      {(name || fileType) && (
        <div className="ms-2 ps-1 mw-0 mt-2 flex-grow-1">
          <div className="fw-500 text-light-1 restrict-one-line mw-0 fs-11 d-flex align-items-center justify-content-between gap-2">
            {name.slice(0, 10)}
            {name.length > 10 ? "..." : ""}
            {(isLoading || isUploading) && long && (
              <div className="progress max-w-one-third">
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated"
                  style={{
                    width: `${
                      isUploading ? uploadingProgress : loadingProgress
                    }%`,
                  }}
                ></div>
              </div>
            )}
          </div>
          {(isLoading || isUploading) && !long ? (
            <div className="progress mt-2">
              <div
                className="progress-bar progress-bar-striped progress-bar-animated"
                style={{
                  width: `${
                    isUploading ? uploadingProgress : loadingProgress
                  }%`,
                }}
              ></div>
            </div>
          ) : (
            <div className="fw-500 mt-1 fs-10 restrict-one-line">
              {fileType}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default File;
