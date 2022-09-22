import "./hashtags-input.scss";

import { observer } from "mobx-react";
import React from "react";

import HashtagInputSelector from "./hashtag-input-selector.js";

// USAGE:
const HashtagsInput = observer(
  class PostUploaderHashtagsInput extends React.Component {
    constructor(props) {
      super(props);
    }

    toggle = async () => {
      await this.setState({ toggleState: !this.state.toggleState });
    };

    onHashtagSelectorChange = async (selectedHashtags) => {
      if (selectedHashtags == null || selectedHashtags.length <= 5) {
        this.setState({ selectedHashtags: selectedHashtags });
        this.props.setHashTags(selectedHashtags);
      }
    };

    render() {
      return (
        <div className={"input-selector-container"}>
          <HashtagInputSelector
            placeholder={"Hashtags"}
            maxChars={25}
            onHashtagSelectorChange={this.onHashtagSelectorChange}
            value={this.props.selectedHashtags}
          />
        </div>
      );
    }
  }
);
export default HashtagsInput;
