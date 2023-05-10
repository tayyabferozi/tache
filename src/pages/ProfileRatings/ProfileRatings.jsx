import React, { useEffect, useState } from "react";

import Section from "../../components/Section";
import UserInfo from "./UserInfo";
import MyProjects from "./MyProjects";
import TalentReviews from "./TalentReviews";
import Tickets from "./Tickets";
import TicketsInfo from "../../components/TicketsInfo";
import "./ProfileRatings.scss";

const DUMMY_DATA = {
  name: "Weihang Lo",
  location: "Nanjing, China",
  rating: 4.5,
  projectsCompleted: 153,
  trend: "+20",
  projectsOngoing: 23,
  projectsOngoingPercent: 30,
  myProjects: [
    {
      id: 1,
      title: "Technology design 1",
      privacy: "Public",
      date: "Thu 23 Feb",
      description:
        "Lorem ipsum dolor sit amet consectetur. Orci purus aenean massa elementum sed done consequat done",
      totalTickets: 12,
      activeTickets: 12,
    },
    {
      id: 2,
      title: "Technology design 2",
      privacy: "Public",
      date: "Thu 23 Feb",
      description:
        "Lorem ipsum dolor sit amet consectetur. Orci purus aenean massa elementum sed done consequat done",
      totalTickets: 12,
      activeTickets: 12,
    },
    {
      id: 3,
      title: "Technology design 3",
      privacy: "Public",
      date: "Thu 23 Feb",
      description:
        "Lorem ipsum dolor sit amet consectetur. Orci purus aenean massa elementum sed done consequat done",
      totalTickets: 12,
      activeTickets: 12,
    },
    {
      id: 4,
      title: "Technology design 4",
      privacy: "Public",
      date: "Thu 23 Feb",
      description:
        "Lorem ipsum dolor sit amet consectetur. Orci purus aenean massa elementum sed done consequat done",
      totalTickets: 12,
      activeTickets: 12,
    },
    {
      id: 5,
      title: "Technology design 5",
      privacy: "Public",
      date: "Thu 23 Feb",
      description:
        "Lorem ipsum dolor sit amet consectetur. Orci purus aenean massa elementum sed done consequat done",
      totalTickets: 12,
      activeTickets: 12,
    },
    {
      id: 6,
      title: "Technology design 6",
      privacy: "Public",
      date: "Thu 23 Feb",
      description:
        "Lorem ipsum dolor sit amet consectetur. Orci purus aenean massa elementum sed done consequat done",
      totalTickets: 12,
      activeTickets: 12,
    },
    {
      id: 7,
      title: "Technology design 7",
      privacy: "Public",
      date: "Thu 23 Feb",
      description:
        "Lorem ipsum dolor sit amet consectetur. Orci purus aenean massa elementum sed done consequat done",
      totalTickets: 12,
      activeTickets: 12,
    },
    {
      id: 8,
      title: "Technology design 8",
      privacy: "Public",
      date: "Thu 23 Feb",
      description:
        "Lorem ipsum dolor sit amet consectetur. Orci purus aenean massa elementum sed done consequat done",
      totalTickets: 12,
      activeTickets: 12,
    },
    {
      id: 9,
      title: "Technology design 9",
      privacy: "Public",
      date: "Thu 23 Feb",
      description:
        "Lorem ipsum dolor sit amet consectetur. Orci purus aenean massa elementum sed done consequat done",
      totalTickets: 12,
      activeTickets: 12,
    },
    {
      id: 10,
      title: "Technology design 10",
      privacy: "Public",
      date: "Thu 23 Feb",
      description:
        "Lorem ipsum dolor sit amet consectetur. Orci purus aenean massa elementum sed done consequat done",
      totalTickets: 12,
      activeTickets: 12,
    },
    {
      id: 11,
      title: "Technology design 11",
      privacy: "Public",
      date: "Thu 23 Feb",
      description:
        "Lorem ipsum dolor sit amet consectetur. Orci purus aenean massa elementum sed done consequat done",
      totalTickets: 12,
      activeTickets: 12,
    },
    {
      id: 12,
      title: "Technology design 12",
      privacy: "Public",
      date: "Thu 23 Feb",
      description:
        "Lorem ipsum dolor sit amet consectetur. Orci purus aenean massa elementum sed done consequat done",
      totalTickets: 12,
      activeTickets: 12,
    },
    {
      id: 13,
      title: "Technology design 13",
      privacy: "Public",
      date: "Thu 23 Feb",
      description:
        "Lorem ipsum dolor sit amet consectetur. Orci purus aenean massa elementum sed done consequat done",
      totalTickets: 12,
      activeTickets: 12,
    },
    {
      id: 14,
      title: "Technology design 14",
      privacy: "Public",
      date: "Thu 23 Feb",
      description:
        "Lorem ipsum dolor sit amet consectetur. Orci purus aenean massa elementum sed done consequat done",
      totalTickets: 12,
      activeTickets: 12,
    },
    {
      id: 15,
      title: "Technology design 15",
      privacy: "Public",
      date: "Thu 23 Feb",
      description:
        "Lorem ipsum dolor sit amet consectetur. Orci purus aenean massa elementum sed done consequat done",
      totalTickets: 12,
      activeTickets: 12,
    },
    {
      id: 16,
      title: "Technology design 16",
      privacy: "Public",
      date: "Thu 23 Feb",
      description:
        "Lorem ipsum dolor sit amet consectetur. Orci purus aenean massa elementum sed done consequat done",
      totalTickets: 12,
      activeTickets: 12,
    },
    {
      id: 17,
      title: "Technology design 17",
      privacy: "Public",
      date: "Thu 23 Feb",
      description:
        "Lorem ipsum dolor sit amet consectetur. Orci purus aenean massa elementum sed done consequat done",
      totalTickets: 12,
      activeTickets: 12,
    },
    {
      id: 18,
      title: "Technology design 18",
      privacy: "Public",
      date: "Thu 23 Feb",
      description:
        "Lorem ipsum dolor sit amet consectetur. Orci purus aenean massa elementum sed done consequat done",
      totalTickets: 12,
      activeTickets: 12,
    },
    {
      id: 19,
      title: "Technology design 19",
      privacy: "Public",
      date: "Thu 23 Feb",
      description:
        "Lorem ipsum dolor sit amet consectetur. Orci purus aenean massa elementum sed done consequat done",
      totalTickets: 12,
      activeTickets: 12,
    },
    {
      id: 20,
      title: "Technology design 20",
      privacy: "Public",
      date: "Thu 23 Feb",
      description:
        "Lorem ipsum dolor sit amet consectetur. Orci purus aenean massa elementum sed done consequat done",
      totalTickets: 12,
      activeTickets: 12,
    },
    {
      id: 21,
      title: "Technology design 21",
      privacy: "Public",
      date: "Thu 23 Feb",
      description:
        "Lorem ipsum dolor sit amet consectetur. Orci purus aenean massa elementum sed done consequat done",
      totalTickets: 12,
      activeTickets: 12,
    },
    {
      id: 22,
      title: "Technology design 22",
      privacy: "Public",
      date: "Thu 23 Feb",
      description:
        "Lorem ipsum dolor sit amet consectetur. Orci purus aenean massa elementum sed done consequat done",
      totalTickets: 12,
      activeTickets: 12,
    },
    {
      id: 23,
      title: "Technology design 23",
      privacy: "Public",
      date: "Thu 23 Feb",
      description:
        "Lorem ipsum dolor sit amet consectetur. Orci purus aenean massa elementum sed done consequat done",
      totalTickets: 12,
      activeTickets: 12,
    },
    {
      id: 24,
      title: "Technology design 24",
      privacy: "Public",
      date: "Thu 23 Feb",
      description:
        "Lorem ipsum dolor sit amet consectetur. Orci purus aenean massa elementum sed done consequat done",
      totalTickets: 12,
      activeTickets: 12,
    },
  ],
  talentRating: 4.7,
  talentReviews: [
    {
      id: 1,
      title: "Title of the task 1",
      date: "Thu 23 Feb",
      description:
        "Lorem ipsum dolor sit amet consectetur. Orci purus aenean massa elementum sed done consequat done",
      clientImg: "/assets/imgs/pool-avatar-1.png",
      clientName: "Talent Reveiew Name",
      company: "Founder Company",
    },
    {
      id: 2,
      title: "Title of the task 2",
      date: "Thu 23 Feb",
      description:
        "Lorem ipsum dolor sit amet consectetur. Orci purus aenean massa elementum sed done consequat done",
      clientImg: "/assets/imgs/pool-avatar-1.png",
      clientName: "Talent Reveiew Name",
      company: "Founder Company",
    },
    {
      id: 3,
      title: "Title of the task 3",
      date: "Thu 23 Feb",
      description:
        "Lorem ipsum dolor sit amet consectetur. Orci purus aenean massa elementum sed done consequat done",
      clientImg: "/assets/imgs/pool-avatar-1.png",
      clientName: "Talent Reveiew Name",
      company: "Founder Company",
    },
    {
      id: 4,
      title: "Title of the task 4",
      date: "Thu 23 Feb",
      description:
        "Lorem ipsum dolor sit amet consectetur. Orci purus aenean massa elementum sed done consequat done",
      clientImg: "/assets/imgs/pool-avatar-1.png",
      clientName: "Talent Reveiew Name",
      company: "Founder Company",
    },
    {
      id: 5,
      title: "Title of the task 5",
      date: "Thu 23 Feb",
      description:
        "Lorem ipsum dolor sit amet consectetur. Orci purus aenean massa elementum sed done consequat done",
      clientImg: "/assets/imgs/pool-avatar-1.png",
      clientName: "Talent Reveiew Name",
      company: "Founder Company",
    },
    {
      id: 6,
      title: "Title of the task 6",
      date: "Thu 23 Feb",
      description:
        "Lorem ipsum dolor sit amet consectetur. Orci purus aenean massa elementum sed done consequat done",
      clientImg: "/assets/imgs/pool-avatar-1.png",
      clientName: "Talent Reveiew Name",
      company: "Founder Company",
    },
    {
      id: 7,
      title: "Title of the task 7",
      date: "Thu 23 Feb",
      description:
        "Lorem ipsum dolor sit amet consectetur. Orci purus aenean massa elementum sed done consequat done",
      clientImg: "/assets/imgs/pool-avatar-1.png",
      clientName: "Talent Reveiew Name",
      company: "Founder Company",
    },
    {
      id: 8,
      title: "Title of the task 8",
      date: "Thu 23 Feb",
      description:
        "Lorem ipsum dolor sit amet consectetur. Orci purus aenean massa elementum sed done consequat done",
      clientImg: "/assets/imgs/pool-avatar-1.png",
      clientName: "Talent Reveiew Name",
      company: "Founder Company",
    },
    {
      id: 9,
      title: "Title of the task 9",
      date: "Thu 23 Feb",
      description:
        "Lorem ipsum dolor sit amet consectetur. Orci purus aenean massa elementum sed done consequat done",
      clientImg: "/assets/imgs/pool-avatar-1.png",
      clientName: "Talent Reveiew Name",
      company: "Founder Company",
    },
    {
      id: 10,
      title: "Title of the task 10",
      date: "Thu 23 Feb",
      description:
        "Lorem ipsum dolor sit amet consectetur. Orci purus aenean massa elementum sed done consequat done",
      clientImg: "/assets/imgs/pool-avatar-1.png",
      clientName: "Talent Reveiew Name",
      company: "Founder Company",
    },
    {
      id: 11,
      title: "Title of the task 11",
      date: "Thu 23 Feb",
      description:
        "Lorem ipsum dolor sit amet consectetur. Orci purus aenean massa elementum sed done consequat done",
      clientImg: "/assets/imgs/pool-avatar-1.png",
      clientName: "Talent Reveiew Name",
      company: "Founder Company",
    },
    {
      id: 12,
      title: "Title of the task 12",
      date: "Thu 23 Feb",
      description:
        "Lorem ipsum dolor sit amet consectetur. Orci purus aenean massa elementum sed done consequat done",
      clientImg: "/assets/imgs/pool-avatar-1.png",
      clientName: "Talent Reveiew Name",
      company: "Founder Company",
    },
    {
      id: 13,
      title: "Title of the task 13",
      date: "Thu 23 Feb",
      description:
        "Lorem ipsum dolor sit amet consectetur. Orci purus aenean massa elementum sed done consequat done",
      clientImg: "/assets/imgs/pool-avatar-1.png",
      clientName: "Talent Reveiew Name",
      company: "Founder Company",
    },
    {
      id: 14,
      title: "Title of the task 14",
      date: "Thu 23 Feb",
      description:
        "Lorem ipsum dolor sit amet consectetur. Orci purus aenean massa elementum sed done consequat done",
      clientImg: "/assets/imgs/pool-avatar-1.png",
      clientName: "Talent Reveiew Name",
      company: "Founder Company",
    },
    {
      id: 15,
      title: "Title of the task 15",
      date: "Thu 23 Feb",
      description:
        "Lorem ipsum dolor sit amet consectetur. Orci purus aenean massa elementum sed done consequat done",
      clientImg: "/assets/imgs/pool-avatar-1.png",
      clientName: "Talent Reveiew Name",
      company: "Founder Company",
    },
    {
      id: 16,
      title: "Title of the task 16",
      date: "Thu 23 Feb",
      description:
        "Lorem ipsum dolor sit amet consectetur. Orci purus aenean massa elementum sed done consequat done",
      clientImg: "/assets/imgs/pool-avatar-1.png",
      clientName: "Talent Reveiew Name",
      company: "Founder Company",
    },
    {
      id: 17,
      title: "Title of the task 17",
      date: "Thu 23 Feb",
      description:
        "Lorem ipsum dolor sit amet consectetur. Orci purus aenean massa elementum sed done consequat done",
      clientImg: "/assets/imgs/pool-avatar-1.png",
      clientName: "Talent Reveiew Name",
      company: "Founder Company",
    },
    {
      id: 18,
      title: "Title of the task 18",
      date: "Thu 23 Feb",
      description:
        "Lorem ipsum dolor sit amet consectetur. Orci purus aenean massa elementum sed done consequat done",
      clientImg: "/assets/imgs/pool-avatar-1.png",
      clientName: "Talent Reveiew Name",
      company: "Founder Company",
    },
    {
      id: 19,
      title: "Title of the task 19",
      date: "Thu 23 Feb",
      description:
        "Lorem ipsum dolor sit amet consectetur. Orci purus aenean massa elementum sed done consequat done",
      clientImg: "/assets/imgs/pool-avatar-1.png",
      clientName: "Talent Reveiew Name",
      company: "Founder Company",
    },
    {
      id: 20,
      title: "Title of the task 20",
      date: "Thu 23 Feb",
      description:
        "Lorem ipsum dolor sit amet consectetur. Orci purus aenean massa elementum sed done consequat done",
      clientImg: "/assets/imgs/pool-avatar-1.png",
      clientName: "Talent Reveiew Name",
      company: "Founder Company",
    },
    {
      id: 21,
      title: "Title of the task 21",
      date: "Thu 23 Feb",
      description:
        "Lorem ipsum dolor sit amet consectetur. Orci purus aenean massa elementum sed done consequat done",
      clientImg: "/assets/imgs/pool-avatar-1.png",
      clientName: "Talent Reveiew Name",
      company: "Founder Company",
    },
    {
      id: 22,
      title: "Title of the task 22",
      date: "Thu 23 Feb",
      description:
        "Lorem ipsum dolor sit amet consectetur. Orci purus aenean massa elementum sed done consequat done",
      clientImg: "/assets/imgs/pool-avatar-1.png",
      clientName: "Talent Reveiew Name",
      company: "Founder Company",
    },
    {
      id: 23,
      title: "Title of the task 23",
      date: "Thu 23 Feb",
      description:
        "Lorem ipsum dolor sit amet consectetur. Orci purus aenean massa elementum sed done consequat done",
      clientImg: "/assets/imgs/pool-avatar-1.png",
      clientName: "Talent Reveiew Name",
      company: "Founder Company",
    },
    {
      id: 24,
      title: "Title of the task 24",
      date: "Thu 23 Feb",
      description:
        "Lorem ipsum dolor sit amet consectetur. Orci purus aenean massa elementum sed done consequat done",
      clientImg: "/assets/imgs/pool-avatar-1.png",
      clientName: "Talent Reveiew Name",
      company: "Founder Company",
    },
  ],
  leadRating: 4.7,
  leadReviews: [
    {
      id: 25,
      title: "Title of the task 1",
      date: "Thu 23 Feb",
      description:
        "Lorem ipsum dolor sit amet consectetur. Orci purus aenean massa elementum sed done consequat done",
      clientImg: "/assets/imgs/pool-avatar-1.png",
      clientName: "Talent Reveiew Name",
      company: "Founder Company",
    },
    {
      id: 26,
      title: "Title of the task 2",
      date: "Thu 23 Feb",
      description:
        "Lorem ipsum dolor sit amet consectetur. Orci purus aenean massa elementum sed done consequat done",
      clientImg: "/assets/imgs/pool-avatar-1.png",
      clientName: "Talent Reveiew Name",
      company: "Founder Company",
    },
    {
      id: 27,
      title: "Title of the task 3",
      date: "Thu 23 Feb",
      description:
        "Lorem ipsum dolor sit amet consectetur. Orci purus aenean massa elementum sed done consequat done",
      clientImg: "/assets/imgs/pool-avatar-1.png",
      clientName: "Talent Reveiew Name",
      company: "Founder Company",
    },
    {
      id: 29,
      title: "Title of the task 4",
      date: "Thu 23 Feb",
      description:
        "Lorem ipsum dolor sit amet consectetur. Orci purus aenean massa elementum sed done consequat done",
      clientImg: "/assets/imgs/pool-avatar-1.png",
      clientName: "Talent Reveiew Name",
      company: "Founder Company",
    },
    {
      id: 30,
      title: "Title of the task 5",
      date: "Thu 23 Feb",
      description:
        "Lorem ipsum dolor sit amet consectetur. Orci purus aenean massa elementum sed done consequat done",
      clientImg: "/assets/imgs/pool-avatar-1.png",
      clientName: "Talent Reveiew Name",
      company: "Founder Company",
    },
    {
      id: 31,
      title: "Title of the task 6",
      date: "Thu 23 Feb",
      description:
        "Lorem ipsum dolor sit amet consectetur. Orci purus aenean massa elementum sed done consequat done",
      clientImg: "/assets/imgs/pool-avatar-1.png",
      clientName: "Talent Reveiew Name",
      company: "Founder Company",
    },
    {
      id: 32,
      title: "Title of the task 7",
      date: "Thu 23 Feb",
      description:
        "Lorem ipsum dolor sit amet consectetur. Orci purus aenean massa elementum sed done consequat done",
      clientImg: "/assets/imgs/pool-avatar-1.png",
      clientName: "Talent Reveiew Name",
      company: "Founder Company",
    },
    {
      id: 33,
      title: "Title of the task 8",
      date: "Thu 23 Feb",
      description:
        "Lorem ipsum dolor sit amet consectetur. Orci purus aenean massa elementum sed done consequat done",
      clientImg: "/assets/imgs/pool-avatar-1.png",
      clientName: "Talent Reveiew Name",
      company: "Founder Company",
    },
    {
      id: 35,
      title: "Title of the task 9",
      date: "Thu 23 Feb",
      description:
        "Lorem ipsum dolor sit amet consectetur. Orci purus aenean massa elementum sed done consequat done",
      clientImg: "/assets/imgs/pool-avatar-1.png",
      clientName: "Talent Reveiew Name",
      company: "Founder Company",
    },
    {
      id: 36,
      title: "Title of the task 10",
      date: "Thu 23 Feb",
      description:
        "Lorem ipsum dolor sit amet consectetur. Orci purus aenean massa elementum sed done consequat done",
      clientImg: "/assets/imgs/pool-avatar-1.png",
      clientName: "Talent Reveiew Name",
      company: "Founder Company",
    },
    {
      id: 37,
      title: "Title of the task 11",
      date: "Thu 23 Feb",
      description:
        "Lorem ipsum dolor sit amet consectetur. Orci purus aenean massa elementum sed done consequat done",
      clientImg: "/assets/imgs/pool-avatar-1.png",
      clientName: "Talent Reveiew Name",
      company: "Founder Company",
    },
    {
      id: 38,
      title: "Title of the task 12",
      date: "Thu 23 Feb",
      description:
        "Lorem ipsum dolor sit amet consectetur. Orci purus aenean massa elementum sed done consequat done",
      clientImg: "/assets/imgs/pool-avatar-1.png",
      clientName: "Talent Reveiew Name",
      company: "Founder Company",
    },
    {
      id: 39,
      title: "Title of the task 13",
      date: "Thu 23 Feb",
      description:
        "Lorem ipsum dolor sit amet consectetur. Orci purus aenean massa elementum sed done consequat done",
      clientImg: "/assets/imgs/pool-avatar-1.png",
      clientName: "Talent Reveiew Name",
      company: "Founder Company",
    },
    {
      id: 41,
      title: "Title of the task 14",
      date: "Thu 23 Feb",
      description:
        "Lorem ipsum dolor sit amet consectetur. Orci purus aenean massa elementum sed done consequat done",
      clientImg: "/assets/imgs/pool-avatar-1.png",
      clientName: "Talent Reveiew Name",
      company: "Founder Company",
    },
    {
      id: 42,
      title: "Title of the task 15",
      date: "Thu 23 Feb",
      description:
        "Lorem ipsum dolor sit amet consectetur. Orci purus aenean massa elementum sed done consequat done",
      clientImg: "/assets/imgs/pool-avatar-1.png",
      clientName: "Talent Reveiew Name",
      company: "Founder Company",
    },
    {
      id: 43,
      title: "Title of the task 16",
      date: "Thu 23 Feb",
      description:
        "Lorem ipsum dolor sit amet consectetur. Orci purus aenean massa elementum sed done consequat done",
      clientImg: "/assets/imgs/pool-avatar-1.png",
      clientName: "Talent Reveiew Name",
      company: "Founder Company",
    },
    {
      id: 44,
      title: "Title of the task 17",
      date: "Thu 23 Feb",
      description:
        "Lorem ipsum dolor sit amet consectetur. Orci purus aenean massa elementum sed done consequat done",
      clientImg: "/assets/imgs/pool-avatar-1.png",
      clientName: "Talent Reveiew Name",
      company: "Founder Company",
    },
    {
      id: 45,
      title: "Title of the task 18",
      date: "Thu 23 Feb",
      description:
        "Lorem ipsum dolor sit amet consectetur. Orci purus aenean massa elementum sed done consequat done",
      clientImg: "/assets/imgs/pool-avatar-1.png",
      clientName: "Talent Reveiew Name",
      company: "Founder Company",
    },
    {
      id: 47,
      title: "Title of the task 19",
      date: "Thu 23 Feb",
      description:
        "Lorem ipsum dolor sit amet consectetur. Orci purus aenean massa elementum sed done consequat done",
      clientImg: "/assets/imgs/pool-avatar-1.png",
      clientName: "Talent Reveiew Name",
      company: "Founder Company",
    },
    {
      id: 48,
      title: "Title of the task 20",
      date: "Thu 23 Feb",
      description:
        "Lorem ipsum dolor sit amet consectetur. Orci purus aenean massa elementum sed done consequat done",
      clientImg: "/assets/imgs/pool-avatar-1.png",
      clientName: "Talent Reveiew Name",
      company: "Founder Company",
    },
    {
      id: 49,
      title: "Title of the task 21",
      date: "Thu 23 Feb",
      description:
        "Lorem ipsum dolor sit amet consectetur. Orci purus aenean massa elementum sed done consequat done",
      clientImg: "/assets/imgs/pool-avatar-1.png",
      clientName: "Talent Reveiew Name",
      company: "Founder Company",
    },
    {
      id: 50,
      title: "Title of the task 22",
      date: "Thu 23 Feb",
      description:
        "Lorem ipsum dolor sit amet consectetur. Orci purus aenean massa elementum sed done consequat done",
      clientImg: "/assets/imgs/pool-avatar-1.png",
      clientName: "Talent Reveiew Name",
      company: "Founder Company",
    },
    {
      id: 51,
      title: "Title of the task 23",
      date: "Thu 23 Feb",
      description:
        "Lorem ipsum dolor sit amet consectetur. Orci purus aenean massa elementum sed done consequat done",
      clientImg: "/assets/imgs/pool-avatar-1.png",
      clientName: "Talent Reveiew Name",
      company: "Founder Company",
    },
    {
      id: 52,
      title: "Title of the task 24",
      date: "Thu 23 Feb",
      description:
        "Lorem ipsum dolor sit amet consectetur. Orci purus aenean massa elementum sed done consequat done",
      clientImg: "/assets/imgs/pool-avatar-1.png",
      clientName: "Talent Reveiew Name",
      company: "Founder Company",
    },
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
  about: `I'm Weihang Lo, a software engineer from Taiwan and also a Rustacean in [Rust Taiwan](https://www.google.com/) community. I love Rust, cycling and open source. Currently contribute to "Cargo: The Rust package manager" regularly and write articles for ["Rust Algorithm Club"](https://www.google.com/) (in Chinese).  \n Things I code with: Rust, Kubernetes, Node.js, Python, web development, DevOps, finding bugs.  \n You can contact me by clicking badges above, or just submit a new issue directly 😀.`,
  skills: [
    { id: 1, label: "Frontend" },
    { id: 2, label: "Database" },
    { id: 3, label: "Backend" },
    { id: 4, label: "Programmer" },
  ],
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
};

const ProfileRatings = () => {
  const [show, setShow] = useState(false);
  const [userState, setUserState] = useState(DUMMY_DATA);
  const [editState, setEditState] = useState(false);

  useEffect(() => {
    // SIMULATING API LOAD
    setTimeout(() => {
      setShow(true);
    }, 3000);
  }, []);

  return (
    <Section id="profile-ratings">
      <UserInfo
        user={userState}
        setUser={setUserState}
        editState={editState}
        setEditState={setEditState}
      />

      <div className="tikcet-info-wrap desc-box">
        <div className="sub-page-container">
          <TicketsInfo />
        </div>
      </div>
      <Tickets
        icon="/assets/vectors/icons/pinned.svg"
        onCustomizePins={() => {}}
        editState={editState}
        show={show}
        title="Pinned"
        items={userState.pinnedTickets}
        allTickets={userState.allTickets}
        setUser={setUserState}
      />
      <MyProjects show={show} projects={userState.myProjects} />
      <Tickets
        className="recent"
        icon="/assets/vectors/icons/recently-completed.svg"
        editState={editState}
        show={show}
        title="Recently Completed"
        items={userState.recentTickets}
      />
      {/* <Projects
        icon="/assets/vectors/icons/my-projects.svg"
        editState={editState}
        show={show}
        title="My Projects"
        items={userState.projects}
      /> */}
      <TalentReviews
        show={show}
        title="Talent Reviews"
        scrollTo="profile-ratings-talent-reviews"
        rating={userState.talentRating}
        reviews={userState.talentReviews}
        userState={userState}
        setUserState={setUserState}
        name="talentReviews"
      />
      <TalentReviews
        show={show}
        title="Project Lead Reviews"
        scrollTo="profile-ratings-lead-reviews"
        rating={userState.leadRating}
        reviews={userState.leadReviews}
        userState={userState}
        setUserState={setUserState}
        name="leadReviews"
      />
    </Section>
  );
};

export default ProfileRatings;
