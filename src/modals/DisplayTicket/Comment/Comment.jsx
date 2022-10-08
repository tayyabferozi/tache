import React, { useRef, useState } from "react";
import clsx from "clsx";
import useOnClickOutside from "../../../hooks/useOnClickOutside";

const emojis = ["👍", "👎", "😄", "🎉", "😕", "❤", "🚀", "👀"];

const Comment = ({ avatar, name, subtext, role, text }) => {
  const emojisRef = useRef(null);
  const optionsRef = useRef(null);
  const [selectedEmoji, setSelectedEmoji] = useState("");

  const [showEmojiDropdown, setShowEmojiDropdown] = useState(true);
  const [showOptionsDropdown, setShowOptionsDropdown] = useState(false);

  useOnClickOutside(emojisRef, () => setShowEmojiDropdown(false));
  useOnClickOutside(optionsRef, () => setShowOptionsDropdown(false));

  const chooseEmojiHandler = (emoji) => {
    if (emoji === selectedEmoji) {
      setSelectedEmoji("");
      return;
    }

    setSelectedEmoji(emoji);
  };

  return (
    <div className="comment-item-main">
      <div className="avatar">
        <img src={avatar} alt={name} />
      </div>

      <div className="text">
        <div className="comment-head">
          <div className="left">
            <div className="name">{name}</div>
            <div className="time">{subtext}</div>
          </div>

          <div className="right">
            <div className="role">{role}</div>
            <div
              className={clsx("reactions dropdown", {
                active: showEmojiDropdown,
              })}
            >
              {/* <img
                src="/assets/vectors/icons/emoji-happy.svg"
                alt="emoji-happy"
                onClick={() => setShowEmojiDropdown(true)}
              /> */}
              <div
                className="emoji-box"
                onClick={() => setShowEmojiDropdown(true)}
              >
                {selectedEmoji ? (
                  selectedEmoji
                ) : (
                  <img
                    src="/assets/vectors/icons/emoji-happy.svg"
                    alt="emoji-happy"
                  />
                )}
              </div>

              <div className="options" ref={emojisRef}>
                {emojis.map((el, idx) => {
                  return (
                    <div
                      className={clsx(
                        "option",
                        el === selectedEmoji && "active"
                      )}
                      key={"option" + text + idx}
                      onClick={() => chooseEmojiHandler(el)}
                    >
                      {el}
                    </div>
                  );
                })}
              </div>
            </div>
            <div
              className={clsx("more dropdown", { active: showOptionsDropdown })}
            >
              <img
                src="/assets/vectors/icons/more.svg"
                alt="more"
                onClick={() => setShowOptionsDropdown(true)}
              />

              <div className="options" ref={optionsRef}>
                <div className="option">Edit</div>
                <div className="option">Quote reply</div>
                <div className="option">Delete</div>
              </div>
            </div>
          </div>
        </div>

        <div className="comment-body">{text}</div>
      </div>
    </div>
  );
};

export default Comment;
