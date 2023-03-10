import React, { useRef, useState } from "react";
import Picker from "emoji-picker-react";
import clsx from "clsx";

import Button from "../../components/Button";
import GridContainer from "../../components/GridContainer";

import Input from "../../components/Input";
import Modal from "../../components/Modal/Modal";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import "./AddCustomPrice.scss";

const initialState = {
  emoji: "",
  title: "",
  price: "",
  body: "",
};

const MAX_TITLE_LENGTH = 20;
const MAX_DESCRIPTION_LENGTH = 150;

const AddCustomPrice = ({ onAddOption, ...rest }) => {
  const [formState, setFormState] = useState(initialState);
  const [showPicker, setShowPicker] = useState(false);
  const emojisRef = useRef(null);

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;

    setFormState((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    onAddOption(formState);
    setFormState(initialState);
    rest.closeModal();
  };

  useOnClickOutside(emojisRef, () => setShowPicker(false));

  return (
    <Modal id="add-custom-price-modal" {...rest}>
      <h3 className="text-light-1">Add A Custom price</h3>
      <p>The best for less.</p>

      <form onSubmit={formSubmitHandler} className="mt-34">
        <div className="d-flex gap-30">
          <GridContainer rowClassName="gy-10 mb-20 gx-10 gy-575-10">
            <div className="col-sm-2 col-4">
              <div className="emoji-picker">
                <Input
                  darkLabel
                  transparent
                  label="Emoji"
                  placeholder="🍺"
                  name="emoji"
                  disabled
                  value={formState.emoji}
                />
                <div
                  className="e-btn"
                  onClick={() => setShowPicker(!showPicker)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    className="react-input-emoji--button--icon"
                  >
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"></path>
                    <path d="M8 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 7M16 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 16 7M15.232 15c-.693 1.195-1.87 2-3.349 2-1.477 0-2.655-.805-3.347-2H15m3-2H6a6 6 0 1 0 12 0"></path>
                  </svg>
                  {/* <img src="/assets/vectors/icons/emoji.svg" alt="emoji" /> */}
                </div>
                <div
                  ref={emojisRef}
                  className={clsx("picker", !showPicker && "d-none")}
                >
                  <Picker
                    onEmojiClick={(emojiObject, event) => {
                      setShowPicker(false);
                      inputChangeHandler({
                        target: { name: "emoji", value: event.emoji },
                      });
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="col-sm-4 col-8">
              <Input
                label="Title pricing"
                darkLabel
                transparent
                placeholder="Base"
                name="title"
                value={formState.title}
                onChange={inputChangeHandler}
                maxLength={MAX_TITLE_LENGTH}
              />
            </div>

            <div className="col-sm-6">
              <Input
                withArrowIcons
                label="Price"
                type="number"
                darkLabel
                transparent
                placeholder="$???"
                name="price"
                onChange={inputChangeHandler}
                min={0}
                value={formState.price}
                incrementHandler={() => {
                  setFormState((prevState) => ({
                    ...prevState,
                    price: formState.price ? formState.price + 1 : 0,
                  }));
                }}
                decrementHandler={() => {
                  setFormState((prevState) => ({
                    ...prevState,
                    price: formState.price ? formState.price - 1 : 0,
                  }));
                }}
              />
            </div>
          </GridContainer>
        </div>

        <Input
          textarea
          rows={6}
          label="Description"
          darkLabel
          transparent
          placeholder="Writing your commet . . ."
          name="body"
          value={formState.body}
          onChange={inputChangeHandler}
          maxLength={MAX_DESCRIPTION_LENGTH}
        />

        <div className="d-flex justify-content-sm-end mt-30">
          <Button className="h-50" primary>
            Add Price
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default AddCustomPrice;
