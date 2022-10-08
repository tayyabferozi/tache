import React, { useEffect, useState } from "react";
import clsx from "clsx";

import "./Input.scss";

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
  const [typeState, setTypeState] = useState();

  useEffect(() => {
    setTypeState(type);
  }, [type]);

  return (
    <div className={clsx("custom-form-control", className)}>
      {label && (
        <label className={clsx(labelClassName)} htmlFor={id}>
          {label} {minLabel && <div className="min-label">{minLabel}</div>}
        </label>
      )}
      <div className="input">
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
