import { useState } from "react";

import ContentHeading from "../ContentHeading";
import CustomMD from "../../../../../components/CustomMD";
import GridContainer from "../../../../../components/GridContainer";
import ImgOpener from "./ImgOpener";

import "./Image.scss";

const md =
  "Lorem ipsum dolor sit amet consectetur. Duis dui sollicitudin pretium consequat nisl vel ridiculus tristique nisl. Purus odio penatibus netus";

const imgs = [
  {
    src: "/assets/imgs/img1.png",
  },
  {
    src: "/assets/imgs/img2.png",
  },
  {
    src: "/assets/imgs/img3.png",
  },
  {
    src: "/assets/imgs/img4.png",
  },
  {
    src: "/assets/imgs/img5.png",
  },
  {
    src: "/assets/imgs/img6.png",
  },
  {
    src: "/assets/imgs/img7.png",
  },
  {
    src: "/assets/imgs/img8.png",
  },
  {
    src: "/assets/imgs/img9.png",
  },
];

const Image = () => {
  const [imgState, setImgState] = useState({ src: "", active: false });

  const openImg = (src) => {
    setImgState({
      src: src,
      active: true,
    });
  };

  return (
    <>
      <div className="image">
        <ImgOpener imgState={imgState} setImgState={setImgState} />
        <ContentHeading icon="/assets/vectors/icons/img.svg" title="Image" />

        <div className="md">
          <CustomMD markdown={md} />
        </div>

        <GridContainer rowClassName="g-20">
          {imgs.map((el, idx) => {
            return (
              <div key={"pipe-content-img" + idx} className="col-sm-4 col-6">
                <img
                  className="w-100 d-block br-8 img"
                  src={el.src}
                  alt=""
                  onClick={() => openImg(el.src)}
                />
              </div>
            );
          })}
        </GridContainer>
      </div>
    </>
  );
};

export default Image;
