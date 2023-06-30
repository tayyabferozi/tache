import clsx from "clsx";

import "./ImgOpener.scss";

const ImgOpener = ({ imgState, setImgState }) => {
  const closeImg = () => {
    setImgState({ ...imgState, active: false });
  };

  return (
    <>
      <div
        className={clsx(imgState.active && "active", "full-img-overlay")}
        onClick={closeImg}
      />
      <div
        className={clsx(imgState.active && "active", "full-img-main")}
        onClick={closeImg}
      >
        <div className="full-img">
          <img
            className={clsx("close", imgState.active && "active")}
            src="/assets/vectors/icons/close-5.svg"
            alt="close"
          />
          <img className="full-img-content" src={imgState.src} alt="" />
        </div>
      </div>
    </>
  );
};

export default ImgOpener;
