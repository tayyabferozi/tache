import { useEffect, useState } from "react";
import clsx from "clsx";

import File from "../../../../components/File";
import "./Files.scss";

const files = [
  {
    img: "/assets/vectors/icons/document-4.svg",
    name: "Unique.vid",
    sharedBy: "Alexander",
    sharedByTime: "today",
  },
  {
    img: "/assets/vectors/icons/document-4.svg",
    name: "Again unique.zip",
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

const Thread = ({ isFilesSectionActive, setIsFilesSectionActive }) => {
  const [searchState, setSearchState] = useState("");
  const [filteredFiles, setFilteredFiles] = useState(files);

  useEffect(() => {
    const filtered = files.filter((el) =>
      el.name.toLowerCase().includes(searchState.toLowerCase())
    );
    setFilteredFiles(filtered);
  }, [searchState]);

  return (
    <div
      className={clsx("files-section", { "in-active": !isFilesSectionActive })}
    >
      <div className="top-search-container">
        <img
          className="magnifier"
          src="/assets/vectors/icons/search.svg"
          alt="magnifier"
        />
        <img
          className="cross"
          src="/assets/vectors/icons/close-circle.svg"
          alt="close"
          onClick={() => setIsFilesSectionActive(!isFilesSectionActive)}
        />
        <input
          type="text"
          placeholder="Search file by name . . ."
          value={searchState}
          onChange={(e) => setSearchState(e.target.value)}
        />
      </div>
      <div className="files">
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
      </div>
    </div>
  );
};

export default Thread;
