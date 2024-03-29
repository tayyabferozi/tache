import React, { useEffect, useState } from "react";

import Section from "../../components/Section";
import UserInfo from "./UserInfo";
import TicketsInfo from "../../components/TicketsInfo";
import Tickets from "./Tickets";
import Projects from "./Projects";
import "./Profile.scss";

const Profile = () => {
  const [show, setShow] = useState(false);
  const [editState, setEditState] = useState(false);
  const [userState, setUserState] = useState({
    name: "Weihang Lo",
    location: "Nanjing, China",
    followers: "1.1K",
    following: "300",
    skills: [
      { id: 1, label: "Frontend" },
      { id: 2, label: "Database" },
      { id: 3, label: "Backend" },
      { id: 4, label: "Programmer" },
    ],
    hiredBy: [
      {
        id: 1,
        img: "/assets/vectors/icons/logo-dribbble.svg",
        name: "Dribbble.inc",
        title: "Frontend Developer",
      },
      {
        id: 2,
        img: "/assets/vectors/icons/logo-google-2.svg",
        name: "Google",
        title: "Database",
      },
      {
        id: 3,
        img: "/assets/vectors/icons/logo-twitter.svg",
        name: "Twitter",
        title: "Backend Developer",
      },
      {
        id: 4,
        img: "/assets/vectors/icons/logo-google-2.svg",
        name: "Google",
        title: "Database",
      },
      {
        id: 5,
        img: "/assets/vectors/icons/logo-dribbble.svg",
        name: "Dribbble.inc",
        title: "Frontend Developer",
      },
    ],
    allCompanies: [
      {
        id: 1,
        img: "/assets/vectors/icons/logo-dribbble.svg",
        name: "Dribbble.inc",
        title: "Frontend Developer",
      },
      {
        id: 2,
        img: "/assets/vectors/icons/logo-google-2.svg",
        name: "Google",
        title: "Database",
      },
      {
        id: 3,
        img: "/assets/vectors/icons/logo-twitter.svg",
        name: "Twitter",
        title: "Backend Developer",
      },
      {
        id: 4,
        img: "/assets/vectors/icons/logo-google-2.svg",
        name: "Google",
        title: "Database",
      },
      {
        id: 5,
        img: "/assets/vectors/icons/logo-dribbble.svg",
        name: "Dribbble.inc",
        title: "Frontend Developer",
      },
    ],
    about: `I'm Weihang Lo, a software engineer from Taiwan and also a Rustacean in [Rust Taiwan](https://www.google.com/) community. I love Rust, cycling and open source. Currently contribute to "Cargo: The Rust package manager" regularly and write articles for ["Rust Algorithm Club"](https://www.google.com/) (in Chinese).  \n Things I code with: Rust, Kubernetes, Node.js, Python, web development, DevOps, finding bugs.  \n You can contact me by clicking badges above, or just submit a new issue directly 😀.`,
    // pinnedTickets: [],
    pinnedTickets: [
      {
        id: 9,
        title: "Ticket title 1",
        date: "Thu 23 Feb",
        payment: "100",
        body: "Lorem ipsum dolor sit amet consectetur. Orci purus aenean massa elementum sed done consequat done",
        tags: ["Frontend", "Database", "UI", "Backend", "Full-stack"],
        amount: false,
        mysteryBonus: 20,
      },
      {
        id: 10,
        title: "Ticket title 2",
        date: "Thu 23 Feb",
        payment: "100",
        body: "Lorem ipsum dolor sit amet consectetur. Orci purus aenean massa elementum sed done consequat done",
        tags: ["Frontend", "Database", "UI"],
        amount: false,
      },
      {
        id: 11,
        title: "Ticket title 3",
        date: "Thu 23 Feb",
        payment: "100",
        body: "Lorem ipsum dolor sit amet consectetur. Orci purus aenean massa elementum sed done consequat done",
        tags: ["Frontend", "Database", "UI"],
        amount: false,
        mysteryBonus: 20,
      },
      {
        id: 12,
        title: "Ticket title 4",
        date: "Thu 23 Feb",
        payment: "100",
        body: "Lorem ipsum dolor sit amet consectetur. Orci purus aenean massa elementum sed done consequat done",
        tags: ["Frontend", "Database", "UI"],
        amount: false,
      },
      {
        id: 13,
        title: "Ticket title 5",
        date: "Thu 23 Feb",
        payment: "100",
        body: "Lorem ipsum dolor sit amet consectetur. Orci purus aenean massa elementum sed done consequat done",
        tags: ["Frontend", "Database", "UI"],
        amount: false,
        mysteryBonus: 20,
      },
      {
        id: 14,
        title: "Ticket title 6",
        date: "Thu 23 Feb",
        payment: "100",
        body: "Lorem ipsum dolor sit amet consectetur. Orci purus aenean massa elementum sed done consequat done",
        tags: ["Frontend", "Database", "UI"],
        amount: false,
      },
    ],
    recentTickets: [
      {
        id: 1,
        title: "Ticket title 1",
        date: "Thu 23 Feb",
        payment: "100",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        tags: ["Frontend", "Database", "UI", "Backend", "Full-stack"],
        amount: false,
        mysteryBonus: 20,
      },
      {
        id: 2,
        title: "Ticket title 2",
        date: "Thu 23 Feb",
        payment: "100",
        body: "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
        tags: ["Frontend", "Database", "UI"],
        amount: false,
      },
      {
        id: 3,
        title: "Ticket title 3",
        date: "Thu 23 Feb",
        payment: "100",
        body: "Lorem ipsum dolor sit amet consectetur. Orci purus aenean massa elementum sed done consequat done",
        tags: ["Frontend", "Database", "UI"],
        amount: false,
        mysteryBonus: 20,
      },
      {
        id: 4,
        title: "Ticket title 4",
        date: "Thu 23 Feb",
        payment: "100",
        body: "Lorem ipsum dolor sit amet consectetur. Orci purus aenean massa elementum sed done consequat done",
        tags: ["Frontend", "Database", "UI"],
        amount: false,
      },
      {
        id: 5,
        title: "Ticket title 5",
        date: "Thu 23 Feb",
        payment: "100",
        body: "Lorem ipsum dolor sit amet consectetur. Orci purus aenean massa elementum sed done consequat done",
        tags: ["Frontend", "Database", "UI"],
        amount: false,
        mysteryBonus: 20,
      },
      {
        id: 6,
        title: "Ticket title 6",
        date: "Thu 23 Feb",
        payment: "100",
        body: "Lorem ipsum dolor sit amet consectetur. Orci purus aenean massa elementum sed done consequat done",
        tags: ["Frontend", "Database", "UI"],
        amount: false,
      },
    ],
    projects: [
      {
        title: "Technology design template",
        date: "Thu 23 Feb",
        access: "public",
        body: "Lorem ipsum dolor sit amet consectetur. Orci purus aenean massa elementum sed done consequ",
        totalTickets: 12,
        activeTickets: 12,
      },
      {
        title: "Technology design template",
        date: "Thu 23 Feb",
        access: "public",
        body: "Lorem ipsum dolor sit amet consectetur. Orci purus aenean massa elementum sed done consequ",
        totalTickets: 12,
        activeTickets: 12,
      },
      {
        title: "Technology design template",
        date: "Thu 23 Feb",
        access: "public",
        body: "Lorem ipsum dolor sit amet consectetur. Orci purus aenean massa elementum sed done consequ",
        totalTickets: 12,
        activeTickets: 12,
      },
      {
        title: "Technology design template",
        date: "Thu 23 Feb",
        access: "public",
        body: "Lorem ipsum dolor sit amet consectetur. Orci purus aenean massa elementum sed done consequ",
        totalTickets: 12,
        activeTickets: 12,
      },
      {
        title: "Technology design template",
        date: "Thu 23 Feb",
        access: "public",
        body: "Lorem ipsum dolor sit amet consectetur. Orci purus aenean massa elementum sed done consequ",
        totalTickets: 12,
        activeTickets: 12,
      },
      {
        title: "Technology design template",
        date: "Thu 23 Feb",
        access: "public",
        body: "Lorem ipsum dolor sit amet consectetur. Orci purus aenean massa elementum sed done consequ",
        totalTickets: 12,
        activeTickets: 12,
      },
    ],
    allTickets: [
      {
        id: 1,
        title: "Ticket title 1",
        payment: "100",
        body: "Lorem ipsum dolor sit amet consectetur. Orci purus aenean massa elementum sed done consequat done",
        tags: ["Frontend", "Database", "UI", "Backend", "Full-stack"],
        amount: false,
        mysteryBonus: 20,
      },
      {
        id: 2,
        title: "Ticket title 2",
        payment: "100",
        body: "Lorem ipsum dolor sit amet consectetur. Orci purus aenean massa elementum sed done consequat done",
        tags: ["Frontend", "Database", "UI"],
        amount: false,
      },
      {
        id: 3,
        title: "Ticket title 3",
        payment: "100",
        body: "Lorem ipsum dolor sit amet consectetur. Orci purus aenean massa elementum sed done consequat done",
        tags: ["Frontend", "Database", "UI"],
        amount: false,
        mysteryBonus: 20,
      },
      {
        id: 4,
        title: "Ticket title 4",
        payment: "100",
        body: "Lorem ipsum dolor sit amet consectetur. Orci purus aenean massa elementum sed done consequat done",
        tags: ["Frontend", "Database", "UI"],
        amount: false,
      },
      {
        id: 5,
        title: "Ticket title 5",
        payment: "100",
        body: "Lorem ipsum dolor sit amet consectetur. Orci purus aenean massa elementum sed done consequat done",
        tags: ["Frontend", "Database", "UI"],
        amount: false,
        mysteryBonus: 20,
      },
      {
        id: 6,
        title: "Ticket title 6",
        payment: "100",
        body: "Lorem ipsum dolor sit amet consectetur. Orci purus aenean massa elementum sed done consequat done",
        tags: ["Frontend", "Database", "UI"],
        amount: false,
      },
      {
        id: 7,
        title: "Ticket title 7",
        payment: "100",
        body: "Lorem ipsum dolor sit amet consectetur. Orci purus aenean massa elementum sed done consequat done",
        tags: ["Frontend", "Database", "UI"],
        amount: false,
      },
      {
        id: 8,
        title: "Ticket title 8",
        payment: "100",
        body: "Lorem ipsum dolor sit amet consectetur. Orci purus aenean massa elementum sed done consequat done",
        tags: ["Frontend", "Database", "UI"],
        amount: false,
        mysteryBonus: 20,
      },
      {
        id: 9,
        title: "Ticket title 9",
        payment: "100",
        body: "Lorem ipsum dolor sit amet consectetur. Orci purus aenean massa elementum sed done consequat done",
        tags: ["Frontend", "Database", "UI"],
        amount: false,
        mysteryBonus: 20,
      },
      {
        id: 10,
        title: "Ticket title 10",
        payment: "100",
        body: "Lorem ipsum dolor sit amet consectetur. Orci purus aenean massa elementum sed done consequat done",
        tags: ["Frontend", "Database", "UI"],
        amount: false,
      },
      {
        id: 11,
        title: "Ticket title 11",
        payment: "100",
        body: "Lorem ipsum dolor sit amet consectetur. Orci purus aenean massa elementum sed done consequat done",
        tags: ["Frontend", "Database", "UI"],
        amount: false,
        mysteryBonus: 20,
      },
      {
        id: 12,
        title: "Ticket title 12",
        payment: "100",
        body: "Lorem ipsum dolor sit amet consectetur. Orci purus aenean massa elementum sed done consequat done",
        tags: ["Frontend", "Database", "UI"],
        amount: false,
      },
      {
        id: 13,
        title: "Ticket title 13",
        payment: "100",
        body: "Lorem ipsum dolor sit amet consectetur. Orci purus aenean massa elementum sed done consequat done",
        tags: ["Frontend", "Database", "UI"],
        amount: false,
      },
      {
        id: 14,
        title: "Ticket title 14",
        payment: "100",
        body: "Lorem ipsum dolor sit amet consectetur. Orci purus aenean massa elementum sed done consequat done",
        tags: ["Frontend", "Database", "UI"],
        amount: false,
        mysteryBonus: 20,
      },
    ],
  });

  const onCustomizePins = () => {};

  useEffect(() => {
    // SIMULATING API LOAD
    setTimeout(() => {
      setShow(true);
    }, 3000);
  }, []);
  return (
    <Section id="profile-view">
      <div className="main">
        <UserInfo
          user={userState}
          setUser={setUserState}
          editState={editState}
          setEditState={setEditState}
        />
        <TicketsInfo editState={editState} setEditState={setEditState} />
        <Tickets
          icon="/assets/vectors/icons/pinned.svg"
          onCustomizePins={onCustomizePins}
          editState={editState}
          show={show}
          title="Pinned"
          items={userState.pinnedTickets}
          allTickets={userState.allTickets}
          setUser={setUserState}
        />
        <Tickets
          className="recent"
          icon="/assets/vectors/icons/recently-completed.svg"
          editState={editState}
          show={show}
          title="Recently Completed"
          items={userState.recentTickets}
        />
        <Projects
          icon="/assets/vectors/icons/my-projects.svg"
          editState={editState}
          show={show}
          title="My Projects"
          items={userState.projects}
        />
      </div>
    </Section>
  );
};

export default Profile;
