import Main from "./Main";
import Top from "./Top";

import "./Center.scss";

const Center = ({ setIsThreadActive }) => {
  return (
    <div className="center">
      <Top />
      <Main setIsThreadActive={setIsThreadActive} />
    </div>
  );
};

export default Center;
