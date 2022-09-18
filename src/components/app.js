import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  return (
    <Routes location={location}>
      <Route path="/" element={<div>tache</div>} />
    </Routes>
  );
}

export default App;
