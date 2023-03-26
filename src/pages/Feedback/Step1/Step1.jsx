import React from "react";

import Input from "../../../components/Input";
import RatingStars from "../../../components/RatingStars";

const Step1 = ({ formState, inputChangeHandler }) => {
  return (
    <div className="text-center">
      <h3 className="mb-2">How was the project you were working with</h3>
      <div className="fs-20 fw-500">Show your best rating for this project</div>

      <div className="mt-40">
        <RatingStars />
      </div>

      <div className="text-feedback mt-40">
        <Input
          textarea
          name="feedbackText"
          value={formState.feedbackText}
          placeholder="Your feedback..."
          rows={10}
          onChange={inputChangeHandler}
          maxLength={5000}
        />
      </div>
    </div>
  );
};

export default Step1;
