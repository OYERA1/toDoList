import styles from "./Card.module.scss";
import { HiOutlineTrash } from "react-icons/hi";
import { Tasks } from "../Tasks";
import { ITask } from "../../App";

interface Props {
  task: ITask;
}

export function Card({ task }: Props) {
  return (
    <div className={styles.cardDiv}>
      <div>
        <input type="checkbox" />
      </div>

      <p>{task.content}</p>

      <button>
        <HiOutlineTrash size={24} />
      </button>
    </div>
  );
}
