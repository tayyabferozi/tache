import React from "react";
import { Link } from "react-router-dom";

import Section from "../../components/Section";

const Navbar = () => {
  return (
    <Section id="navbar">
      <div className="navbar-main">
        <Link to="/">
          <img
            className="logo"
            src="/assets/vectors/logo.svg"
            alt="logo"
            title="logo"
          />
        </Link>
      </div>
    </Section>
  );
};

export default Navbar;
