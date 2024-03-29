import clsx from "clsx";
import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import useOnClickOutside from "../../../../../hooks/useOnClickOutside";
import friendlyTime from "../../../../../utils/friendly-time";
import GridContainer from "../../../../../components/GridContainer";
import Button from "../../../../../components/Button/Button";
import File from "../../../../../components/File";
import "./Message.scss";

let othersSelectedEmojis = {};
const emojis = ["👍", "❤", "😂", "😲", "😥", "🙏"];

const Message = ({
  thread,
  chatData,
  idx,
  el,
  setIsThreadActive,
  onDeleteMsg,
  selectedChatIdx,
  setIsRightCollapsed,
}) => {
  let showImg = true;
  if (idx > 0) {
    if (chatData[idx - 1].sender === el.sender) showImg = false;
  }

  const menuTogglerRef = useRef(null);
  const emojisRef = useRef(null);

  const [popupImg, setPopupImg] = useState("");
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [showEmojiDropdown, setShowEmojiDropdown] = useState(false);

  useOnClickOutside(emojisRef, () => setShowEmojiDropdown(false));
  useOnClickOutside(menuTogglerRef, () => setIsMenuActive(false));

  const [mySelectedEmojis, setMySelectedEmojis] = useState({
    "👍": 0,
    "❤": 0,
    "😂": 0,
    "😲": 0,
    "😥": 0,
    "🙏": 0,
  });

  const toggleEmojiChooseHandler = (emoji) => {
    setShowEmojiDropdown(false);
    setMySelectedEmojis((prevState) => {
      return { ...prevState, [emoji]: prevState[emoji] ? 0 : 1 };
    });
  };

  const resetImg = () => {
    setPopupImg("");
  };

  return (
    <>
      <div
        className={clsx("popup-img", popupImg && "active")}
        key="popup-img"
        onClick={resetImg}
      >
        <img
          className="c-pointer close"
          src="/assets/vectors/icons/close-2.svg"
          alt="close"
        />
        <img
          className="popup-img-main"
          src={popupImg}
          alt="popup"
          onClick={resetImg}
        />
      </div>

      <div className={clsx("chat-msg", showImg && "mt-20")}>
        <div className="img-container">
          {showImg && <img src={el.userImg} alt={el.sender} />}
        </div>
        <div className="flex-grow-1">
          {showImg && (
            <div>
              <div className="text-light-1 fs-18">
                {el.sender}

                <span className="ms-1 text-light-3 fs-12">
                  {friendlyTime(el.time, true)}
                </span>
              </div>
            </div>
          )}
          {el.reply && (
            <div className="msg-body-wrap">
              <div className="msg-body reply-body">
                {el.text && (
                  <div className="text text-light-1">{el.replyText}</div>
                )}
                {el.replyFile && (
                  <div className="d-flex align-items-center">
                    <img
                      src="/assets/vectors/icons/document-3.svg"
                      alt="document"
                    />
                    <div className="ms-2 ps-1">
                      <div className="fw-500 text-light-1">{el.replyFile}</div>
                      <div className="fw-500 mt-1">{el.replyFileSize} mb</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
          <div className="msg-body-wrap flex-grow-1">
            <div
              className={clsx(
                "msg-body",
                el.reply && "reply",
                !showImg && "rounded",
                el.files && "full"
              )}
            >
              {el.text && <div className="text text-light-1">{el.text}</div>}
              {el.images && (
                <GridContainer rowClassName="g-10">
                  {el.images.map((el2, idx2) => {
                    return (
                      <div
                        key={"chat-msg-" + idx + "-img-" + idx2}
                        className="col-sm-6"
                      >
                        <div className="p-relative">
                          <Button
                            className="download-btn justify-content-center"
                            grey
                            noText
                            icon={{
                              src: "/assets/vectors/icons/download.svg",
                              alt: "download",
                            }}
                          />
                          <img
                            className="w-100 msg-img c-pointer"
                            src={el2.src}
                            alt="img"
                            onClick={() => {
                              setPopupImg(el2.src);
                            }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </GridContainer>
              )}
              {el.videos && (
                <GridContainer rowClassName="g-10">
                  {el.videos.map((el2, idx2) => {
                    return (
                      <div
                        key={"chat-msg-" + idx + "-img-" + idx2}
                        className="p-relative"
                      >
                        <Button
                          className="download-btn justify-content-center"
                          grey
                          noText
                          icon={{
                            src: "/assets/vectors/icons/download.svg",
                            alt: "download",
                          }}
                        />
                        <video
                          className="w-100 msg-video"
                          src={el2.src}
                          controls
                        />
                      </div>
                    );
                  })}
                </GridContainer>
              )}
              {el.files && (
                <GridContainer rowClassName="g-10">
                  {el.files.map((el2, idx2) => {
                    return (
                      <div
                        key={"chat-msg-" + idx + "-file-" + idx2}
                        className="p-relative col-md-4"
                      >
                        <File
                          img={el2.img}
                          name={el2.name}
                          fileType={el2.fileType}
                        />
                      </div>
                    );
                  })}
                </GridContainer>
              )}
              {el.file && (
                <div className="d-flex align-items-center">
                  <img
                    src="/assets/vectors/icons/document-3.svg"
                    alt="document"
                  />
                  <div className="ms-2 ps-1">
                    <div className="fw-500 text-light-1">{el.file}</div>
                    <div className="fw-500 mt-1">{el.fileSize} mb</div>
                  </div>
                </div>
              )}
              {/* <img
                className="state"
                src={`/assets/vectors/icons/${
                  el.state === "seen"
                    ? "seen"
                    : el.state === "delivered"
                    ? "delivered"
                    : "sent"
                }.svg`}
                alt={el.state}
              /> */}

              <div className={clsx("p-relative menu")} ref={menuTogglerRef}>
                <img
                  className="c-pointer"
                  src="/assets/vectors/icons/chevron-down.svg"
                  alt="arrow"
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
                      {!thread && (
                        <div
                          className="menu-item"
                          onClick={() => {
                            setIsThreadActive(true);
                            setIsMenuActive(false);
                            setIsRightCollapsed(false);
                          }}
                        >
                          <img
                            src="/assets/vectors/icons/redo.svg"
                            alt="redo"
                          />
                          <div className="fs-13 text-light-3">
                            Reply in thread
                          </div>
                        </div>
                      )}
                      <div
                        className="menu-item"
                        onClick={() => {
                          setIsMenuActive(false);
                          onDeleteMsg(selectedChatIdx, idx);
                        }}
                      >
                        <img
                          src="/assets/vectors/icons/trash-2.svg"
                          alt="trash"
                        />
                        <div className="fs-13 text-light-3">Delete</div>
                      </div>
                      {(el.images || el.videos || el.files) && (
                        <div
                          className="menu-item"
                          onClick={() => {
                            setIsMenuActive(false);
                          }}
                        >
                          <img
                            src="/assets/vectors/icons/download-2.svg"
                            alt="trash"
                          />
                          <div className="fs-13 text-light-3">Download All</div>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <img
                className="state"
                src={`/assets/vectors/icons/${
                  el.state === "seen"
                    ? "seen"
                    : el.state === "delivered"
                    ? "delivered"
                    : "sent"
                }.svg`}
                alt={el.state}
              />
              <div
                className={clsx("reactions dropdown ghost", {
                  active: showEmojiDropdown,
                })}
              >
                <div
                  className="emoji-box"
                  onClick={() => setShowEmojiDropdown(!showEmojiDropdown)}
                >
                  <img src="/assets/vectors/icons/ghost.svg" alt="ghost" />
                </div>
              </div>
              <div
                className={clsx("dropdown-reactions-options", {
                  active: showEmojiDropdown,
                })}
                ref={emojisRef}
              >
                {emojis.map((el, idx) => {
                  return (
                    <div
                      className={clsx(
                        "option",
                        mySelectedEmojis[el] > 0 && "active"
                      )}
                      key={"option" + idx}
                      onClick={() => toggleEmojiChooseHandler(el)}
                    >
                      {el}
                    </div>
                  );
                })}
              </div>
            </div>

            {(Object.keys(mySelectedEmojis).some(
              (el) => mySelectedEmojis[el] > 0
            ) ||
              Object.keys(othersSelectedEmojis).some(
                (el) => othersSelectedEmojis[el] > 0
              )) && (
              <div className="comment-reactions pb-0 pt-10">
                {Object.keys(mySelectedEmojis).map((el, idx) => {
                  if (!mySelectedEmojis[el] && !othersSelectedEmojis[el])
                    return null;
                  return (
                    <div
                      className={clsx(
                        "item",
                        mySelectedEmojis[el] > 0 && "active"
                      )}
                      key={"emoji" + idx}
                      onClick={() => {
                        toggleEmojiChooseHandler(el);
                      }}
                    >
                      <span className="emoji">{el}</span>{" "}
                      {mySelectedEmojis[el] + (othersSelectedEmojis[el] || 0)}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          {el.threadsInfo && (
            <div
              className="py-2 d-flex gap-2 align-items-center c-pointer thread-replies"
              onClick={() => {
                setIsThreadActive(true);
                setIsMenuActive(false);
                setIsRightCollapsed(false);
              }}
            >
              <img className="w-32" src={el.threadsInfo.userImg} alt="user" />
              <div className="fs-13">
                {el.threadsInfo.replies}{" "}
                {el.threadsInfo.reples !== 1 ? "replies" : "reply"}
              </div>
              <div className="time fs-13">
                {friendlyTime(el.threadsInfo.time)}
              </div>
              <div className="reply-thread fs-13">View thread</div>
            </div>
          )}
        </div>
        <div className="dummy"></div>
      </div>
    </>
  );
};

export default Message;
