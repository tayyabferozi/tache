import React from "react";

import Input from "../../../components/Input";

const Step3 = ({ formState, inputChangeHandler }) => {
  return (
    <div className="text-center">
      <h3 className="mb-2">Give your Feedback for Platform</h3>
      <div className="fs-20 fw-500">Show your best rating for this project</div>

      <div className="text-feedback mt-40">
        <Input
          textarea
          name="feedbackText"
          value={formState.feedbackText}
          placeholder="Your feedback..."
          rows={20}
          onChange={inputChangeHandler}
          maxLength={5000}
        />
      </div>
    </div>
  );
};

export default Step3;
