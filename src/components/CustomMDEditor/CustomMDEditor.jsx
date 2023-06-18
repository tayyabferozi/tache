import React, { useState } from "react";
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
  reply,
  placeholder = "",
  value,
  inputChangeHandler,
  footText,
  maxChar,
  noExtraCommands,
}) => {
  const [charLen, setCharLen] = useState(0);

  return (
    <div data-color-mode="light">
      <div className="md-editor-wrap">
        <MDEditor
          preview="edit"
          extraCommands={
            noExtraCommands
              ? []
              : reply
              ? [
                  {
                    name: "edit",
                    keyCommand: "edit",
                    value: "edit",
                    icon: (
                      <MDButton mode="edit" disabled={true}>
                        {reply}
                      </MDButton>
                    ),
                  },
                ]
              : [codeEdit, codePreview]
          }
          height={200}
          value={value}
          textareaProps={{
            placeholder: placeholder,
          }}
          onChange={(e) => {
            if (maxChar && e.length > maxChar) return;
            setCharLen(e.length);
            inputChangeHandler({
              target: {
                name,
                value: e,
              },
            });
          }}
        />
        <div className="foot">
          {maxChar ? charLen + "/" + maxChar : footText}
        </div>
      </div>
    </div>
  );
};

export default CustomMDEditor;
