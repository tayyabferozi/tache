import React, { useState } from "react";
import { useEffect } from "react";

import "./UserList.scss";

const UserList = ({ users, maxLen = 6, breakpoints }) => {
  const [itemsLen, setItemsLen] = useState(1);

  useEffect(() => {
    if (maxLen) setItemsLen(maxLen);
  }, [maxLen]);

  useEffect(() => {
    if (breakpoints) {
      breakpoints.forEach((breakpoint) => {
        function matcher(x) {
          if (x.matches) {
            setItemsLen(breakpoint.itemsLength);
          }
        }

        var x = window.matchMedia(`(min-width: ${breakpoint.width}px)`);
        matcher(x);
        x.addListener(matcher);
      });
    }
  }, [breakpoints, maxLen]);

  return (
    <div className="users-horizontal-list-main">
      {users?.slice(0, itemsLen)?.map((el, idx) => (
        <div
          key={"maintainer-item" + Math.random() + idx}
          className="users-horizontal-list-item"
        >
          <div className="ghost">
            <img src={el.img} alt="maintainer" />
          </div>
        </div>
      ))}
      {users?.length > itemsLen && (
        <div className="users-horizontal-list-item">
          <div className="ghost">+{users.length - itemsLen}</div>
        </div>
      )}
    </div>
  );
};

export default UserList;
