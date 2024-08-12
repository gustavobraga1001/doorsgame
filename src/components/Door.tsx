import styles from "../styles/Door.module.css";
import DoorModel from "../model/door";

interface DoorProps {
  value: DoorModel;
  onChange: (newDoor: DoorModel) => void;
}

const Door = (props: DoorProps) => {
  const door = props.value;
  const selected = door.selected && !door.open ? styles.selected : "";

  const toggleSelected = e => props.onChange(door.toggleSelection())

  const openDoor = e => {
    e.stopPropagation()
    props.onChange(door.openDoor())
  }
  return (
    <div className={styles.area} onClick={toggleSelected}>
      <div className={`${styles.frame} ${selected}`}>
        {door.open ? false :
          <div className={styles.door}>
            <div className={styles.number}>{door.number}</div>
            <div className={styles.handle} onClick={openDoor}></div>
          </div>
        }

      </div>
      <div className={styles.bottom}></div>
    </div>
  );
};

export default Door;
