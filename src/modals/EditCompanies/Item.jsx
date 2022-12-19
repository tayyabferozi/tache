import { useMotionValue, Reorder, useDragControls } from "framer-motion";

import Checkbox from "../../components/Checkbox";
import ReorderIcon from "../../components/RorderIcon";
import Input from "../../components/Input";

export const Item = ({ item, updatePinnedHandler, onInputChange }) => {
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
      <div className="item-left">
        <Checkbox
          label={`${item?.name?.slice(0, 20)}${
            item?.name?.length > 20 ? "..." : ""
          }`}
          img={item.img}
          checked={true}
          onChange={() => updatePinnedHandler(item, "remove")}
        />

        <div className="company-data">
          <Input value={item.title} onChange={onInputChange} />
        </div>
      </div>
      <ReorderIcon dragControls={dragControls} />
    </Reorder.Item>
  );
};
