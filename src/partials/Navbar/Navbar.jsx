import React, { useRef } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { motion, useCycle, AnimatePresence } from "framer-motion";
import clsx from "clsx";

import Section from "../../components/Section";
import AccordionNavItem from "./AccordionNavItem/AccordionNavItem";
import "./Navbar.scss";

// const navItems = [
//   {
//     text: "Project",
//     to: "/project",
//   },
//   {
//     text: "Companies",
//     to: "/companies",
//   },
//   {
//     text: "About Us",
//     to: "/about-us",
//   },
//   {
//     text: "Contact",
//     to: "/contact",
//   },
// ];

const navItems = [
  {
    text: "Profile",
    to: "/profile",
  },
  {
    text: "Profile Ratings",
    to: "/profile-ratings",
  },
  {
    text: "Project Tickets",
    to: "/project-tickets",
  },
  {
    text: "Project Base",
    to: "/project-base",
  },
];

const extraOptions = [
  {
    icon: "/assets/vectors/icons/notifications.svg",
    title: "notifications",
    alt: "notifications",
    to: "",
  },
  {
    icon: "/assets/vectors/icons/messages.svg",
    title: "messages",
    alt: "messages",
    to: "/chat",
  },
  {
    icon: "/assets/vectors/icons/profile.svg",
    title: "profile",
    alt: "profile",
    to: "/signup",
  },
];

const Navbar = ({ moreNavItems }) => {
  const burgerRef = useRef();

  const [open, cycleOpen] = useCycle(false, true);

  const toggleMenu = () => {
    burgerRef.current.classList.toggle("active");
    cycleOpen();
  };

  return (
    <>
      <Section id="navbar">
        <div className="navbar-wrap">
          <Link to="/">
            <img
              className="logo"
              src="/assets/vectors/logo.svg"
              alt="logo"
              title="logo"
            />
          </Link>

          <Menu moreNavItems={moreNavItems} />

          <div className="hamburger" onClick={toggleMenu}>
            <img
              src="/assets/vectors/icons/hamburger.svg"
              alt="hamburger"
              className="icon"
              ref={burgerRef}
            />
          </div>
        </div>
      </Section>

      <AnimatePresence>
        {open && (
          <motion.div
            key="sm-menu"
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="menu-sm d-lg-none"
          >
            <Menu moreNavItems={moreNavItems} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

const Menu = ({ moreNavItems }) => {
  const navigate = useNavigate();

  return (
    <>
      {moreNavItems?.length && (
        <>
          <div className="navbar-main more-nav-items d-lg-none">
            <div className="nav-heading d-lg-none pb-2">Navigation</div>
            {moreNavItems?.map((el, idx) => (
              <AccordionNavItem
                key={"extra-nav-item" + idx}
                idx={idx}
                {...el}
              />
            ))}
          </div>
        </>
      )}
      <div className="navbar-main">
        {navItems?.map((el, idx) => (
          <NavLink
            className={clsx("nav-item", {
              first: idx === 0,
              last: idx === navItems?.length - 1,
              active: true,
            })}
            key={"nav-item" + idx}
            to={el.to}
          >
            {el.text}
          </NavLink>
        ))}
      </div>

      <div className="options">
        {extraOptions.map((el, idx) => (
          <div className="option-item" key={"extra-option" + idx}>
            <img
              onClick={() => {
                if (el.to) navigate(el.to);
              }}
              src={el.icon}
              alt={el.alt}
              title={el.title}
            />
          </div>
        ))}
      </div>
    </>
  );
};
