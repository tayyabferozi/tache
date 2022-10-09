import React, { useRef, useState } from "react";
import clsx from "clsx";

import useOnClickOutside from "../../../hooks/useOnClickOutside";
import CommentReaction from "../../../components/CommentReaction";

const Comment = ({ avatar, name, subtext, role, text }) => {
  const optionsRef = useRef(null);

  const [selectedEmojis, setSelectedEmojis] = useState("");
  const [showOptionsDropdown, setShowOptionsDropdown] = useState(false);

  useOnClickOutside(optionsRef, () => setShowOptionsDropdown(false));

  const chooseEmojiHandler = (emoji) => {
    setSelectedEmojis((prevState) => {
      return { ...prevState, [emoji]: 1 };
    });
  };

  const removeEmojiHandler = (emoji) => {
    setSelectedEmojis((prevState) => {
      const newState = { ...prevState };
      delete newState[emoji];
      return newState;
    });
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
            <CommentReaction
              chooseEmojiHandler={chooseEmojiHandler}
              selectedEmojis={selectedEmojis}
            />
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

        {Object.keys(selectedEmojis).length > 0 && (
          <div className="comment-reactions">
            <CommentReaction
              optionsClassName="options-right"
              chooseEmojiHandler={chooseEmojiHandler}
              selectedEmojis={selectedEmojis}
            />
            {Object.keys(selectedEmojis).map((el, idx) => {
              return (
                <div
                  className="item"
                  key={"emoji" + idx}
                  onClick={() => {
                    removeEmojiHandler(el);
                  }}
                >
                  <span className="emoji">{el}</span> {selectedEmojis[el]}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Comment;
