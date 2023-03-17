import plus from "../../assets/plus.svg";
import styles from "./Input.module.css";
import { FormEvent, useState } from "react";
import { Card } from "../cards/Card";

export function Input(props) {
  const [task, setTask] = useState([] as string[]);
  const [newTask, setNewTask] = useState("");


  function handleNewCommentChange(event: FormEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setNewTask(event.target.value);
  }

  function handleCreateNewTask(event) {
    event.preventDefault()
  }

  return (
    <>
      <form onSubmit={handleCreateNewTask} className={styles.inputDiv}>
        <input
          className={styles.inputText}
          onChange={handleNewCommentChange}
          type="text"
          name="inputText"
          placeholder="Adicione uma nova tarefa"
          value={newTask}
        />
        <button type="submit" className={styles.button}>
          Criar
          <img src={plus} alt="" />
        </button>
      </form>
    </>
  );
}
