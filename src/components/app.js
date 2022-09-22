import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import HashtagsInput from "./hashtags-input/hashtags-input.js";

function App() {
  const location = useLocation();

  return (
    <Routes location={location}>
      <Route path="/" element={<div>tache</div>} />
      <Route
        path="/hashtags"
        element={
          <div>
            <HashtagsInput />
          </div>
        }
      />
    </Routes>
  );
}

export default App;
