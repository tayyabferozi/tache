import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import GridContainer from "../../../components/GridContainer";
import PaginationNum from "../../../components/PaginationNum";
import cardAnimations from "../../../constants/card-animations";
import "./MyProjects.scss";
import clsx from "clsx";

const pageSize = 6;
const MyProjects = ({ projects: data }) => {
  const [pageNumState, setPageNumState] = useState(1);
  const [filteredData, setFilteredData] = useState(data);
  const [isCollapsed, setIsCollapsed] = useState(false);

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
    <div className="my-projects desc-box">
      <div className="sub-page-container">
        <div
          className="d-flex justify-content-between align-items-center"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          <h5 className="d-flex align-items-center gap-3">
            <img
              src="/assets/vectors/icons/my-projects.svg"
              alt="my-projects"
              title="My Projects"
            />
            My Projects
          </h5>

          <img
            className={clsx(isCollapsed && "mirrored", "d-block d-sm-none")}
            src="/assets/vectors/icons/arrow-3.svg"
            alt="arrow"
            title="arrow"
          />
        </div>

        <AnimatePresence>
          {(!isCollapsed || window.innerWidth > 575) && (
            <motion.div
              initial={{ height: "auto" }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
            >
              <div className="mt-30 mt-575-20">
                <AnimatePresence>
                  <GridContainer>
                    {filteredData.map((el, idx) => {
                      return (
                        <motion.div
                          className="col-xxl-4 col-lg-6"
                          key={"my-projects" + el.id + Math.random()}
                          {...cardAnimations}
                        >
                          <div className="project-card-wrap">
                            <img
                              className="mask"
                              src="/assets/vectors/project-card-mask.svg"
                              alt="mask"
                              title="mask"
                            />
                            <div className="project-card">
                              <div className="d-flex justify-content-between flex-column flex-sm-row gap-20">
                                <div>
                                  <h5>{el.title}</h5>
                                  <div className="color-light-3 fs-14 mt-1">
                                    {el.date}
                                  </div>
                                </div>
                                <div>
                                  <div className="privacy">
                                    <img
                                      src={`/assets/vectors/icons/${
                                        el.privacy === "Public"
                                          ? "public"
                                          : "private"
                                      }.svg`}
                                      alt="public"
                                      title="public"
                                    />
                                    {el.privacy}
                                  </div>
                                </div>
                              </div>

                              <div className="mt-3 fw-500">
                                {el.description}
                              </div>

                              <div className="tickets-count mt-20">
                                <div className="tickets-box total d-flex">
                                  <div className="d-flex align-items-center gap-2 fs-14">
                                    <img
                                      src="/assets/vectors/icons/totalTickets.svg"
                                      alt="total ticekts"
                                      title="total tickets"
                                    />
                                    Total Ticket
                                  </div>
                                  <div className="fw-500 fs-14">
                                    {el.totalTickets}
                                  </div>
                                </div>
                                <div className="line"></div>
                                <div className="tickets-box active d-flex">
                                  <div className="d-flex align-items-center gap-2 fs-14">
                                    <img
                                      src="/assets/vectors/icons/active-tickets.svg"
                                      alt="active-ticket"
                                      title="active tickets"
                                    />
                                    Active Ticket
                                  </div>
                                  <div className="fw-500 fs-14">
                                    {el.totalTickets}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
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
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default MyProjects;
