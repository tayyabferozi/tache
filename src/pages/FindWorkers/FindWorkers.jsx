import React, { useState } from "react";

import Section from "../../components/Section";
import SearchWrap from "../../components/SearchWrap";
import Badge from "../../components/Badge";
import UserList from "../../components/UserList";
import "./FindWorkers.scss";

const workers = [
  {
    profileImg: "/assets/vectors/profile-img.svg",
    name: "Nate William",
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
    profileImg: "/assets/vectors/profile-img.svg",
    name: "Nate William",
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
    profileImg: "/assets/vectors/profile-img.svg",
    name: "Nate William",
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
    profileImg: "/assets/vectors/profile-img.svg",
    name: "Nate William",
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
    profileImg: "/assets/vectors/profile-img.svg",
    name: "Nate William",
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
    profileImg: "/assets/vectors/profile-img.svg",
    name: "Nate William",
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

const FindWorkers = () => {
  const [searchState, setSearchState] = useState("");

  const clearValue = () => {
    setSearchState("");
  };

  return (
    <Section id="find-workers">
      <h2>Find Workers</h2>
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
            <img
              src="/assets/vectors/icons/sort.svg"
              alt="sort"
              className="sort"
            />
          </div>
        </div>
      </div>

      <div className="search-results mt-36">
        {workers.map((el, idx) => {
          return (
            <div className="search-result-card" key={"search-results" + idx}>
              <div className="left">
                <div className="top">
                  <div className="profile-img">
                    <img src={el.profileImg} alt={el.name} title={el.name} />
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
                  {el.tags.map((el, idx) => {
                    return <Badge>{el}</Badge>;
                  })}
                </div>
              </div>

              <div className="right">
                <div className="acheivements">
                  <div className="acheivement-item">
                    <h5 className="fs-14">Projects</h5>
                    <div className="listings">
                      <UserList users={el.projects} maxLen={6} />
                    </div>
                  </div>
                  <div className="acheivement-item mt-3">
                    <h5 className="fs-14">Followers</h5>
                    <div className="listings">
                      <UserList users={el.followers} maxLen={7} />
                    </div>
                  </div>
                </div>

                <div className="tickets-info">
                  <div className="box completed">
                    <div className="img">
                      <img
                        src="/assets/vectors/icons/active-tickets.svg"
                        alt="completed-ticket"
                      />
                    </div>
                    <div className="text">
                      <div>Completed Ticket</div>
                      <div>{el.completedTickets}</div>
                    </div>
                  </div>

                  <div className="box delivery">
                    <div className="img">
                      <img
                        src="/assets/vectors/icons/delivery.svg"
                        alt="delivery-rate"
                      />
                    </div>
                    <div className="text">
                      <div>Delivery Rate</div>
                      <div>{el.deliveryRate}%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default FindWorkers;
