import React, { useState } from "react";
import DatePicker from "react-datepicker";
import CreatableSelect from "react-select/creatable";

import Badge from "../../components/Badge";
import GridContainer from "../../components/GridContainer";
import Input from "../../components/Input";
import Modal from "../../components/Modal/Modal";
import Button from "../../components/Button";

import "./CreateTicket.scss";
import CustomMDEditor from "../../components/CustomMDEditor";

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

const CreateTicket = ({ ...rest }) => {
  const [formState, setFormState] = useState({
    title: "Andorra",
    rangeBudget: "140.00",
    bonusBudget: "20.00",
    dueDate: "",
    description: "",
    days: 0,
    tags: [],
  });

  const addToList = (e, label, value) => {
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

  const resetDate = () =>
    setFormState((prevState) => ({ ...prevState, dueDate: "" }));

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;

    if (name === "days") {
      const d = new Date();
      d.setDate(d.getDate() + value);
      setFormState((prevState) => ({
        ...prevState,
        [name]: value,
        dueDate: d,
      }));

      return;
    } else if (name === "dueDate") {
      const dNow = new Date();
      const dDue = new Date(value);

      let diff = dDue.getTime() - dNow.getTime();
      let days = Math.ceil(diff / (1000 * 3600 * 24));
      setFormState((prevState) => ({
        ...prevState,
        [name]: value,
        days: days,
      }));
      return;
    }

    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <Modal id="create-ticket-modal" {...rest}>
      <h3 className="main-title">
        Create New Ticket <Badge>New ticket</Badge>
      </h3>
      <div className="main-content">
        <form action="">
          <GridContainer rowClassName="gx-60 line-between" className="">
            <div className="col-lg-6">
              <Input
                label="Title"
                name="title"
                value={formState.title}
                onChange={inputChangeHandler}
              />
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-6">
                  <Input
                    type="number"
                    step=".01"
                    icon={{
                      src: "/assets/vectors/icons/dollar.svg",
                      alt: "dollar",
                    }}
                    label="Range budget"
                    name="rangeBudget"
                    value={formState.rangeBudget}
                    onChange={inputChangeHandler}
                  />
                </div>
                <div className="col-6">
                  <Input
                    type="number"
                    step=".01"
                    icon={{
                      src: "/assets/vectors/icons/dollar-bonus.svg",
                      alt: "dollar",
                    }}
                    label="Bonus budget"
                    name="bonusBudget"
                    value={formState.bonusBudget}
                    onChange={inputChangeHandler}
                  />
                </div>
              </div>
            </div>
            <Input
              label="Bonus Criteria"
              rows={6}
              textarea
              placeholder="type your bonus criteria..."
            />
            <hr className="my-3" />

            <div className="second-half">
              <div className="dates-wrap">
                <div className="custom-form-control">
                  <label htmlFor="">Ticket due date</label>
                  <div className="input">
                    <img
                      src="/assets/vectors/icons/calendar.svg"
                      alt="calendar"
                      className="icon"
                    />
                    <img
                      src="/assets/vectors/icons/close-2.svg"
                      alt="reset"
                      className="icon reset"
                      onClick={resetDate}
                    />
                    <DatePicker
                      minDate={new Date()}
                      selected={formState.dueDate}
                      onChange={(date) =>
                        inputChangeHandler({
                          target: { name: "dueDate", value: date },
                        })
                      }
                    />
                  </div>
                </div>
                <div className="or">or</div>
                <Input
                  type="number"
                  label="Days to complete"
                  name="days"
                  value={formState.days}
                  onChange={inputChangeHandler}
                />
              </div>

              <div className="custom-form-control mt-30">
                <label htmlFor="">Description</label>
                <CustomMDEditor
                  value={formState.comment}
                  inputChangeHandler={inputChangeHandler}
                  footText="0/5000"
                />
              </div>

              <div className="custom-form-control mt-20">
                <label htmlFor="">
                  Tags <div className="min-label">Maximum 20</div>
                </label>
                <CreatableSelect
                  isValidNewOption={() => formState.tags.length <= 20}
                  className="custom-react-select"
                  placeholder="Your tags..."
                  isMulti
                  onChange={(e) =>
                    inputChangeHandler({ target: { name: "tags", value: e } })
                  }
                  options={formState.tags.length <= 20 ? tagOptions : []}
                  value={formState.tags}
                />
              </div>
              <p className="recommended-tags">
                <span>Recommended tags : </span>
                {recommendedTags.map((el, idx) => {
                  return (
                    <Button
                      key={"recommended" + idx}
                      onClick={(e) => addToList(e, el.label, el.value)}
                    >
                      {el.label},{" "}
                    </Button>
                  );
                })}
              </p>
            </div>
          </GridContainer>

          <div className="mt-50 mt-575-20">
            <div className="d-flex justify-content-sm-end gap-20 gap-575-12">
              <Button grey>Draft</Button>
              <Button primary>Upload</Button>
            </div>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default CreateTicket;
