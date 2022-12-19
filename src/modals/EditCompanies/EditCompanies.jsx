import React, { useState, useEffect } from "react";
import { Reorder } from "framer-motion";

import Button from "../../components/Button";
import Modal from "../../components/Modal";
import { Item } from "./Item";
import Checkbox from "../../components/Checkbox";
import "./EditCompanies.scss";

const EditCompanies = ({ pinnedItems, allItems, setUser, ...rest }) => {
  const [pinnedItemsState, setPinnedItemsState] = useState([]);
  const [restItems, setRestItems] = useState([]);
  const [pinnedItemIds, setPinnedItemIds] = useState([]);

  const changePinsHandler = () => {
    setUser((prevState) => {
      const newState = JSON.parse(JSON.stringify(prevState));
      newState.hiredBy = pinnedItemsState;
      return newState;
    });
    rest.closeModal();
  };

  const updatePinnedHandler = (item, intent) => {
    if (intent === "add") {
      if (pinnedItemsState.length >= 5) return;
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
    setPinnedItemsState(pinnedItems);
    setPinnedItemIds(pinnedItems?.map((el) => el.id));
  }, [pinnedItems]);

  useEffect(() => {
    const filteredAllItems = allItems.filter(
      (el) => !pinnedItemIds.includes(el.id)
    );
    setRestItems(filteredAllItems);
  }, [allItems, pinnedItemIds]);

  useEffect(() => {
    if (rest.show) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [rest]);

  return (
    <Modal
      className="custom-order-modal"
      id="edit-companies-modal"
      small
      {...rest}
    >
      <div className="small-modal-contents">
        <div className="small-head">
          <div className="small-title">
            <h5 className="fw-500">Edit Companies</h5>
            <img
              src="/assets/vectors/icons/close-3.svg"
              alt="close"
              className="small-close"
              title="close"
              onClick={rest.closeModal}
            />
          </div>
          <div className="small-sub-title">
            <h6>Select 5 companies to put on display</h6>
          </div>
        </div>
        <div className="small-main">
          <div className="items">
            <Reorder.Group
              axis="y"
              onReorder={setPinnedItemsState}
              values={pinnedItemsState}
            >
              {pinnedItemsState?.map((item, idx) => (
                <Item
                  key={item.id}
                  item={item}
                  checked={true}
                  updatePinnedHandler={updatePinnedHandler}
                  onInputChange={(e) =>
                    setPinnedItemsState((prevState) => {
                      const newState = JSON.parse(JSON.stringify(prevState));

                      newState[idx].title = e.target.value;

                      return newState;
                    })
                  }
                />
              ))}
            </Reorder.Group>
            {restItems?.map((el, idx) => {
              return (
                <div className="item" key={"all-companies" + idx}>
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
          <div className="text">{5 - pinnedItemsState.length} remaining</div>
          <Button primary onClick={changePinsHandler}>
            Save companies
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default EditCompanies;
