import React from "react";

import ContentHeading from "../ContentHeading/ContentHeading";
import CustomMD from "../../../../../components/CustomMD";
import "./Video.scss";

const md =
  "Lorem ipsum dolor sit amet consectetur. Duis dui sollicitudin pretium consequat nisl vel ridiculus tristique nisl. Purus odio penatibus netus";

const Video = () => {
  return (
    <div className="video">
      <ContentHeading
        title="Title Video Document"
        icon="/assets/vectors/icons/video.svg"
      />

      <div className="md">
        <CustomMD markdown={md} />
      </div>

      <div className="video-player">
        <video className="w-100" autoPlay controls>
          <source src="/assets/videos/sample.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Video;
