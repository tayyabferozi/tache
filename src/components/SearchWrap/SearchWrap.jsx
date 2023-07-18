import React from "react";

import Input from "../Input";
import Button from "../Button";
import "./SearchWrap.scss";
import clsx from "clsx";

const SearchWrap = ({
  lg,
  className,
  bordered,
  btnLink,
  withBtn,
  withAddBtn,
  searchState,
  setSearchState,
  noMt,
  onChange: onChangeProp,
  ...rest
}) => {
  const onChange = (e) => {
    setSearchState(e.target.value);

    if (onChangeProp) onChangeProp(e);
  };

  return (
    <div
      className={clsx(
        "search-wrap",
        className,
        { bordered, lg },
        !noMt && "mt-34"
      )}
    >
      <Input
        value={searchState}
        onChange={onChange}
        icon={{
          src: "/assets/vectors/icons/search.svg",
          alt: "search",
        }}
        placeholder="Search..."
        {...rest}
      />
      {withBtn && (
        <Button to={btnLink} primary className="search">
          Search
        </Button>
      )}
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
