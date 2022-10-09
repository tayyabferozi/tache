import React, { useRef, useState } from "react";
import clsx from "clsx";

import useOnClickOutside from "../../hooks/useOnClickOutside";

const emojis = ["👍", "👎", "😄", "🎉", "😕", "❤", "🚀", "👀"];

const CommentReaction = ({
  optionsClassName,
  selectedEmojis,
  chooseEmojiHandler,
}) => {
  const emojisRef = useRef(null);

  const [showEmojiDropdown, setShowEmojiDropdown] = useState(false);

  useOnClickOutside(emojisRef, () => setShowEmojiDropdown(false));

  return (
    <div
      className={clsx("reactions dropdown", {
        active: showEmojiDropdown,
      })}
    >
      <div className="emoji-box" onClick={() => setShowEmojiDropdown(true)}>
        <img src="/assets/vectors/icons/emoji-happy.svg" alt="emoji-happy" />
      </div>

      <div className={clsx("options", optionsClassName)} ref={emojisRef}>
        {emojis.map((el, idx) => {
          return (
            <div
              className={clsx("option", selectedEmojis[el] > 0 && "active")}
              key={"option" + idx}
              onClick={() => chooseEmojiHandler(el)}
            >
              {el}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CommentReaction;
