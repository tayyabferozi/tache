import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

import Button from "../../../../components/Button";

const HiringCompanies = ({ editState, hiredBy, setUser }) => {
  const delCompany = (idx) => {
    setUser((prevState) => {
      const newState = JSON.parse(JSON.stringify(prevState));

      newState.hiredBy.splice(idx, 1);

      return newState;
    });
  };

  return (
    <div className="hired-by mt-20">
      <strong className="fs-14">Hired by</strong>

      <div className="companies mt-20">
        {hiredBy.map((el, idx) => {
          return (
            <div key={"hiring-company" + idx} className="company-item">
              <AnimatePresence>
                {editState && (
                  <motion.img
                    key={"company-remove" + el.id}
                    initial={{
                      scale: 0,
                    }}
                    animate={{
                      scale: 1,
                      transition: { delay: 0.2 * (idx + 1) },
                    }}
                    exit={{
                      scale: 1,
                      transition: { delay: 1 - 0.3 * (idx + 1) },
                    }}
                    className="remove"
                    src="/assets/vectors/icons/remove.svg"
                    alt="remove"
                    onClick={() => delCompany(idx)}
                  />
                )}
              </AnimatePresence>
              <div className="logo">
                <img src={el.img} alt={el.name} />
              </div>
              <div className="text">
                <div className="fs-14 fw-500">{el.name}</div>
                <div className="fs-12 mt-1">{el.title}</div>
              </div>
            </div>
          );
        })}

        <Button
          icon={{
            src: editState ? "/assets/vectors/icons/plus.svg" : "",
          }}
          className={clsx("mb-10 gap-10", !editState && "view-more")}
          primaryLight
        >
          {editState ? "Add Companies" : "View more"}
        </Button>
      </div>
    </div>
  );
};

export default HiringCompanies;
