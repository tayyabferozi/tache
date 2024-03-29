import React from "react";

import Stats from "./Stats";
import Button from "../../../components/Button";
import ProjectLayoutSection from "../../../components/ProjectLayoutSection";
import "./ProjectInfo.scss";

const ProjectInfo = ({ project, toggleSubscribed }) => {
  return (
    <ProjectLayoutSection bgGrey className="project-info">
      <div className="top-section pt-3">
        <div className="left mw-0">
          <div className="title">
            <h2 className="fs-36 mw-0 restrict-one-line me-20">Project Name</h2>
            <div className="privacy">
              <img
                className="privacy-icon"
                src={`/assets/vectors/icons/${
                  project.privacy === "Public" ? "public-3" : "private"
                }.svg`}
                alt="public"
              />
              {project.privacy} Project
            </div>
          </div>

          <div className="mt-20 subscribe">
            <Button
              className="flex-row-reverse"
              icon={{
                src: "/assets/vectors/icons/bell.svg",
                title: "bell",
                alt: "bell",
              }}
              primary={!project.subscribed}
              bordered={project.subscribed}
              onClick={toggleSubscribed}
            >
              {project.subscribed ? "Subscribed" : "Subscribe"}
            </Button>
          </div>
        </div>
        <Stats {...project} />
      </div>
    </ProjectLayoutSection>
  );
};

export default ProjectInfo;
