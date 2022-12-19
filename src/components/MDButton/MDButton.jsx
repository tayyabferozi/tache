import React, { useContext } from "react";
import { EditorContext } from "@uiw/react-md-editor";
import clsx from "clsx";

import Button from "../Button";
import "./MDButton.scss";

const MDButton = ({ mode, children }) => {
  const { preview, dispatch } = useContext(EditorContext);
  const click = (e) => {
    e.preventDefault();
    dispatch({
      // preview: preview === "edit" ? "preview" : "edit",
      preview: mode,
    });
  };

  return (
    <Button
      className={clsx(
        preview === mode && "active",
        "custom-md-editor-toolbar-button"
      )}
      onClick={click}
    >
      {children}
    </Button>
  );
};

export default MDButton;
