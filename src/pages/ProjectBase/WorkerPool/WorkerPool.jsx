import React, { useRef } from "react";
import $ from "jquery";

import Button from "../../../components/Button";
import PoolItem from "./PoolItem";
import "./WorkerPool.scss";

const thisMonthUsers = [
  {
    img: "/assets/imgs/pool-avatar-1.png",
    name: "Nate Williams",
    date: "8 August 2022",
    projectTitle: "Project Title",
    isActive: true,
  },
  {
    img: "/assets/imgs/pool-avatar-2.png",
    name: "Alexander",
    date: "8 August 2022",
    projectTitle: "Project Title",
    isActive: true,
  },
  {
    img: "/assets/imgs/pool-avatar-3.png",
    name: "Eren T",
    date: "8 August 2022",
    projectTitle: "Project Title",
    isActive: false,
  },
];

const lastMonthUsers = [
  {
    img: "/assets/imgs/pool-avatar-1.png",
    name: "Nate Williams",
    date: "8 August 2022",
    projectTitle: "Project Title",
    isActive: true,
  },
];

const WorkerPool = () => {
  const headRef = useRef();
  const mainContentRef = useRef();

  const toggleActive = () => {
    $(mainContentRef.current).slideToggle();
    $(headRef.current).toggleClass("active");
  };

  return (
    <div className="worker-pool">
      <div className="pool-head" ref={headRef} onClick={toggleActive}>
        <h6>Worker Pool</h6>

        <img src="/assets/vectors/icons/worker-pool.svg" alt="worker-pool" />
      </div>

      <div ref={mainContentRef} className="pb-1 main-content">
        <div className="fs-12 mt-10">This month</div>

        <div className="month-items">
          {thisMonthUsers.map((el, idx) => {
            return <PoolItem key={"this-month" + idx} {...el} />;
          })}
        </div>

        <div className="fs-12 mt-10">Last month</div>

        <div className="month-items">
          {lastMonthUsers.map((el, idx) => {
            return <PoolItem key={"last-month" + idx} {...el} />;
          })}
        </div>
      </div>

      <div className="mt-2">
        <Button primaryLight>Find new work</Button>
      </div>
    </div>
  );
};

export default WorkerPool;
