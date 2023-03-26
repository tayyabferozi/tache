import clsx from "clsx";
import { useEffect } from "react";
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
  const [dataState, setDataState] = useState([]);
  const [monthsState, setMonthsState] = useState([]);
  const [chartData] = useState({
    max: Math.max(...[].concat(...data).map((el) => el.contributions)),
    // min: Math.min(...[].concat(...data).map((el) => el.contributions)),
  });

  useEffect(() => {
    const checkMatch991 = (y) => {
      if (y.matches) {
        setDataState(data.slice(0, 43));
        setMonthsState(months.slice(0, 10));
      } else {
        setDataState(data.slice(0, 52));
        setMonthsState(months);
      }
    };

    const y = window.matchMedia("(max-width: 991px)");
    checkMatch991(y);
    y.addListener(checkMatch991);

    const checkMatch767 = (x) => {
      if (x.matches) {
        setDataState(data.slice(0, 34));
        setMonthsState(months.slice(0, 8));
      }
    };

    const x = window.matchMedia("(max-width: 767px)");
    checkMatch767(x);
    x.addListener(checkMatch767);

    const checkMatch620 = (z) => {
      if (z.matches) {
        setDataState(data.slice(0, 21));
        setMonthsState(months.slice(0, 5));
      }
    };

    const z = window.matchMedia("(max-width: 575px)");
    checkMatch620(z);
    z.addListener(checkMatch620);

    // return () => {
    //   x.removeEventListener(checkMatch767);
    //   y.removeEventListener(checkMatch991);
    // };
  }, []);

  return (
    <div className="heatmap-chart" ref={chartRef}>
      <div className="fs-14 fw-600 mb-3 text-light-1 d-flex justify-content-between align-items-center">
        4,001 Tickets <br className="d-block d-sm-none" /> completed this year
      </div>

      <div className="heatmap-months">
        {monthsState.map((el, idx) => {
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
        {dataState.map((el, idx) => {
          return (
            <div className="heatmap-row" key={"heatmap-row-" + idx}>
              {el.map((el2, idx2) => {
                return (
                  <div
                    className={clsx(
                      "heatmap-box-wrap",
                      digitsMap[
                        Math.ceil(
                          ((el2.contributions / chartData.max) * 100) / 20
                        )
                      ]
                    )}
                    key={"heatmap-box" + idx + idx2}
                  >
                    <div className="heatmap-box"></div>
                    <div className="tooltip">
                      <h6>{el2.contributions} contributions</h6>
                      <p>{el2.date}</p>
                    </div>
                  </div>
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
