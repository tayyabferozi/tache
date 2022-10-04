import { useEffect, useState } from "react";

const useModal = (isInitialActive) => {
  const [isModalActive, setIsModalActive] = useState();

  const toggleModalActive = (toSet) => {
    console.log(toSet);
    if (toSet === "open") {
      setIsModalActive(() => true);
    } else if (toSet === "close") {
      setIsModalActive(() => false);
    } else {
      setIsModalActive((prevState) => !prevState);
    }
  };

  useEffect(() => {
    setIsModalActive(!!isInitialActive);
  }, [isInitialActive]);

  return { show: isModalActive, toggleShow: toggleModalActive };
};

export default useModal;
