import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Section from "../../components/Section";
import SearchWrap from "../../components/SearchWrap";
import Badge from "../../components/Badge";
import UserList from "../../components/UserList";
import PaginationNum from "../../components/PaginationNum/PaginationNum";
import tiledAnimations from "../../constants/tile-animations";
import Dropdown from "../../components/Dropdown";
import "./FindWorkers.scss";

const data = [
  {
    id: 1,
    profileImg: "/assets/vectors/profile-img.svg",
    name: "Nate William 1",
    location: "Nanjing, China",
    completedTickets: 12,
    deliveryRate: 98,
    tags: ["Frontend", "Database", "UI", "Backend", "Programmer"],
    projects: [
      { img: "/assets/vectors/icons/logo-dribbble.svg" },
      { img: "/assets/vectors/icons/logo-google-2.svg" },
      { img: "/assets/vectors/icons/logo-twitter.svg" },
      { img: "/assets/vectors/icons/logo-paypal.svg" },
      { img: "/assets/vectors/icons/logo-behance.svg" },
      { img: "/assets/vectors/icons/logo-linkedin.svg" },
    ],
    followers: [
      { img: "/assets/imgs/avatar-1.png" },
      { img: "/assets/imgs/avatar-2.png" },
      { img: "/assets/imgs/avatar-3.png" },
      { img: "/assets/imgs/maintainer-1.png" },
      { img: "/assets/imgs/maintainer-2.png" },
      { img: "/assets/imgs/maintainer-3.png" },
      { img: "/assets/imgs/maintainer-4.png" },
      { img: "/assets/imgs/maintainer-5.png" },
      { img: "/assets/imgs/maintainer-6.png" },
      { img: "/assets/imgs/pool-avatar-1.png" },
      { img: "/assets/imgs/pool-avatar-2.png" },
    ],
  },
  {
    id: 2,
    profileImg: "/assets/vectors/profile-img.svg",
    name: "Nate William 2",
    location: "Nanjing, China",
    completedTickets: 12,
    deliveryRate: 98,
    tags: ["Frontend", "Database", "UI", "Backend", "Programmer"],
    projects: [
      { img: "/assets/vectors/icons/logo-dribbble.svg" },
      { img: "/assets/vectors/icons/logo-google-2.svg" },
      { img: "/assets/vectors/icons/logo-twitter.svg" },
      { img: "/assets/vectors/icons/logo-paypal.svg" },
      { img: "/assets/vectors/icons/logo-behance.svg" },
      { img: "/assets/vectors/icons/logo-linkedin.svg" },
    ],
    followers: [
      { img: "/assets/imgs/avatar-1.png" },
      { img: "/assets/imgs/avatar-2.png" },
      { img: "/assets/imgs/avatar-3.png" },
      { img: "/assets/imgs/maintainer-1.png" },
      { img: "/assets/imgs/maintainer-2.png" },
      { img: "/assets/imgs/maintainer-3.png" },
      { img: "/assets/imgs/maintainer-4.png" },
      { img: "/assets/imgs/maintainer-5.png" },
      { img: "/assets/imgs/maintainer-6.png" },
      { img: "/assets/imgs/pool-avatar-1.png" },
      { img: "/assets/imgs/pool-avatar-2.png" },
    ],
  },
  {
    id: 3,
    profileImg: "/assets/vectors/profile-img.svg",
    name: "Nate William 3",
    location: "Nanjing, China",
    completedTickets: 12,
    deliveryRate: 98,
    tags: ["Frontend", "Database", "UI", "Backend", "Programmer"],
    projects: [
      { img: "/assets/vectors/icons/logo-dribbble.svg" },
      { img: "/assets/vectors/icons/logo-google-2.svg" },
      { img: "/assets/vectors/icons/logo-twitter.svg" },
      { img: "/assets/vectors/icons/logo-paypal.svg" },
      { img: "/assets/vectors/icons/logo-behance.svg" },
      { img: "/assets/vectors/icons/logo-linkedin.svg" },
    ],
    followers: [
      { img: "/assets/imgs/avatar-1.png" },
      { img: "/assets/imgs/avatar-2.png" },
      { img: "/assets/imgs/avatar-3.png" },
      { img: "/assets/imgs/maintainer-1.png" },
      { img: "/assets/imgs/maintainer-2.png" },
      { img: "/assets/imgs/maintainer-3.png" },
      { img: "/assets/imgs/maintainer-4.png" },
      { img: "/assets/imgs/maintainer-5.png" },
      { img: "/assets/imgs/maintainer-6.png" },
      { img: "/assets/imgs/pool-avatar-1.png" },
      { img: "/assets/imgs/pool-avatar-2.png" },
    ],
  },
  {
    id: 4,
    profileImg: "/assets/vectors/profile-img.svg",
    name: "Nate William 4",
    location: "Nanjing, China",
    completedTickets: 12,
    deliveryRate: 98,
    tags: ["Frontend", "Database", "UI", "Backend", "Programmer"],
    projects: [
      { img: "/assets/vectors/icons/logo-dribbble.svg" },
      { img: "/assets/vectors/icons/logo-google-2.svg" },
      { img: "/assets/vectors/icons/logo-twitter.svg" },
      { img: "/assets/vectors/icons/logo-paypal.svg" },
      { img: "/assets/vectors/icons/logo-behance.svg" },
      { img: "/assets/vectors/icons/logo-linkedin.svg" },
    ],
    followers: [
      { img: "/assets/imgs/avatar-1.png" },
      { img: "/assets/imgs/avatar-2.png" },
      { img: "/assets/imgs/avatar-3.png" },
      { img: "/assets/imgs/maintainer-1.png" },
      { img: "/assets/imgs/maintainer-2.png" },
      { img: "/assets/imgs/maintainer-3.png" },
      { img: "/assets/imgs/maintainer-4.png" },
      { img: "/assets/imgs/maintainer-5.png" },
      { img: "/assets/imgs/maintainer-6.png" },
      { img: "/assets/imgs/pool-avatar-1.png" },
      { img: "/assets/imgs/pool-avatar-2.png" },
    ],
  },
  {
    id: 5,
    profileImg: "/assets/vectors/profile-img.svg",
    name: "Nate William 5",
    location: "Nanjing, China",
    completedTickets: 12,
    deliveryRate: 98,
    tags: ["Frontend", "Database", "UI", "Backend", "Programmer"],
    projects: [
      { img: "/assets/vectors/icons/logo-dribbble.svg" },
      { img: "/assets/vectors/icons/logo-google-2.svg" },
      { img: "/assets/vectors/icons/logo-twitter.svg" },
      { img: "/assets/vectors/icons/logo-paypal.svg" },
      { img: "/assets/vectors/icons/logo-behance.svg" },
      { img: "/assets/vectors/icons/logo-linkedin.svg" },
    ],
    followers: [
      { img: "/assets/imgs/avatar-1.png" },
      { img: "/assets/imgs/avatar-2.png" },
      { img: "/assets/imgs/avatar-3.png" },
      { img: "/assets/imgs/maintainer-1.png" },
      { img: "/assets/imgs/maintainer-2.png" },
      { img: "/assets/imgs/maintainer-3.png" },
      { img: "/assets/imgs/maintainer-4.png" },
      { img: "/assets/imgs/maintainer-5.png" },
      { img: "/assets/imgs/maintainer-6.png" },
      { img: "/assets/imgs/pool-avatar-1.png" },
      { img: "/assets/imgs/pool-avatar-2.png" },
    ],
  },
  {
    id: 6,
    profileImg: "/assets/vectors/profile-img.svg",
    name: "Nate William 6",
    location: "Nanjing, China",
    completedTickets: 12,
    deliveryRate: 98,
    tags: ["Frontend", "Database", "UI", "Backend", "Programmer"],
    projects: [
      { img: "/assets/vectors/icons/logo-dribbble.svg" },
      { img: "/assets/vectors/icons/logo-google-2.svg" },
      { img: "/assets/vectors/icons/logo-twitter.svg" },
      { img: "/assets/vectors/icons/logo-paypal.svg" },
      { img: "/assets/vectors/icons/logo-behance.svg" },
      { img: "/assets/vectors/icons/logo-linkedin.svg" },
    ],
    followers: [
      { img: "/assets/imgs/avatar-1.png" },
      { img: "/assets/imgs/avatar-2.png" },
      { img: "/assets/imgs/avatar-3.png" },
      { img: "/assets/imgs/maintainer-1.png" },
      { img: "/assets/imgs/maintainer-2.png" },
      { img: "/assets/imgs/maintainer-3.png" },
      { img: "/assets/imgs/maintainer-4.png" },
      { img: "/assets/imgs/maintainer-5.png" },
      { img: "/assets/imgs/maintainer-6.png" },
      { img: "/assets/imgs/pool-avatar-1.png" },
      { img: "/assets/imgs/pool-avatar-2.png" },
    ],
  },
  {
    id: 7,
    profileImg: "/assets/vectors/profile-img.svg",
    name: "Nate William 7",
    location: "Nanjing, China",
    completedTickets: 12,
    deliveryRate: 98,
    tags: ["Frontend", "Database", "UI", "Backend", "Programmer"],
    projects: [
      { img: "/assets/vectors/icons/logo-dribbble.svg" },
      { img: "/assets/vectors/icons/logo-google-2.svg" },
      { img: "/assets/vectors/icons/logo-twitter.svg" },
      { img: "/assets/vectors/icons/logo-paypal.svg" },
      { img: "/assets/vectors/icons/logo-behance.svg" },
      { img: "/assets/vectors/icons/logo-linkedin.svg" },
    ],
    followers: [
      { img: "/assets/imgs/avatar-1.png" },
      { img: "/assets/imgs/avatar-2.png" },
      { img: "/assets/imgs/avatar-3.png" },
      { img: "/assets/imgs/maintainer-1.png" },
      { img: "/assets/imgs/maintainer-2.png" },
      { img: "/assets/imgs/maintainer-3.png" },
      { img: "/assets/imgs/maintainer-4.png" },
      { img: "/assets/imgs/maintainer-5.png" },
      { img: "/assets/imgs/maintainer-6.png" },
      { img: "/assets/imgs/pool-avatar-1.png" },
      { img: "/assets/imgs/pool-avatar-2.png" },
    ],
  },
  {
    id: 8,
    profileImg: "/assets/vectors/profile-img.svg",
    name: "Nate William 8",
    location: "Nanjing, China",
    completedTickets: 12,
    deliveryRate: 98,
    tags: ["Frontend", "Database", "UI", "Backend", "Programmer"],
    projects: [
      { img: "/assets/vectors/icons/logo-dribbble.svg" },
      { img: "/assets/vectors/icons/logo-google-2.svg" },
      { img: "/assets/vectors/icons/logo-twitter.svg" },
      { img: "/assets/vectors/icons/logo-paypal.svg" },
      { img: "/assets/vectors/icons/logo-behance.svg" },
      { img: "/assets/vectors/icons/logo-linkedin.svg" },
    ],
    followers: [
      { img: "/assets/imgs/avatar-1.png" },
      { img: "/assets/imgs/avatar-2.png" },
      { img: "/assets/imgs/avatar-3.png" },
      { img: "/assets/imgs/maintainer-1.png" },
      { img: "/assets/imgs/maintainer-2.png" },
      { img: "/assets/imgs/maintainer-3.png" },
      { img: "/assets/imgs/maintainer-4.png" },
      { img: "/assets/imgs/maintainer-5.png" },
      { img: "/assets/imgs/maintainer-6.png" },
      { img: "/assets/imgs/pool-avatar-1.png" },
      { img: "/assets/imgs/pool-avatar-2.png" },
    ],
  },
  {
    id: 9,
    profileImg: "/assets/vectors/profile-img.svg",
    name: "Nate William 9",
    location: "Nanjing, China",
    completedTickets: 12,
    deliveryRate: 98,
    tags: ["Frontend", "Database", "UI", "Backend", "Programmer"],
    projects: [
      { img: "/assets/vectors/icons/logo-dribbble.svg" },
      { img: "/assets/vectors/icons/logo-google-2.svg" },
      { img: "/assets/vectors/icons/logo-twitter.svg" },
      { img: "/assets/vectors/icons/logo-paypal.svg" },
      { img: "/assets/vectors/icons/logo-behance.svg" },
      { img: "/assets/vectors/icons/logo-linkedin.svg" },
    ],
    followers: [
      { img: "/assets/imgs/avatar-1.png" },
      { img: "/assets/imgs/avatar-2.png" },
      { img: "/assets/imgs/avatar-3.png" },
      { img: "/assets/imgs/maintainer-1.png" },
      { img: "/assets/imgs/maintainer-2.png" },
      { img: "/assets/imgs/maintainer-3.png" },
      { img: "/assets/imgs/maintainer-4.png" },
      { img: "/assets/imgs/maintainer-5.png" },
      { img: "/assets/imgs/maintainer-6.png" },
      { img: "/assets/imgs/pool-avatar-1.png" },
      { img: "/assets/imgs/pool-avatar-2.png" },
    ],
  },
  {
    id: 10,
    profileImg: "/assets/vectors/profile-img.svg",
    name: "Nate William 10",
    location: "Nanjing, China",
    completedTickets: 12,
    deliveryRate: 98,
    tags: ["Frontend", "Database", "UI", "Backend", "Programmer"],
    projects: [
      { img: "/assets/vectors/icons/logo-dribbble.svg" },
      { img: "/assets/vectors/icons/logo-google-2.svg" },
      { img: "/assets/vectors/icons/logo-twitter.svg" },
      { img: "/assets/vectors/icons/logo-paypal.svg" },
      { img: "/assets/vectors/icons/logo-behance.svg" },
      { img: "/assets/vectors/icons/logo-linkedin.svg" },
    ],
    followers: [
      { img: "/assets/imgs/avatar-1.png" },
      { img: "/assets/imgs/avatar-2.png" },
      { img: "/assets/imgs/avatar-3.png" },
      { img: "/assets/imgs/maintainer-1.png" },
      { img: "/assets/imgs/maintainer-2.png" },
      { img: "/assets/imgs/maintainer-3.png" },
      { img: "/assets/imgs/maintainer-4.png" },
      { img: "/assets/imgs/maintainer-5.png" },
      { img: "/assets/imgs/maintainer-6.png" },
      { img: "/assets/imgs/pool-avatar-1.png" },
      { img: "/assets/imgs/pool-avatar-2.png" },
    ],
  },
  {
    id: 11,
    profileImg: "/assets/vectors/profile-img.svg",
    name: "Nate William 11",
    location: "Nanjing, China",
    completedTickets: 12,
    deliveryRate: 98,
    tags: ["Frontend", "Database", "UI", "Backend", "Programmer"],
    projects: [
      { img: "/assets/vectors/icons/logo-dribbble.svg" },
      { img: "/assets/vectors/icons/logo-google-2.svg" },
      { img: "/assets/vectors/icons/logo-twitter.svg" },
      { img: "/assets/vectors/icons/logo-paypal.svg" },
      { img: "/assets/vectors/icons/logo-behance.svg" },
      { img: "/assets/vectors/icons/logo-linkedin.svg" },
    ],
    followers: [
      { img: "/assets/imgs/avatar-1.png" },
      { img: "/assets/imgs/avatar-2.png" },
      { img: "/assets/imgs/avatar-3.png" },
      { img: "/assets/imgs/maintainer-1.png" },
      { img: "/assets/imgs/maintainer-2.png" },
      { img: "/assets/imgs/maintainer-3.png" },
      { img: "/assets/imgs/maintainer-4.png" },
      { img: "/assets/imgs/maintainer-5.png" },
      { img: "/assets/imgs/maintainer-6.png" },
      { img: "/assets/imgs/pool-avatar-1.png" },
      { img: "/assets/imgs/pool-avatar-2.png" },
    ],
  },
  {
    id: 12,
    profileImg: "/assets/vectors/profile-img.svg",
    name: "Nate William 12",
    location: "Nanjing, China",
    completedTickets: 12,
    deliveryRate: 98,
    tags: ["Frontend", "Database", "UI", "Backend", "Programmer"],
    projects: [
      { img: "/assets/vectors/icons/logo-dribbble.svg" },
      { img: "/assets/vectors/icons/logo-google-2.svg" },
      { img: "/assets/vectors/icons/logo-twitter.svg" },
      { img: "/assets/vectors/icons/logo-paypal.svg" },
      { img: "/assets/vectors/icons/logo-behance.svg" },
      { img: "/assets/vectors/icons/logo-linkedin.svg" },
    ],
    followers: [
      { img: "/assets/imgs/avatar-1.png" },
      { img: "/assets/imgs/avatar-2.png" },
      { img: "/assets/imgs/avatar-3.png" },
      { img: "/assets/imgs/maintainer-1.png" },
      { img: "/assets/imgs/maintainer-2.png" },
      { img: "/assets/imgs/maintainer-3.png" },
      { img: "/assets/imgs/maintainer-4.png" },
      { img: "/assets/imgs/maintainer-5.png" },
      { img: "/assets/imgs/maintainer-6.png" },
      { img: "/assets/imgs/pool-avatar-1.png" },
      { img: "/assets/imgs/pool-avatar-2.png" },
    ],
  },
  {
    id: 13,
    profileImg: "/assets/vectors/profile-img.svg",
    name: "Nate William 13",
    location: "Nanjing, China",
    completedTickets: 12,
    deliveryRate: 98,
    tags: ["Frontend", "Database", "UI", "Backend", "Programmer"],
    projects: [
      { img: "/assets/vectors/icons/logo-dribbble.svg" },
      { img: "/assets/vectors/icons/logo-google-2.svg" },
      { img: "/assets/vectors/icons/logo-twitter.svg" },
      { img: "/assets/vectors/icons/logo-paypal.svg" },
      { img: "/assets/vectors/icons/logo-behance.svg" },
      { img: "/assets/vectors/icons/logo-linkedin.svg" },
    ],
    followers: [
      { img: "/assets/imgs/avatar-1.png" },
      { img: "/assets/imgs/avatar-2.png" },
      { img: "/assets/imgs/avatar-3.png" },
      { img: "/assets/imgs/maintainer-1.png" },
      { img: "/assets/imgs/maintainer-2.png" },
      { img: "/assets/imgs/maintainer-3.png" },
      { img: "/assets/imgs/maintainer-4.png" },
      { img: "/assets/imgs/maintainer-5.png" },
      { img: "/assets/imgs/maintainer-6.png" },
      { img: "/assets/imgs/pool-avatar-1.png" },
      { img: "/assets/imgs/pool-avatar-2.png" },
    ],
  },
  {
    id: 14,
    profileImg: "/assets/vectors/profile-img.svg",
    name: "Nate William 14",
    location: "Nanjing, China",
    completedTickets: 12,
    deliveryRate: 98,
    tags: ["Frontend", "Database", "UI", "Backend", "Programmer"],
    projects: [
      { img: "/assets/vectors/icons/logo-dribbble.svg" },
      { img: "/assets/vectors/icons/logo-google-2.svg" },
      { img: "/assets/vectors/icons/logo-twitter.svg" },
      { img: "/assets/vectors/icons/logo-paypal.svg" },
      { img: "/assets/vectors/icons/logo-behance.svg" },
      { img: "/assets/vectors/icons/logo-linkedin.svg" },
    ],
    followers: [
      { img: "/assets/imgs/avatar-1.png" },
      { img: "/assets/imgs/avatar-2.png" },
      { img: "/assets/imgs/avatar-3.png" },
      { img: "/assets/imgs/maintainer-1.png" },
      { img: "/assets/imgs/maintainer-2.png" },
      { img: "/assets/imgs/maintainer-3.png" },
      { img: "/assets/imgs/maintainer-4.png" },
      { img: "/assets/imgs/maintainer-5.png" },
      { img: "/assets/imgs/maintainer-6.png" },
      { img: "/assets/imgs/pool-avatar-1.png" },
      { img: "/assets/imgs/pool-avatar-2.png" },
    ],
  },
  {
    id: 15,
    profileImg: "/assets/vectors/profile-img.svg",
    name: "Nate William 15",
    location: "Nanjing, China",
    completedTickets: 12,
    deliveryRate: 98,
    tags: ["Frontend", "Database", "UI", "Backend", "Programmer"],
    projects: [
      { img: "/assets/vectors/icons/logo-dribbble.svg" },
      { img: "/assets/vectors/icons/logo-google-2.svg" },
      { img: "/assets/vectors/icons/logo-twitter.svg" },
      { img: "/assets/vectors/icons/logo-paypal.svg" },
      { img: "/assets/vectors/icons/logo-behance.svg" },
      { img: "/assets/vectors/icons/logo-linkedin.svg" },
    ],
    followers: [
      { img: "/assets/imgs/avatar-1.png" },
      { img: "/assets/imgs/avatar-2.png" },
      { img: "/assets/imgs/avatar-3.png" },
      { img: "/assets/imgs/maintainer-1.png" },
      { img: "/assets/imgs/maintainer-2.png" },
      { img: "/assets/imgs/maintainer-3.png" },
      { img: "/assets/imgs/maintainer-4.png" },
      { img: "/assets/imgs/maintainer-5.png" },
      { img: "/assets/imgs/maintainer-6.png" },
      { img: "/assets/imgs/pool-avatar-1.png" },
      { img: "/assets/imgs/pool-avatar-2.png" },
    ],
  },
  {
    id: 16,
    profileImg: "/assets/vectors/profile-img.svg",
    name: "Nate William 16",
    location: "Nanjing, China",
    completedTickets: 12,
    deliveryRate: 98,
    tags: ["Frontend", "Database", "UI", "Backend", "Programmer"],
    projects: [
      { img: "/assets/vectors/icons/logo-dribbble.svg" },
      { img: "/assets/vectors/icons/logo-google-2.svg" },
      { img: "/assets/vectors/icons/logo-twitter.svg" },
      { img: "/assets/vectors/icons/logo-paypal.svg" },
      { img: "/assets/vectors/icons/logo-behance.svg" },
      { img: "/assets/vectors/icons/logo-linkedin.svg" },
    ],
    followers: [
      { img: "/assets/imgs/avatar-1.png" },
      { img: "/assets/imgs/avatar-2.png" },
      { img: "/assets/imgs/avatar-3.png" },
      { img: "/assets/imgs/maintainer-1.png" },
      { img: "/assets/imgs/maintainer-2.png" },
      { img: "/assets/imgs/maintainer-3.png" },
      { img: "/assets/imgs/maintainer-4.png" },
      { img: "/assets/imgs/maintainer-5.png" },
      { img: "/assets/imgs/maintainer-6.png" },
      { img: "/assets/imgs/pool-avatar-1.png" },
      { img: "/assets/imgs/pool-avatar-2.png" },
    ],
  },
  {
    id: 17,
    profileImg: "/assets/vectors/profile-img.svg",
    name: "Nate William 17",
    location: "Nanjing, China",
    completedTickets: 12,
    deliveryRate: 98,
    tags: ["Frontend", "Database", "UI", "Backend", "Programmer"],
    projects: [
      { img: "/assets/vectors/icons/logo-dribbble.svg" },
      { img: "/assets/vectors/icons/logo-google-2.svg" },
      { img: "/assets/vectors/icons/logo-twitter.svg" },
      { img: "/assets/vectors/icons/logo-paypal.svg" },
      { img: "/assets/vectors/icons/logo-behance.svg" },
      { img: "/assets/vectors/icons/logo-linkedin.svg" },
    ],
    followers: [
      { img: "/assets/imgs/avatar-1.png" },
      { img: "/assets/imgs/avatar-2.png" },
      { img: "/assets/imgs/avatar-3.png" },
      { img: "/assets/imgs/maintainer-1.png" },
      { img: "/assets/imgs/maintainer-2.png" },
      { img: "/assets/imgs/maintainer-3.png" },
      { img: "/assets/imgs/maintainer-4.png" },
      { img: "/assets/imgs/maintainer-5.png" },
      { img: "/assets/imgs/maintainer-6.png" },
      { img: "/assets/imgs/pool-avatar-1.png" },
      { img: "/assets/imgs/pool-avatar-2.png" },
    ],
  },
  {
    id: 18,
    profileImg: "/assets/vectors/profile-img.svg",
    name: "Nate William 18",
    location: "Nanjing, China",
    completedTickets: 12,
    deliveryRate: 98,
    tags: ["Frontend", "Database", "UI", "Backend", "Programmer"],
    projects: [
      { img: "/assets/vectors/icons/logo-dribbble.svg" },
      { img: "/assets/vectors/icons/logo-google-2.svg" },
      { img: "/assets/vectors/icons/logo-twitter.svg" },
      { img: "/assets/vectors/icons/logo-paypal.svg" },
      { img: "/assets/vectors/icons/logo-behance.svg" },
      { img: "/assets/vectors/icons/logo-linkedin.svg" },
    ],
    followers: [
      { img: "/assets/imgs/avatar-1.png" },
      { img: "/assets/imgs/avatar-2.png" },
      { img: "/assets/imgs/avatar-3.png" },
      { img: "/assets/imgs/maintainer-1.png" },
      { img: "/assets/imgs/maintainer-2.png" },
      { img: "/assets/imgs/maintainer-3.png" },
      { img: "/assets/imgs/maintainer-4.png" },
      { img: "/assets/imgs/maintainer-5.png" },
      { img: "/assets/imgs/maintainer-6.png" },
      { img: "/assets/imgs/pool-avatar-1.png" },
      { img: "/assets/imgs/pool-avatar-2.png" },
    ],
  },
  {
    id: 19,
    profileImg: "/assets/vectors/profile-img.svg",
    name: "Nate William 19",
    location: "Nanjing, China",
    completedTickets: 12,
    deliveryRate: 98,
    tags: ["Frontend", "Database", "UI", "Backend", "Programmer"],
    projects: [
      { img: "/assets/vectors/icons/logo-dribbble.svg" },
      { img: "/assets/vectors/icons/logo-google-2.svg" },
      { img: "/assets/vectors/icons/logo-twitter.svg" },
      { img: "/assets/vectors/icons/logo-paypal.svg" },
      { img: "/assets/vectors/icons/logo-behance.svg" },
      { img: "/assets/vectors/icons/logo-linkedin.svg" },
    ],
    followers: [
      { img: "/assets/imgs/avatar-1.png" },
      { img: "/assets/imgs/avatar-2.png" },
      { img: "/assets/imgs/avatar-3.png" },
      { img: "/assets/imgs/maintainer-1.png" },
      { img: "/assets/imgs/maintainer-2.png" },
      { img: "/assets/imgs/maintainer-3.png" },
      { img: "/assets/imgs/maintainer-4.png" },
      { img: "/assets/imgs/maintainer-5.png" },
      { img: "/assets/imgs/maintainer-6.png" },
      { img: "/assets/imgs/pool-avatar-1.png" },
      { img: "/assets/imgs/pool-avatar-2.png" },
    ],
  },
  {
    id: 20,
    profileImg: "/assets/vectors/profile-img.svg",
    name: "Nate William 20",
    location: "Nanjing, China",
    completedTickets: 12,
    deliveryRate: 98,
    tags: ["Frontend", "Database", "UI", "Backend", "Programmer"],
    projects: [
      { img: "/assets/vectors/icons/logo-dribbble.svg" },
      { img: "/assets/vectors/icons/logo-google-2.svg" },
      { img: "/assets/vectors/icons/logo-twitter.svg" },
      { img: "/assets/vectors/icons/logo-paypal.svg" },
      { img: "/assets/vectors/icons/logo-behance.svg" },
      { img: "/assets/vectors/icons/logo-linkedin.svg" },
    ],
    followers: [
      { img: "/assets/imgs/avatar-1.png" },
      { img: "/assets/imgs/avatar-2.png" },
      { img: "/assets/imgs/avatar-3.png" },
      { img: "/assets/imgs/maintainer-1.png" },
      { img: "/assets/imgs/maintainer-2.png" },
      { img: "/assets/imgs/maintainer-3.png" },
      { img: "/assets/imgs/maintainer-4.png" },
      { img: "/assets/imgs/maintainer-5.png" },
      { img: "/assets/imgs/maintainer-6.png" },
      { img: "/assets/imgs/pool-avatar-1.png" },
      { img: "/assets/imgs/pool-avatar-2.png" },
    ],
  },
  {
    id: 21,
    profileImg: "/assets/vectors/profile-img.svg",
    name: "Nate William 21",
    location: "Nanjing, China",
    completedTickets: 12,
    deliveryRate: 98,
    tags: ["Frontend", "Database", "UI", "Backend", "Programmer"],
    projects: [
      { img: "/assets/vectors/icons/logo-dribbble.svg" },
      { img: "/assets/vectors/icons/logo-google-2.svg" },
      { img: "/assets/vectors/icons/logo-twitter.svg" },
      { img: "/assets/vectors/icons/logo-paypal.svg" },
      { img: "/assets/vectors/icons/logo-behance.svg" },
      { img: "/assets/vectors/icons/logo-linkedin.svg" },
    ],
    followers: [
      { img: "/assets/imgs/avatar-1.png" },
      { img: "/assets/imgs/avatar-2.png" },
      { img: "/assets/imgs/avatar-3.png" },
      { img: "/assets/imgs/maintainer-1.png" },
      { img: "/assets/imgs/maintainer-2.png" },
      { img: "/assets/imgs/maintainer-3.png" },
      { img: "/assets/imgs/maintainer-4.png" },
      { img: "/assets/imgs/maintainer-5.png" },
      { img: "/assets/imgs/maintainer-6.png" },
      { img: "/assets/imgs/pool-avatar-1.png" },
      { img: "/assets/imgs/pool-avatar-2.png" },
    ],
  },
  {
    id: 22,
    profileImg: "/assets/vectors/profile-img.svg",
    name: "Nate William 22",
    location: "Nanjing, China",
    completedTickets: 12,
    deliveryRate: 98,
    tags: ["Frontend", "Database", "UI", "Backend", "Programmer"],
    projects: [
      { img: "/assets/vectors/icons/logo-dribbble.svg" },
      { img: "/assets/vectors/icons/logo-google-2.svg" },
      { img: "/assets/vectors/icons/logo-twitter.svg" },
      { img: "/assets/vectors/icons/logo-paypal.svg" },
      { img: "/assets/vectors/icons/logo-behance.svg" },
      { img: "/assets/vectors/icons/logo-linkedin.svg" },
    ],
    followers: [
      { img: "/assets/imgs/avatar-1.png" },
      { img: "/assets/imgs/avatar-2.png" },
      { img: "/assets/imgs/avatar-3.png" },
      { img: "/assets/imgs/maintainer-1.png" },
      { img: "/assets/imgs/maintainer-2.png" },
      { img: "/assets/imgs/maintainer-3.png" },
      { img: "/assets/imgs/maintainer-4.png" },
      { img: "/assets/imgs/maintainer-5.png" },
      { img: "/assets/imgs/maintainer-6.png" },
      { img: "/assets/imgs/pool-avatar-1.png" },
      { img: "/assets/imgs/pool-avatar-2.png" },
    ],
  },
  {
    id: 23,
    profileImg: "/assets/vectors/profile-img.svg",
    name: "Nate William 23",
    location: "Nanjing, China",
    completedTickets: 12,
    deliveryRate: 98,
    tags: ["Frontend", "Database", "UI", "Backend", "Programmer"],
    projects: [
      { img: "/assets/vectors/icons/logo-dribbble.svg" },
      { img: "/assets/vectors/icons/logo-google-2.svg" },
      { img: "/assets/vectors/icons/logo-twitter.svg" },
      { img: "/assets/vectors/icons/logo-paypal.svg" },
      { img: "/assets/vectors/icons/logo-behance.svg" },
      { img: "/assets/vectors/icons/logo-linkedin.svg" },
    ],
    followers: [
      { img: "/assets/imgs/avatar-1.png" },
      { img: "/assets/imgs/avatar-2.png" },
      { img: "/assets/imgs/avatar-3.png" },
      { img: "/assets/imgs/maintainer-1.png" },
      { img: "/assets/imgs/maintainer-2.png" },
      { img: "/assets/imgs/maintainer-3.png" },
      { img: "/assets/imgs/maintainer-4.png" },
      { img: "/assets/imgs/maintainer-5.png" },
      { img: "/assets/imgs/maintainer-6.png" },
      { img: "/assets/imgs/pool-avatar-1.png" },
      { img: "/assets/imgs/pool-avatar-2.png" },
    ],
  },
  {
    id: 24,
    profileImg: "/assets/vectors/profile-img.svg",
    name: "Nate William 24",
    location: "Nanjing, China",
    completedTickets: 12,
    deliveryRate: 98,
    tags: ["Frontend", "Database", "UI", "Backend", "Programmer"],
    projects: [
      { img: "/assets/vectors/icons/logo-dribbble.svg" },
      { img: "/assets/vectors/icons/logo-google-2.svg" },
      { img: "/assets/vectors/icons/logo-twitter.svg" },
      { img: "/assets/vectors/icons/logo-paypal.svg" },
      { img: "/assets/vectors/icons/logo-behance.svg" },
      { img: "/assets/vectors/icons/logo-linkedin.svg" },
    ],
    followers: [
      { img: "/assets/imgs/avatar-1.png" },
      { img: "/assets/imgs/avatar-2.png" },
      { img: "/assets/imgs/avatar-3.png" },
      { img: "/assets/imgs/maintainer-1.png" },
      { img: "/assets/imgs/maintainer-2.png" },
      { img: "/assets/imgs/maintainer-3.png" },
      { img: "/assets/imgs/maintainer-4.png" },
      { img: "/assets/imgs/maintainer-5.png" },
      { img: "/assets/imgs/maintainer-6.png" },
      { img: "/assets/imgs/pool-avatar-1.png" },
      { img: "/assets/imgs/pool-avatar-2.png" },
    ],
  },
];

