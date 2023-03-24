import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import Landing from "./pages/Landing/Landing";
import ProjectTickets from "./pages/ProjectTickets";
import ProjectBase from "./pages/ProjectBase";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import FindWorkers from "./pages/FindWorkers";
import FindTalent from "./pages/FindTalent";
import CreateNewTicket from "./pages/CreateNewTicket";
import TicketDetails from "./pages/TicketDetails";
import ProfileRatings from "./pages/ProfileRatings";
import Feedback from "./pages/Feedback";

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
          <Route path="/find-workers" element={<FindWorkers />} />
          <Route path="/find-talent" element={<FindTalent />} />
          <Route path="/create-new-ticket" element={<CreateNewTicket />} />
        </Route>
        <Route path="/" element={<MainLayout whiteBg />}>
          <Route path="/ticket-details" element={<TicketDetails />} />
          <Route path="/profile-ratings" element={<ProfileRatings />} />
        </Route>
        <Route path="/" element={<MainLayout whiteBg withoutDots noBgClr />}>
          <Route path="/feedback" element={<Feedback />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
