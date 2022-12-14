import React from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";

import "./Button.scss";

const Button = ({
  className,
  to,
  primary,
  grey,
  bordered,
  primaryLight,
  lightGrey,
  children,
  icon,
  inline,
  textClassName,
  persistHeight,
  ...rest
}) => {
  const classes = clsx(
    "btn",
    className,
    grey && "btn-grey",
    primary && "btn-primary",
    primaryLight && "btn-primary-light",
    bordered && "btn-bordered",
    lightGrey && "btn-light-grey",
    inline && "btn-inlined",
    persistHeight && "persist-height"
  );

  let btnChilren = (
    <>
      {icon && (
        <div className={clsx("btn-icon", icon.rootClassName)}>
          <img
            className={clsx("d-block", icon.className)}
            src={icon.src}
            title={icon.title}
            alt={icon.alt}
          />
        </div>
      )}
      <div className={clsx("btn-text", textClassName)}>{children}</div>
    </>
  );

  if (to) {
    return (
      <Link className={classes} to={to} {...rest}>
        {btnChilren}
      </Link>
    );
  } else {
    return (
      <button className={classes} {...rest}>
        {btnChilren}
      </button>
    );
  }
};

export default Button;
