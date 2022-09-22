import React from "react";
import { components } from "react-select";
import AsyncCreatableSelect from "react-select/async-creatable";

const HashtagOptions = [];

// USAGE:
// <HashtagInputSelector groupedOptions={} />
class HashtagInputSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  filterOptions = (inputValue) => {
    return HashtagOptions.filter((i) =>
      i.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  promiseOptions = (inputValue) =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.filterOptions(inputValue));
      }, 1000);
    });

  colourStyles = {
    control: (styles, { isFocused, isSelected }) => ({
      ...styles,
      backgroundColor: "rgba(36, 40, 54, 0.5)",
      maxWidth: "580px",
      width: "95vw",
      backdropFilter: "blur(42px)",
      border: "none",
      borderRadius: "15px",
      fontFamily: "Inter",
      fontSize: "20px",
      color: "rgba(255,255,255,0.4)",
      height: "auto",
      gap: "5px",
      lineHeight: "30px",
      textAlign: "left",
      paddingLeft: "10px",
      boxShadow: "none",
    }),
    option: (styles, { isFocused }) => {
      return {
        ...styles,
        maxWidth: "580px",
        color: "black",
        fontFamily: "AvenirNext-DemiBold",
        fontSize: "15px",
        lineHeight: "22px",
        textAlign: "left",
        letterSpacing: "1.1px",
        paddingLeft: "65px",
        paddingTop: "10px",
        paddingBottom: "10px",
      };
    },

    groupHeading: (styles) => {
      return {
        ...styles,
        color: "pink",
        maxWidth: "580px",
        fontFamily: "AvenirNext-DemiBold",
        fontSize: "16px",
        lineHeight: "22px",
        textAlign: "left",
        letterSpacing: "1.1px",
        paddingLeft: "20px",
        paddingTop: "5px",
        height: "30px",
      };
    },
    input: (styles) => {
      return {
        ...styles,
        color: "white",
        maxWidth: "580px",
        fontFamily: "AvenirNext-DemiBold",
        fontSize: "20px",
        lineHeight: "22px",
        textAlign: "left",
        letterSpacing: "2px",
      };
    },
    multiValue: (styles) => {
      return {
        ...styles,
        maxWidth: "580px",
        color: "white",
        background:
          "linear-gradient(to right top, #fad502, #f1b800, #e59d00, #d68200, #c56807)",
        fontFamily: "AvenirNext-DemiBold",
        fontSize: "16px",
        lineHeight: "22px",
        textAlign: "left",
        letterSpacing: "1.1px",
        borderRadius: "15px",
        paddingLeft: "5px",
      };
    },

    placeholder: (styles, state) => ({
      ...styles,
      maxHeight: "30px",
      maxWidth: "580px",
      display:
        state.isFocused || state.isSelected || state.selectProps.inputValue
          ? "none"
          : "block",
    }),
  };

  NewValueContainer = (props) => {
    const shouldFloatLabel = props.selectProps.menuIsOpen || props.hasValue;

    return (
      <components.ValueContainer {...props}>
        {shouldFloatLabel && <div>{this.props.placeholder + ":"}</div>}
        <div className={"category-input-label-spacing"} />
        {props.children}
      </components.ValueContainer>
    );
  };

  render() {
    return (
      <div className={"flex-column-centered"}>
        <AsyncCreatableSelect
          cacheOptions
          defaultOptions
          loadOptions={this.promiseOptions} // loadOptions={loadOptions} when DB support is added.
          options={this.props.groupedOptions}
          isMulti
          styles={this.colourStyles}
          value={this.props.value}
          onChange={this.props.onHashtagSelectorChange}
          placeholder={this.props.placeholder}
          components={{ ValueContainer: this.NewValueContainer }}
          onInputChange={(inputValue) =>
            inputValue.length <= this.props.maxChars
              ? inputValue
              : inputValue.substr(0, this.props.maxChars)
          }
        />
      </div>
    );
  }
}

export default HashtagInputSelector;
