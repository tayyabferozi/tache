import "hammerjs";
import {
  Chart,
  ChartSeries,
  ChartSeriesItem,
  ChartYAxis,
  ChartYAxisItem,
} from "@progress/kendo-react-charts";

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

const ChartContainer = () => {
  return (
    <div className="heatmap-chart">
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

      <Chart>
        <ChartYAxis>
          <ChartYAxisItem visible={false} />
        </ChartYAxis>
        <ChartSeries>
          <ChartSeriesItem
            type="heatmap"
            data={data}
            color="#544DDE"
            labels={{
              visible: false,
            }}
            markers={{
              type: "roundedRect",
              border: {
                width: 2,
              },
            }}
          />
        </ChartSeries>
      </Chart>

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
