import clsx from "clsx";

import Message from "../../Center/Main/Message/Message";
import "./Thread.scss";

const chatData = [
  {
    sender: "Alexander",
    userImg: "/assets/imgs/avatar-7.png",
    text: "Hallo!!",
    state: "",
    time: new Date(),
  },
  {
    sender: "Me",
    userImg: "/assets/imgs/avatar-5.png",
    text: "Hello",
    state: "seen",
    time: new Date(Date.now() - 24 * 60 * 60 * 1000),
  },
];

const Thread = ({ isThreadActive, setIsThreadActive }) => {
  return (
    <div className={clsx("thread", { "in-active": !isThreadActive })}>
      <div className="thread-heading">
        <div className="left">
          <img
            src="/assets/vectors/icons/message-thread.svg"
            alt="message-thread"
          />
          <div className="fs-18 fw-500 text-light-1">
            Thread <span className="fs-14 text-light-3 fw-400">Alexander</span>
          </div>
        </div>

        <img
          className="c-pointer"
          src="/assets/vectors/icons/close-circle.svg"
          alt="close-circle"
          onClick={() => setIsThreadActive(false)}
        />
      </div>

      <div className="thread-chat">
        {chatData.map((el, idx) => {
          return (
            <Message
              key={"chat-msg-" + idx}
              el={el}
              idx={idx}
              chatData={chatData}
              setIsThreadActive={setIsThreadActive}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Thread;
