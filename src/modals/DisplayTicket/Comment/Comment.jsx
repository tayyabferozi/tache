import React, { useEffect } from "react";

const emojis = ["👍", "👎", "😄", "🎉", "😕", "❤", "🚀", "👀"];

const Comment = ({ avatar, name, subtext, role, text }) => {
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
            <div className="reactions dropdown">
              <img
                src="/assets/vectors/icons/emoji-happy.svg"
                alt="emoji-happy"
              />

              <div className="options">
                {emojis.map((el, idx) => {
                  return (
                    <div className="option" key={"option" + text + idx}>
                      {el}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="more dropdown">
              <img src="/assets/vectors/icons/more.svg" alt="more" />

              <div className="options">
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
