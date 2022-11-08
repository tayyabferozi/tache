import React, { useState } from "react";

import "./ProjectTickets.scss";

import Section from "../../components/Section";
import Tickets from "./Tickets/Tickets";
import MainHead from "./MainHead/MainHead";
import SubTitle from "./SubTitle/SubTitle";

const ProjectTickets = () => {
  const [searchState, setSearchState] = useState("");
  const [filterState, setFilterState] = useState("");
  const [projectInfo] = useState({
    title: "Project Name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi risus",
  });

  return (
    <Section id="project-tickets">
      <SubTitle />

      <MainHead
        searchState={searchState}
        setSearchState={setSearchState}
        setFilterState={setFilterState}
        data={projectInfo}
      />

      <Tickets searchState={searchState} filterState={filterState} />
    </Section>
  );
};

export default ProjectTickets;
