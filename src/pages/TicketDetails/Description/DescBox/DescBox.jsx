import clsx from "clsx";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const DescBox = ({ icon, title, children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="desc-box">
      <div className="sub-page-container">
        <div
          className="d-flex justify-content-between align-items-start"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          <div>
            <div className="fs-24 fs-575-20 d-flex align-items-start gap-10">
              <img className="mt-1" src={icon} alt={title} title={title} />
              <div>
                <h4>{title}</h4>
                <p className="fs-14">Fri 26 Aug</p>
              </div>
            </div>
          </div>
          <img
            className={clsx(
              isCollapsed && "mirrored",
              "mt-10 pt-1 d-block d-sm-none"
            )}
            src="/assets/vectors/icons/arrow-3.svg"
            alt="arrow"
            title="arrow"
          />
        </div>

        <AnimatePresence>
          {(!isCollapsed || window.innerWidth > 575) && (
            <motion.div
              className="mt-20"
              initial={{ height: "auto" }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default DescBox;
