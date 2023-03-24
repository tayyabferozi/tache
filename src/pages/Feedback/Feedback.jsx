import React, { useState } from "react";

import Button from "../../components/Button";
import Section from "../../components/Section";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Labels from "./Labels";
import "./Feedback.scss";
import Step3 from "./Step3/Step3";

const labelItems = [
  {
    name: "Talent",
  },
  {
    name: "Talent (Private)",
    long: true,
  },
  {
    name: "Platform",
  },
];

const steps = [Step1, Step2, Step3];

const Feedback = () => {
  const [formState, setFormState] = useState({
    feedbackText: "",
  });
  const [currStep, setCurrStep] = useState(1);

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;

    setFormState((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const decStep = () => {
    setCurrStep((prevState) => {
      if (prevState === 0) return;
      else return --prevState;
    });
  };

  const incStep = () => {
    setCurrStep((prevState) => {
      if (prevState === labelItems.length) return;
      else return ++prevState;
    });
  };

  return (
    <Section id="feedback-page">
      <Labels items={labelItems} currStep={currStep} />

      <div className="dark-bg-wrap">
        <img
          className="bg-dots"
          src="/assets/vectors/dots-3.svg"
          alt="dots"
          title="dots"
        />

        <div className="main-content">
          {steps.map((El, idx) => {
            if (currStep === idx + 1)
              return (
                <El
                  key={"step" + idx}
                  formState={formState}
                  inputChangeHandler={inputChangeHandler}
                />
              );
            else return <React.Fragment key={"step" + idx}></React.Fragment>;
          })}

          <div className="mt-40">
            <div className="d-flex justify-content-between">
              {currStep > 1 ? (
                <Button bordered className="h-40 px-20" onClick={decStep}>
                  Previous
                </Button>
              ) : (
                <div></div>
              )}
              <Button
                primaryLight
                inline
                className="h-40 px-20"
                onClick={incStep}
              >
                {currStep === labelItems.length ? "Finish" : "Next"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Feedback;
