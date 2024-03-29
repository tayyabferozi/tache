import { useEffect, useRef, useState } from "react";
import clone from "just-clone";
import { useDropzone } from "react-dropzone";

import Message from "./Message";
import Loader from "../../../../components/Loader";
import MessageInput from "../../../../components/MessageInput/MessageInput";
import "./Main.scss";

const Main = ({
  chatData,
  setIsThreadActive,
  loadMoreChatListMsgs,
  onDeleteMsg,
  selectedChatIdx,
  setIsRightCollapsed,
}) => {
  const [formState, setFormState] = useState({ message: "", files: [] });

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      // "image/*": [],
    },
    noClick: true,
    onClick: (event) => event.stopPropagation(),
    onDrop: (acceptedFiles) => {
      setFormState((prevState) => {
        return {
          ...prevState,
          files: [
            ...prevState.files,
            ...acceptedFiles.map((file) =>
              Object.assign(file, {
                preview: URL.createObjectURL(file),
                isUploading: true,
                uploadingProgress: 0,
              })
            ),
          ],
        };
      });

      setTimeout(() => {
        setFormState((prevState) => {
          const newState = clone(prevState);
          const files = newState.files;

          for (let i = 0; i < files.length; i++) {
            if (files[i].uploadingProgress === 0) {
              files[i].uploadingProgress = 100;
            }
          }

          newState.files = files;

          return newState;
        });
      }, 100);

      setTimeout(() => {
        setFormState((prevState) => {
          const newState = clone(prevState);
          const files = newState.files;

          for (let i = 0; i < files.length; i++) {
            if (files[i].uploadingProgress === 100) {
              files[i].isUploading = false;
            }
          }

          newState.files = files;

          return newState;
        });
      }, 500);
    },
  });

  const deleteFile = (idx) => {
    setFormState((prevState) => {
      const newState = clone(prevState);
      newState.files.splice(idx, 1);
      return newState;
    });
  };

  const fileInputHandler = (e) => {
    setFormState((prevState) => {
      const newState = clone(prevState);
      const files = e.target.files;

      for (let i = 0; i < files.length; i++) {
        files[i].isUploading = true;
        files[i].uploadingProgress = 0;
      }

      newState.files = [...newState.files, ...e.target.files];

      return newState;
    });

    setTimeout(() => {
      setFormState((prevState) => {
        const newState = clone(prevState);
        const files = newState.files;

        for (let i = 0; i < files.length; i++) {
          if (files[i].uploadingProgress === 0) {
            files[i].uploadingProgress = 100;
          }
        }

        newState.files = files;

        return newState;
      });
    }, 100);

    setTimeout(() => {
      setFormState((prevState) => {
        const newState = clone(prevState);
        const files = newState.files;

        for (let i = 0; i < files.length; i++) {
          if (files[i].uploadingProgress === 100) {
            files[i].isUploading = false;
          }
        }

        newState.files = files;

        return newState;
      });
    }, 500);
  };

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;

    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const chatMsgsList = useRef();

  useEffect(() => {
    const el = chatMsgsList?.current;

    const ev = (e) => {
      const element = e.target;

      // const scroll =
      //   element.scrollHeight - element.clientHeight + element.scrollTop;
      const scroll = element.scrollTop;

      if (scroll <= 15) {
        loadMoreChatListMsgs(chatMsgsList);
      }
    };

    el?.addEventListener("scroll", ev);

    return () => {
      el?.removeEventListener("scroll", ev);
    };
  }, [chatMsgsList]);

  useEffect(() => {
    const el = chatMsgsList?.current;

    el.scrollTo(0, el.scrollHeight);
  }, [chatMsgsList]);

  return (
    <div className="chat-main" {...getRootProps()}>
      {/* <div className="chat-main__inner"> */}
      <div className="chat-main__messages" ref={chatMsgsList}>
        <div className="d-flex justify-content-center">
          <Loader />
        </div>
        {chatData.map((el, idx) => {
          return (
            <Message
              key={"chat-msg-" + idx}
              selectedChatIdx={selectedChatIdx}
              el={el}
              idx={idx}
              chatData={chatData}
              setIsThreadActive={setIsThreadActive}
              onDeleteMsg={onDeleteMsg}
              setIsRightCollapsed={setIsRightCollapsed}
            />
          );
        })}
      </div>

      <MessageInput
        key={"main-message-input"}
        getInputProps={getInputProps}
        fileInputHandler={fileInputHandler}
        formState={formState}
        setFormState={setFormState}
        inputChangeHandler={inputChangeHandler}
        deleteFile={deleteFile}
      />
      {/* </div> */}
    </div>
  );
};

export default Main;
