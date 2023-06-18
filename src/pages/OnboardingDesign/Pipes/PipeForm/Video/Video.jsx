import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import { useDropzone } from "react-dropzone";

import FormHeading from "../FormHeading";
import CustomMDEditor from "../../../../../components/CustomMDEditor";
import DropzoneContainer from "../../../../../components/DropzoneContainer";
import Button from "../../../../../components/Button";

import "./Video.scss";

const Video = ({ pipesData, currPipe, setCurrPipe, setPipesData }) => {
  const [isInPreviewState, setIsInPreviewState] = useState(false);
  const [formState, setFormState] = useState({
    intro: "",
    files: [],
  });

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "video/*": [],
    },
    multiple: false,
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

  const inputChangeHandler = (e) => {
    setFormState((prevState) => ({ ...prevState, intro: e.target.value }));
  };

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
      />
      {isInPreviewState ? (
        <>
          <div className="md mt-20">
            <ReactMarkdown children={formState.intro} />
          </div>
          {formState.files[0] && (
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
                  setFormState((prevState) => {
                    return { ...prevState, files: [] };
                  });
                }}
              >
                Delete
              </Button>
              <video controls src={formState.files[0].preview}>
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
    </div>
  );
};

export default Video;
