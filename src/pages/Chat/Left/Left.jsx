import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";

import ChatsList from "./ChatsList";
import useOnClickOutside from "../../../hooks/useOnClickOutside";
import "./Left.scss";

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

const items = [
  {
    img: "/assets/imgs/avatar-5.png",
    name: "Alexander",
    msg: "Nisi condimentum non.aslfaksdfkljh",
    time: "07:19 PM",
    active: true,
  },
  {
    img: "/assets/imgs/avatar-6.png",
    name: "Paquito",
    msg: "Nisi condimentum non.",
    time: "07:19 PM",
    clicked: true,
  },
  {
    img: "/assets/imgs/avatar-7.png",
    name: "Lesley",
    msg: "Nisi condimentum non.",
    time: "07:19 PM",
    active: true,
    unread: true,
  },
  {
    img: "/assets/imgs/avatar-8.png",
    name: "Alucard",
    msg: "Nisi condimentum non.",
    time: "07:19 PM",
  },
  {
    img: "/assets/imgs/avatar-9.png",
    name: "Melissa",
    msg: "Nisi condimentum non.",
    time: "07:19 PM",
    active: true,
    unread: true,
  },
  {
    img: "/assets/imgs/avatar-4.png",
    name: "Ruby",
    msg: "Nisi condimentum non.",
    time: "07:19 PM",
  },
  {
    img: "/assets/imgs/avatar-5.png",
    name: "Alexander",
    msg: "Nisi condimentum non.aslfaksdfkljh",
    time: "07:19 PM",
    active: true,
  },
  {
    img: "/assets/imgs/avatar-6.png",
    name: "Paquito",
    msg: "Nisi condimentum non.",
    time: "07:19 PM",
    clicked: true,
  },
  {
    img: "/assets/imgs/avatar-7.png",
    name: "Lesley",
    msg: "Nisi condimentum non.",
    time: "07:19 PM",
    active: true,
    unread: true,
  },
  {
    img: "/assets/imgs/avatar-8.png",
    name: "Alucard",
    msg: "Nisi condimentum non.",
    time: "07:19 PM",
  },
  {
    img: "/assets/imgs/avatar-9.png",
    name: "Melissa",
    msg: "Nisi condimentum non.",
    time: "07:19 PM",
    active: true,
    unread: true,
  },
  {
    img: "/assets/imgs/avatar-4.png",
    name: "Ruby",
    msg: "Nisi condimentum non.",
    time: "07:19 PM",
  },
];

const Left = ({ isLeftCollapsed, setIsLeftCollapsed }) => {
  const [filteredItems, setFilteredItems] = useState(items);
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [searchVal, setSearchVal] = useState("");
  const menuTogglerRef = useRef(null);

  useOnClickOutside(menuTogglerRef, () => setIsMenuActive(false));

  const inputChangeHandler = (e) => {
    setSearchVal(e.target.value);
  };

  useEffect(() => {
    const filtered = items.filter((el) =>
      el.name.toLowerCase().includes(searchVal)
    );
    setFilteredItems(filtered);
  }, [searchVal]);

  return (
    <div className={clsx("left")}>
      {isLeftCollapsed && (
        <div
          className="chevron-container"
          onClick={() => setIsLeftCollapsed(!isLeftCollapsed)}
        >
          <img
            className={clsx("chevron-left moved")}
            src="/assets/vectors/icons/chevron-circle-left.svg"
            alt="chevron"
          />
        </div>
      )}
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
          </motion.div>
        )}
      </AnimatePresence>
      <div className={clsx("left-inner", isLeftCollapsed && "collapsed")}>
        <div className="top">
          <Link to="/">
            <img className="logo" src="/assets/vectors/logo.svg" alt="logo" />
          </Link>
          <div className={clsx("menu")} ref={menuTogglerRef}>
            <img
              src="/assets/vectors/icons/menu.svg"
              alt="menu"
              onClick={() => setIsMenuActive(!isMenuActive)}
            />
          </div>
        </div>
        <div className="chat-people-items">
          <div className="search">
            <img src="/assets/vectors/icons/search.svg" alt="magnifier" />
            <input
              type="text"
              placeholder="Search"
              value={searchVal}
              onChange={inputChangeHandler}
            />
          </div>

          <div className="p-relative">
            <div className="text-light-2 mb-2 fs-14 px-30">Messages</div>
            <img
              onClick={() => setIsLeftCollapsed(!isLeftCollapsed)}
              className={clsx("chevron-left", isLeftCollapsed && "moved")}
              src="/assets/vectors/icons/chevron-circle-left.svg"
              alt="chevron"
            />
          </div>
          <ChatsList items={filteredItems} />
        </div>
      </div>
    </div>
  );
};

export default Left;
