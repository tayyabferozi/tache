import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useDropzone } from "react-dropzone";
import clone from "just-clone";

import FormHeading from "../FormHeading";
import DropzoneContainer from "../../../../../components/DropzoneContainer";
import CustomMDEditor from "../../../../../components/CustomMDEditor";
import GridContainer from "../../../../../components/GridContainer";
import PaginationNum from "../../../../../components/PaginationNum";
import FileGridCard from "../../../../../components/FileGridCard";
import Button from "../../../../../components/Button";

import "./Regular.scss";

const pageSize = 9;

const Regular = ({
  md,
  files,
  saveData,
  pipesData,
  currPipe,
  setCurrPipe,
  setPipesData,
  takePipeSnapshot,
  setIsPipeTouched,
  setIsInEditState,
}) => {
  const [isInPreviewState, setIsInPreviewState] = useState(false);
  const [pageNumState, setPageNumState] = useState(1);
  const [filteredData, setFilteredData] = useState(files);
  const [dataLen, setDataLen] = useState(files.length);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      setPipesData((prevState) => {
        const newState = clone(prevState);
        newState[currPipe - 1] = {
          ...newState[currPipe - 1],
          files: acceptedFiles.map((file) =>
            Object.assign(file, {
              preview: URL.createObjectURL(file),
            })
          ),
        };
        return newState;
      });
    },
  });

  const deleteFile = (idx) => {
    setPipesData((prevState) => {
      const newState = clone(prevState);

      const newFiles = [...newState[currPipe - 1].files];
      newFiles.splice(idx, 1);
      newState[currPipe - 1].files = newFiles;

      return newState;
    });
  };

  const inputChangeHandler = (e) => {
    setIsPipeTouched(true);

    setPipesData((prevState) => {
      const newState = clone(prevState);
      newState[currPipe - 1].md = e.target.value;
      return newState;
    });
  };

  useEffect(() => {
    setFilteredData((prevState) => {
      if (files.length === 0) {
        setDataLen(files.length);
        return files;
      }

      if (
        pageNumState < 0 ||
        pageNumState > Math.ceil(files.length / pageSize)
      ) {
        return prevState;
      }
      const newData = [...files];
      setDataLen(newData.length);
      console.log(newData);
      console.log(
        newData.slice((pageNumState - 1) * pageSize, pageNumState * pageSize)
      );
      return newData.slice(
        (pageNumState - 1) * pageSize,
        pageNumState * pageSize
      );
    });
  }, [files, pageNumState]);

  useEffect(() => {
    if (Math.ceil(files.length / pageSize) < pageNumState) {
      setPageNumState(Math.ceil(files.length / pageSize));
    }
    if (files.length === 0) setPageNumState(1);
  }, [files, pageNumState]);

  useEffect(() => {
    takePipeSnapshot();
  }, []);

  useEffect(() => {
    setIsPipeTouched(false);
  }, [setIsPipeTouched]);

  return (
    <div className="regular">
      <FormHeading
        title="Regular"
        isInPreviewState={isInPreviewState}
        setIsInPreviewState={setIsInPreviewState}
        pipesData={pipesData}
        currPipe={currPipe}
        setCurrPipe={setCurrPipe}
        setPipesData={setPipesData}
        setIsInEditState={setIsInEditState}
      />
      {isInPreviewState ? (
        <>
          <div className="md mt-20">
            <ReactMarkdown children={md} />
          </div>
          <div className="file-preview-section">
            <GridContainer rowClassName="g-20 mw-0" rootClassName="mw-0">
              {filteredData?.map((el, idx) => {
                return (
                  <div
                    className="col-xl-4 col-sm-6"
                    key={"pipe-form-grid-file" + idx}
                  >
                    <FileGridCard
                      deleteBtn
                      btnFunc={() => {
                        deleteFile(pageSize * (pageNumState - 1) + idx);
                      }}
                      currView="grid"
                      title={el?.name?.split(".")[0]}
                      size={parseInt((el.size || 0) / 1024) + " KB"}
                    />
                  </div>
                );
              })}
            </GridContainer>

            {Math.ceil(dataLen / pageSize) !== 0 && (
              <PaginationNum
                offset={-20}
                scrollTo={"find-talent-search-bar"}
                total={Math.ceil(dataLen / pageSize)}
                pageNumState={pageNumState}
                setPageNumState={setPageNumState}
              />
            )}
          </div>
        </>
      ) : (
        <>
          <div className="custom-form-control mt-20">
            <CustomMDEditor
              noExtraCommands
              value={md}
              inputChangeHandler={inputChangeHandler}
              maxChar={5000}
            />
          </div>
          <DropzoneContainer
            filesOnTop
            exportIcon
            borderSolid
            className="mh-200"
            title="File - Max 2MB"
            subTitle="Drag & Drop or choose Video to upload"
            textClassName="flex-column-reverse"
            getRootProps={getRootProps}
            getInputProps={getInputProps}
            formState={{ files }}
            deleteFile={deleteFile}
          />
        </>
      )}

      <div className="d-flex justify-content-end mt-20">
        <Button primary className="h-40" onClick={saveData}>
          Save
        </Button>
      </div>
    </div>
  );
};

export default Regular;
