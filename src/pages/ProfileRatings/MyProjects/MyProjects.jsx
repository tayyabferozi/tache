import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Skeleton from "react-loading-skeleton";

import GridContainer from "../../../components/GridContainer";
import PaginationNum from "../../../components/PaginationNum";
import cardAnimations from "../../../constants/card-animations";
import SectionCollapsible from "../SectionCollapsible/SectionCollapsible";
import "./MyProjects.scss";

const pageSize = 6;
const MyProjects = ({ show, projects: data }) => {
  const [pageNumState, setPageNumState] = useState(1);
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    setFilteredData((prevState) => {
      if (pageNumState < 0 || pageNumState > Math.ceil(data.length / pageSize))
        return prevState;
      let newData = [...data];

      // RETURNING CURRENT PAGE ITEMS ONLY
      return newData.slice(
        (pageNumState - 1) * pageSize,
        pageNumState * pageSize
      );
    });
  }, [pageNumState, data]);
  return (
    <SectionCollapsible
      className="my-projects"
      title="My Projects"
      icon="/assets/vectors/icons/my-projects.svg"
    >
      <div className="mt-30 mt-575-20">
        <AnimatePresence>
          <GridContainer>
            {show
              ? filteredData.map((el, idx) => {
                  return (
                    <motion.div
                      className="col-xxl-4 col-lg-6"
                      key={"my-projects" + el.id + Math.random()}
                      {...cardAnimations}
                    >
                      <ProjectCard el={el} />
                    </motion.div>
                  );
                })
              : new Array(6).fill(0).map((el, idx) => {
                  return (
                    <div
                      key={"-skeleton-projectr-" + idx}
                      className="col-lg-4 col-md-6"
                    >
                      <ProjectCard skeleton />
                    </div>
                  );
                })}
          </GridContainer>
        </AnimatePresence>
      </div>

      <PaginationNum
        className="mb-575-30 mt-575-20"
        pageNumState={pageNumState}
        setPageNumState={setPageNumState}
        total={Math.ceil(data.length / pageSize)}
      />
    </SectionCollapsible>
  );
};

export default MyProjects;

const ProjectCard = ({ skeleton, el }) => {
  console.log(skeleton);

  return (
    <div className="project-card-wrap">
      <div className="project-card">
        <div className="d-flex justify-content-between flex-column flex-sm-row gap-20">
          <div>
            <h5>{skeleton ? <Skeleton width={140} /> : el?.title}</h5>
            <div className="color-light-3 fs-14 mt-1">
              {skeleton ? <Skeleton width={50} /> : el?.date}
            </div>
          </div>
          {skeleton ? (
            <Skeleton width={70} />
          ) : (
            <div>
              <div className="privacy">
                <img
                  src={`/assets/vectors/icons/${
                    el?.privacy === "Public" ? "public" : "private"
                  }.svg`}
                  alt="public"
                  title="public"
                />
                {el?.privacy}
              </div>
            </div>
          )}
        </div>

        <div className="mt-3 fw-500">
          {skeleton ? <Skeleton count={2.5} /> : el?.description}
        </div>

        <div className="tickets-count mt-20">
          {skeleton ? (
            <Skeleton width={80} />
          ) : (
            <div className="tickets-box total d-flex">
              <div className="d-flex align-items-center gap-2 fs-14">
                <img
                  src="/assets/vectors/icons/totalTickets.svg"
                  alt="total ticekts"
                  title="total tickets"
                />
                Total Ticket
              </div>
              <div className="fw-500 fs-14">{el?.totalTickets}</div>
            </div>
          )}
          <div className="line"></div>
          {skeleton ? (
            <Skeleton width={80} />
          ) : (
            <div className="tickets-box active d-flex">
              <div className="d-flex align-items-center gap-2 fs-14">
                <img
                  src="/assets/vectors/icons/active-tickets.svg"
                  alt="active-ticket"
                  title="active tickets"
                />
                Active Ticket
              </div>
              <div className="fw-500 fs-14">{el?.totalTickets}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
