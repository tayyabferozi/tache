import React from "react";

import Input from "../Input";
import Button from "../Button";
import "./SearchWrap.scss";

const SearchWrap = ({ searchState, setSearchState }) => {
  const onChange = (e) => {
    setSearchState(e.target.value);
  };

  return (
    <div className="search-wrap mt-34">
      <Input
        value={searchState}
        onChange={onChange}
        icon={{
          src: "/assets/vectors/icons/search.svg",
          alt: "search",
        }}
        placeholder="Search..."
      />
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
  );
};

export default SearchWrap;
