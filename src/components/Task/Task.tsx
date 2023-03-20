import { ButtonHTMLAttributes, FormEvent, useState } from "react";
import { Card } from "../cards/Card";
import styles from "./Task.module.css";
import { Input } from "../input/Input";

interface Props {
  updateState: (newValue: string) => void;
  addNewTask: (task: string) => void;
  inputText: string;
  task: [];
  newTask: string;
}

export function Task(props: Props) {
  const [task, setTasks] = useState([] as Props[]);
  const length = task.length;

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();
    const newTask = event.target.inputText.value;

    setTasks([...task, newTask]);
    event.target.inputText.value = "";
  }
  // function handleUpdateTask(event: InputEvent) {
  //   const change = event.value();
  //   console.log(change);
  // }

  return (
    <>
      <Input addNewTask={handleCreateNewTask}/>
      <div className={styles.parentDiv}>
        <div className={styles.textDiv}>
          <span className={styles.textBlue}>
            Tarefas criadas <span className={styles.counter} >{length}</span>
          </span>
          <span className={styles.textPurple}>
            Concluídas <span className={styles.counter}>0</span>
          </span>
        </div>
        <div className={styles.cascade}>
          {task.map((tasks) => {
            return <Card content={tasks} />;
          })}
        </div>
      </div>
    </>
  );
}
