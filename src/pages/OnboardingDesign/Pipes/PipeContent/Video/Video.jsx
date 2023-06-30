import { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";

import ContentHeading from "../ContentHeading/ContentHeading";
import CustomMD from "../../../../../components/CustomMD";

import "./Video.scss";

const Video = ({ md, setIsInEditState }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  return (
    <div className="video">
      <ContentHeading
        title="Title Video Document"
        icon="/assets/vectors/icons/video.svg"
        setIsInEditState={setIsInEditState}
      />

      <div className="md">
        {isLoading ? (
          <>
            <Skeleton width="20%" height={30} />
            <Skeleton count={2.75} className="mt-10" />
            <Skeleton className="mt-30" width="30%" height={30} />
            <Skeleton count={3.5} className="mt-10" />
          </>
        ) : (
          <CustomMD markdown={md} />
        )}
      </div>

      <div className="video-player">
        {isLoading ? (
          <Skeleton className="mt-20" borderRadius={10} height={300} />
        ) : (
          <video controlsList="nodownload" className="w-100" autoPlay controls>
            <source src="/assets/videos/sample.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
    </div>
  );
};

export default Video;
