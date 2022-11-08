import React from "react";

import Input from "../Input";
import Button from "../Button";
import "./SearchWrap.scss";
import clsx from "clsx";

const SearchWrap = ({ withAddBtn, searchState, setSearchState, noMt }) => {
  const onChange = (e) => {
    setSearchState(e.target.value);
  };

  return (
    <div className={clsx("search-wrap", !noMt && "mt-34")}>
      <Input
        value={searchState}
        onChange={onChange}
        icon={{
          src: "/assets/vectors/icons/search.svg",
          alt: "search",
        }}
        placeholder="Search..."
      />
      {withAddBtn && (
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
      )}
    </div>
  );
};

export default SearchWrap;
