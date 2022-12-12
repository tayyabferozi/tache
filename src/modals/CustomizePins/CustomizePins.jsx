import React, { useState } from "react";
import { Reorder } from "framer-motion";

import Button from "../../components/Button";
import Modal from "../../components/Modal";
import "./CustomizePins.scss";
import { useEffect } from "react";
import { Item } from "./Item";
import Checkbox from "../../components/Checkbox";

const CustomizePins = ({ pinnedTickets, allTickets, setUser, ...rest }) => {
  const [pinnedItemsState, setPinnedItemsState] = useState([]);
  const [restItems, setRestItems] = useState([]);
  const [pinnedItemIds, setPinnedItemIds] = useState([]);

  const changePinsHandler = () => {
    setUser((prevState) => {
      const newState = JSON.parse(JSON.stringify(prevState));
      newState.pinnedTickets = pinnedItemsState;
      return newState;
    });
    rest.closeModal();
  };

  const updatePinnedHandler = (item, intent) => {
    if (intent === "add") {
      if (pinnedItemsState.length >= 8) return;
      setRestItems((prevState) => [
        ...prevState.filter((el) => el.id !== item.id),
      ]);
      setPinnedItemsState((prevState) => {
        const newState = [...prevState];
        newState.push(item);
        return newState;
      });
    } else {
      setRestItems((prevState) => {
        const newState = [...prevState];
        newState.push(item);
        return newState;
      });
      setPinnedItemsState((prevState) => [
        ...prevState.filter((el) => el.id !== item.id),
      ]);
    }
  };

  useEffect(() => {
    setPinnedItemsState(pinnedTickets);
    setPinnedItemIds(pinnedTickets.map((el) => el.id));
  }, [pinnedTickets]);

  useEffect(() => {
    const filteredAllTickets = allTickets.filter(
      (el) => !pinnedItemIds.includes(el.id)
    );
    setRestItems(filteredAllTickets);
  }, [allTickets, pinnedItemIds]);

  return (
    <Modal id="custom-pins-modal" small {...rest}>
      <div className="small-modal-contents">
        <div className="small-head">
          <div className="small-title">
            <h5>Edit Pinned Tickets</h5>
            <img
              src="/assets/vectors/icons/close-3.svg"
              alt="close"
              className="small-close"
              title="close"
              onClick={rest.closeModal}
            />
          </div>
          <div className="small-sub-title">
            <h6>Select 8 ticets to put on display</h6>
          </div>
        </div>
        <div className="small-main">
          <div className="items">
            <Reorder.Group
              axis="y"
              onReorder={setPinnedItemsState}
              values={pinnedItemsState}
            >
              {pinnedItemsState.map((item) => (
                <Item
                  key={item.id}
                  item={item}
                  checked={true}
                  updatePinnedHandler={updatePinnedHandler}
                />
              ))}
            </Reorder.Group>
            {restItems.map((el, idx) => {
              return (
                <div className="item" key={"all-tickets" + idx}>
                  <Checkbox
                    label={el.title}
                    checked={false}
                    onChange={() => updatePinnedHandler(el, "add")}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="small-foot">
          <div className="text">{8 - pinnedItemsState.length} remaining</div>
          <Button primary onClick={changePinsHandler}>
            Save pins
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default CustomizePins;
