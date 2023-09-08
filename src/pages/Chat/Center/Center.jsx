import Main from "./Main";
import Top from "./Top";

import Loader from "../../../components/Loader";
import "./Center.scss";

const Center = ({
  chatData,
  isChatLoading,
  setIsThreadActive,
  loadMoreChatListMsgs,
  onDeleteMsg,
  selectedChatIdx,
  setIsRightCollapsed,
}) => {
  return (
    <div className="messaging-layout__center">
      <Top />
      {isChatLoading ? (
        <div className="d-flex justify-content-center align-items-center flex-grow-1">
          <Loader />
        </div>
      ) : (
        <Main
          chatData={chatData}
          isChatLoading={isChatLoading}
          setIsThreadActive={setIsThreadActive}
          loadMoreChatListMsgs={loadMoreChatListMsgs}
          onDeleteMsg={onDeleteMsg}
          selectedChatIdx={selectedChatIdx}
          setIsRightCollapsed={setIsRightCollapsed}
        />
      )}
    </div>
  );
};

export default Center;
