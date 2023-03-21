import { useState } from "react";
import { ITask } from "../../App";
import { Card } from "../Card";
import styles from "./Tasks.module.scss";

interface Props {
  tasks: ITask[];
}

export function Tasks({ tasks }: Props) {
    const tasksCreated = tasks.length
    const tasksCompleted = tasks.length

  return (
    <section className={styles.tasksDiv}>
      <header className={styles.taskHeader}>
        <div>
          <p>Tarefas criadas</p>
          <span>{tasksCreated}</span>
        </div>

        <div>
          <p className={styles.text}>Concluidas</p>
          <span>{tasksCompleted} de {tasksCreated}</span>
        </div>
      </header>
      <div className={styles.list}>
        {tasks.map((task) => (
          <Card key={task.id} task={task} />
        ))}
      </div>
    </section>
  );
}
