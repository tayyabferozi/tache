import { useEffect, useState } from "react";
import clsx from "clsx";

import Thread from "./Thread";
import Files from "./Files";
import Badge from "../../../components/Badge";
import Button from "../../../components/Button";
import File from "../../../components/File";
import Loader from "../../../components/Loader/Loader";
import ConfirmationModal from "../../../modals/Confirmation";
import ReportUserModal from "../../../modals/ReportUser";
import useModal from "../../../hooks/useModal";

import "./Right.scss";
import { useRef } from "react";

const files = [
  {
    img: "/assets/vectors/icons/document-4.svg",
    name: "Unique.vid",
    sharedBy: "Alexander",
    sharedByTime: "today",
  },
  {
    img: "/assets/vectors/icons/document-4.svg",
    name: "Another Unique.vid",
    sharedBy: "Alexander",
    sharedByTime: "today",
  },
  {
    img: "/assets/vectors/icons/document-4.svg",
    name: "File name.vid",
    sharedBy: "Alexander",
    sharedByTime: "today",
  },
  {
    img: "/assets/vectors/icons/document-4.svg",
    name: "File name.vid",
    sharedBy: "Alexander",
    sharedByTime: "today",
  },
  {
    img: "/assets/imgs/file-vid-preview.png",
    name: "File name.vid",
    sharedBy: "Alexander",
    sharedByTime: "today",
  },
  {
    img: "/assets/imgs/file-vid-preview.png",
    name: "File name.vid",
    sharedBy: "Alexander",
    sharedByTime: "today",
  },
  {
    img: "/assets/imgs/file-vid-preview.png",
    name: "File name.vid",
    sharedBy: "Alexander",
    sharedByTime: "today",
  },
  {
    img: "/assets/imgs/file-vid-preview.png",
    name: "File name.vid",
    sharedBy: "Alexander",
    sharedByTime: "today",
  },
];

