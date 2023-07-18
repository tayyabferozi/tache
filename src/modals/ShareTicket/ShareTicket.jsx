import React, { useState } from "react";

import Input from "../../components/Input";
import Modal from "../../components/Modal";
import "./ShareTicket.scss";

const shareLinks = [
  // {
  //   name: "Whatsapp",
  //   link: "https://www.google.com/",
  //   icon: "/assets/vectors/logo-whatsapp.svg",
  // },
  // {
  //   name: "Viber",
  //   link: "https://www.google.com/",
  //   icon: "/assets/vectors/logo-viber.svg",
  // },
  // {
  //   name: "Slack",
  //   link: "https://www.google.com/",
  //   icon: "/assets/vectors/logo-slack.svg",
  // },
  {
    name: "Messenger",
    link: "https://www.google.com/",
    icon: "/assets/vectors/logo-messenger.svg",
  },
  {
    name: "Linkedin",
    link: "https://www.google.com/",
    icon: "/assets/vectors/icons/logo-linkedin.svg",
  },
  {
    name: "Twitter",
    link: "https://www.google.com/",
    icon: "/assets/vectors/icons/logo-twitter.svg",
  },
  {
    name: "Instagram",
    link: "https://www.google.com/",
    icon: "/assets/vectors/icons/logo-insta.svg",
  },
  // {
  //   name: "Line",
  //   link: "https://www.google.com/",
  //   icon: "/assets/vectors/logo-line.svg",
  // },
  // {
  //   name: "WeChat",
  //   link: "https://www.google.com/",
  //   icon: "/assets/vectors/logo-wechat.svg",
  // },
  // {
  //   name: "Kakao_talk",
  //   link: "https://www.google.com/",
  //   icon: "/assets/vectors/logo-talk.svg",
  // },
  // {
  //   name: "Skype",
  //   link: "https://www.google.com/",
  //   icon: "/assets/vectors/logo-skype.svg",
  // },
];

const ShareTicket = ({ title, ...rest }) => {
  const [formState] = useState({
    ticketLink: "Tciket.tickettitlle.com/projects/",
  });

  const copyLinkHandler = () => {
    navigator.clipboard.writeText(formState.ticketLink);
  };

  return (
    <Modal id="share-ticket-modal" {...rest}>
      <h2 className="mb-1">{title || "Share Ticket"}</h2>

      <p>
        You've created a new project! Invite your team to review collaborate on
        this project.
      </p>

      <div className="text-focus mt-4">Ticket link</div>
      <div className="copier mt-2">
        <Input transparent value={formState.ticketLink} disabled />
        <button className="copy" onClick={copyLinkHandler}>
          <img src="/assets/vectors/icons/copy.svg" alt="copy" />
          Copy
        </button>
      </div>

      <div className="social">
        {shareLinks.map((el, idx) => {
          return (
            <button className="social-item" key={"social-item" + idx}>
              <div className="icon">
                <img src={el.icon} alt={el.name} />
              </div>
              <div className="fs-14 mt-10">{el.name}</div>
            </button>
          );
        })}
      </div>
    </Modal>
  );
};

export default ShareTicket;
