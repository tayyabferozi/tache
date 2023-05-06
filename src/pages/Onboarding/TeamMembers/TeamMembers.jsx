import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../../components/Button";
import ProjectLayoutSection from "../../../components/ProjectLayoutSection";
import BigJumbotron from "../../../components/BigJumbotron/BigJumbotron";
import GridContainer from "../../../components/GridContainer/GridContainer";
import Badge from "../../../components/Badge";
import "./TeamMember.scss";
import clsx from "clsx";

const TeamMembers = ({ project }) => {
  return (
    <ProjectLayoutSection bgWhite>
      <BigJumbotron
        icon="/assets/vectors/icons/add-team-member.svg"
        title="Add Team Member"
        subTitle="Lorem ipsum dolor sit amet consectetur. Hendrerit arcu lorem"
      />

      <div className="mt-4">
        <GridContainer>
          {project.teamMembers.map((el, idx) => {
            return (
              <div className="col-md-6" key={"onboarding-team-member" + idx}>
                <Card {...el} />
              </div>
            );
          })}
        </GridContainer>

        <div className="d-flex justify-content-center mt-30">
          <Button white>Find more talent</Button>
        </div>
      </div>
    </ProjectLayoutSection>
  );
};

export default TeamMembers;

const Card = ({ idx, img, name, tasksCompleted, rating, badges }) => {
  const navigate = useNavigate();
  const [isCardHovered, setIsCardHovered] = useState(false);
  const [isBtnHovered, setIsBtnHovered] = useState(false);

  const addCardActive = (e) => {
    setIsCardHovered(true);
  };

  const addBtnActive = (e) => {
    setIsBtnHovered(true);
  };

  const removeCardActive = (e) => {
    setIsCardHovered(false);
  };

  const removeBtnActive = (e) => {
    setIsBtnHovered(false);
  };

  const cardClickHandler = () => {
    if (isCardHovered && !isBtnHovered) navigate("/profile");
  };

  return (
    <div
      className={clsx("team-member-card", {
        hovered: isCardHovered && !isBtnHovered,
      })}
      onMouseOver={addCardActive}
      onMouseLeave={removeCardActive}
      onClick={cardClickHandler}
    >
      <div className="top d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center gap-20">
        <div className="left d-flex align-items-center gap-2 mw-0">
          <img src={img} alt={name} />
          <div className="text-light-1 fw-500 fs-20 restrict-one-line">
            {name}
          </div>
        </div>
        <div className="right">
          <div className="d-flex flex-wrap justify-content-between align-items-center gap-3">
            <div className="d-flex gap-2">
              <img
                src="/assets/vectors/icons/tasks-completed.svg"
                alt="tasks completed"
                title="tasks completed"
              />
              <div className="fs-14">{tasksCompleted}</div>
            </div>
            <div className="d-flex align-items-center gap-2">
              <img
                className="w-16"
                src="/assets/vectors/icons/star.svg"
                alt="star"
              />
              <div className="fs-14">{rating}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom d-flex gap-10 flex-wrap justify-content-between align-items-center mt-4">
        <div className="d-flex gap-1">
          {badges.map((el2, idx2) => {
            return (
              <Badge
                key={"team-member-badge" + idx + "-" + idx2}
                className="fs-14"
              >
                {el2}
              </Badge>
            );
          })}
        </div>
        <div>
          <Button
            onMouseOver={addBtnActive}
            onMouseLeave={removeBtnActive}
            primaryLight
            className="h-30"
          >
            Invite
          </Button>
        </div>
      </div>
    </div>
  );
};
