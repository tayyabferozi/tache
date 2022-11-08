import React from "react";

import "./MainHead.scss";

import Dropdown from "../../../components/Dropdown/Dropdown";
import SearchWrap from "../../../components/SearchWrap";
import Button from "../../../components/Button";
import InfoBox from "./InfoBox";

const filterOptions = [
  {
    label: "In Development",
  },
  {
    label: "Awaiting Contributor",
  },
  {
    label: "Recently added",
  },
  {
    label: "Oldest added",
  },
  {
    label: "Alphabetical",
  },
];

const importOptions = [
  {
    img: "/assets/vectors/icons/logo-github.svg",
    label: "Github",
  },
];

const MainHead = ({ searchState, setSearchState, setFilterState, data }) => {
  const filterChangeHandler = (value) => {
    setFilterState(value);
  };

  return (
    <div className="project-tickets-main-head">
      <div className="main-head-item">
        <div className="main-head-item__left">
          <h2>{data.title}</h2>
          <p className="fs-18 mt-2 opacity-80 mb-575-20">{data.description}</p>
        </div>
        <div className="main-head-item__right">
          <div className="info-boxes">
            <InfoBox active text="Active" count="9" />
            <InfoBox text="Worked on" count="5" />
          </div>
        </div>

        <div className="main-head-item__left">
          <SearchWrap
            noMt
            searchState={searchState}
            setSearchState={setSearchState}
          />
        </div>
        <div className="main-head-item__right">
          <div className="buttons">
            <Dropdown
              defaultValue="Recently Added"
              options={filterOptions}
              onChoose={filterChangeHandler}
            />
            <Dropdown options={importOptions}>
              <Button
                grey
                icon={{
                  className: "me-2",
                  src: "assets/vectors/icons/import-2.svg",
                  title: "import",
                }}
              >
                Import
              </Button>
            </Dropdown>
            <Button
              primary
              icon={{
                className: "me-2 pe-1",
                src: "assets/vectors/icons/add.svg",
                title: "add",
              }}
            >
              Add
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHead;
