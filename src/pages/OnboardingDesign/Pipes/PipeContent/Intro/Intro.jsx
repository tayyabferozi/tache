import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import Skeleton from "react-loading-skeleton";

import ContentHeading from "../ContentHeading";
import "./Intro.scss";

const Intro = ({ md, setIsInEditState }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  return (
    <div className="intro">
      <ContentHeading
        title="Introduction"
        icon="/assets/vectors/icons/intro.svg"
        setIsInEditState={setIsInEditState}
      />

      <div className="md">
        {isLoading ? (
          <>
            <Skeleton width="20%" height={30} />
            <Skeleton count={2.75} className="mt-10" />
            <Skeleton className="mt-30" width="10%" height={30} />
            <Skeleton count={3.5} className="mt-10" />
          </>
        ) : (
          <ReactMarkdown children={md} />
        )}
      </div>
    </div>
  );
};

export default Intro;
