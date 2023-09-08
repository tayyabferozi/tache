import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import clone from "just-clone";
import { useDropzone } from "react-dropzone";

import Message from "../../Center/Main/Message/Message";
import MessageInput from "../../../../components/MessageInput/MessageInput";
import Loader from "../../../../components/Loader/Loader";
import "./Thread.scss";

const chatItemsData = [
  {
    sender: "Alexander",
    userImg: "/assets/imgs/avatar-7.png",
    text: "Hallo!!",
    state: "",
    time: new Date(),
  },
  {
    sender: "Alexander",
    userImg: "/assets/imgs/avatar-7.png",
    text: "Hallo!!",
    state: "",
    time: new Date(),
  },
  {
    sender: "Me",
    userImg: "/assets/imgs/avatar-5.png",
    text: "Hello",
    state: "seen",
    time: new Date(Date.now() - 24 * 60 * 60 * 1000),
  },
  {
    sender: "Alexander",
    userImg: "/assets/imgs/avatar-7.png",
    text: "Hallo!!",
    state: "",
    time: new Date(),
  },
  {
    sender: "Alexander",
    userImg: "/assets/imgs/avatar-7.png",
    text: "Hallo!!",
    state: "",
    time: new Date(),
  },
  {
    sender: "Me",
    userImg: "/assets/imgs/avatar-5.png",
    text: "Hello",
    state: "seen",
    time: new Date(Date.now() - 24 * 60 * 60 * 1000),
  },
];

const Thread = ({ isThreadActive, setIsThreadActive }) => {
  const [formState, setFormState] = useState({ comment: "", files: [] });
  const chatMsgsList = useRef();
  const [chatData, setChatData] = useState(chatItemsData);

  const { getRootProps, getInputProps } = useDropzone({
    accept: {},
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

  const loadMoreChatList = () => {
    const element = chatMsgsList?.current;
    setTimeout(() => {
      element.scrollTo(0, element.scrollTop + 90);
      setChatData((prevState) => {
        const newState = clone(prevState);

        return newState.concat(chatItemsData.slice(0, 5));
      });
    }, 3000);
  };

  const deleteMsg = (idx, idx2) => {
    setChatData((prevState) => {
      const newState = clone(prevState);
      newState.splice(idx2, 1);
      console.log(newState);
      return newState;
    });
  };

  useEffect(() => {
    const element = chatMsgsList?.current;

    const scroll =
      element.scrollHeight - element.clientHeight + element.scrollTop;

    if (scroll <= 70) {
      loadMoreChatList();
    }
  }, [chatData]);

  useEffect(() => {
    const el = chatMsgsList?.current;

    const ev = (e) => {
      const element = e.target;

      const scroll =
        element.scrollHeight - element.clientHeight + element.scrollTop;

      if (scroll <= 15) {
        loadMoreChatList();
      }
    };

    el?.addEventListener("scroll", ev);

    return () => {
      el?.removeEventListener("scroll", ev);
    };
  }, [chatMsgsList]);

  return (
    <div
      className={clsx("thread", { "in-active": !isThreadActive })}
      {...getRootProps()}
    >
      <div className="thread-heading">
        <div className="left">
          <img
            src="/assets/vectors/icons/message-thread.svg"
            alt="message-thread"
          />
          <div className="fs-18 fw-500 text-light-1">
            Thread <span className="fs-14 text-light-3 fw-400">Alexander</span>
          </div>
        </div>

        <img
          className="c-pointer"
          src="/assets/vectors/icons/close-circle.svg"
          alt="close-circle"
          onClick={() => setIsThreadActive(false)}
        />
      </div>

      <div className="thread-chat" ref={chatMsgsList}>
        <div className="thread-chat__inner">
          <div className="msgs">
            <div className="d-flex justify-content-center">
              <Loader />
            </div>
            {chatData.map((el, idx) => {
              return (
                <Message
                  key={"chat-msg-" + idx}
                  thread
                  onDeleteMsg={deleteMsg}
                  el={el}
                  idx={idx}
                  chatData={chatData}
                  setIsThreadActive={setIsThreadActive}
                />
              );
            })}
          </div>

          <MessageInput
            uniqueKey={"thread-input"}
            getInputProps={getInputProps}
            formState={formState}
            setFormState={setFormState}
            inputChangeHandler={inputChangeHandler}
            fileInputHandler={fileInputHandler}
            deleteFile={deleteFile}
          />
        </div>
      </div>
    </div>
  );
};

export default Thread;
