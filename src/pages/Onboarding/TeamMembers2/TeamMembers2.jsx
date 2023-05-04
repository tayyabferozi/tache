import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../../components/Button";
import ProjectLayoutSection from "../../../components/ProjectLayoutSection";
import BigJumbotron from "../../../components/BigJumbotron/BigJumbotron";
import GridContainer from "../../../components/GridContainer/GridContainer";
import "./TeamMember2.scss";
import clsx from "clsx";

const TeamMembers = ({ project }) => {
  return (
    <ProjectLayoutSection bgGrey>
      <BigJumbotron
        icon="/assets/vectors/icons/add-team-member-2.svg"
        title="Team Member"
        subTitle="Lorem ipsum dolor sit amet consectetur. Hendrerit arcu lorem"
      />

      <div className="mt-4">
        <GridContainer>
          {project.teamMembers2.map((el, idx) => {
            return (
              <div className="col-lg-6" key={"onboarding-team-member" + idx}>
                <Card {...el} />
              </div>
            );
          })}
        </GridContainer>
      </div>
    </ProjectLayoutSection>
  );
};

export default TeamMembers;

const Card = ({ img, name, designation, box, rating }) => {
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
      className={clsx("team-member-card-2", {
        hovered: isCardHovered && !isBtnHovered,
      })}
      onMouseOver={addCardActive}
      onMouseLeave={removeCardActive}
      onClick={cardClickHandler}
    >
      <div className="top d-flex justify-content-between align-items-center">
        <div className="left d-flex align-items-center gap-2">
          <img src={img} alt={name} />
          <div className="text-light-1 fw-500 fs-20">{name}</div>
        </div>
        <div className="right">
          <div className="designation">{designation}</div>
        </div>
      </div>
      <div className="bottom d-flex justify-content-between align-items-center mt-4">
        <div className="d-flex gap-3">
          <div className="d-flex align-items-center gap-2 box">
            <img src="/assets/vectors/icons/box.svg" alt="box" />
            <div className="">{box}</div>
          </div>
          <div className="d-flex align-items-center gap-2">
            <img src="/assets/vectors/icons/star.svg" alt="star" />
            <div className="">{rating}</div>
          </div>
        </div>
        <div>
          <Button
            onMouseOver={addBtnActive}
            onMouseLeave={removeBtnActive}
            primaryLight
            className="h-40"
            icon={{
              src: "/assets/vectors/icons/chat.svg",
              title: "chat",
              alt: "chat",
            }}
          >
            Chat
          </Button>
        </div>
      </div>
    </div>
  );
};
