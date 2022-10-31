import React from "react";

import "./Pagination.scss";

const Pagination = ({ pageNumState, setPageNumState, total }) => {
  const onChange = (e) => {
    setPageNumState(e.target.value);
  };

  const onBlur = (e) => {
    if (e.target.value > total) return setPageNumState(total);
    if (e.target.value < 1) return setPageNumState(1);
  };

  const scrollTop = () => {
    if (window.screen.width < 576) {
      window.scrollTo(0, 0);
    }
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
    <div className="pagination">
      <div className="text">Page</div>
      <input
        type="number"
        value={pageNumState}
        onBlur={onBlur}
        onChange={onChange}
      />
      <div className="text">of {total}</div>
      <div className="buttons">
        <button className="pg-btn prev" onClick={dec}>
          <img
            src="/assets/vectors/icons/arrow.svg"
            alt="arrow"
            className="arrow"
          />
        </button>
        <button className="pg-btn next" onClick={inc}>
          <img
            src="/assets/vectors/icons/arrow.svg"
            alt="arrow"
            className="arrow"
          />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
