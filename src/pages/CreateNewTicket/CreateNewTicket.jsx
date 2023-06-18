import React, { useState } from "react";
import CreatableSelect from "react-select/creatable";

import Section from "../../components/Section";
import Badge from "../../components/Badge";
import Input from "../../components/Input";
import CustomMDEditor from "../../components/CustomMDEditor";
import GridContainer from "../../components/GridContainer";
import Checkbox from "../../components/Checkbox";
import Button from "../../components/Button";
import useModal from "../../hooks/useModal";
import AddCustomPrice from "../../modals/AddCustomPrice";
import "./CreateNewTicket.scss";
import {
  getDaysInMonth,
  monthNames,
  timeCombinations,
} from "../../constants/date-time";

const tagOptions = [
  { label: "Frontend", value: "frontend" },
  { label: "Database", value: "database" },
  { label: "UI", value: "ui" },
  { label: "Design", value: "design" },
  { label: "Development", value: "development" },
];

const recommendedTags = [
  { label: "Frontend", value: "frontend" },
  { label: "Database", value: "database" },
  { label: "UI", value: "ui" },
  { label: "Design", value: "design" },
  { label: "Development", value: "development" },
];

const CreateNewTicket = () => {
  const { show: showPriceCreateModal, toggleShow: togglePriceCreateModal } =
    useModal(false);
  const [formState, setFormState] = useState({
    title: "",
    publicDescription: "",
    privateDescription: "",
    tags: [],
    days: "",
    moreDetails: "",
    minutes: "",
    hours: "",
    days2: "",
    months: "January",
  });

  const [optionsState, setOptionsState] = useState([
    {
      emoji: "✅",
      title: "Base",
      price: 100,
      body: "Lorem ipsum dolor sit amet consectetur. Condimentum neque scelerisque ac neque. Elit vel consequat cursu",
    },
    {
      emoji: "☕",
      title: "Money for coffee",
      price: 100,
      body: "Lorem ipsum dolor sit amet consectetur. Condimentum neque scelerisque ac neque. Elit vel consequat cursu",
    },
    {
      emoji: "🍺",
      title: "Buy a Beer",
      price: 100,
      body: "Lorem ipsum dolor sit amet consectetur. Condimentum neque scelerisque ac neque. Elit vel consequat cursu",
    },
    {
      emoji: "🎁",
      title: "Mystery Bonus",
      price: "???",
      body: "Lorem ipsum dolor sit amet consectetur. Condimentum neque scelerisque ac neque. Elit vel consequat cursu",
    },
  ]);

  const addToListHandler = (e, label, value) => {
    e.preventDefault();

    if (formState.tags.length >= 20) {
      return;
    }

    setFormState((prevState) => {
      const { tags } = prevState;
      const idx = tags.findIndex((el) => el.value === value);

      if (idx > -1) {
        return prevState;
      } else {
        return { ...prevState, tags: [...prevState.tags, { label, value }] };
      }
    });
  };

  const removeListItemHandler = (idx) => {
    setOptionsState((prevState) => {
      const newItems = [...prevState];

      newItems.splice(idx, 1);

      return newItems;
    });
  };

  const openPriceModal = (e) => {
    e.preventDefault();
    togglePriceCreateModal();
  };

  const addOptionHandler = (obj) => {
    setOptionsState((prevState) => [...prevState, obj]);
  };

  const inputChangeHandler = (e) => {
    const { name, value, checked } = e.target;

    if (name === "moreDetails") {
      setFormState((prevState) => ({ ...prevState, [name]: checked }));
      return;
    }

    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <>
      <AddCustomPrice
        show={showPriceCreateModal}
        closeModal={() => togglePriceCreateModal("close")}
        onAddOption={addOptionHandler}
      />
      <Section id="create-new-ticket">
        <h2 className="d-flex align-items-start flex-column flex-sm-row align-items-sm-center gap-20 gap-575-10">
          Create New Ticket{" "}
          <Badge className="ls-shrink">New&nbsp;&nbsp;ticket</Badge>
        </h2>
        <p className="mt-1 ps-1 fs-18 d-none d-sm-block">
          Booking our passage to the future
        </p>

        <form className="new-ticket-form" action="">
          <Input
            darkLabel
            transparent
            label="Title"
            placeholder="Andorra"
            name="title"
            onChange={inputChangeHandler}
            value={formState.title}
          />

          <div className="custom-form-control mt-30 mt-575-20">
            <label className="text-light-1" htmlFor="">
              Public Description
            </label>
            <CustomMDEditor
              name="publicDescription"
              placeholder="Writing description..."
              value={formState.publicDescription}
              inputChangeHandler={inputChangeHandler}
              maxChar={5000}
            />
          </div>

          <div className="custom-form-control mt-30 mt-575-20">
            <label className="text-light-1" htmlFor="">
              Private Description
            </label>
            <CustomMDEditor
              name="privateDescription"
              placeholder="Writing description..."
              value={formState.privateDescription}
              inputChangeHandler={inputChangeHandler}
              maxChar={5000}
            />
          </div>

          <div className="custom-form-control mt-30 mt-575-20">
            <label className="text-light-1" htmlFor="">
              New pricing
            </label>

            <div className="options">
              <GridContainer rowClassName="g-30" rootClassName="mt-3">
                {optionsState.map((el, idx) => {
                  return (
                    <div key={"ticket-pricing" + idx} className="col-md-6">
                      <div className="option">
                        {el.title !== "Base" && (
                          <img
                            onClick={() => removeListItemHandler(idx)}
                            className="remove"
                            src="/assets/vectors/icons/remove-2.svg"
                            alt="remove"
                            title="remove"
                          />
                        )}
                        <input type="radio" name="base" id="base" />

                        <div className="option-box">
                          <div className="option-heading">
                            <div className="option-heading__left">
                              {el.emoji} {el.title}
                            </div>
                            <div className="option-heading__right">
                              ${el.price}
                            </div>
                          </div>
                          <div className="option-body">{el.body}</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </GridContainer>
            </div>

            {optionsState.length < 4 && (
              <Button
                onClick={openPriceModal}
                dashed
                className="gap-10 w-100 justify-content-center mt-30 add-btn h-50"
                icon={{
                  src: "/assets/vectors/icons/add-2.svg",
                  alt: "add",
                  title: "Add title",
                }}
              >
                Add New pricing
              </Button>
            )}

            <GridContainer>
              <div className="col-lg-6">
                <Input
                  icon={{
                    src: "/assets/vectors/icons/calendar.svg",
                    title: "calendar",
                    alt: "calendar",
                  }}
                  name="days"
                  type="number"
                  className="mt-34"
                  label="Days to complete"
                  darkLabel
                  transparent
                  withArrowIcons
                  value={formState.days}
                  incrementHandler={() => {
                    setFormState((prevState) => ({
                      ...prevState,
                      days: formState.days ? formState.days + 1 : 0,
                    }));
                  }}
                  decrementHandler={() => {
                    setFormState((prevState) => ({
                      ...prevState,
                      days: formState.days ? formState.days - 1 : 0,
                    }));
                  }}
                  min={1}
                  placeholder="04 Days"
                  onChange={inputChangeHandler}
                />
              </div>
            </GridContainer>

            <Checkbox
              className="days-details"
              label="Days to complete more details"
              name="moreDetails"
              checked={formState.moreDetails}
              onChange={inputChangeHandler}
            />

            {formState.moreDetails && (
              <GridContainer rowClassName="gx-30 gy-10 g-575-10">
                <div className="col-md-3 col-6">
                  <Input
                    label="Minutes"
                    icon={{
                      src: "/assets/vectors/icons/timer-2.svg",
                      title: "timer",
                      alt: "timer",
                    }}
                    type="text"
                    darkLabel
                    transparent
                    placeholder="60s"
                    name="minutes"
                    onChange={inputChangeHandler}
                    value={formState.minutes}
                    dropDownOptions={new Array(60)
                      .fill(0)
                      .map((el, idx) => ({ label: idx + "s" }))}
                  />
                </div>
                <div className="col-md-3 col-6">
                  <Input
                    label="Hours"
                    icon={{
                      src: "/assets/vectors/icons/clock-3.svg",
                      title: "clock",
                      alt: "clock",
                    }}
                    type="text"
                    darkLabel
                    transparent
                    placeholder="03:00 PM"
                    name="hours"
                    onChange={inputChangeHandler}
                    value={formState.hours}
                    dropDownOptions={timeCombinations}
                  />
                </div>
                <div className="col-md-3 col-6">
                  <Input
                    icon={{
                      src: "/assets/vectors/icons/calendar-2.svg",
                      title: "calendar",
                      alt: "calendar",
                    }}
                    type="text"
                    darkLabel
                    transparent
                    label="Months"
                    placeholder="August"
                    name="months"
                    onChange={inputChangeHandler}
                    value={formState.months}
                    dropDownOptions={monthNames}
                  />
                </div>
                <div className="col-md-3 col-6">
                  <Input
                    icon={{
                      src: "/assets/vectors/icons/calendar.svg",
                      title: "calendar",
                      alt: "calendar",
                    }}
                    type="text"
                    darkLabel
                    transparent
                    label="Days"
                    placeholder="Mon 26"
                    name="days2"
                    onChange={inputChangeHandler}
                    value={formState.days2}
                    dropDownOptions={getDaysInMonth(formState.months)}
                  />
                </div>
              </GridContainer>
            )}

            <div className="custom-form-control mt-4">
              <label htmlFor="">
                Tags <div className="min-label">Maximum 20</div>
              </label>
              <CreatableSelect
                isValidNewOption={() => formState.tags.length <= 20}
                className="custom-react-select"
                placeholder="Your tags..."
                isMulti
                styles={{
                  control: (baseStyles, state) => ({
                    ...baseStyles,
                    backgroundColor: "transparent",
                    height: 50,
                  }),
                  placeholder: (baseStyles, state) => ({
                    ...baseStyles,
                    color: "#b6bec7",
                  }),
                }}
                onChange={(e) =>
                  inputChangeHandler({ target: { name: "tags", value: e } })
                }
                options={formState.tags.length <= 20 ? tagOptions : []}
                value={formState.tags}
              />
            </div>
            <div className="recommended-tags mt-3">
              <span>Recommended tags : </span>
              {recommendedTags.map((el, idx) => {
                return (
                  <Badge
                    className="c-pointer"
                    key={"recommended" + idx}
                    onClick={(e) => addToListHandler(e, el.label, el.value)}
                  >
                    {el.label}
                  </Badge>
                );
              })}
            </div>
            <div className="d-flex justify-content-sm-end mt-50">
              <Button className="px-4 h-50" primary>
                Upload
              </Button>
            </div>
          </div>
        </form>
      </Section>
    </>
  );
};

export default CreateNewTicket;
