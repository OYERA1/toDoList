import styles from "./Card.module.scss";
import { HiOutlineTrash } from "react-icons/hi";
import { Tasks } from "../Tasks";
import { ITask } from "../../App";

interface Props {
  task: ITask;
  onDelete: (taskId: string) => void;
  onComplete: (taskId: string) => void;
}

export function Card({ task, onDelete, onComplete }: Props) {
  return (
    <div className={styles.cardDiv}>
      <div>
        <input type="checkbox" onClick={() => onComplete(task.id)} />
      </div>

      {task.isCompleted ? (
        <p className={styles.line}>{task.content}</p>
      ) : (
        <p>{task.content}</p>
      )}

      <button onClick={() => onDelete(task.id)}>
        <HiOutlineTrash size={24} />
      </button>
    </div>
  );
}
