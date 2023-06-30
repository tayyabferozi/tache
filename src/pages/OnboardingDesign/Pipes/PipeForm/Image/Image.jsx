import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useDropzone } from "react-dropzone";
import clone from "just-clone";

import FormHeading from "../FormHeading";
import CustomMDEditor from "../../../../../components/CustomMDEditor";
import DropzoneContainer from "../../../../../components/DropzoneContainer";
import GridContainer from "../../../../../components/GridContainer";
import Button from "../../../../../components/Button";
import ImgOpener from "../../../../../components/ImgOpener";
import PaginationNum from "../../../../../components/PaginationNum";

import "./Image.scss";

const pageSize = 9;

const Image = ({
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
  const [imgState, setImgState] = useState({ src: "", active: false });
  const [isInPreviewState, setIsInPreviewState] = useState(false);
  const [pageNumState, setPageNumState] = useState(1);
  const [filteredData, setFilteredData] = useState(files);
  const [dataLen, setDataLen] = useState(files.length);

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
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

  const openImg = (src) => {
    setImgState({
      src: src,
      active: true,
    });
  };

  const deleteImg = (idx) => {
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
      if (pageNumState < 0 || pageNumState > Math.ceil(files.length / pageSize))
        return prevState;
      const newData = files;
      setDataLen(newData.length);
      return newData.slice(
        (pageNumState - 1) * pageSize,
        pageNumState * pageSize
      );
    });
  }, [pageNumState, files]);

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
    <div className="image">
      <FormHeading
        title="Image"
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
            <GridContainer rowClassName="g-10">
              {filteredData.map((el, idx) => {
                return (
                  <div
                    className="col-xl-4 col-sm-6"
                    key={"file-img-preview" + idx}
                  >
                    <div className="img-preview-wrap d-flex align-items-center">
                      <img
                        className="w-100"
                        src={el.src || el.preview}
                        alt="uploaded"
                      />
                      <div className="actions">
                        <Button
                          secondaryLight
                          className="h-30"
                          textClassName="fs-12"
                          icon={{
                            src: "/assets/vectors/icons/eye-2.svg",
                            alt: "eye",
                            title: "eye",
                          }}
                          onClick={() => openImg(el.src || el.preview)}
                        >
                          Preview
                        </Button>
                        <Button
                          className="h-30"
                          redLight
                          textClassName="fs-12"
                          icon={{
                            src: "/assets/vectors/icons/trash.svg",
                            alt: "trash",
                            title: "trash",
                          }}
                          onClick={() =>
                            deleteImg(pageSize * (pageNumState - 1) + idx)
                          }
                        >
                          Delete
                        </Button>
                      </div>
                    </div>
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
            className="mh-400"
            title="File - Max 2MB"
            subTitle="Drag & Drop or choose Video to upload"
            textClassName="flex-column-reverse"
            getRootProps={getRootProps}
            getInputProps={getInputProps}
            formState={{ files }}
          />
        </>
      )}
      <ImgOpener imgState={imgState} setImgState={setImgState} />

      <div className="d-flex justify-content-end mt-30">
        <Button primary className="h-40" onClick={saveData}>
          Save
        </Button>
      </div>
    </div>
  );
};

export default Image;
