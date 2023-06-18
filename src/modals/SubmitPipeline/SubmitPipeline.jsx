import React, { useState } from "react";

import Input from "../../components/Input";
import Modal from "../../components/Modal";
import BigJumbotron from "../../components/BigJumbotron";
import Button from "../../components/Button";

import "./SubmitPipeline.scss";

const shareLinks = [
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
];

const SubmitPipeline = ({ ...rest }) => {
  const [formState] = useState({
    ticketLink: "Tciket.tickettitlle.com/projects/",
  });

  const copyLinkHandler = () => {
    navigator.clipboard.writeText(formState.ticketLink);
  };

  return (
    <Modal noClose id="submit-pipeline-modal" {...rest}>
      <BigJumbotron
        icon="/assets/vectors/logo-white.svg"
        title="Submit Pipeline"
        subTitle="Invite your team to review collaborate on this project."
      />

      <div className="main-content">
        <div className="copier mt-20">
          <Input transparent value={formState.ticketLink} disabled />
          <button className="copy" onClick={copyLinkHandler}>
            <img src="/assets/vectors/icons/copy-2.svg" alt="copy" />
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

        <div className="btns">
          <Button bordered className="h-40" onClick={rest.closeModal}>
            Continue Editing
          </Button>
          <Button primary className="h-40" onClick={rest.onClickFinalize}>
            Finalise and View
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default SubmitPipeline;
