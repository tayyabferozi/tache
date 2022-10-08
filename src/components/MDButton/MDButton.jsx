import React, { useContext } from "react";
import { EditorContext } from "@uiw/react-md-editor";
import clsx from "clsx";

import Button from "../Button";
import "./MDButton.scss";

const MDButton = ({ mode, children }) => {
  const { preview, dispatch } = useContext(EditorContext);
  const click = () => {
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
  // if (preview === "edit") {
  //   return (
  //     <svg width="12" height="12" viewBox="0 0 520 520" onClick={click}>
  //       <polygon
  //         fill="currentColor"
  //         points="0 71.293 0 122 319 122 319 397 0 397 0 449.707 372 449.413 372 71.293"
  //       />
  //       <polygon
  //         fill="currentColor"
  //         points="429 71.293 520 71.293 520 122 481 123 481 396 520 396 520 449.707 429 449.413"
  //       />
  //     </svg>
  //   );
  // }
  // return (
  //   <svg width="12" height="12" viewBox="0 0 520 520" onClick={click}>
  //     <polygon
  //       fill="currentColor"
  //       points="0 71.293 0 122 38.023 123 38.023 398 0 397 0 449.707 91.023 450.413 91.023 72.293"
  //     />
  //     <polygon
  //       fill="currentColor"
  //       points="148.023 72.293 520 71.293 520 122 200.023 124 200.023 397 520 396 520 449.707 148.023 450.413"
  //     />
  //   </svg>
  // );
};

export default MDButton;
