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

const Left = ({
  items,
  isLeftCollapsed,
  setIsLeftCollapsed,
  selectedChatIdx,
  onChatSelect,
  loadMoreChatList,
  isMoreChatLoading,
  isRightCollapsed,
}) => {
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
      el.name.toLowerCase().includes(searchVal.toLowerCase())
    );
    setFilteredItems(filtered);
  }, [items, searchVal]);

  return (
    <div className={clsx("left")}>
      {(window.innerWidth <= 575
        ? isLeftCollapsed && isRightCollapsed
        : isLeftCollapsed) && (
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
          <div className="search-container">
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
          </div>

          <ChatsList
            items={filteredItems}
            selectedChatIdx={selectedChatIdx}
            onChatSelect={onChatSelect}
            isLeftCollapsed={isLeftCollapsed}
            setIsLeftCollapsed={setIsLeftCollapsed}
            loadMoreChatList={loadMoreChatList}
            isMoreChatLoading={isMoreChatLoading}
          />
        </div>
      </div>
    </div>
  );
};

export default Left;
