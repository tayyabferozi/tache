import React, { useRef, useState } from "react";
import clsx from "clsx";

import useOnClickOutside from "../../../hooks/useOnClickOutside";
import CommentReaction from "../../../components/CommentReaction";

const Comment = ({
  avatar,
  name,
  subtext,
  role,
  text,
  othersSelectedEmojis = {}, // number of emojis dropped excluding the current users's emojis
  repliedName,
  repliedText,
}) => {
  const optionsRef = useRef(null);

  const [mySelectedEmojis, setMySelectedEmojis] = useState({
    "👍": 0,
    "👎": 0,
    "😄": 0,
    "🎉": 0,
    "😕": 0,
    "❤": 0,
    "🚀": 0,
    "👀": 0,
  });
  const [showOptionsDropdown, setShowOptionsDropdown] = useState(false);

  useOnClickOutside(optionsRef, () => setShowOptionsDropdown(false));

  const toggleEmojiChooseHandler = (emoji) => {
    setMySelectedEmojis((prevState) => {
      return { ...prevState, [emoji]: prevState[emoji] ? 0 : 1 };
    });
  };

  return (
    <div className="comment-item-main">
      <div className="avatar-ghost"></div>
      <div className="text">
        {repliedName && repliedText && (
          <div className="reply">
            <div className="comment-head">
              <div className="left">
                <div className="name">{repliedName}</div>
              </div>
            </div>
            <div className="comment-body">
              {repliedText.slice(0, 50)}
              {repliedText.length > 50 && "..."}
            </div>
          </div>
        )}
        <div className="comment-head">
          <div className="avatar">
            <img src={avatar} alt={name} />
          </div>
          <div className="left">
            <div className="name">{name}</div>
            <div className="time">{subtext}</div>
          </div>

          <div className="right">
            <div className="role">{role}</div>
            <CommentReaction
              chooseEmojiHandler={toggleEmojiChooseHandler}
              selectedEmojis={mySelectedEmojis}
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

        {(Object.keys(mySelectedEmojis).some(
          (el) => mySelectedEmojis[el] > 0
        ) ||
          Object.keys(othersSelectedEmojis).some(
            (el) => othersSelectedEmojis[el] > 0
          )) && (
          <div className="comment-reactions">
            <CommentReaction
              optionsClassName="options-right"
              chooseEmojiHandler={toggleEmojiChooseHandler}
              selectedEmojis={mySelectedEmojis}
            />
            {Object.keys(mySelectedEmojis).map((el, idx) => {
              if (!mySelectedEmojis[el] && !othersSelectedEmojis[el])
                return null;
              return (
                <div
                  className={clsx("item", mySelectedEmojis[el] > 0 && "active")}
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
    </div>
  );
};

export default Comment;
