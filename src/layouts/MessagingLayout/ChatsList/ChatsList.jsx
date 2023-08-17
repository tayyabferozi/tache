import clsx from "clsx";

const items = [
  {
    img: "/assets/imgs/avatar-5.png",
    name: "Alexander",
    msg: "Nisi condimentum non.",
    time: "07:19 PM",
    active: true,
  },
  {
    img: "/assets/imgs/avatar-6.png",
    name: "Paquito",
    msg: "Nisi condimentum non.",
    time: "07:19 PM",
    clicked: true,
  },
  {
    img: "/assets/imgs/avatar-7.png",
    name: "Lesley",
    msg: "Nisi condimentum non.",
    time: "07:19 PM",
    active: true,
  },
  {
    img: "/assets/imgs/avatar-8.png",
    name: "Alucard",
    msg: "Nisi condimentum non.",
    time: "07:19 PM",
  },
  {
    img: "/assets/imgs/avatar-9.png",
    name: "Melissa",
    msg: "Nisi condimentum non.",
    time: "07:19 PM",
    active: true,
  },
  {
    img: "/assets/imgs/avatar-4.png",
    name: "Ruby",
    msg: "Nisi condimentum non.",
    time: "07:19 PM",
  },
];

const ChatsList = () => {
  return (
    <div>
      {items.map((el, idx) => {
        return (
          <div
            className={clsx("chat-item", el.clicked && "clicked")}
            key={"chat-list-item-" + idx}
          >
            <div className="chat-item__left">
              <div className={clsx("img", el.active && "active")}>
                <img src={el.img} alt={el.name} />
              </div>

              <div>
                <div className="text-light-1 mb-1">{el.name}</div>
                <div className="fs-14 text-light-2">{el.msg}</div>
              </div>
            </div>

            <div className="text-light-2 fs-13">{el.time}</div>
          </div>
        );
      })}
    </div>
  );
};

export default ChatsList;
