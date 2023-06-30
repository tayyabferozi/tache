import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useDropzone } from "react-dropzone";
import clone from "just-clone";

import FormHeading from "../FormHeading";
import CustomMDEditor from "../../../../../components/CustomMDEditor";
import DropzoneContainer from "../../../../../components/DropzoneContainer";
import Button from "../../../../../components/Button";

import "./Video.scss";

const Video = ({
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

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "video/*": [],
    },
    // multiple: false,
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
    takePipeSnapshot();
  }, []);

  useEffect(() => {
    setIsPipeTouched(false);
  }, [setIsPipeTouched]);

  return (
    <div className="video">
      <FormHeading
        title="Video"
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
          {files?.length > 0 && Object.keys(files[0]).length > 0 && (
            <div className="video-preview-wrap">
              <Button
                className="h-40"
                whiteLight
                icon={{
                  src: "/assets/vectors/icons/trash-white.svg",
                  alt: "trash",
                  title: "trash",
                }}
                onClick={() => {
                  deleteFile(0);
                  // setPipesData((prevState) => {
                  //   const newState = clone(prevState);
                  //   newState[currPipe - 1] = {
                  //     ...newState[currPipe - 1],
                  //     files: [],
                  //   };
                  //   return newState;
                  // });
                }}
              >
                Delete
              </Button>
              <video
                controlsList="nodownload"
                controls
                src={
                  (files.length && files[0].src) ||
                  (files.length && files[0].preview)
                }
              >
                Your browser doesn't support video
              </video>
            </div>
          )}
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
            deleteFile={deleteFile}
          />
        </>
      )}

      <div className="d-flex justify-content-end mt-30">
        <Button primary className="h-40" onClick={saveData}>
          Save
        </Button>
      </div>
    </div>
  );
};

export default Video;
