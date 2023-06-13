import { useState } from "react";

import ContentHeading from "../ContentHeading/ContentHeading";
import CustomMD from "../../../../../components/CustomMD/CustomMD";

import "./Files.scss";
import GridContainer from "../../../../../components/GridContainer/GridContainer";
import Button from "../../../../../components/Button/Button";
import clsx from "clsx";

const md =
  "Lorem ipsum dolor sit amet consectetur. Duis dui sollicitudin pretium consequat nisl vel ridiculus tristique nisl. Purus odio penatibus netus";

const files = [
  {
    title: "Title Document",
    size: "74 MB",
  },
  {
    title: "Title Document",
    size: "74 MB",
  },
  {
    title: "Title Document",
    size: "74 MB",
  },
  {
    title: "Title Document",
    size: "74 MB",
  },
  {
    title: "Title Document",
    size: "74 MB",
  },
  {
    title: "Title Document",
    size: "74 MB",
  },
  {
    title: "Title Document",
    size: "74 MB",
  },
  {
    title: "Title Document",
    size: "74 MB",
  },
  {
    title: "Title Document",
    size: "74 MB",
  },
  {
    title: "Title Document",
    size: "74 MB",
  },
  {
    title: "Title Document",
    size: "74 MB",
  },
  {
    title: "Title Document",
    size: "74 MB",
  },
];

const Files = () => {
  const [currView, setCurrView] = useState("grid");

  return (
    <div className="files">
      <ContentHeading
        view={currView}
        setView={setCurrView}
        title="Files"
        icon="/assets/vectors/icons/file.svg"
      />

      <div className="md">
        <CustomMD markdown={md} />
      </div>

      <div className="files">
        <GridContainer rowClassName="g-20">
          {files.map((el, idx) => {
            return (
              <div
                className={clsx(
                  currView === "grid" ? "col-lg-4 col-sm-6" : "col-12"
                )}
                key={"pipe-conten-file" + idx}
              >
                <div
                  className={clsx("file-item", currView === "list" && "list")}
                >
                  <div className="head">
                    <img src="/assets/vectors/icons/file-icon.svg" alt="file" />
                    <div className="fs-18 text-light-1 fw-500 restrict-one-line">
                      {el.title}
                    </div>
                  </div>
                  {currView === "grid" ? (
                    <div className="foot">
                      <div className="left file-info d-flex align-items-center gap-2">
                        <img
                          src="/assets/vectors/icons/file-mini.svg"
                          alt="file"
                        />
                        <div className="fs-14 text">{el.size}</div>
                      </div>
                      <Button
                        primaryLight
                        inline
                        noText={currView === "list"}
                        icon={{
                          src: "/assets/vectors/icons/download.svg",
                          title: "download",
                          alt: "download",
                        }}
                      >
                        {currView === "grid" ? "Download" : ""}
                      </Button>
                    </div>
                  ) : (
                    <>
                      <div className="file-info d-flex align-items-center gap-2">
                        <img
                          src="/assets/vectors/icons/file-mini.svg"
                          alt="file"
                        />
                        <div className="fs-14 text">{el.size}</div>
                      </div>
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
                      >
                        {currView === "grid" ? "Download" : ""}
                      </Button>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </GridContainer>
      </div>
    </div>
  );
};

export default Files;
