import React from "react";
import MDEditor from "@uiw/react-md-editor";

import MDButton from "../MDButton";

const codePreview = {
  name: "preview",
  keyCommand: "preview",
  value: "preview",
  icon: <MDButton mode="preview">Preview</MDButton>,
};

const codeEdit = {
  name: "edit",
  keyCommand: "edit",
  value: "edit",
  icon: <MDButton mode="edit">Writer</MDButton>,
};

const CustomMDEditor = ({
  name = "comment",
  value,
  inputChangeHandler,
  footText,
}) => {
  return (
    <div data-color-mode="light">
      <div className="md-editor-wrap">
        <MDEditor
          preview="edit"
          extraCommands={[codeEdit, codePreview]}
          height={200}
          value={value}
          onChange={(e) =>
            inputChangeHandler({
              target: {
                name,
                value: e,
              },
            })
          }
        />
        <div className="foot">{footText}</div>
      </div>
    </div>
  );
};

export default CustomMDEditor;
