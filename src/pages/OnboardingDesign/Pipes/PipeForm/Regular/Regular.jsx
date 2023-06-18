import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useDropzone } from "react-dropzone";

import FormHeading from "../FormHeading";
import DropzoneContainer from "../../../../../components/DropzoneContainer";
import CustomMDEditor from "../../../../../components/CustomMDEditor";
import GridContainer from "../../../../../components/GridContainer";
import PaginationNum from "../../../../../components/PaginationNum";
import FileGridCard from "../../../../../components/FileGridCard";

import "./Regular.scss";

const pageSize = 9;

const Regular = ({ pipesData, currPipe, setCurrPipe, setPipesData }) => {
  const [isInPreviewState, setIsInPreviewState] = useState(false);
  const [formState, setFormState] = useState({
    intro: "",
    files: [],
  });
  const [pageNumState, setPageNumState] = useState(1);
  const [filteredData, setFilteredData] = useState(formState.files);
  const [dataLen, setDataLen] = useState(formState.files.length);

  const { getRootProps, getInputProps } = useDropzone({
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

  const deleteFile = (idx) => {
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
      ) {
        return prevState;
      }
      const newData = [...formState.files];
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
    <div className="regular">
      <FormHeading
        title="Regular"
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
            <GridContainer rowClassName="g-20 mw-0" rootClassName="mw-0">
              {filteredData.map((el, idx) => {
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
                      title={el.name.split(".")[0]}
                      size={parseInt(el.size / 1024) + " KB"}
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
              value={formState.intro}
              inputChangeHandler={inputChangeHandler}
              maxChar={5000}
            />
          </div>
          <DropzoneContainer
            exportIcon
            borderSolid
            className="mh-200"
            title="File - Max 2MB"
            subTitle="Drag & Drop or choose Video to upload"
            textClassName="flex-column-reverse"
            getRootProps={getRootProps}
            getInputProps={getInputProps}
            formState={formState}
          />
        </>
      )}
    </div>
  );
};

export default Regular;
