import { useEffect, useState, useMemo } from "react";
import Skeleton from "react-loading-skeleton";

import ContentHeading from "../ContentHeading";
import CustomMD from "../../../../../components/CustomMD";
import GridContainer from "../../../../../components/GridContainer";
import ImgOpener from "../../../../../components/ImgOpener";
import PaginationNum from "../../../../../components/PaginationNum";
// import cardAnimations from "../../../../../constants/card-animations";

import "./Image.scss";

const pageSize = 9;

const Image = ({ files, md, setIsInEditState }) => {
  const imgs = useMemo(() => files, [files]);
  const [dataLen, setDataLen] = useState(imgs.length);
  const [pageNumState, setPageNumState] = useState(1);
  const [imgState, setImgState] = useState({ src: "", active: false });
  const [filteredData, setFilteredData] = useState(imgs);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  useEffect(() => {
    setFilteredData((prevState) => {
      if (pageNumState < 0 || pageNumState > Math.ceil(imgs.length / pageSize))
        return prevState;
      const newData = imgs;
      setDataLen(newData.length);
      return newData.slice(
        (pageNumState - 1) * pageSize,
        pageNumState * pageSize
      );
    });
  }, [imgs, pageNumState]);

  const openImg = (src) => {
    setImgState({
      src: src,
      active: true,
    });
  };

  return (
    <>
      <div className="image">
        <ContentHeading
          icon="/assets/vectors/icons/img.svg"
          title="Image"
          setIsInEditState={setIsInEditState}
        />

        <div className="md">
          {isLoading ? (
            <>
              <Skeleton width="20%" height={30} />
              <Skeleton count={2.75} className="mt-10" />
            </>
          ) : (
            <CustomMD markdown={md} />
          )}
        </div>

        <GridContainer rowClassName="g-20" rootClassName="mt-20">
          {/* <AnimatePresence> */}
          {isLoading
            ? new Array(9).fill(0).map((el, idx) => {
                if (!isLoading) return null;

                return (
                  <div
                    key={"pipe-content-skeleton" + idx}
                    className="col-sm-4 col-6"
                  >
                    <Skeleton height={170} borderRadius={10} />
                  </div>
                );
              })
            : filteredData.map((el, idx) => {
                return (
                  <div
                    key={"pipe-content-img" + el.id}
                    className="col-sm-4 col-6"
                    // {...cardAnimations}
                  >
                    <img
                      className="w-100 d-block br-8 img"
                      src={el.src}
                      alt=""
                      onClick={() => openImg(el.src)}
                    />
                  </div>
                );
              })}
          {/* </AnimatePresence> */}
        </GridContainer>
        {!isLoading && Math.ceil(dataLen / pageSize) !== 0 && (
          <PaginationNum
            offset={-20}
            scrollTo={"find-talent-search-bar"}
            total={Math.ceil(dataLen / pageSize)}
            pageNumState={pageNumState}
            setPageNumState={setPageNumState}
          />
        )}
        <ImgOpener imgState={imgState} setImgState={setImgState} />
      </div>
    </>
  );
};

export default Image;
