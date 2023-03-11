import clsx from "clsx";
import React, { useRef, useState } from "react";

import useOnClickOutside from "../../../../hooks/useOnClickOutside";

const ReviewCard = ({ el, idx, toggleHidden, toggleReviewModal }) => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef();

  const hideMenu = () => {
    setShowMenu(false);
  };

  useOnClickOutside(menuRef, hideMenu);

  return (
    <div
      className={clsx("review-card", el.isHidden && "hidden")}
      // onClick={toggleReviewModal}
    >
      <div className="d-flex justify-content-between">
        <div>
          <h5>{el.title}</h5>
          <div className="color-light-3 fs-14 mt-1">{el.date}</div>
        </div>
        <div>
          <div
            ref={menuRef}
            className="menu"
            onClick={() => {
              setShowMenu(!showMenu);
            }}
          >
            <img src="/assets/vectors/icons/more.svg" alt="options" />
            <div
              className={clsx("menu-options", showMenu && "active")}
              onClick={() => toggleHidden(idx)}
            >
              <div className="menu-option">
                {el.isHidden ? "Show" : "Hide"} this review
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-3 fw-500">{el.description}</div>

      <div className="client-details">
        <div className="left">
          <div className="img">
            <img src={el.clientImg} alt={el.clientName} />
          </div>
          <div className="text">
            <h5 className="fs-16">{el.clientName}</h5>
            <div className="fs-14 text-secondary-1 mt-1">Founder Company</div>
          </div>
        </div>
        <div className="right">
          <img src="/assets/vectors/icons/star.svg" alt="star" title="star" />
          <img src="/assets/vectors/icons/star.svg" alt="star" title="star" />
          <img src="/assets/vectors/icons/star.svg" alt="star" title="star" />
          <img src="/assets/vectors/icons/star.svg" alt="star" title="star" />
          <img
            src="/assets/vectors/icons/star-half-fllled.svg"
            alt="star-half-fllled"
            title="star-half-fllled"
          />
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
