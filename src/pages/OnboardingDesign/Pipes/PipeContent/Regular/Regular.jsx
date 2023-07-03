import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";

import CustomMD from "../../../../../components/CustomMD";
import DownloadBtn from "../../../../../components/DownloadBtn";
import PaginationNum from "../../../../../components/PaginationNum";
import GridContainer from "../../../../../components/GridContainer";
import ContentHeading from "../ContentHeading";

import "./Regular.scss";

const pageSize = 9;

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const Regular = ({ md, files, setIsInEditState }) => {
  console.log(files);
  const [dataLen, setDataLen] = useState(files?.length);
  const [maxLen, setMaxLen] = useState(34);
  const [pageNumState, setPageNumState] = useState(1);
  const [filteredFiles, setFilteredFiles] = useState(files);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  useEffect(() => {
    setFilteredFiles((prevState) => {
      if (
        pageNumState < 0 ||
        pageNumState > Math.ceil((files?.length || 0) / pageSize)
      )
        return prevState;
      const newData = files;
      setDataLen(newData.length);
      console.log(newData);
      console.log(
        newData.slice((pageNumState - 1) * pageSize, pageNumState * pageSize)
      );
      return newData.slice(
        (pageNumState - 1) * pageSize,
        pageNumState * pageSize
      );
    });
  }, [files, pageNumState]);

  useEffect(() => {
    const ev = (e) => {
      const w = window.innerWidth;

      if (w < 575) {
        setMaxLen(12);
      } else {
        setMaxLen(34);
      }
    };

    ev();

    window.addEventListener("resize", ev);

    return () => {
      window.removeEventListener("resize", ev);
    };
  });

  return (
    <div className="regular">
      <ContentHeading
        title="Regular"
        icon="/assets/vectors/icons/onboarding-design-box.svg"
        setIsInEditState={setIsInEditState}
      />

      <div className="md">
        {isLoading ? (
          <>
            <Skeleton width="20%" height={30} />
            <Skeleton count={2.75} className="mt-10" />
            <Skeleton className="mt-30" width="10%" height={30} />
            <Skeleton count={5.5} className="mt-10" />
            <Skeleton className="mt-30" width="30%" height={30} />
            <Skeleton count={3.5} className="mt-10" />
          </>
        ) : (
          <CustomMD markdown={md} />
        )}
      </div>
      <div className="d-flex justify-content-between gap-10 download-btns">
        <GridContainer rowClassName="g-10">
          {!isLoading &&
            filteredFiles.map((el, idx) => {
              const name = el.name.split(".")[0];
              const shortName = name.slice(0, maxLen);

              const d = new Date();

              return (
                <div
                  className="col-xl-4 col-lg-6"
                  key={"pipe-content-regular-downlaod-" + idx}
                >
                  <DownloadBtn
                    className="w-100"
                    // textClassName="flex-grow-1 d-flex justify-content-between align-items-center"
                    date={
                      days[d.getDay()] +
                      " " +
                      d.getDate() +
                      " " +
                      months[d.getMonth()]
                    }
                    // name={`${shortName}${name.length > maxLen ? "..." : ""}`}
                    name={`${shortName}`}
                    // name={el.name}
                  />
                </div>
              );
            })}
        </GridContainer>
      </div>
      {!isLoading && Math.ceil(dataLen / pageSize) !== 0 && (
        <PaginationNum
          offset={-20}
          scrollTo={"find-talent-search-bar"}
          total={Math.ceil(dataLen / pageSize)}
          pageNumState={pageNumState}
          setPageNumState={setPageNumState}
        />
      )}
    </div>
  );
};

export default Regular;
