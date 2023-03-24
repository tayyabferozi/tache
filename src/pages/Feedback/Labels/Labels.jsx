import clsx from "clsx";
import React from "react";

import "./Labels.scss";

const Labels = ({ currStep, items }) => {
  return (
    <div className="labels">
      {items?.map((el, idx) => {
        const done = currStep >= idx + 1;
        return (
          <div className="label-item" key={"label-item" + idx}>
            <div className="d-none d-md-block">
              {done ? (
                el.long ? (
                  <img
                    src="/assets/vectors/bg-step-highlighted.svg"
                    alt="step-bg"
                  />
                ) : (
                  <img
                    src="/assets/vectors/bg-step-highlighted-short.svg"
                    alt="step-bg"
                  />
                )
              ) : el.long ? (
                <img src="/assets/vectors/bg-step.svg" alt="step-bg" />
              ) : (
                <img src="/assets/vectors/bg-step-short.svg" alt="step-bg" />
              )}
            </div>
            <div className="d-block d-md-none">
              {done ? (
                <img
                  src="/assets/vectors/bg-step-highlighted-mobile.svg"
                  alt="step-bg"
                />
              ) : (
                <img src="/assets/vectors/bg-step-mobile.svg" alt="step-bg" />
              )}
            </div>
            <div className={clsx("inner", done && "done")}>
              <div className="circle">
                <div className="number">{idx + 1}</div>
                <div className="tick">
                  <img src="/assets/vectors/icons/tick-circle.svg" alt="tick" />
                </div>
              </div>
              <div className="text">{el.name}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Labels;
