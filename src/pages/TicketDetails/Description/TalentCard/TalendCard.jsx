import React from "react";

import Badge from "../../../../components/Badge";
import Button from "../../../../components/Button";

const TalendCard = ({ el, idx }) => {
  return (
    <div className="talent-card">
      <div className="top d-flex align-items-center gap-20">
        <div className="img">
          <img src={el.img} alt={el.name} />
          <img
            className="madel"
            src="/assets/imgs/profile-badge.png"
            alt="profile-img"
          />
        </div>
        <div className="text">
          <h4 className="mb-1">{el.name}</h4>
          <div className="d-flex">
            <img
              className="me-2"
              src="/assets/vectors/icons/location-2.svg"
              alt="location"
              title="location"
            />
            {el.location}
          </div>
        </div>
      </div>

      <div className="badges d-flex mt-3 gap-2 flex-wrap">
        {el.badges.map((el2, idx2) => {
          return <Badge key={"talent-badge" + idx + idx2}>{el2}</Badge>;
        })}
      </div>

      <div className="reviews d-flex justify-content-between align-items-sm-end align-items-center gap-10 gap-575-20 flex-sm-row flex-column">
        <div className="reviews-left gap-20">
          <div className="box grey">
            <div className="d-flex gap-1">
              <img src="/assets/vectors/icons/grey-star.svg" alt="grey-star" />
              <img src="/assets/vectors/icons/grey-star.svg" alt="grey-star" />
              <img src="/assets/vectors/icons/grey-star.svg" alt="grey-star" />
              <img src="/assets/vectors/icons/grey-star.svg" alt="grey-star" />
              <img
                src="/assets/vectors/icons/grey-star-half.svg"
                alt="grey-star"
              />
            </div>
            <div className="d-flex gap-10 mt-10">
              <div className="fs-12 text-light-3">Reviews</div>
              <div className="fs-12 text-light-1">
                {el.rating}{" "}
                <span className="d-xl-inline d-lg-none d-sm-inline d-none">
                  out of
                </span>
                <span className="d-sm-none d-lg-inline d-xl-none">/</span> 5.0
              </div>
            </div>
          </div>
          <div className="box primary-light">
            <div className="d-flex gap-1">
              <img
                src="/assets/vectors/icons/active-tickets.svg"
                alt="active-tickets"
              />
            </div>
            <div className="d-flex gap-10 mt-10">
              <div className="fw-500 fs-12 text-primary-1">
                Completed{" "}
                <span className="d-xl-inline d-lg-none d-sm-inline d-none">
                  Tickets
                </span>
              </div>
              <div className="fw-500 fs-12 text-primary-1">
                {el.completedTicket}
              </div>
            </div>
          </div>
        </div>
        <Button primaryLight inline className="px-20 h-40 btn-assign">
          Assign
        </Button>
      </div>
    </div>
  );
};

export default TalendCard;
