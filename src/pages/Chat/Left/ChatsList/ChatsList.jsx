import clsx from "clsx";

const ChatsList = ({ items }) => {
  return (
    <div>
      {items.map((el, idx) => {
        return (
          <div
            className={clsx("chat-item mw-0", el.clicked && "clicked")}
            key={"chat-list-item-" + idx}
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
  );
};

export default ChatsList;
