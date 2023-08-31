import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

import Button from "../../../../components/Button/Button";
import useOnClickOutside from "../../../../hooks/useOnClickOutside";
import "./Top.scss";

const Top = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const menuTogglerRef = useRef(null);

  useOnClickOutside(menuTogglerRef, () => setIsMenuActive(false));

  return (
    <div className="top">
      <div className="top-main">
        <div className="left">
          <img src="/assets/imgs/avatar-9.png" alt="user" />
          <div>
            <div className="title text-light-1">Alexander</div>
            <div className="text-light-2 d-flex align-items-center gap-10 mt-1 active-status">
              <div className="active"></div>
              Active
            </div>
          </div>
        </div>
        <div className="right d-flex align-items-center gap-10">
          <Button
            bordered
            icon={{
              src: "/assets/vectors/icons/call.svg",
              title: "call",
              alt: "call",
            }}
          />
          <Button
            bordered
            icon={{
              src: "/assets/vectors/icons/video-call.svg",
              title: "video-call",
              alt: "video-call",
            }}
          />
          <div className="p-relative">
            <div ref={menuTogglerRef}>
              <Button
                bordered
                icon={{
                  src: "/assets/vectors/icons/more-2.svg",
                  title: "more",
                  alt: "more",
                }}
                onClick={() => setIsMenuActive(!isMenuActive)}
              />
            </div>
            <AnimatePresence>
              {isMenuActive && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  className={clsx(
                    "menu-items user-menu",
                    isMenuActive && "active"
                  )}
                >
                  <div
                    className="menu-item"
                    onClick={() => {
                      setIsMenuActive(false);
                    }}
                  >
                    <img src="/assets/vectors/icons/redo.svg" alt="redo" />
                    <div className="fs-13 text-light-3">Option 1</div>
                  </div>
                  <div className="menu-item" onClick={() => {}}>
                    <img src="/assets/vectors/icons/trash-2.svg" alt="trash" />
                    <div className="fs-13 text-light-3">Option 2</div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
