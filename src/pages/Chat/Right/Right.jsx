import { useState } from "react";
import clsx from "clsx";

import Thread from "./Thread";
import Files from "./Files";
import Badge from "../../../components/Badge";
import Button from "../../../components/Button";
import File from "../../../components/File";
import ConfirmationModal from "../../../modals/Confirmation";
import useModal from "../../../hooks/useModal";

import "./Right.scss";

const files = [
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
  setIsRightCollapsed,
  isThreadActive,
  setIsThreadActive,
  isFilesSectionActive,
  setIsFilesSectionActive,
}) => {
  const [searchVal, setSearchVal] = useState("");
  const {
    show: showBlockConfirmationModal,
    toggleShow: toggleShowBlockConfirmationModal,
  } = useModal(false);

  const inputChangeHandler = (e) => {
    setSearchVal(e.target.value);
  };

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
      <div className="right">
        {isRightCollapsed && (
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
              isRightCollapsed && "collapsed"
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
                  onChange={inputChangeHandler}
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

              <div className="mt-30 d-flex align-items-center gap-2">
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
              <div className="d-flex align-items-center justify-content-between mb-10">
                <div className="text-light-2 fs-14">Files</div>
                <div className="text-light-2">
                  <img
                    src="/assets/vectors/icons/search-normal.svg"
                    alt="search"
                  />
                </div>
              </div>

              {files.map((el, idx) => {
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

              <div className="d-flex justify-content-center align-items-center mt-4">
                <div className="text-primary-1 fs-12 px-3 py-10 c-pointer text-center view-more">
                  View more
                </div>
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
              <div className="action gray">
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
