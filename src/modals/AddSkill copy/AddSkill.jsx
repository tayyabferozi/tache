import React, { useEffect, useState } from "react";

import Modal from "../../components/Modal";
import Button from "../../components/Button";
import Input from "../../components/Input";
import "./AddSkill.scss";

const AddSkill = ({ pinnedItems, allItems, setUser, ...rest }) => {
  const [skillState, setSkillState] = useState("");

  const formSubmitHandler = (e) => {
    e.preventDefault();

    setUser((prevState) => {
      const newState = JSON.parse(JSON.stringify(prevState));

      newState.skills.push(skillState);

      return newState;
    });

    setSkillState("");
    rest.closeModal();
  };

  useEffect(() => {
    if (rest.show) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [rest]);

  return (
    <Modal className="custom-order-modal" id="add-skill-modal" small {...rest}>
      <form onSubmit={formSubmitHandler}>
        <div className="small-modal-contents">
          <div className="small-head">
            <div className="small-title">
              <h5 className="fw-500">Add Skill</h5>
              <img
                src="/assets/vectors/icons/close-3.svg"
                alt="close"
                className="small-close"
                title="close"
                onClick={rest.closeModal}
              />
            </div>
          </div>
          <div className="small-main">
            <div className="content">
              <Input
                label="Skill"
                value={skillState}
                onChange={(e) => setSkillState(e.target.value)}
              />
            </div>
          </div>
          <div className="small-foot">
            <Button primary>Add</Button>
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default AddSkill;
