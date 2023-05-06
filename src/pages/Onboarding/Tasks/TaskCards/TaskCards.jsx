import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";

import Button from "../../../../components/Button";
import GridContainer from "../../../../components/GridContainer";
import PaginationNum from "../../../../components/PaginationNum";
import cardAnimations from "../../../../constants/card-animations";
import Task from "./Task";
import "./TaskCards.scss";

const TaskCards = ({ project, searchState, showActivity }) => {
  const [pageSize, setPageSize] = useState(9);
  const [pageNumState, setPageNumState] = useState(1);
  const [filteredData, setFilteredData] = useState(project.tasks);
  const [dataLen, setDataLen] = useState(project.tasks.length);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (showActivity) setPageSize(9);
    else setPageSize(12);
  }, [showActivity]);

  useEffect(() => {
    // SIMULATING API LOAD
    setTimeout(() => {
      setShow(true);
    }, 3000);
  }, []);

  useEffect(() => {
    setFilteredData((prevState) => {
      if (
        pageNumState < 0 ||
        pageNumState > Math.ceil(project.tasks.length / pageSize)
      )
        return prevState;
      const newData = project.tasks.filter((el) => {
        let shouldInclude = false;

        // SEARCH FILTER

        shouldInclude = el.title
          .toLowerCase()
          .includes(searchState.toLowerCase());

        // DROPDOWN FILTERS

        // if (filterState === "In Development") {
        //   if (el.state !== "development") shouldInclude = false;
        // }

        return shouldInclude;
      });

      // TO SHOW TOTAL IN THE PAGINATION (THIS LENGTH IS CALCULATED AFTER APPLYING FILTERS)

      setDataLen(newData.length);

      // RETURNING CURRENT PAGE ITEMS ONLY

      return newData.slice(
        (pageNumState - 1) * pageSize,
        pageNumState * pageSize
      );
    });
  }, [pageNumState, searchState, pageSize, project.tasks]);

  return (
    <div className="mt-3 task-cards">
      <AnimatePresence>
        <GridContainer rowClassName="main-row">
          {show ? (
            <>
              {filteredData.length > 0 ? (
                filteredData.map((el, idx) => {
                  return (
                    <motion.div
                      key={el.id}
                      className={clsx(
                        showActivity
                          ? "col-xxl-4 col-md-6"
                          : "col-xxl-3 col-xl-4",
                        "col-sm-6"
                      )}
                      onClick={() => {}}
                      {...cardAnimations}
                    >
                      <Task {...el} />
                    </motion.div>
                  );
                })
              ) : (
                <div className="no-tasks text-center">
                  <img
                    src="/assets/vectors/icons/note-fav.svg"
                    alt="no tasks"
                    title="no tasks"
                  />
                  <div className="mt-20">
                    <div className="fw-600 text-light-1">No Tasks</div>
                    <p>Get started by creating a new project.</p>
                  </div>
                  <div className="mt-4 d-flex justify-content-center">
                    <Button
                      className="h-40"
                      primaryLight
                      inline
                      icon={{
                        src: "/assets/vectors/icons/add-3.svg",
                        title: "add",
                        alt: "add",
                      }}
                    >
                      {" "}
                      New Task
                    </Button>
                  </div>
                </div>
              )}
            </>
          ) : (
            new Array(pageSize).fill(0).map((el, idx) => {
              return (
                <div
                  key={"skeleton-onboarding-ticket" + idx}
                  className="col-xl-4 col-md-6"
                >
                  <Task skeleton />
                </div>
              );
            })
          )}
        </GridContainer>
      </AnimatePresence>

      {filteredData.length > 0 && (
        <PaginationNum
          pageNumState={pageNumState}
          setPageNumState={setPageNumState}
          total={Math.ceil(dataLen / pageSize)}
        />
      )}
    </div>
  );
};

export default TaskCards;
