import React from "react";
import clsx from "clsx";
import Button from "../Button";

import "./FileGridCard.scss";
import Skeleton from "react-loading-skeleton";

const FileGridCard = ({
  btnFunc = () => {},
  deleteBtn,
  currView = "grid",
  title,
  size,
  skeleton,
}) => {
  return (
    <div className={clsx("file-grid-card", currView === "list" && "list")}>
      <div className="head">
        {skeleton ? (
          <Skeleton width={38} height={38} circle />
        ) : (
          <img src="/assets/vectors/icons/file-icon.svg" alt="file" />
        )}
        <div className="fs-18 text-light-1 fw-500 restrict-one-line">
          {skeleton ? <Skeleton width="50%" /> : title}
        </div>
      </div>
      {currView === "grid" ? (
        <div className="foot">
          <div className="left file-info d-flex align-items-center gap-2">
            <img src="/assets/vectors/icons/file-mini.svg" alt="file" />
            <div className="fs-14 text">
              {skeleton ? <Skeleton width={30} /> : size}
            </div>
          </div>
          {skeleton ? (
            <Skeleton width={100} height={30} borderRadius={4} />
          ) : (
            <Button
              primaryLight={!deleteBtn}
              redLight={deleteBtn}
              inline
              noText={currView === "list"}
              icon={{
                src: deleteBtn
                  ? "/assets/vectors/icons/trash.svg"
                  : "/assets/vectors/icons/download.svg",
                title: deleteBtn ? "trash" : "download",
                alt: deleteBtn ? "trash" : "download",
              }}
              onClick={btnFunc}
            >
              {currView === "grid" ? (deleteBtn ? "Delete" : "Download") : ""}
            </Button>
          )}
        </div>
      ) : (
        <>
          <div className="file-info d-flex align-items-center gap-2">
            <img src="/assets/vectors/icons/file-mini.svg" alt="file" />
            <div className="fs-14 text">
              {skeleton ? <Skeleton width={30} /> : size}
            </div>
          </div>
          {skeleton ? (
            <Skeleton width={100} height={30} borderRadius={4} />
          ) : (
            <Button
              className="px-10"
              primaryLight
              inline
              noText={currView === "list"}
              icon={{
                src: "/assets/vectors/icons/download.svg",
                title: "download",
                alt: "download",
              }}
              onClick={btnFunc}
            >
              {currView === "grid" ? "Download" : ""}
            </Button>
          )}
        </>
      )}
    </div>
  );
};

export default FileGridCard;
