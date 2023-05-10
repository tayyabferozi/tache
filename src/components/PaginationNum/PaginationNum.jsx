import clsx from "clsx";
import React from "react";
import {
  // animateScroll as scroll,
  Link,
} from "react-scroll";

import "./PaginationNum.scss";

const PaginationNum = ({
  scrollTo,
  offset,
  // shoulScrollTop,
  className,
  pageNumState,
  setPageNumState,
  total,
}) => {
  const changePage = (val) => {
    // scrollTop();
    setPageNumState(val);
  };

  // const scrollTop = () => {
  // if (window.screen.width < 576) {
  // scroll.scrollTo("#" + scrollTo, { smooth: true, duration: 500 });
  // }
  // };

  const dec = () => {
    // scrollTop();
    setPageNumState((prevState) => {
      if (prevState > 1) return --prevState;
      else return 1;
    });
  };

  const inc = () => {
    // scrollTop();
    setPageNumState((prevState) => {
      if (prevState < total) return ++prevState;
      else return total;
    });
  };

  return (
    <div className={clsx(className, "pagination-num")}>
      <Link
        to={scrollTo}
        smooth={true}
        offset={offset === undefined ? 0 : offset}
        className={clsx(pageNumState === 1 && "disabled", "pg-btn prev")}
        duration={200}
        onClick={dec}
      >
        <img
          src="/assets/vectors/icons/arrow-2.svg"
          alt="arrow"
          className="arrow"
        />
      </Link>
      {new Array(total).fill(0).map((el, idx) => {
        return (
          <Link
            to={scrollTo}
            smooth={true}
            offset={offset === undefined ? 0 : offset}
            duration={200}
            key={"pag" + idx}
            className={clsx("pag-item", pageNumState === idx + 1 && "active")}
            onClick={() => changePage(idx + 1)}
          >
            {idx + 1}
          </Link>
        );
      })}
      <Link
        to={scrollTo}
        smooth={true}
        offset={offset === undefined ? 0 : offset}
        duration={200}
        className={clsx(pageNumState === total && "disabled", "pg-btn next")}
        onClick={inc}
      >
        <img
          src="/assets/vectors/icons/arrow-2.svg"
          alt="arrow"
          className="arrow"
        />
      </Link>
    </div>
  );
};

export default PaginationNum;
