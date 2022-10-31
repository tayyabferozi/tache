import React, { useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import $ from "jquery";

import Section from "../../components/Section";

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
  },
  {
    icon: "/assets/vectors/icons/messages.svg",
    title: "messages",
    alt: "messages",
  },
  {
    icon: "/assets/vectors/icons/profile.svg",
    title: "profile",
    alt: "profile",
  },
];

const Navbar = () => {
  const burgerRef = useRef();

  const toggleMenu = () => {
    $(".menu-sm").slideToggle();
    $(burgerRef.current).toggleClass("active");
  };

  return (
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

        <div className="menu-sm" style={{ display: "none" }}>
          <Menu />
        </div>

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
  );
};

export default Navbar;

const Menu = () => (
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
          <img src={el.icon} alt={el.alt} title={el.title} />
        </div>
      ))}
    </div>
  </>
);
