import { Card } from "../cards/Card";
import styles from "./TaskDescription.module.css";

const tasks = [1];

export function TaskDescription() {
  return (
    <>
      <div className={styles.parentDiv}>
        <div className={styles.textDiv}>
          <span className={styles.textBlue}>
            Tarefas criadas <span className={styles.counter}>0</span>
          </span>
          <span className={styles.textPurple}>
            Concluídas <span className={styles.counter}>0</span>
          </span>
        </div>
        <div>
          {tasks.map((task) => {
            return <Card content={"oie"} id={1} />;
          })}
        </div>
      </div>
    </>
  );
}
