import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import ProjectLayout from "./layouts/ProjectLayout";
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
import Onboarding from "./pages/Onboarding";
import Onboarding2 from "./pages/Onboarding2";
import OnboardingDesign from "./pages/OnboardingDesign";
import NewsAndAnnouncements from "./pages/NewsAndAnnouncements";
import Blog from "./pages/Blog";
import Chat from "./pages/Chat/Chat";

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
        <Route path="/" element={<MainLayout withStrips />}>
          <Route
            path="/news-and-announcements"
            element={<NewsAndAnnouncements />}
          />
        </Route>
        <Route path="/" element={<MainLayout whiteBg />}>
          <Route path="/ticket-details" element={<TicketDetails />} />
          <Route path="/profile-ratings" element={<ProfileRatings />} />
        </Route>
        <Route path="/" element={<MainLayout whiteBg noBgClr />}>
          <Route path="/blog-articles" element={<Blog type="articles" />} />
          <Route path="/blog-video" element={<Blog type="video" />} />
          <Route path="/blog-podcast" element={<Blog type="podcast" />} />
        </Route>
        <Route path="/" element={<MainLayout whiteBg withoutDots noBgClr />}>
          <Route path="/feedback" element={<Feedback />} />
        </Route>
        <Route path="/" element={<ProjectLayout />}>
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/onboarding2" element={<Onboarding2 />} />
          <Route path="/onboarding-design" element={<OnboardingDesign />} />
        </Route>
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
