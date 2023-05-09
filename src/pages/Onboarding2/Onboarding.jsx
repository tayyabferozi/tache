import React, { useState } from "react";

import ProjectInfo from "../Onboarding/ProjectInfo";
import Tasks from "../Onboarding/Tasks/Tasks";
import TeamMembers from "../Onboarding/TeamMembers";
import TeamMembers2 from "../Onboarding/TeamMembers2";
import Activity from "../Onboarding/Activity";
import "../Onboarding/Onboarding.scss";

const Onboarding = () => {
  const [showActivity, setShowActivity] = useState(false);

  const [projectState, setProjectState] = useState({
    privacy: "Public",
    subscribed: false,
    tasksCompleted: 1000,
    talentEarnings: 999999,
    talents: 244,
    tasks: [],
    teamMembers: [
      {
        img: "/assets/vectors/team-member-1.svg",
        name: "Gunawan Nosr",
        tasksCompleted: 324,
        rating: 4.7,
        badges: ["Frontend", "Backend", "UI"],
      },
      {
        img: "/assets/vectors/team-member-2.svg",
        name: "Twizzgreena",
        tasksCompleted: 324,
        rating: 4.7,
        badges: ["Frontend", "Backend", "UI"],
      },
      {
        img: "/assets/vectors/team-member-3.svg",
        name: "Tyara Moreno",
        tasksCompleted: 324,
        rating: 4.7,
        badges: ["Frontend", "Backend", "UI"],
      },
      {
        img: "/assets/vectors/team-member-4.svg",
        name: "Aprillia Wicky",
        tasksCompleted: 324,
        rating: 4.7,
        badges: ["Frontend", "Backend", "UI"],
      },
      {
        img: "/assets/vectors/team-member-1.svg",
        name: "Gunawan Nosr",
        tasksCompleted: 324,
        rating: 4.7,
        badges: ["Frontend", "Backend", "UI"],
      },
      {
        img: "/assets/vectors/team-member-2.svg",
        name: "Twizzgreena",
        tasksCompleted: 324,
        rating: 4.7,
        badges: ["Frontend", "Backend", "UI"],
      },
    ],
    teamMembers2: [
      {
        img: "/assets/vectors/team-member-1.svg",
        name: "Gunawan Nosr",
        designation: "Talent",
        rating: 4.7,
        box: 140,
      },
      {
        img: "/assets/vectors/team-member-1.svg",
        name: "Twizzgreena",
        designation: "Lead",
        rating: 4.7,
        box: 140,
      },
      {
        img: "/assets/vectors/team-member-1.svg",
        name: "Aprillia Wicky",
        designation: "Lead",
        rating: 4.7,
        box: 140,
      },
      {
        img: "/assets/vectors/team-member-1.svg",
        name: "Tyara Moreno",
        designation: "Talent",
        rating: 4.7,
        box: 140,
      },
    ],
    activity: [],
  });
  const [searchState, setSearchState] = useState("");
  const [sortState] = useState("Recently Added");

  const toggleSubscribed = () => {
    setProjectState((prevState) => {
      return { ...prevState, subscribed: !prevState.subscribed };
    });
  };

  const toggleActivityBar = () => {
    setShowActivity(!showActivity);
  };

  return (
    <div id="onboarding">
      <ProjectInfo project={projectState} toggleSubscribed={toggleSubscribed} />
      <div className="side-by-side overflow-x-hidden p-relative">
        <div className="flex-grow-1">
          <Tasks
            showActivity={showActivity}
            toggleActivityBar={toggleActivityBar}
            project={projectState}
            searchState={searchState}
            setSearchState={setSearchState}
            sortState={sortState}
          />
          <TeamMembers project={projectState} />
          <TeamMembers2 project={projectState} />
        </div>
        <Activity
          activity={projectState.activity}
          showActivity={showActivity}
          toggleActivityBar={toggleActivityBar}
        />
      </div>
    </div>
  );
};

export default Onboarding;
