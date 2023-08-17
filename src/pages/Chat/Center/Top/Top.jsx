import Button from "../../../../components/Button/Button";
import "./Top.scss";

const Top = () => {
  return (
    <div className="top">
      <div className="top-main">
        <div className="left">
          <img src="/assets/imgs/avatar-9.png" alt="user" />
          <div>
            <div className="title text-light-1">Alexander</div>
            <div className="text-light-2 d-flex align-items-center gap-10 mt-1 active-status">
              <div className="active"></div>
              Active
            </div>
          </div>
        </div>
        <div className="right d-flex align-items-center gap-10">
          <Button
            bordered
            icon={{
              src: "/assets/vectors/icons/call.svg",
              title: "call",
              alt: "call",
            }}
          ></Button>
          <Button
            bordered
            icon={{
              src: "/assets/vectors/icons/video-call.svg",
              title: "video-call",
              alt: "video-call",
            }}
          ></Button>
          <Button
            bordered
            icon={{
              src: "/assets/vectors/icons/more-2.svg",
              title: "more",
              alt: "more",
            }}
          ></Button>
        </div>
      </div>
    </div>
  );
};

export default Top;
