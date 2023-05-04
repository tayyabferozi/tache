import React, { useRef } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { motion, useCycle, AnimatePresence } from "framer-motion";

import Section from "../../components/Section";
import "./Navbar.scss";

const navItems = [
  {
    text: "Project",
    to: "/project",
  },
  {
    text: "Companies",
    to: "/companies",
  },
  {
    text: "About Us",
    to: "/about-us",
  },
  {
    text: "Contact",
    to: "/contact",
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
    to: "",
  },
  {
    icon: "/assets/vectors/icons/profile.svg",
    title: "profile",
    alt: "profile",
    to: "/signup",
  },
];

const Navbar = () => {
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

          <Menu />

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
            animate={{ height: 310 }}
            exit={{ height: 0 }}
            className="menu-sm"
          >
            <Menu />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

const Menu = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="navbar-main">
        {navItems.map((el, idx) => (
          <NavLink key={"nav-item" + idx} to={el.to}>
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
