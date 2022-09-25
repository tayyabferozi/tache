import React, { useEffect, useState } from "react";
import clsx from "clsx";

const Input = ({
  icon,
  textarea,
  id,
  inputClassName,
  className,
  labelClassName,
  type,
  label,
  placeholder,
  minLabel,
  ...rest
}) => {
  const [showPwd, setShowPwd] = useState(false);
  const [typeState, setTypeState] = useState();

  useEffect(() => {
    setTypeState(type);
  }, [type]);

  // useEffect(() => {
  //   if (type === "password") {
  //     if (showPwd) {
  //       setTypeState("text");
  //     } else {
  //       setTypeState("password");
  //     }
  //   } else {
  //     setTypeState("text");
  //   }
  // }, [type, setTypeState, showPwd]);

  return (
    <div className={clsx("custom-form-control", className)}>
      {label && (
        <label className={clsx(labelClassName)} htmlFor={id}>
          {label} {minLabel && <div className="min-label">{minLabel}</div>}
        </label>
      )}
      <div className="input">
        {type === "password" && (
          <img
            onClick={() => setShowPwd((prevState) => !prevState)}
            className="pwd-icon"
            src={`/assets/vectors/pwd-${
              typeState === "password" ? "show" : "hide"
            }.svg`}
            alt="pwd-show"
            title="Show password"
          />
        )}
        {icon && <img className="icon" src={icon.src} alt={icon.alt} />}
        {textarea ? (
          <textarea
            className={clsx(inputClassName)}
            {...rest}
            placeholder={placeholder}
          ></textarea>
        ) : (
          <input
            className={clsx(inputClassName)}
            id={id}
            type={typeState}
            placeholder={placeholder}
            {...rest}
          />
        )}
      </div>
    </div>
  );
};

export default Input;
