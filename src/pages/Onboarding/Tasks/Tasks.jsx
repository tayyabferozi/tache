import React from "react";

import ProjectLayoutSection from "../../../components/ProjectLayoutSection";
import SearchWrap from "../../../components/SearchWrap";
import Button from "../../../components/Button";
import Dropdown from "../../../components/Dropdown";
import TaskCards from "./TaskCards/TaskCards";
import Switch from "../../../components/Switch";
import "./Tasks.scss";

const sortOptions = [
  {
    label: "Sort By",
    inActive: true,
  },
  {
    label: "Recently Added",
  },
  {
    label: "Oldest",
  },
  {
    label: "In Development",
  },
  {
    label: "Awaiting Talent",
  },
  {
    label: "Price - high",
  },
  {
    label: "Price - low",
  },
];

const Tasks = ({
  showActivity,
  searchState,
  setSearchState,
  sortState,
  project,
  toggleActivityBar,
}) => {
  return (
    <ProjectLayoutSection bgGrey className="tasks">
      <div
        id="tasks"
        className="d-flex flex-xl-row flex-column justify-content-between align-items-xl-center gap-20"
      >
        <div className="d-flex align-items-center gap-20 flex-grow-1">
          <div className="fs-20 text-light-1 fw-500">Tasks</div>
          <SearchWrap
            bordered
            noMt
            searchState={searchState}
            setSearchState={setSearchState}
          />
        </div>
        <div className="d-flex align-items-center gap-3">
          <Dropdown
            title="Sort By"
            options={sortOptions}
            defaultValue={sortState}
            notBig
            borderedOptions
            CustomOption={Toggler}
          >
            <Button
              white
              borderGrey
              noText
              icon={{
                src: "/assets/vectors/icons/dropdown.svg",
                alt: "arrow",
                title: "arrow",
              }}
            ></Button>
          </Dropdown>
          <Button
            white
            icon={{
              src: "/assets/vectors/icons/add-3.svg",
              title: "add",
              alt: "add",
            }}
          >
            Task
          </Button>
          {!showActivity && (
            <Button
              className="ms-10"
              white
              borderGrey
              noText
              icon={{
                src: "/assets/vectors/icons/notification.svg",
                alt: "notification",
                title: "notification",
              }}
              onClick={toggleActivityBar}
            ></Button>
          )}
        </div>
      </div>
      <TaskCards
        project={project}
        searchState={searchState}
        showActivity={showActivity}
      />
    </ProjectLayoutSection>
  );
};

export default Tasks;

const Toggler = () => {
  return (
    <div className="option inactive d-flex justify-content-center align-items-center">
      <Switch label="Display Active" />
    </div>
  );
};
