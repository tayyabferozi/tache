import React, { useRef, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";

import ChatsList from "./ChatsList";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import "./MessagingLayout.scss";

const menuItems = [
  {
    icon: "/assets/vectors/icons/account.svg",
    label: "Profile",
  },
  {
    icon: "/assets/vectors/icons/settings.svg",
    label: "Account Settings",
  },
  {
    icon: "/assets/vectors/icons/logout.svg",
    label: "Logout",
  },
];

const MessagingLayout = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const menuTogglerRef = useRef(null);

  useOnClickOutside(menuTogglerRef, () => setIsMenuActive(false));

  return (
    <div id="messaging-layout">
      <div className="left">
        <div className="top">
          <Link to="/">
            <img src="/assets/vectors/logo.svg" alt="logo" />
          </Link>
          <div className="menu" ref={menuTogglerRef}>
            <img
              src="/assets/vectors/icons/menu.svg"
              alt="menu"
              onClick={() => setIsMenuActive(!isMenuActive)}
            />

            <AnimatePresence>
              {isMenuActive && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  className={clsx("menu-items", isMenuActive && "active")}
                >
                  {menuItems.map((el, idx) => {
                    return (
                      <div key={"chat-menu-item" + idx} className="menu-item">
                        <img src={el.icon} alt={el.label} />
                        <div className="fs-13 text-light-3">{el.label}</div>
                      </div>
                    );
                  })}
                  <div className="menu-item"></div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        <div className="chat-people-items">
          <div className="search">
            <img src="/assets/vectors/icons/search.svg" alt="magnifier" />
            <input type="text" placeholder="Search" />
          </div>

          <div className="text-light-2 mb-2 fs-14 px-30">Messages</div>
          <ChatsList />
        </div>
      </div>
      <div className="center">
        <Outlet />
      </div>
    </div>
  );
};

export default MessagingLayout;
