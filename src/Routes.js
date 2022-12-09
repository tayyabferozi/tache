import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import Landing from "./pages/Landing/Landing";
import ProjectTickets from "./pages/ProjectTickets";
import ProjectBase from "./pages/ProjectBase";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Landing />} />
          <Route path="/project-tickets" element={<ProjectTickets />} />
          <Route path="/project-base" element={<ProjectBase />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
