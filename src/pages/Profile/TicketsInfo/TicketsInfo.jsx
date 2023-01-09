import React from "react";
import UserList from "../../../components/UserList";
import Heatmap from "./Heatmap";

import "./TicketsInfo.scss";

const followers = [
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
  {
    img: "/assets/imgs/maintainer-3.png",
  },
];

const TicketsInfo = () => {
  return (
    <div className="tickets-info-sec">
      <div className="tickets-main">
        <div className="tickets-main__left">
          <Heatmap />
        </div>
        <div className="tickets-main__right">
          <div className="item">
            <div className="fs-14 fw-700">Followers</div>

            <UserList
              users={followers}
              maxLen={7}
              breakpoints={[
                {
                  width: 0,
                  itemsLength: 7,
                },
                {
                  width: 1101,
                  itemsLength: 4,
                },
                {
                  width: 1251,
                  itemsLength: 6,
                },
              ]}
            />
          </div>
          <div className="item">
            <div className="fs-14 fw-700">Following</div>

            <UserList
              users={followers}
              maxLen={7}
              breakpoints={[
                {
                  width: 0,
                  itemsLength: 7,
                },
                {
                  width: 1101,
                  itemsLength: 4,
                },
                {
                  width: 1251,
                  itemsLength: 6,
                },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketsInfo;
