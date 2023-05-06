import React from "react";

import friendlyNum from "../../../../utils/friendly-number";
import "./Stats.scss"

const Stats = ({ tasksCompleted, talentEarnings, talents }) => {
  return (
    <div className="right">
      <Card
        amount={friendlyNum(tasksCompleted, 1)}
        chart={"/assets/vectors/chart-task-completed.svg"}
        icon={"/assets/vectors/icons/clipboard-2.svg"}
        title={"Tasks completed"}
      />
      <Card
        amount={`$${talentEarnings.toLocaleString("en-US")}`}
        chart={"/assets/vectors/chart-talent-earnings.svg"}
        icon={"/assets/vectors/icons/talent-earnings.svg"}
        title={"Talent earnings"}
      />
      <Card
        amount={friendlyNum(talents, 1)}
        chart={"/assets/vectors/chart-talents.svg"}
        icon={"/assets/vectors/icons/talents.svg"}
        title={"Talents"}
      />
    </div>
  );
};

export default Stats;

const Card = ({ amount, chart, title, icon }) => {
  return (
    <div className="card">
      <div className="title">
        <img src={icon} alt={title} />
        {title}
      </div>
      <div className="main">
        <div className="amount">{amount}</div>
        <div className="chart">
          <img src={chart} alt="chart" />
        </div>
      </div>
    </div>
  );
};
