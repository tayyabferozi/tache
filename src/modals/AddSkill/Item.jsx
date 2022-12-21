import { useMotionValue, Reorder, useDragControls } from "framer-motion";
import Badge from "../../components/Badge";

// import Checkbox from "../../components/Checkbox";
import ReorderIcon from "../../components/RorderIcon";
// import Input from "../../components/Input";

export const Item = ({ item, removeSkillHandler, idx }) => {
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
        <Badge>{item.label}</Badge>
      </div>
      <div className="d-flex align-items-center gap-10">
        <img
          className="remove"
          src="/assets/vectors/icons/remove-2.svg"
          alt="remove"
          onClick={() => removeSkillHandler(idx)}
        />

        <ReorderIcon dragControls={dragControls} />
      </div>
    </Reorder.Item>
  );
};
