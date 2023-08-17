import { useState } from "react";

import "./Chat.scss";
import Left from "./Left";
import Center from "./Center";
import Right from "./Right";

const Chat = () => {
  const [isLeftCollapsed, setIsLeftCollapsed] = useState(
    window.innerWidth <= 991 ? true : false
  );
  const [isRightCollapsed, setIsRightCollapsed] = useState(
    window.innerWidth <= 1280 ? true : false
  );
  const [isThreadActive, setIsThreadActive] = useState(false);
  const [isFilesSectionActive, setIsFilesSectionActive] = useState(true);

  return (
    <div id="messaging-layout">
      <Left
        isLeftCollapsed={isLeftCollapsed}
        setIsLeftCollapsed={setIsLeftCollapsed}
      />
      <Center setIsThreadActive={setIsThreadActive} />
      <Right
        isThreadActive={isThreadActive}
        setIsThreadActive={setIsThreadActive}
        isFilesSectionActive={isFilesSectionActive}
        setIsFilesSectionActive={setIsFilesSectionActive}
        isRightCollapsed={isRightCollapsed}
        setIsRightCollapsed={setIsRightCollapsed}
      />
    </div>
  );
};

export default Chat;
