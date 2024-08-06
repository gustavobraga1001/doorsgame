import styles from "../styles/Door.module.css";
import DoorModel from "../model/door";

interface DoorProps {
  value: DoorModel;
}

const Door = (props: DoorProps) => {
  const door = props.value;
  const selected = door.selected ? styles.selected : "";
  return (
    <div className={styles.area}>
      <div className={`${styles.frame} ${selected}`}>
        <div className={styles.door}>
          <div className={styles.number}>{door.number}</div>
          <div className={styles.handle}></div>
        </div>
      </div>
      <div className={styles.bottom}></div>
    </div>
  );
};

export default Door;
