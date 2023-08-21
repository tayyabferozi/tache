import clsx from "clsx";
import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import EmojiPicker from "emoji-picker-react";
import clone from "just-clone";
import { useDropzone } from "react-dropzone";

import Message from "./Message";
import CustomMDEditor from "../../../../components/CustomMDEditor";
import Button from "../../../../components/Button/Button";
import useOnClickOutside from "../../../../hooks/useOnClickOutside";
import isEmpty from "../../../../utils/is-empty";
import File from "../../../../components/File";
import "./Main.scss";

const chatData = [
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
    sender: "Me",
    userImg: "/assets/imgs/avatar-5.png",
    file: "File name.zip",
    fileSize: 4.5,
    state: "delivered",
    time: new Date(Date.now() - 24 * 60 * 60 * 1000),
  },
  {
    sender: "Me",
    userImg: "/assets/imgs/avatar-5.png",
    text: "Let’s check the flie",
    state: "sent",
    time: new Date(Date.now() - 24 * 60 * 60 * 1000),
  },
  {
    sender: "Alexander",
    userImg: "/assets/imgs/avatar-7.png",
    reply: true,
    replyText: "Let’s check the file",
    text: "Let’s check the video first",
    state: "",
    time: new Date(Date.now() - 24 * 60 * 60 * 1000),
  },
  {
    sender: "Alexander",
    userImg: "/assets/imgs/avatar-7.png",
    images: [
      {
        src: "/assets/imgs/chat-img.png",
      },
      {
        src: "/assets/imgs/chat-img.png",
      },
      {
        src: "/assets/imgs/chat-img.png",
      },
    ],
    state: "",
    time: new Date(Date.now() - 24 * 60 * 60 * 1000),
  },
  {
    sender: "Alexander",
    userImg: "/assets/imgs/avatar-7.png",
    videos: [
      {
        src: "/assets/videos/sample.mp4",
      },
      {
        src: "/assets/videos/sample.mp4",
      },
      {
        src: "/assets/videos/sample.mp4",
      },
    ],
    state: "",
    time: new Date(Date.now() - 24 * 60 * 60 * 1000),
  },
  {
    sender: "Alexander",
    userImg: "/assets/imgs/avatar-7.png",
    files: [
      {
        name: "Package.zip",
        fileType: "ZIP",
      },
      {
        img: "/assets/imgs/chat-img.png",
        name: "andy-waloadllkads.jpg",
        fileType: "JPG",
      },
      {
        img: "/assets/imgs/chat-img.png",
        name: "Avatar.jpg",
        fileType: "JPG",
      },
    ],
    state: "",
    time: new Date(Date.now() - 24 * 60 * 60 * 1000),
  },
];

const menuItems = [
  {
    icon: "/assets/vectors/icons/notification-2.svg",
    label: "Create a canvas",
  },
  {
    icon: "/assets/vectors/icons/document-text.svg",
    label: "Create a post",
  },
  {
    icon: "/assets/vectors/icons/text-block.svg",
    label: "Create a text snippet",
  },
  {
    icon: "/assets/vectors/icons/document-normal.svg",
    label: "Canvas",
  },
  {
    icon: "/assets/vectors/icons/recent-files.svg",
    label: "Recent files",
  },
  {
    icon: "/assets/vectors/icons/upload-from-computer.svg",
    label: "Upload from computer",
  },
];

