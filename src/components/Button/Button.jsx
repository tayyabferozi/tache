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
  dashed,
  noText,
  textClassName,
  persistHeight,
  cref,
  white,
  borderGrey,
  ...rest
}) => {
  const classes = clsx(
    "btn",
    className,
    grey && "btn-grey",
    primary && "btn-primary",
    primaryLight && "btn-primary-light",
    bordered && !primary && "btn-bordered",
    bordered && primary && "btn-primary-bordered",
    lightGrey && "btn-light-grey",
    dashed && "btn-dashed",
    inline && "btn-inlined",
    persistHeight && "persist-height",
    white && "btn-white",
    borderGrey && "grey-border"
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
      {!noText && (
        <div className={clsx("btn-text", textClassName)}>{children}</div>
      )}
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
      <button ref={cref} className={classes} {...rest}>
        {btnChilren}
      </button>
    );
  }
};

export default Button;
