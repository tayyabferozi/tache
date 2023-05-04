import React, { useState } from "react";

import ProjectInfo from "./ProjectInfo";
import Tasks from "./Tasks/Tasks";
import TeamMembers from "./TeamMembers";
import TeamMembers2 from "./TeamMembers2";
import Activity from "./Activity";
import "./Onboarding.scss";

const Onboarding = () => {
  const [showActivity, setShowActivity] = useState(false);

  const [projectState, setProjectState] = useState({
    privacy: "Public",
    subscribed: false,
    tasksCompleted: 742,
    talentEarnings: 153,
    talents: 244,
    tasks: [
      {
        id: "onboarding-ticket-1",
        img: "assets/imgs/brand-dropbox.png",
        title: "Task title 1",
        days: 5,
        description:
          "Lorem ipsum dolor sit amet daha sameh consectetur. sahean moal name",
        tag: "Database",
        price: 531.02,
      },
      {
        id: "onboarding-ticket-2",
        img: "assets/imgs/brand-dropbox.png",
        title: "Task title 2",
        days: 5,
        description:
          "Lorem ipsum dolor sit amet daha sameh consectetur. sahean moal name",
        tag: "Database",
        price: 531.02,
      },
      {
        id: "onboarding-ticket-3",
        img: "assets/imgs/brand-dropbox.png",
        title: "Task title 3",
        days: 5,
        description:
          "Lorem ipsum dolor sit amet daha sameh consectetur. sahean moal name",
        tag: "Database",
        price: 531.02,
      },
      {
        id: "onboarding-ticket-4",
        img: "assets/imgs/brand-dropbox.png",
        title: "Task title 4",
        days: 5,
        description:
          "Lorem ipsum dolor sit amet daha sameh consectetur. sahean moal name",
        tag: "Database",
        price: 531.02,
      },
      {
        id: "onboarding-ticket-5",
        img: "assets/imgs/brand-dropbox.png",
        title: "Task title 5",
        days: 5,
        description:
          "Lorem ipsum dolor sit amet daha sameh consectetur. sahean moal name",
        tag: "Database",
        price: 531.02,
      },
      {
        id: "onboarding-ticket-6",
        img: "assets/imgs/brand-dropbox.png",
        title: "Task title 6",
        days: 5,
        description:
          "Lorem ipsum dolor sit amet daha sameh consectetur. sahean moal name",
        tag: "Database",
        price: 531.02,
      },
      {
        id: "onboarding-ticket-7",
        img: "assets/imgs/brand-dropbox.png",
        title: "Task title 7",
        days: 5,
        description:
          "Lorem ipsum dolor sit amet daha sameh consectetur. sahean moal name",
        tag: "Database",
        price: 531.02,
      },
      {
        id: "onboarding-ticket-8",
        img: "assets/imgs/brand-dropbox.png",
        title: "Task title 8",
        days: 5,
        description:
          "Lorem ipsum dolor sit amet daha sameh consectetur. sahean moal name",
        tag: "Database",
        price: 531.02,
      },
      {
        id: "onboarding-ticket-9",
        img: "assets/imgs/brand-dropbox.png",
        title: "Task title 9",
        days: 5,
        description:
          "Lorem ipsum dolor sit amet daha sameh consectetur. sahean moal name",
        tag: "Database",
        price: 531.02,
      },
      {
        id: "onboarding-ticket-10",
        img: "assets/imgs/brand-dropbox.png",
        title: "Task title 10",
        days: 5,
        description:
          "Lorem ipsum dolor sit amet daha sameh consectetur. sahean moal name",
        tag: "Database",
        price: 531.02,
      },
      {
        id: "onboarding-ticket-11",
        img: "assets/imgs/brand-dropbox.png",
        title: "Task title 11",
        days: 5,
        description:
          "Lorem ipsum dolor sit amet daha sameh consectetur. sahean moal name",
        tag: "Database",
        price: 531.02,
      },
      {
        id: "onboarding-ticket-12",
        img: "assets/imgs/brand-dropbox.png",
        title: "Task title 12",
        days: 5,
        description:
          "Lorem ipsum dolor sit amet daha sameh consectetur. sahean moal name",
        tag: "Database",
        price: 531.02,
      },
      {
        id: "onboarding-ticket-13",
        img: "assets/imgs/brand-dropbox.png",
        title: "Task title 13",
        days: 5,
        description:
          "Lorem ipsum dolor sit amet daha sameh consectetur. sahean moal name",
        tag: "Database",
        price: 531.02,
      },
      {
        id: "onboarding-ticket-14",
        img: "assets/imgs/brand-dropbox.png",
        title: "Task title 14",
        days: 5,
        description:
          "Lorem ipsum dolor sit amet daha sameh consectetur. sahean moal name",
        tag: "Database",
        price: 531.02,
      },
      {
        id: "onboarding-ticket-15",
        img: "assets/imgs/brand-dropbox.png",
        title: "Task title 15",
        days: 5,
        description:
          "Lorem ipsum dolor sit amet daha sameh consectetur. sahean moal name",
        tag: "Database",
        price: 531.02,
      },
      {
        id: "onboarding-ticket-16",
        img: "assets/imgs/brand-dropbox.png",
        title: "Task title 16",
        days: 5,
        description:
          "Lorem ipsum dolor sit amet daha sameh consectetur. sahean moal name",
        tag: "Database",
        price: 531.02,
      },
      {
        id: "onboarding-ticket-17",
        img: "assets/imgs/brand-dropbox.png",
        title: "Task title 17",
        days: 5,
        description:
          "Lorem ipsum dolor sit amet daha sameh consectetur. sahean moal name",
        tag: "Database",
        price: 531.02,
      },
      {
        id: "onboarding-ticket-18",
        img: "assets/imgs/brand-dropbox.png",
        title: "Task title 18",
        days: 5,
        description:
          "Lorem ipsum dolor sit amet daha sameh consectetur. sahean moal name",
        tag: "Database",
        price: 531.02,
      },
      {
        id: "onboarding-ticket-19",
        img: "assets/imgs/brand-dropbox.png",
        title: "Task title 19",
        days: 5,
        description:
          "Lorem ipsum dolor sit amet daha sameh consectetur. sahean moal name",
        tag: "Database",
        price: 531.02,
      },
      {
        id: "onboarding-ticket-20",
        img: "assets/imgs/brand-dropbox.png",
        title: "Task title 20",
        days: 5,
        description:
          "Lorem ipsum dolor sit amet daha sameh consectetur. sahean moal name",
        tag: "Database",
        price: 531.02,
      },
      {
        id: "onboarding-ticket-21",
        img: "assets/imgs/brand-dropbox.png",
        title: "Task title 21",
        days: 5,
        description:
          "Lorem ipsum dolor sit amet daha sameh consectetur. sahean moal name",
        tag: "Database",
        price: 531.02,
      },
      {
        id: "onboarding-ticket-22",
        img: "assets/imgs/brand-dropbox.png",
        title: "Task title 22",
        days: 5,
        description:
          "Lorem ipsum dolor sit amet daha sameh consectetur. sahean moal name",
        tag: "Database",
        price: 531.02,
      },
      {
        id: "onboarding-ticket-23",
        img: "assets/imgs/brand-dropbox.png",
        title: "Task title 23",
        days: 5,
        description:
          "Lorem ipsum dolor sit amet daha sameh consectetur. sahean moal name",
        tag: "Database",
        price: 531.02,
      },
      {
        id: "onboarding-ticket-24",
        img: "assets/imgs/brand-dropbox.png",
        title: "Task title 24",
        days: 5,
        description:
          "Lorem ipsum dolor sit amet daha sameh consectetur. sahean moal name",
        tag: "Database",
        price: 531.02,
      },
      {
        id: "onboarding-ticket-25",
        img: "assets/imgs/brand-dropbox.png",
        title: "Task title 25",
        days: 5,
        description:
          "Lorem ipsum dolor sit amet daha sameh consectetur. sahean moal name",
        tag: "Database",
        price: 531.02,
      },
      {
        id: "onboarding-ticket-26",
        img: "assets/imgs/brand-dropbox.png",
        title: "Task title 26",
        days: 5,
        description:
          "Lorem ipsum dolor sit amet daha sameh consectetur. sahean moal name",
        tag: "Database",
        price: 531.02,
      },
      {
        id: "onboarding-ticket-27",
        img: "assets/imgs/brand-dropbox.png",
        title: "Task title 27",
        days: 5,
        description:
          "Lorem ipsum dolor sit amet daha sameh consectetur. sahean moal name",
        tag: "Database",
        price: 531.02,
      },
      {
        id: "onboarding-ticket-28",
        img: "assets/imgs/brand-dropbox.png",
        title: "Task title 28",
        days: 5,
        description:
          "Lorem ipsum dolor sit amet daha sameh consectetur. sahean moal name",
        tag: "Database",
        price: 531.02,
      },
      {
        id: "onboarding-ticket-29",
        img: "assets/imgs/brand-dropbox.png",
        title: "Task title 29",
        days: 5,
        description:
          "Lorem ipsum dolor sit amet daha sameh consectetur. sahean moal name",
        tag: "Database",
        price: 531.02,
      },
      {
        id: "onboarding-ticket-30",
        img: "assets/imgs/brand-dropbox.png",
        title: "Task title 30",
        days: 5,
        description:
          "Lorem ipsum dolor sit amet daha sameh consectetur. sahean moal name",
        tag: "Database",
        price: 531.02,
      },
      {
        id: "onboarding-ticket-31",
        img: "assets/imgs/brand-dropbox.png",
        title: "Task title 31",
        days: 5,
        description:
          "Lorem ipsum dolor sit amet daha sameh consectetur. sahean moal name",
        tag: "Database",
        price: 531.02,
      },
      {
        id: "onboarding-ticket-32",
        img: "assets/imgs/brand-dropbox.png",
        title: "Task title 32",
        days: 5,
        description:
          "Lorem ipsum dolor sit amet daha sameh consectetur. sahean moal name",
        tag: "Database",
        price: 531.02,
      },
      {
        id: "onboarding-ticket-33",
        img: "assets/imgs/brand-dropbox.png",
        title: "Task title 33",
        days: 5,
        description:
          "Lorem ipsum dolor sit amet daha sameh consectetur. sahean moal name",
        tag: "Database",
        price: 531.02,
      },
      {
        id: "onboarding-ticket-34",
        img: "assets/imgs/brand-dropbox.png",
        title: "Task title 34",
        days: 5,
        description:
          "Lorem ipsum dolor sit amet daha sameh consectetur. sahean moal name",
        tag: "Database",
        price: 531.02,
      },
      {
        id: "onboarding-ticket-35",
        img: "assets/imgs/brand-dropbox.png",
        title: "Task title 35",
        days: 5,
        description:
          "Lorem ipsum dolor sit amet daha sameh consectetur. sahean moal name",
        tag: "Database",
        price: 531.02,
      },
      {
        id: "onboarding-ticket-36",
        img: "assets/imgs/brand-dropbox.png",
        title: "Task title 36",
        days: 5,
        description:
          "Lorem ipsum dolor sit amet daha sameh consectetur. sahean moal name",
        tag: "Database",
        price: 531.02,
      },
    ],
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
        designation: "Co-founder",
        rating: 4.7,
        box: 140,
      },
      {
        img: "/assets/vectors/team-member-1.svg",
        name: "Twizzgreena",
        designation: "Co-founder",
        rating: 4.7,
        box: 140,
      },
      {
        img: "/assets/vectors/team-member-1.svg",
        name: "Tyara Moreno",
        designation: "Co-founder",
        rating: 4.7,
        box: 140,
      },
      {
        img: "/assets/vectors/team-member-1.svg",
        name: "Aprillia Wicky",
        designation: "Co-founder",
        rating: 4.7,
        box: 140,
      },
    ],
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
      <div className="side-by-side overflow-x-hidden">
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
          showActivity={showActivity}
          toggleActivityBar={toggleActivityBar}
        />
      </div>
    </div>
  );
};

export default Onboarding;
