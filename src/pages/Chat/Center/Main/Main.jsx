import Message from "./Message";
import "./Main.scss";

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
  {
    sender: "Me",
    userImg: "/assets/imgs/avatar-5.png",
    file: "File name.zip",
    fileSize: 4.5,
    state: "delivered",
    time: new Date(Date.now() - 24 * 60 * 60 * 1000),
  },
  {
    sender: "Me",
    userImg: "/assets/imgs/avatar-5.png",
    text: "Let’s check the flie",
    state: "sent",
    time: new Date(Date.now() - 24 * 60 * 60 * 1000),
  },
  {
    sender: "Alexander",
    userImg: "/assets/imgs/avatar-7.png",
    reply: true,
    replyText: "Let’s check the file",
    text: "Let’s check the video first",
    state: "",
    time: new Date(Date.now() - 24 * 60 * 60 * 1000),
  },
  {
    sender: "Alexander",
    userImg: "/assets/imgs/avatar-7.png",
    images: [
      {
        src: "/assets/imgs/chat-img.png",
      },
      {
        src: "/assets/imgs/chat-img.png",
      },
      {
        src: "/assets/imgs/chat-img.png",
      },
    ],
    state: "",
    time: new Date(Date.now() - 24 * 60 * 60 * 1000),
  },
  {
    sender: "Alexander",
    userImg: "/assets/imgs/avatar-7.png",
    videos: [
      {
        src: "/assets/videos/sample.mp4",
      },
      {
        src: "/assets/videos/sample.mp4",
      },
      {
        src: "/assets/videos/sample.mp4",
      },
    ],
    state: "",
    time: new Date(Date.now() - 24 * 60 * 60 * 1000),
  },
  {
    sender: "Alexander",
    userImg: "/assets/imgs/avatar-7.png",
    files: [
      {
        name: "Package.zip",
        fileType: "ZIP",
      },
      {
        img: "/assets/imgs/chat-img.png",
        name: "andy-waloadllkads.jpg",
        fileType: "JPG",
      },
      {
        img: "/assets/imgs/chat-img.png",
        name: "Avatar.jpg",
        fileType: "JPG",
      },
    ],
    state: "",
    time: new Date(Date.now() - 24 * 60 * 60 * 1000),
  },
];

const Main = ({ setIsThreadActive }) => {
  return (
    <div className="chat-main">
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
  );
};

export default Main;
