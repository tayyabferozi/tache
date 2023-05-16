import clsx from "clsx";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const NavItem = ({ idx, active, icon, title, subNav }) => {
  const [isActive, setIsActive] = useState(false);

  const navItemClickHandler = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="nav-item-wrap" onClick={navItemClickHandler}>
      <div className={clsx("nav-item", active && "active")}>
        <div className="left">
          <img className="icon" src={icon} alt={title} />
          <div className="title">{title}</div>
        </div>
        <div className="right">
          {subNav && (
            <img
              src="/assets/vectors/icons/arrow-top.svg"
              className={clsx(isActive && "mirrored", "transitioned")}
              alt="arrow"
            />
          )}
        </div>
      </div>
      <AnimatePresence>
        {subNav && isActive && (
          <motion.div
            className="sub-nav-items overflow-hidden"
            style={{ display: "none" }}
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
          >
            {subNav.map((el2, idx2) => {
              return (
                <div
                  className="sub-nav-item"
                  key={"sub-nav-items" + idx + "-" + idx2}
                >
                  <div className="nav-item">
                    <div className="left">
                      <img className="icon" src={el2.icon} alt={el2.title} />
                      <div className="title">{el2.title}</div>
                    </div>
                    <div className="right"></div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavItem;
