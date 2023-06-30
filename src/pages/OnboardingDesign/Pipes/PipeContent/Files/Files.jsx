import { useState, useEffect } from "react";
import clsx from "clsx";

import ContentHeading from "../ContentHeading";
import CustomMD from "../../../../../components/CustomMD";
import GridContainer from "../../../../../components/GridContainer";
import FileGridItem from "../../../../../components/FileGridCard";
import PaginationNum from "../../../../../components/PaginationNum";

import "./Files.scss";
import Loader from "../../../../../components/Loader/Loader";

const pageSize = 12;

const Files = ({ md, files, setIsInEditState }) => {
  const [dataLen, setDataLen] = useState(files.length);
  const [filteredFiles, setFilteredFiles] = useState(files);
  const [pageNumState, setPageNumState] = useState(1);
  const [currView, setCurrView] = useState("grid");
  const [isLayoutLoading, setIsLayoutLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  const setTempLoading = () => {
    setIsLayoutLoading(true);
    setTimeout(() => {
      setIsLayoutLoading(false);
    }, 500);
  };

  useEffect(() => {
    setFilteredFiles((prevState) => {
      if (pageNumState < 0 || pageNumState > Math.ceil(files.length / pageSize))
        return prevState;
      const newData = files;
      setDataLen(newData.length);
      return newData.slice(
        (pageNumState - 1) * pageSize,
        pageNumState * pageSize
      );
    });
  }, [files, pageNumState]);

  return (
    <div className="files">
      <ContentHeading
        view={currView}
        setView={setCurrView}
        setTempLoading={setTempLoading}
        title="Files"
        icon="/assets/vectors/icons/file.svg"
        setIsInEditState={setIsInEditState}
      />

      <div className="md">
        <CustomMD markdown={md} />
      </div>

      {isLayoutLoading ? (
        <div className="text-center">
          <Loader />
        </div>
      ) : (
        <div className="files">
          <GridContainer rowClassName="g-20">
            {isLoading
              ? new Array(9).fill(0).map((el, idx) => {
                  return (
                    <div
                      className={clsx(
                        currView === "grid" ? "col-lg-4 col-sm-6" : "col-12"
                      )}
                      key={"pipe-conten-file" + idx}
                    >
                      <FileGridItem skeleton currView={currView} />
                    </div>
                  );
                })
              : filteredFiles.map((el, idx) => {
                  return (
                    <div
                      className={clsx(
                        currView === "grid" ? "col-lg-4 col-sm-6" : "col-12"
                      )}
                      key={"pipe-conten-file" + idx}
                    >
                      <FileGridItem
                        {...el}
                        currView={currView}
                        title={el.name}
                        size={parseInt(el.size / 1024) + " KB"}
                      />
                    </div>
                  );
                })}
          </GridContainer>
          {!isLoading && Math.ceil(dataLen / pageSize) !== 0 && (
            <PaginationNum
              offset={-20}
              scrollTo={"find-talent-search-bar"}
              total={Math.ceil(dataLen / pageSize)}
              pageNumState={pageNumState}
              setPageNumState={setPageNumState}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Files;
