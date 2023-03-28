import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";

const SectionCollapsible = ({ className, title, icon, children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className={clsx("desc-box", className)}>
      <div className="sub-page-container">
        <div
          className="d-flex justify-content-between align-items-center"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          <h5 className="d-flex align-items-center gap-3">
            <img src={icon} alt={title} title={title} />
            {title}
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
              key="Title"
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SectionCollapsible;
