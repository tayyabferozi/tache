import React, { useEffect, useState } from "react";

import Section from "../../components/Section";
import UserInfo from "./UserInfo";
import TicketsInfo from "./TicketsInfo";
import Tickets from "./Tickets";
import "./Profile.scss";
import Projects from "./Projects/Projects";

const Profile = () => {
  const [show, setShow] = useState(false);
  const [editState, setEditState] = useState(false);
  const [userState, setUserState] = useState({
    name: "Weihang Lo",
    location: "Nanjing, China",
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
    about: `I'm Weihang Lo, a software engineer from Taiwan and also a Rustacean in [Rust Taiwan](https://www.google.com/) community. I love Rust, cycling and open source. Currently contribute to "Cargo: The Rust package manager" regularly and write articles for ["Rust Algorithm Club"](https://www.google.com/) (in Chinese).  \n Things I code with: Rust, Kubernetes, Node.js, Python, web development, DevOps, finding bugs.  \n You can contact me by clicking badges above, or just submit a new issue directly 😀.`,
    pinnedTickets: [
      {
        title: "Ticket title 1",
        payment: "100",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        tags: ["Frontend", "Database", "UI", "Backend", "Full-stack"],
        amount: false,
        mysteryBonus: 20,
      },
      {
        payment: "100",
        title: "Ticket title 2",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        tags: ["Frontend", "Database", "UI"],
        amount: false,
      },
      {
        title: "Ticket title 3",
        payment: "100",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        tags: ["Frontend", "Database", "UI"],
        amount: false,
        mysteryBonus: 20,
      },
      {
        title: "Ticket title 4",
        payment: "100",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        tags: ["Frontend", "Database", "UI"],
        amount: false,
      },
      {
        title: "Ticket title 5",
        payment: "100",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        tags: ["Frontend", "Database", "UI"],
        amount: false,
        mysteryBonus: 20,
      },
      {
        title: "Ticket title 6",
        payment: "100",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        tags: ["Frontend", "Database", "UI"],
        amount: false,
      },
      {
        title: "Ticket title 7",
        payment: "100",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        tags: ["Frontend", "Database", "UI"],
        amount: false,
      },
      {
        title: "Ticket title 8",
        payment: "100",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        tags: ["Frontend", "Database", "UI"],
        amount: false,
        mysteryBonus: 20,
      },
    ],
    recentTickets: [
      {
        title: "Ticket title 1",
        payment: "100",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        tags: ["Frontend", "Database", "UI", "Backend", "Full-stack"],
        amount: false,
        mysteryBonus: 20,
      },
      {
        payment: "100",
        title: "Ticket title 2",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        tags: ["Frontend", "Database", "UI"],
        amount: false,
      },
      {
        title: "Ticket title 3",
        payment: "100",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        tags: ["Frontend", "Database", "UI"],
        amount: false,
        mysteryBonus: 20,
      },
      {
        title: "Ticket title 4",
        payment: "100",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        tags: ["Frontend", "Database", "UI"],
        amount: false,
      },
      {
        title: "Ticket title 5",
        payment: "100",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        tags: ["Frontend", "Database", "UI"],
        amount: false,
        mysteryBonus: 20,
      },
      {
        title: "Ticket title 6",
        payment: "100",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        tags: ["Frontend", "Database", "UI"],
        amount: false,
      },
      {
        title: "Ticket title 7",
        payment: "100",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        tags: ["Frontend", "Database", "UI"],
        amount: false,
      },
      {
        title: "Ticket title 8",
        payment: "100",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        tags: ["Frontend", "Database", "UI"],
        amount: false,
        mysteryBonus: 20,
      },
    ],
    projects: [
      {
        title: "Technology design template",
        access: "public",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi risus",
        totalTickets: 12,
        activeTickets: 12,
        maintainers: [
          {
            img: "/assets/imgs/maintainer-1.png",
          },
          {
            img: "/assets/imgs/maintainer-2.png",
          },
          {
            img: "/assets/imgs/maintainer-3.png",
          },
          {
            img: "/assets/imgs/maintainer-4.png",
          },
          {
            img: "/assets/imgs/maintainer-5.png",
          },
          {
            img: "/assets/imgs/maintainer-6.png",
          },
          {
            img: "/assets/imgs/maintainer-3.png",
          },
          {
            img: "/assets/imgs/maintainer-4.png",
          },
          {
            img: "/assets/imgs/maintainer-5.png",
          },
          {
            img: "/assets/imgs/maintainer-6.png",
          },
        ],
        subscribes: "32 K",
        isSubscribed: false,
      },
      {
        title: "1Technology design template",
        access: "public",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi risus",
        totalTickets: 12,
        activeTickets: 12,
        maintainers: [
          {
            img: "/assets/imgs/maintainer-1.png",
          },
          {
            img: "/assets/imgs/maintainer-2.png",
          },
          {
            img: "/assets/imgs/maintainer-3.png",
          },
          {
            img: "/assets/imgs/maintainer-4.png",
          },
          {
            img: "/assets/imgs/maintainer-5.png",
          },
          {
            img: "/assets/imgs/maintainer-6.png",
          },
          {
            img: "/assets/imgs/maintainer-3.png",
          },
          {
            img: "/assets/imgs/maintainer-4.png",
          },
          {
            img: "/assets/imgs/maintainer-5.png",
          },
          {
            img: "/assets/imgs/maintainer-6.png",
          },
        ],
        subscribes: "32 K",
        isSubscribed: false,
      },
      {
        title: "1Technology design template",
        access: "public",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi risus",
        totalTickets: 12,
        activeTickets: 12,
        maintainers: [
          {
            img: "/assets/imgs/maintainer-1.png",
          },
          {
            img: "/assets/imgs/maintainer-2.png",
          },
          {
            img: "/assets/imgs/maintainer-3.png",
          },
          {
            img: "/assets/imgs/maintainer-4.png",
          },
          {
            img: "/assets/imgs/maintainer-5.png",
          },
          {
            img: "/assets/imgs/maintainer-6.png",
          },
          {
            img: "/assets/imgs/maintainer-3.png",
          },
          {
            img: "/assets/imgs/maintainer-4.png",
          },
          {
            img: "/assets/imgs/maintainer-5.png",
          },
          {
            img: "/assets/imgs/maintainer-6.png",
          },
        ],
        subscribes: "32 K",
        isSubscribed: false,
      },
      {
        title: "1Technology design template",
        access: "public",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi risus",
        totalTickets: 12,
        activeTickets: 12,
        maintainers: [
          {
            img: "/assets/imgs/maintainer-1.png",
          },
          {
            img: "/assets/imgs/maintainer-2.png",
          },
          {
            img: "/assets/imgs/maintainer-3.png",
          },
          {
            img: "/assets/imgs/maintainer-4.png",
          },
          {
            img: "/assets/imgs/maintainer-5.png",
          },
          {
            img: "/assets/imgs/maintainer-6.png",
          },
          {
            img: "/assets/imgs/maintainer-3.png",
          },
          {
            img: "/assets/imgs/maintainer-4.png",
          },
          {
            img: "/assets/imgs/maintainer-5.png",
          },
          {
            img: "/assets/imgs/maintainer-6.png",
          },
        ],
        subscribes: "32 K",
        isSubscribed: false,
      },
      {
        title: "1Technology design template",
        access: "public",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi risus",
        totalTickets: 12,
        activeTickets: 12,
        maintainers: [
          {
            img: "/assets/imgs/maintainer-1.png",
          },
          {
            img: "/assets/imgs/maintainer-2.png",
          },
          {
            img: "/assets/imgs/maintainer-3.png",
          },
          {
            img: "/assets/imgs/maintainer-4.png",
          },
          {
            img: "/assets/imgs/maintainer-5.png",
          },
          {
            img: "/assets/imgs/maintainer-6.png",
          },
          {
            img: "/assets/imgs/maintainer-3.png",
          },
          {
            img: "/assets/imgs/maintainer-4.png",
          },
          {
            img: "/assets/imgs/maintainer-5.png",
          },
          {
            img: "/assets/imgs/maintainer-6.png",
          },
        ],
        subscribes: "32 K",
        isSubscribed: false,
      },
      {
        title: "1Technology design template",
        access: "public",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi risus",
        totalTickets: 12,
        activeTickets: 12,
        maintainers: [
          {
            img: "/assets/imgs/maintainer-1.png",
          },
          {
            img: "/assets/imgs/maintainer-2.png",
          },
          {
            img: "/assets/imgs/maintainer-3.png",
          },
          {
            img: "/assets/imgs/maintainer-4.png",
          },
          {
            img: "/assets/imgs/maintainer-5.png",
          },
          {
            img: "/assets/imgs/maintainer-6.png",
          },
          {
            img: "/assets/imgs/maintainer-3.png",
          },
          {
            img: "/assets/imgs/maintainer-4.png",
          },
          {
            img: "/assets/imgs/maintainer-5.png",
          },
          {
            img: "/assets/imgs/maintainer-6.png",
          },
        ],
        subscribes: "32 K",
        isSubscribed: false,
      },
      {
        title: "1Technology design template",
        access: "public",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi risus",
        totalTickets: 12,
        activeTickets: 12,
        maintainers: [
          {
            img: "/assets/imgs/maintainer-1.png",
          },
          {
            img: "/assets/imgs/maintainer-2.png",
          },
          {
            img: "/assets/imgs/maintainer-3.png",
          },
          {
            img: "/assets/imgs/maintainer-4.png",
          },
          {
            img: "/assets/imgs/maintainer-5.png",
          },
          {
            img: "/assets/imgs/maintainer-6.png",
          },
          {
            img: "/assets/imgs/maintainer-3.png",
          },
          {
            img: "/assets/imgs/maintainer-4.png",
          },
          {
            img: "/assets/imgs/maintainer-5.png",
          },
          {
            img: "/assets/imgs/maintainer-6.png",
          },
        ],
        subscribes: "32 K",
        isSubscribed: false,
      },
      {
        title: "1Technology design template",
        access: "public",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi risus",
        totalTickets: 12,
        activeTickets: 12,
        maintainers: [
          {
            img: "/assets/imgs/maintainer-1.png",
          },
          {
            img: "/assets/imgs/maintainer-2.png",
          },
          {
            img: "/assets/imgs/maintainer-3.png",
          },
          {
            img: "/assets/imgs/maintainer-4.png",
          },
          {
            img: "/assets/imgs/maintainer-5.png",
          },
          {
            img: "/assets/imgs/maintainer-6.png",
          },
          {
            img: "/assets/imgs/maintainer-3.png",
          },
          {
            img: "/assets/imgs/maintainer-4.png",
          },
          {
            img: "/assets/imgs/maintainer-5.png",
          },
          {
            img: "/assets/imgs/maintainer-6.png",
          },
        ],
        subscribes: "32 K",
        isSubscribed: false,
      },
    ],
  });

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
          removable
          editState={editState}
          show={show}
          title="Pinned"
          items={userState.pinnedTickets}
        />
        <Tickets
          editState={editState}
          show={show}
          title="Recently Completed"
          items={userState.recentTickets}
        />
        <Projects
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
