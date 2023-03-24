import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

import useOnClickOutside from "../../hooks/useOnClickOutside";
import "./Input.scss";

const Input = ({
  withArrowIcons,
  transparent,
  icon,
  textarea,
  id,
  wrapperClassName,
  inputClassName,
  className,
  labelClassName,
  type,
  label,
  placeholder,
  minLabel,
  darkLabel,
  value,
  incrementHandler,
  decrementHandler,
  length,
  maxLength,
  dropDownOptions,
  onChange,
  name,
  ...rest
}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [showPwd, setShowPwd] = useState(false);
  const [typeState, setTypeState] = useState();
  const [hasError] = useState(false);
  const formControlRef = useRef();

  const chooseOptionHandler = (val) => {
    setShowDropdown(false);
    onChange({ target: { name, value: val } });
  };

  const openDrawer = () => {
    if (filteredOptions?.length > 0) setShowDropdown(true);
  };

  const closeDrawer = () => {
    setShowDropdown(false);
  };

  useOnClickOutside(formControlRef, closeDrawer);

  useEffect(() => {
    setTypeState(type);
  }, [type]);

  useEffect(() => {
    const items = dropDownOptions?.filter((el) =>
      el.label.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredOptions(items);
  }, [value, dropDownOptions]);

  useEffect(() => {
    if (type === "password") {
      if (showPwd) {
        setTypeState("text");
      } else {
        setTypeState("password");
      }
    } else {
      setTypeState("text");
    }
  }, [type, setTypeState, showPwd]);

  useEffect(() => {
    setTypeState(type);
  }, [type]);

  return (
    <div
      className={clsx("custom-form-control", className, { transparent })}
      ref={formControlRef}
    >
      {label && (
        <label
          className={clsx(labelClassName, darkLabel && "text-light-1")}
          htmlFor={id}
        >
          {label} {minLabel && <div className="min-label">{minLabel}</div>}
        </label>
      )}
      <div className={clsx("input", wrapperClassName)}>
        {withArrowIcons && (
          <>
            <div className="arrow-icons">
              <div onClick={incrementHandler}>
                <img
                  src="/assets/vectors/icons/arrow-3.svg"
                  alt="arrow"
                  title="arrow"
                />
              </div>
              <div onClick={decrementHandler}>
                <img
                  src="/assets/vectors/icons/arrow-3.svg"
                  alt="arrow"
                  title="arrow"
                />
              </div>
            </div>
          </>
        )}
        {type === "password" && (
          <img
            onClick={() => setShowPwd((prevState) => !prevState)}
            className="pwd-icon"
            src={`/assets/imgs/${
              typeState === "password" ? "show" : "hide"
            }.png`}
            alt="pwd-show"
            title="Show password"
          />
        )}
        {icon && <img className="icon" src={icon.src} alt={icon.alt} />}
        {textarea ? (
          <>
            <textarea
              className={clsx(inputClassName, hasError && "border-red")}
              placeholder={placeholder}
              value={value}
              maxLength={maxLength}
              name={name}
              onChange={onChange}
              {...rest}
            ></textarea>
          </>
        ) : (
          <input
            className={clsx(inputClassName, hasError && "border-red")}
            id={id}
            type={typeState}
            placeholder={placeholder}
            value={value}
            maxLength={maxLength}
            name={name}
            onChange={onChange}
            onClick={openDrawer}
            {...rest}
          />
        )}
        {maxLength && (
          <div className="fs-14 text-light-2 text-end mt-2 max-counter">
            {value.length}/{maxLength}
          </div>
        )}

        <DropdownOptions
          value={value}
          showDropdown={showDropdown}
          filteredOptions={filteredOptions}
          chooseOptionHandler={chooseOptionHandler}
        />
      </div>
    </div>
  );
};

export default Input;

const DropdownOptions = React.memo(
  ({ value, showDropdown, filteredOptions, chooseOptionHandler }) => {
    return (
      <AnimatePresence>
        {showDropdown && (
          <motion.div
            className={clsx("dropdown-options")}
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            key={"dropdown-options" + Math.random()}
          >
            {filteredOptions?.map((el, idx) => {
              const { img, label, inActive } = el;
              return (
                <div
                  className={clsx("option", label === value && "active")}
                  key={"dropdown-option-" + label + idx}
                  onClick={() => {
                    if (!inActive) chooseOptionHandler(label);
                  }}
                >
                  {img && <img src={img} alt={label} />}
                  {label}
                </div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    );
  },
  (prevProps, nextProps) => {
    return false;
  }
);
