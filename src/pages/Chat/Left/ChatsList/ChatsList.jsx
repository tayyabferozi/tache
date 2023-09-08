import clsx from "clsx";
import { useEffect, useRef } from "react";
import Loader from "../../../../components/Loader/Loader";

const ChatsList = ({
  items,
  selectedChatIdx,
  onChatSelect,
  loadMoreChatList,
}) => {
  const chatListRef = useRef();

  useEffect(() => {
    const el = chatListRef?.current;

    const ev = (e) => {
      const element = e.target;

      const scroll =
        element.scrollHeight - element.scrollTop - element.clientHeight;

      if (scroll <= 15) {
        loadMoreChatList();
      }
    };

    el?.addEventListener("scroll", ev);

    return () => {
      el?.removeEventListener("scroll", ev);
    };
  }, [chatListRef]);
  return (
    <div className="overflow-auto" ref={chatListRef}>
      <div>
        {items.map((el, idx) => {
          return (
            <div
              className={clsx(
                "chat-item mw-0",
                idx === selectedChatIdx && "clicked"
              )}
              key={"chat-list-item-" + idx}
              onClick={() => {
                onChatSelect(idx);
              }}
            >
              <div className="chat-item__left">
                <div className={clsx("img", el.active && "active")}>
                  <img src={el.img} alt={el.name} />
                </div>

                <div>
                  <div
                    className={clsx("text-light-1 mb-1", el.unread && "fw-800")}
                  >
                    {el.name}
                  </div>
                  <div
                    className={clsx(
                      "fs-14 restrict-one-line",
                      el.unread ? "fw-800" : "text-light-2"
                    )}
                  >
                    {el?.msg?.slice(0, 21)}
                    {el?.msg?.length > 21 ? "..." : ""}
                  </div>
                </div>
              </div>

              <div className="text-light-2 fs-13 flex-shrink-0">{el.time}</div>
            </div>
          );
        })}
      </div>

      <div className="d-flex justify-content-center">
        <Loader />
      </div>
    </div>
  );
};

export default ChatsList;
