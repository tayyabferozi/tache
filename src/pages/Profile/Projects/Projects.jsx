import React from "react";
import { AnimatePresence, motion } from "framer-motion";

import Badge from "../../../components/Badge";
import GridContainer from "../../../components/GridContainer";
import cardAnimations from "../../../constants/card-animations";
import ProjectTile from "./ProjectTile";

import "./Project.scss";

const Projects = ({ show = true, title, items }) => {
  return (
    <div className="projects">
      <div className="mb-30 d-flex">
        <Badge className="main-badge" green>
          {title}
        </Badge>
      </div>

      <AnimatePresence>
        <GridContainer rowClassName="g-20" rootClassName="">
          {show
            ? items.map((el, idx) => {
                return (
                  <motion.div
                    key={"tile" + el.id + Math.random()}
                    {...cardAnimations}
                    className="col-xxl-3 col-lg-4 col-md-6"
                  >
                    <ProjectTile id={idx} {...el} />
                  </motion.div>
                );
              })
            : new Array(8).fill(0).map((el, idx) => {
                return (
                  <div
                    className="col-xxl-3 col-lg-4 col-md-6"
                    key={"skeleton" + idx}
                  >
                    <ProjectTile id={idx} {...el} skeleton />
                  </div>
                );
              })}
        </GridContainer>
      </AnimatePresence>
    </div>
  );
};

export default Projects;
