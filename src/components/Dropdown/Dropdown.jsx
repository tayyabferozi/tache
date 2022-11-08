import React, { useRef, useEffect, useState } from "react";
import $ from "jquery";

import useOnClickOutside from "../../hooks/useOnClickOutside";

import "./Dropdown.scss";

const Dropdown = ({ defaultValue, options, onChoose, children }) => {
  const dropdownRef = useRef();
  const menuRef = useRef();

  const [value, setValue] = useState("");

  const closeDrawer = () => {
    $(menuRef.current).slideUp();
  };

  const toggleDrawer = () => {
    $(menuRef.current).slideToggle();
  };

  const chooseOptionHandler = (text) => {
    setValue(text);
    closeDrawer();
  };

  useOnClickOutside(dropdownRef, closeDrawer);

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  useEffect(() => {
    if (onChoose) onChoose(value);
  }, [value, onChoose]);

  return (
    <div className="dropdown-big" ref={dropdownRef}>
      {defaultValue ? (
        <div className="dropdown-big__main" onClick={toggleDrawer}>
          <div className="text">{value}</div>
          <img
            className="icon"
            src="/assets/vectors/icons/dropdown.svg"
            alt="dropdown"
            title="dropdown"
          />
        </div>
      ) : (
        <div onClick={toggleDrawer}>{children}</div>
      )}
      <div className="dropdown-big__options" ref={menuRef}>
        {options?.map((el, idx) => {
          const { img, label } = el;
          return (
            <div
              className="option"
              key={"dropdown-option-" + label + idx}
              onClick={() => chooseOptionHandler(label)}
            >
              {img && <img src={img} alt={label} />}
              {label}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dropdown;