const sortOptions = [
  {
    label: "Sort By",
    inActive: true,
  },
  {
    label: "Recently work with",
  },
  {
    label: "Rank",
  },
  {
    label: "Ticket Completed",
  },
  {
    label: "Successfull Delivery Rate",
  },
];

const pageSize = 6;

const FindWorkers = () => {
  const [searchState, setSearchState] = useState("");
  const [sortState] = useState("Ticket Completed");
  const [pageNumState, setPageNumState] = useState(1);
  const [filteredData, setFilteredData] = useState(data);
  const [dataLen, setDataLen] = useState(data.length);

  const badgeClickHandler = () => {
    // FOR YOUR USE
  };

  useEffect(() => {
    setFilteredData((prevState) => {
      if (pageNumState < 0 || pageNumState > Math.ceil(data.length / pageSize))
        return prevState;
      const newData = data.filter((el) =>
        el.name.toLowerCase().includes(searchState.toLowerCase())
      );
      setDataLen(newData.length);
      return newData.slice(
        (pageNumState - 1) * pageSize,
        pageNumState * pageSize
      );
    });
  }, [pageNumState, searchState]);

  const clearValue = () => {
    setSearchState("");
  };

  return (
    <Section id="find-workers">
      <h2>Find Talent</h2>
      <p className="fs-18 mt-1">Make searching extra special</p>

      <div className="search-container">
        <SearchWrap
          searchState={searchState}
          setSearchState={setSearchState}
          onChange={(e) => {
            setSearchState(e.target.value);
          }}
        />
        <div className="right">
          <div className="icon">
            <img
              src="/assets/vectors/icons/close-2.svg"
              alt="close"
              className="remove"
              onClick={clearValue}
            />
          </div>
          <div className="icon">
            <Dropdown
              title="Sort By"
              options={sortOptions}
              defaultValue={sortState}
              notBig
            >
              <img
                src="/assets/vectors/icons/sort.svg"
                alt="sort"
                className="sort"
              />
            </Dropdown>
          </div>
        </div>
      </div>

      <div className="search-results mt-36">
        <AnimatePresence>
          {filteredData.length > 0 ? (
            filteredData.map((el, idx) => {
              return (
                <motion.div
                  className="search-result-card"
                  key={"search-result" + el.id}
                  {...tiledAnimations}
                  transition={{
                    duration: 0.5,
                  }}
                >
                  <div className="left">
                    <div className="top">
                      <div className="profile-img">
                        <img
                          src={el.profileImg}
                          alt={el.name}
                          title={el.name}
                        />
                        <img
                          src="/assets/imgs/profile-badge.png"
                          alt="badge"
                          className="badge-icon"
                        />
                      </div>
                      <div className="text">
                        <h4>{el.name}</h4>
                        <div className="location mt-10">
                          <img
                            src="/assets/vectors/icons/location-2.svg"
                            alt="location"
                            className="location-pin"
                          />
                          {el.location}
                        </div>
                      </div>
                      <div className="profile-badge">
                        <img src="/assets/imgs/profile-badge.png" alt="badge" />
                      </div>
                    </div>

                    <div className="badges">
                      {el.tags.map((el2, idx2) => {
                        return (
                          <Badge
                            onClick={badgeClickHandler}
                            key={"badge" + idx + idx2}
                          >
                            {el2}
                          </Badge>
                        );
                      })}
                    </div>
                  </div>

                  <div className="d-none d-sm-block d-md-none boxes">
                    <Boxes
                      deliveryRate={el.deliveryRate}
                      completedTickets={el.completedTickets}
                    />
                  </div>

                  <div className="right">
                    <div className="acheivements">
                      <div className="acheivement-item">
                        <h5 className="fs-14">Projects</h5>
                        <div className="listings">
                          <UserList
                            users={el.projects}
                            maxLen={6}
                            breakpoints={[
                              {
                                width: 0,
                                itemsLength: 7,
                              },
                              {
                                width: 576,
                                itemsLength: 4,
                              },
                              {
                                width: 992,
                                itemsLength: 6,
                              },
                            ]}
                          />
                        </div>
                      </div>
                      <div className="acheivement-item mt-3">
                        <h5 className="fs-14">Followers</h5>
                        <div className="listings">
                          <UserList
                            users={el.followers}
                            maxLen={7}
                            breakpoints={[
                              {
                                width: 0,
                                itemsLength: 7,
                              },
                              {
                                width: 576,
                                itemsLength: 4,
                              },
                              {
                                width: 992,
                                itemsLength: 6,
                              },
                            ]}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="d-block d-sm-none d-md-block boxes-main">
                      <div className="boxes-main">
                        <Boxes
                          deliveryRate={el.deliveryRate}
                          completedTickets={el.completedTickets}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })
          ) : (
            <div className="no-results">
              No Talent matching your search parameters exist. Try using more
              generic keywords for a better result
            </div>
          )}
        </AnimatePresence>
      </div>

      {Math.ceil(dataLen / 6) !== 0 && (
        <PaginationNum
          total={Math.ceil(dataLen / 6)}
          pageNumState={pageNumState}
          setPageNumState={setPageNumState}
        />
      )}
    </Section>
  );
};

export default FindWorkers;

const Boxes = ({ completedTickets, deliveryRate }) => {
  return (
    <div className="tickets-info">
      <div className="box completed">
        <div className="img">
          <img
            src="/assets/vectors/icons/active-tickets.svg"
            alt="completed-ticket"
          />
        </div>
        <div className="text">
          <div className="label">Completed Ticket</div>
          <div>{completedTickets}</div>
        </div>
      </div>

      <div className="box delivery">
        <div className="img">
          <img src="/assets/vectors/icons/delivery.svg" alt="delivery-rate" />
        </div>
        <div className="text">
          <div className="label">Delivery Rate</div>
          <div>{deliveryRate}%</div>
        </div>
      </div>
    </div>
  );
};
