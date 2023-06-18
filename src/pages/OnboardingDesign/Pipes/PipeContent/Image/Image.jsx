import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
// import { AnimatePresence, motion } from "framer-motion";

import ContentHeading from "../ContentHeading";
import CustomMD from "../../../../../components/CustomMD";
import GridContainer from "../../../../../components/GridContainer";
import ImgOpener from "../../../../../components/ImgOpener";
import PaginationNum from "../../../../../components/PaginationNum";
// import cardAnimations from "../../../../../constants/card-animations";

import "./Image.scss";

const md =
  "Lorem ipsum dolor sit amet consectetur. Duis dui sollicitudin pretium consequat nisl vel ridiculus tristique nisl. Purus odio penatibus netus";

const imgs = [
  { id: 1, src: "/assets/imgs/img1.png" },
  { id: 2, src: "/assets/imgs/img2.png" },
  { id: 3, src: "/assets/imgs/img3.png" },
  { id: 4, src: "/assets/imgs/img4.png" },
  { id: 5, src: "/assets/imgs/img5.png" },
  { id: 6, src: "/assets/imgs/img6.png" },
  { id: 7, src: "/assets/imgs/img7.png" },
  { id: 8, src: "/assets/imgs/img8.png" },
  { id: 9, src: "/assets/imgs/img9.png" },
  { id: 10, src: "/assets/imgs/img2.png" },
  { id: 11, src: "/assets/imgs/img3.png" },
  { id: 12, src: "/assets/imgs/img4.png" },
  { id: 13, src: "/assets/imgs/img5.png" },
  { id: 14, src: "/assets/imgs/img6.png" },
  { id: 15, src: "/assets/imgs/img7.png" },
  { id: 16, src: "/assets/imgs/img8.png" },
  { id: 17, src: "/assets/imgs/img9.png" },
  { id: 18, src: "/assets/imgs/img1.png" },
  { id: 19, src: "/assets/imgs/img2.png" },
  { id: 20, src: "/assets/imgs/img3.png" },
  { id: 21, src: "/assets/imgs/img4.png" },
  { id: 22, src: "/assets/imgs/img5.png" },
  { id: 23, src: "/assets/imgs/img6.png" },
  { id: 24, src: "/assets/imgs/img7.png" },
  { id: 25, src: "/assets/imgs/img8.png" },
  { id: 26, src: "/assets/imgs/img9.png" },
];

const pageSize = 9;

const Image = ({ setIsInEditState }) => {
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
  }, [pageNumState]);

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
