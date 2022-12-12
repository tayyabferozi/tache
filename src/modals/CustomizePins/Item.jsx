import { useMotionValue, Reorder, useDragControls } from "framer-motion";

import Checkbox from "../../components/Checkbox";
import { ReorderIcon } from "./Icon";

export const Item = ({ item, updatePinnedHandler }) => {
  const y = useMotionValue(0);
  const dragControls = useDragControls();

  return (
    <Reorder.Item
      value={item}
      id={item.id}
      style={{ y }}
      dragListener={false}
      dragControls={dragControls}
      className="item"
    >
      {/* <span>{item}</span> */}
      <Checkbox
        label={item.title}
        checked={true}
        onChange={() => updatePinnedHandler(item, "remove")}
      />
      <ReorderIcon dragControls={dragControls} />
    </Reorder.Item>
  );
};
