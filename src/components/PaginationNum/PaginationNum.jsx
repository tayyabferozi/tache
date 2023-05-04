import clsx from "clsx";
import React from "react";
import { animateScroll as scroll } from "react-scroll";

import "./PaginationNum.scss";

const PaginationNum = ({
  shoulScrollTop,
  className,
  pageNumState,
  setPageNumState,
  total,
}) => {
  const changePage = (val) => {
    scrollTop();
    setPageNumState(val);
  };

  const scrollTop = () => {
    // if (window.screen.width < 576) {
    scroll.scrollTo(0, { smooth: true, duration: 500 });
    // }
  };

  const dec = () => {
    scrollTop();
    setPageNumState((prevState) => {
      if (prevState > 1) return --prevState;
      else return 1;
    });
  };

  const inc = () => {
    scrollTop();
    setPageNumState((prevState) => {
      if (prevState < total) return ++prevState;
      else return total;
    });
  };

  return (
    <div className={clsx(className, "pagination-num")}>
      <button
        className={clsx(pageNumState === 1 && "disabled", "pg-btn prev")}
        onClick={dec}
      >
        <img
          src="/assets/vectors/icons/arrow-2.svg"
          alt="arrow"
          className="arrow"
        />
      </button>
      {new Array(total).fill(0).map((el, idx) => {
        return (
          <div
            key={"pag" + idx}
            className={clsx("pag-item", pageNumState === idx + 1 && "active")}
            onClick={() => changePage(idx + 1)}
          >
            {idx + 1}
          </div>
        );
      })}
      <button
        className={clsx(pageNumState === total && "disabled", "pg-btn next")}
        onClick={inc}
      >
        <img
          src="/assets/vectors/icons/arrow-2.svg"
          alt="arrow"
          className="arrow"
        />
      </button>
    </div>
  );
};

export default PaginationNum;