const Main = ({ setIsThreadActive }) => {
  const [formState, setFormState] = useState({ comment: "", files: [] });
  const [isEmojiPickerActive, setIsEmojiPickerActive] = useState(false);
  const [isMenuActive, setIsMenuActive] = useState(false);

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
              })
            ),
          ],
        };
      });
    },
  });

  const emojiPickerRef = useRef();
  const menuRef = useRef();

  useOnClickOutside(emojiPickerRef, () => setIsEmojiPickerActive(false));
  useOnClickOutside(menuRef, () => setIsMenuActive(false));

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

      newState.files = [...newState.files, ...e.target.files];

      return newState;
    });
  };

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;

    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  console.log(formState);

  return (
    <div className="chat-main" {...getRootProps()}>
      {chatData.map((el, idx) => {
        return (
          <Message
            key={"chat-msg-" + idx}
            el={el}
            idx={idx}
            chatData={chatData}
            setIsThreadActive={setIsThreadActive}
          />
        );
      })}
      <div className="pt-20 pb-20 message-container">
        {!isEmpty(formState.files) && (
          <div className="msg-files">
            {formState.files.map((el, idx) => {
              let size = "";
              const sizeKB = Math.floor(el?.size / 1024);
              const sizeMB = Math.floor(el?.size / (1024 * 1024));
              const sizeGB = Math.floor(el?.size / (1024 * 1024 * 1024));

              if (sizeKB > 0 && sizeKB < 1024) {
                size = sizeKB + " KB";
              }

              if (sizeMB > 0 && sizeMB < 1024) {
                size = sizeMB + " MB";
              }

              if (sizeGB > 0 && sizeGB < 1024) {
                size = sizeGB + " GB";
              }

              let img;
              let vid;

              if (el.type.includes("image/")) {
                img = URL.createObjectURL(el);
              }

              if (el.type.includes("video/")) {
                vid = URL.createObjectURL(el);
              }

              return (
                <File
                  key={"message-file-" + idx}
                  onCross={() => deleteFile(idx)}
                  noDownload
                  img={img}
                  vid={vid}
                  name={el.name}
                  fileType={size}
                />
              );
            })}
          </div>
        )}

        <CustomMDEditor
          noFoot
          cornered={!isEmpty(formState.files)}
          value={formState.comment}
          inputChangeHandler={inputChangeHandler}
        />

        <div className="d-flex justify-content-between align-items-center actions-wrap">
          <div className="d-flex justify-content-between align-items-center gap-3">
            <input {...getInputProps()} />
            <input
              id="video"
              type="file"
              accept="video/*"
              onChange={fileInputHandler}
              multiple
            />
            <input
              id="audio"
              type="file"
              accept="audio/*"
              onChange={fileInputHandler}
              multiple
            />
            <input
              id="gallery"
              type="file"
              accept="image/*"
              onChange={fileInputHandler}
              multiple
            />
            <input
              id="files"
              type="file"
              onChange={fileInputHandler}
              multiple
            />
            <label htmlFor="video">
              <img
                className="d-block"
                src="/assets/vectors/video.svg"
                alt="video"
              />
            </label>
            <label htmlFor="audio">
              <img
                className="d-block"
                src="/assets/vectors/microphone.svg"
                alt="microphone"
              />
            </label>
            <label htmlFor="gallery">
              <img
                className="d-block"
                src="/assets/vectors/gallery.svg"
                alt="gallery"
              />
            </label>
            <label htmlFor="files">
              <img
                className="d-block"
                src="/assets/vectors/paperclip.svg"
                alt="paperclip"
              />
            </label>
            <div className="p-relative" ref={emojiPickerRef}>
              <img
                className="d-block"
                src="/assets/vectors/emoji-happy.svg"
                alt="emoji-happy"
                onClick={() => setIsEmojiPickerActive(!isEmojiPickerActive)}
              />
              <AnimatePresence>
                {isEmojiPickerActive && (
                  <motion.div
                    className="emoji-picker"
                    key="emoji-picker"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <EmojiPicker
                      onEmojiClick={(emoji) => {
                        setFormState((prevState) => {
                          return {
                            ...prevState,
                            comment: prevState.comment + emoji.emoji,
                          };
                        });
                      }}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
          <div className="d-flex align-items-center gap-3">
            <div className="p-relative" ref={menuRef}>
              <img
                src="/assets/vectors/icons/add-circle.svg"
                alt="add"
                onClick={() => setIsMenuActive(!isMenuActive)}
              />
              <AnimatePresence>
                {isMenuActive && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    className={clsx("menu-items", isMenuActive && "active")}
                  >
                    {menuItems.map((el, idx) => {
                      return (
                        <div key={"chat-menu-item" + idx} className="menu-item">
                          <img src={el.icon} alt={el.label} />
                          <div className="fs-13 text-light-3">{el.label}</div>
                        </div>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <Button
              className="w-36 h-36 p-0 d-flex justify-content-center align-items-center rounded-6"
              primary
              noText
              icon={{
                src: "/assets/vectors/send-msg.svg",
                alt: "send-msg",
                title: "send msg",
              }}
            ></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
