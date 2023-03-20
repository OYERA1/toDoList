import styles from "./Input.module.css";
import plus from "../../assets/plus.svg";
import { FormEvent } from "react";

export function Input({ addNewTask }: FormEvent) {
  return (
    <form className={styles.inputDiv} onSubmit={addNewTask}>
      <input
        className={styles.inputText}
        // onChange={handleUpdateTask}
        type="text"
        name="inputText"
        placeholder="Adicione uma nova tarefa"
      />
      <button type="submit" className={styles.button}>
        Criar
        <img src={plus} alt="" />
      </button>
    </form>
  );
}
