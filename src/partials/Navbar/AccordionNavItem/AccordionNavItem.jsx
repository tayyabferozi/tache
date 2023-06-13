import clsx from "clsx";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";

import SubNavItem from "./SubNavItem";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const AccordionNavItem = ({ link, title, icon, subNav, idx }) => {
  const [isActive, setIsActive] = useState(false);
  const navItemClickHandler = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={clsx("nav-item-wrap")}>
      <NavLink
        to={link}
        className={clsx("nav-item")}
        onClick={navItemClickHandler}
      >
        <img className="icon" src={icon} alt={title} /> {title}
        <div className="right">
          {subNav && (
            <img
              src="/assets/vectors/icons/arrow-top.svg"
              className={clsx(isActive && "mirrored", "transitioned")}
              alt="arrow"
            />
          )}
        </div>
      </NavLink>

      <AnimatePresence>
        {subNav && isActive && (
          <motion.div
            className="sub-nav-items overflow-hidden"
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
          >
            {subNav.map((el2, idx2) => {
              return (
                <SubNavItem key={"sub-nav-items" + idx + "-" + idx2} {...el2} />
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AccordionNavItem;
