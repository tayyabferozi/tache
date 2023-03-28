import clsx from "clsx";
import React, { useRef, useState } from "react";
import Skeleton from "react-loading-skeleton";

import useOnClickOutside from "../../../../hooks/useOnClickOutside";

const ReviewCard = ({ id, el, skeleton, toggleHidden }) => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef();

  const hideMenu = () => {
    setShowMenu(false);
  };

  useOnClickOutside(menuRef, hideMenu);

  return (
    <div className={clsx("review-card", !skeleton && el?.isHidden && "hidden")}>
      <div className="d-flex justify-content-between">
        <div>
          <h5>{skeleton ? <Skeleton width={100} /> : el.title}</h5>
          <div className="color-light-3 fs-14 mt-1">
            {skeleton ? <Skeleton width={50} /> : el.date}
          </div>
        </div>
        <div>
          <div
            ref={menuRef}
            className="menu"
            onClick={() => {
              setShowMenu(!showMenu);
            }}
          >
            <img
              src="/assets/vectors/icons/more.svg"
              className="dots-icon"
              alt="options"
            />
            <div
              className={clsx("menu-options", showMenu && "active")}
              onClick={() => toggleHidden(id)}
            >
              <div className="menu-option">
                {el?.isHidden ? "Show" : "Hide"} this review
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-3 fw-500">
        {skeleton ? <Skeleton count={2.5} height={10} /> : el?.description}
      </div>

      <div className="client-details">
        <div className="left">
          <div className="img">
            {skeleton ? (
              <Skeleton width={44} circle height={44} />
            ) : (
              <img src={el?.clientImg} alt={el?.clientName} />
            )}
          </div>
          <div className="text">
            <h5 className="fs-16">
              {skeleton ? <Skeleton width={60} height={14} /> : el?.clientName}
            </h5>
            <div className="fs-14 text-secondary-1 mt-1">
              {skeleton ? <Skeleton width={100} /> : "Founder Company"}
            </div>
          </div>
        </div>
        <div className="right">
          {skeleton ? (
            <Skeleton width={84} />
          ) : (
            <>
              <img
                src="/assets/vectors/icons/star.svg"
                alt="star"
                title="star"
              />
              <img
                src="/assets/vectors/icons/star.svg"
                alt="star"
                title="star"
              />
              <img
                src="/assets/vectors/icons/star.svg"
                alt="star"
                title="star"
              />
              <img
                src="/assets/vectors/icons/star.svg"
                alt="star"
                title="star"
              />
              <img
                src="/assets/vectors/icons/star-half-fllled.svg"
                alt="star-half-fllled"
                title="star-half-fllled"
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
