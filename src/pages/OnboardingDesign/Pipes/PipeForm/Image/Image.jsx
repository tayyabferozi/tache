import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useDropzone } from "react-dropzone";

import FormHeading from "../FormHeading";
import CustomMDEditor from "../../../../../components/CustomMDEditor";
import DropzoneContainer from "../../../../../components/DropzoneContainer";
import GridContainer from "../../../../../components/GridContainer";
import Button from "../../../../../components/Button";
import ImgOpener from "../../../../../components/ImgOpener";
import PaginationNum from "../../../../../components/PaginationNum";

import "./Image.scss";

const pageSize = 9;

const Image = ({ pipesData, currPipe, setCurrPipe, setPipesData }) => {
  const [imgState, setImgState] = useState({ src: "", active: false });
  const [isInPreviewState, setIsInPreviewState] = useState(false);
  const [formState, setFormState] = useState({
    intro: "",
    files: [],
  });
  const [pageNumState, setPageNumState] = useState(1);
  const [filteredData, setFilteredData] = useState(formState.files);
  const [dataLen, setDataLen] = useState(formState.files.length);

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

  const openImg = (src) => {
    setImgState({
      src: src,
      active: true,
    });
  };

  const deleteImg = (idx) => {
    setFormState((prevState) => {
      const newFiles = [...prevState.files];
      newFiles.splice(idx, 1);
      return { ...prevState, files: newFiles };
    });
  };

  const inputChangeHandler = (e) => {
    setFormState((prevState) => ({ ...prevState, intro: e.target.value }));
  };

  useEffect(() => {
    setFilteredData((prevState) => {
      if (formState.files.length === 0) {
        setDataLen(formState.files.length);
        return formState.files;
      }
      if (
        pageNumState < 0 ||
        pageNumState > Math.ceil(formState.files.length / pageSize)
      )
        return prevState;
      const newData = formState.files;
      setDataLen(newData.length);
      return newData.slice(
        (pageNumState - 1) * pageSize,
        pageNumState * pageSize
      );
    });
  }, [pageNumState, formState]);

  useEffect(() => {
    if (Math.ceil(formState.files.length / pageSize) < pageNumState) {
      setPageNumState(Math.ceil(formState.files.length / pageSize));
    }
    if (formState.files.length === 0) setPageNumState(1);
  }, [formState.files, pageNumState]);

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
      />
      {isInPreviewState ? (
        <>
          <div className="md mt-20">
            <ReactMarkdown children={formState.intro} />
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
                      <img className="w-100" src={el.preview} alt="uploaded" />
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
                          onClick={() => openImg(el.preview)}
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
              value={formState.intro}
              inputChangeHandler={inputChangeHandler}
              maxChar={5000}
            />
          </div>
          <DropzoneContainer
            exportIcon
            borderSolid
            className="mh-400"
            title="File - Max 2MB"
            subTitle="Drag & Drop or choose Video to upload"
            textClassName="flex-column-reverse"
            getRootProps={getRootProps}
            getInputProps={getInputProps}
            formState={formState}
          />
        </>
      )}
      <ImgOpener imgState={imgState} setImgState={setImgState} />
    </div>
  );
};

export default Image;
