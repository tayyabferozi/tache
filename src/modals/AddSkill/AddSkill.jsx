import React, { useState, useEffect } from "react";
import { Reorder } from "framer-motion";

import Button from "../../components/Button";
import Modal from "../../components/Modal";
import { Item } from "./Item";
import Input from "../../components/Input";
import "./AddSkill.scss";

const EditSkills = ({ addedSkills, setUser, ...rest }) => {
  const [pinnedItemsState, setPinnedItemsState] = useState([]);
  const [skillInputState, setSkillInputState] = useState("");

  const changeSkillsHandler = () => {
    setUser((prevState) => {
      const newState = JSON.parse(JSON.stringify(prevState));
      newState.skills = pinnedItemsState;
      return newState;
    });
    rest.closeModal();
  };

  const removeSkillHandler = (idx) => {
    setPinnedItemsState((prevState) => {
      const newState = [...prevState];

      newState.splice(idx, 1);

      return newState;
    });
  };

  const addSkillHandler = (e) => {
    e.preventDefault();

    setPinnedItemsState((prevState) => {
      const newState = [...prevState];

      newState.push({ id: prevState.length + 1, label: skillInputState });

      return newState;
    });
    setSkillInputState("");
  };

  useEffect(() => {
    setPinnedItemsState(addedSkills);
  }, [addedSkills]);

  // useEffect(() => {
  //   if (rest.show) document.body.style.overflow = "hidden";
  //   else document.body.style.overflow = "unset";
  // }, [rest]);

  return (
    <Modal className="custom-order-modal" id="add-skill-modal" small {...rest}>
      <div className="small-modal-contents">
        <div className="small-head">
          <div className="small-title">
            <h5 className="fw-500">Edit skills</h5>
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
          <div className="items overflow-hidden">
            <Reorder.Group
              axis="y"
              onReorder={setPinnedItemsState}
              values={pinnedItemsState}
            >
              {pinnedItemsState?.map((item, idx) => {
                return (
                  <Item
                    key={"skill-" + item.id}
                    idx={idx}
                    item={item}
                    checked={true}
                    removeSkillHandler={removeSkillHandler}
                    onInputChange={(e) =>
                      setPinnedItemsState((prevState) => {
                        const newState = JSON.parse(JSON.stringify(prevState));

                        newState[idx].title = e.target.value;

                        return newState;
                      })
                    }
                  />
                );
              })}
            </Reorder.Group>
            <form onSubmit={addSkillHandler}>
              <div className="item mt-10">
                <div className="item-left add-item">
                  <Input
                    value={skillInputState}
                    onChange={(e) => setSkillInputState(e.target.value)}
                  />
                  <Button primary>Add</Button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="small-foot">
          <div />
          <Button primary onClick={changeSkillsHandler}>
            Save skills
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default EditSkills;
