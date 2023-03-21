import { ITask } from "../../App";
import { Card } from "../Card";
import styles from "./Tasks.module.scss";

interface Props {
  tasks: ITask[];
  onDelete: (taskId: string) => void;
  onComplete: (taskId: string) => void;
}

export function Tasks({ tasks, onDelete, onComplete }: Props) {
  const tasksCreated = tasks.length;
  const tasksCompleted = tasks.filter((task) => task.isCompleted).length;

  return (
    <section className={styles.tasksDiv}>
      <header className={styles.taskHeader}>
        <div>
          <p>Tarefas criadas</p>
          <span>{tasksCreated}</span>
        </div>

        <div>
          <p className={styles.text}>Concluidas</p>
          <span>
            {tasksCompleted} de {tasksCreated}
          </span>
        </div>
      </header>
      <div className={styles.list}>
        {tasks.map((task) => (
          <Card
            key={task.id}
            onDelete={onDelete}
            onComplete={onComplete}
            task={task}
          />
        ))}
      </div>
    </section>
  );
}
