import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";

import "./RatingStars.scss";

const RatingStars = () => {
  const [rating, setRating] = useState(3);
  const [tempRating, setTempRating] = useState(0);
  const [showTemp, setShowTemp] = useState(false);

  return (
    <div className="rating-stars">
      <div className="rating-stars" onMouseLeave={() => setShowTemp(false)}>
        {new Array(5).fill(0).map((el, idx) => {
          return (
            <div className="item" key={"star-item" + idx}>
              <Star
                filled={rating - idx}
                tempFilled={tempRating - idx}
                pre={idx}
                setRating={setRating}
                tempRating={tempRating}
                setTempRating={setTempRating}
                showTemp={showTemp}
                setShowTemp={setShowTemp}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RatingStars;

const Star = ({
  filled,
  tempFilled,
  pre,
  setRating,
  setTempRating,
  showTemp,
  setShowTemp,
}) => {
  const [starFilled, setStarFilled] = useState();
  const [translateVal, setTranslateVal] = useState(0);
  const [starTempFilled, setStarTempFilled] = useState();
  const svgRef = useRef();

  const starHoverHandler = (e) => {
    // MORE FANCY UI APPROACH ;)

    // const rect = e.target.getBoundingClientRect();
    // const x =
    //   (e?.pageX ||
    //     (e?.changedTouches && e.changedTouches[0].pageX) ||
    //     (e.originalEvent.touches && e.originalEvent.touches[0].pageX)) -
    //   rect.left;
    // if (x < 0) return;
    // const fillVal = x / rect.width;
    // if (fillVal < 0 || fillVal > 100) return;
    // setStarFilled(fillVal);
    // setTempRating(fillVal + pre);
    // setShowTemp(true);

    // SIMPLE BUT PROFESSIONAL APPROACH ;)

    setStarFilled(1);
    setTempRating(pre + 1);
    setShowTemp(true);
  };

  const leaveHandler = () => {
    setStarFilled(filled > 1 ? 1 : filled);
  };

  const clickHandler = () => {
    setRating(pre + starFilled);
  };

  useEffect(() => {
    setStarFilled(filled > 1 ? 1 : filled);
  }, [filled]);

  useEffect(() => {
    setStarTempFilled(tempFilled > 1 ? 1 : tempFilled);
  }, [tempFilled]);

  useEffect(() => {
    setTranslateVal(100 - (showTemp ? starTempFilled : starFilled) * 100);
  }, [showTemp, starTempFilled, starFilled]);

  return (
    <div
      ref={svgRef}
      onMouseMove={starHoverHandler}
      onTouchMove={starHoverHandler}
      onMouseLeave={leaveHandler}
      onClick={clickHandler}
      className="icon-container"
    >
      <svg
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 55.01 54.56"
        className={clsx(translateVal === 0 && "shadowed")}
      >
        <defs>
          <clipPath id="clip-path" transform="translate(-0.01)">
            <path
              d="M32.26,3.94l4.84,9.68A6,6,0,0,0,41,16.51L49.78,18c5.61.94,6.93,5,2.89,9L45.85,33.8a6,6,0,0,0-1.43,5l1.95,8.44c1.54,6.69-2,9.27-7.92,5.78l-8.22-4.87a6,6,0,0,0-5.45,0L16.56,53c-5.89,3.49-9.46.88-7.92-5.78l1.95-8.44a6,6,0,0,0-1.43-5L2.34,27c-4-4-2.72-8.08,2.89-9L14,16.51a6,6,0,0,0,3.88-2.89l4.84-9.68C25.36-1.31,29.65-1.31,32.26,3.94Z"
              style={{ fill: "#e9ecf4" }}
            />
          </clipPath>
        </defs>
        <g>
          <path
            d="M32.26,3.94l4.84,9.68A6,6,0,0,0,41,16.51L49.78,18c5.61.94,6.93,5,2.89,9L45.85,33.8a6,6,0,0,0-1.43,5l1.95,8.44c1.54,6.69-2,9.27-7.92,5.78l-8.22-4.87a6,6,0,0,0-5.45,0L16.56,53c-5.89,3.49-9.46.88-7.92-5.78l1.95-8.44a6,6,0,0,0-1.43-5L2.34,27c-4-4-2.72-8.08,2.89-9L14,16.51a6,6,0,0,0,3.88-2.89l4.84-9.68C25.36-1.31,29.65-1.31,32.26,3.94Z"
            transform="translate(-0.01)"
            style={{ fill: "#e9ecf4" }}
          />
          <g style={{ clipPath: "url(#clip-path)" }}>
            <rect
              width="55.01"
              height="54.56"
              style={{
                fill: "#fbbc05",
                transform: `translate(-${translateVal}%)`,
                pointerEvents: "none",
              }}
            />
          </g>
        </g>
      </svg>
    </div>
  );
};