const Right = ({
  isRightCollapsed,
  isLeftCollapsed,
  setIsRightCollapsed,
  isThreadActive,
  setIsThreadActive,
  isFilesSectionActive,
  setIsFilesSectionActive,
}) => {
  const [searchVal, setSearchVal] = useState("");
  const [filteredFiles, setFilteredFiles] = useState(files);
  const [search2Val, setSearch2Val] = useState("");
  const [isMoreFilesLoading, setIsMoreFilesLoading] = useState(false);
  const {
    show: showBlockConfirmationModal,
    toggleShow: toggleShowBlockConfirmationModal,
  } = useModal(false);
  const { show: showReportModal, toggleShow: toggleShowReportModal } =
    useModal(false);

  const resizeRef = useRef();
  const resizeLeftRef = useRef();

  const conversationInputChangeHandler = (e) => {
    setSearchVal(e.target.value);
  };

  const filesInputChangeHandler = (e) => {
    setSearch2Val(e.target.value);
  };

  const viewMoreFilesHandler = () => {
    setIsMoreFilesLoading(true);
    setTimeout(() => {
      setIsMoreFilesLoading(false);
      setFilteredFiles((prev) => [...prev, ...files.slice(0, 3)]);
    }, 3000);
  };

  useEffect(() => {
    const filtered = files.filter((el) =>
      el.name.toLowerCase().includes(search2Val.toLowerCase())
    );
    setFilteredFiles(filtered);
  }, [search2Val]);

  useEffect(() => {
    const resizeableEle = resizeRef.current;
    const styles = window.getComputedStyle(resizeableEle);
    let width = parseInt(styles.width, 10);
    let x = 0;

    // Left resize
    const onMouseMoveLeftResize = (event) => {
      const dx = event.clientX - x;
      x = event.clientX;
      width = width - dx;
      resizeableEle.style.width = `${width}px`;
    };

    const onMouseUpLeftResize = (event) => {
      document.removeEventListener("mousemove", onMouseMoveLeftResize);
    };

    const onMouseDownLeftResize = (event) => {
      x = event.clientX;
      resizeableEle.style.right = styles.right;
      resizeableEle.style.left = null;
      document.addEventListener("mousemove", onMouseMoveLeftResize);
      document.addEventListener("mouseup", onMouseUpLeftResize);
    };

    const resizerLeft = resizeLeftRef.current;
    resizerLeft.addEventListener("mousedown", onMouseDownLeftResize);

    return () => {
      resizerLeft.removeEventListener("mousedown", onMouseDownLeftResize);
    };
  }, []);

  return (
    <>
      <ConfirmationModal
        title="Are you sure you want to block Alexander?"
        body="This action cannot be undone"
        onClickDelete={showBlockConfirmationModal}
        show={showBlockConfirmationModal}
        dangerBtnTxt="Block"
        closeModal={() => toggleShowBlockConfirmationModal("close")}
      />
      <ReportUserModal
        show={showReportModal}
        onClickReport={() => toggleShowBlockConfirmationModal("close")}
        closeModal={toggleShowReportModal}
      />
      <div
        className={clsx(
          "messaging-layout__right resizeable",
          isRightCollapsed && "collapsed"
        )}
        ref={resizeRef}
      >
        <div ref={resizeLeftRef} className="resizer resizer-l"></div>
        {/* <div className="messaging-layout__right"> */}
        {(window.innerWidth <= 575
          ? isLeftCollapsed && isRightCollapsed
          : isRightCollapsed) && (
          <div
            className="chevron-container c-pointer"
            onClick={() => setIsRightCollapsed(!isRightCollapsed)}
          >
            <img
              className={clsx("chevron-left moved")}
              src="/assets/vectors/icons/chevron-circle-left.svg"
              alt="chevron"
            />
          </div>
        )}
        <div className={clsx("right-inner")}>
          <div
            className={clsx(
              "right-inner-main",
              isRightCollapsed && "collapsed",
              (isThreadActive || isFilesSectionActive) &&
                "h-screen overflow-hidden"
            )}
          >
            <img
              className="arrow"
              src="/assets/vectors/icons/arrow-circle-right-2.svg"
              alt="chevron"
              onClick={() => setIsRightCollapsed(!isRightCollapsed)}
            />

            <Thread
              isThreadActive={isThreadActive}
              setIsThreadActive={setIsThreadActive}
            />
            <Files
              isFilesSectionActive={isFilesSectionActive}
              setIsFilesSectionActive={setIsFilesSectionActive}
            />
            <div className="right-top">
              <div className="search">
                <img src="/assets/vectors/icons/search.svg" alt="magnifier" />
                <input
                  type="text"
                  placeholder="Search in conversation"
                  value={searchVal}
                  onChange={conversationInputChangeHandler}
                />
              </div>
              <div className="text-light-2 d-flex align-items-center gap-10">
                <div className="circle"></div>
                Active
              </div>
            </div>

            <div className="profile-info">
              <img
                className="avatar d-block mx-auto"
                src="/assets/imgs/avatar-9.png"
                alt="avatar"
              />
              <div className="text-center text">
                <div className="mt-30 mb-3 fs-22 text-light-1">Alexander</div>
                <div className="fs-14">
                  Lorem ipsum dolor sit amet consectetur. Condimentum nisl et
                </div>
              </div>

              <div className="mt-30 d-flex flex-wrap align-items-center gap-2">
                <Badge>Programmer</Badge>
                <Button
                  className="pointer-events-none"
                  bordered
                  icon={{
                    src: "/assets/vectors/icons/timer-3.svg",
                  }}
                  textClassName="fs-14"
                >
                  13:34 UTC -07:00
                </Button>
              </div>
            </div>

            <div className="files">
              <div className="d-flex align-items-center justify-content-between mb-20">
                <input
                  className="search flex-grow-1 pe-10"
                  type="text"
                  placeholder="Files"
                  onChange={filesInputChangeHandler}
                />
                <div className="text-light-2">
                  <img
                    src="/assets/vectors/icons/search-normal.svg"
                    alt="search"
                  />
                </div>
              </div>

              {filteredFiles.map((el, idx) => {
                return (
                  <File
                    className="mb-2"
                    key={"shared-chat-files" + idx}
                    img={el.img}
                    name={el.name}
                    fileType={`Shared by ${el.sharedBy} ${el.sharedByTime}`}
                    long
                  />
                );
              })}

              <div
                className={clsx(
                  "d-flex justify-content-center align-items-center",
                  !isMoreFilesLoading && "mt-4"
                )}
              >
                {isMoreFilesLoading ? (
                  <Loader />
                ) : (
                  <div
                    className="text-primary-1 fs-12 px-3 py-10 c-pointer text-center view-more"
                    onClick={viewMoreFilesHandler}
                  >
                    View more
                  </div>
                )}
              </div>
            </div>

            <div className="profile-actions px-18 pt-50 bg-white pb-18">
              <div
                className="action red mb-12"
                onClick={() => toggleShowBlockConfirmationModal("show")}
              >
                <img src="/assets/vectors/icons/block.svg" alt="block" />
                Block Alexander
              </div>
              <div className="action gray" onClick={toggleShowReportModal}>
                <img src="/assets/vectors/icons/clear.svg" alt="clear" />
                Clear Chat
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Right;
