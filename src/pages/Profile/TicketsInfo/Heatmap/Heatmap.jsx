import clsx from "clsx";
import { useState, useRef } from "react";
import { data } from "./commit-data";
import "./Heatmap.scss";

const months = [
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
];

const digitsMap = {
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
};

const ChartContainer = () => {
  const chartRef = useRef();
  const [chartData] = useState({
    max: Math.max(...[].concat(...data)),
    min: Math.min(...[].concat(...data)),
  });

  return (
    <div className="heatmap-chart" ref={chartRef}>
      <div className="fs-14 fw-600 mb-3 text-light-1 d-flex justify-content-between align-items-center">
        4,001 Tickets completed this year
        <img
          className="enlarge"
          src="/assets/vectors/icons/enlarge.svg"
          alt="enlarge"
        />
      </div>

      <div className="heatmap-months">
        {months.map((el, idx) => {
          return (
            <div
              className="heatmap-month"
              key={"heatmap-months" + Math.random() + idx}
            >
              {el}
            </div>
          );
        })}
      </div>

      <div className="heatmap-main">
        {data.map((el, idx) => {
          return (
            <div className="heatmap-row" key={"heatmap-row-" + idx}>
              {el.map((el2, idx2) => {
                return (
                  <div
                    className={clsx(
                      "heatmap-box",
                      digitsMap[Math.ceil(((el2 / chartData.max) * 100) / 20)]
                    )}
                    key={"heatmap-box" + idx + idx2}
                  ></div>
                );
              })}
            </div>
          );
        })}
      </div>

      <div className="legend-wrap">
        <div className="legend">
          <div className="label">Less</div>

          <div className="boxes">
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
          </div>

          <div className="label">More</div>
        </div>
      </div>
    </div>
  );
};

export default ChartContainer;
