import plus from "../../assets/plus.svg";
import styles from "./Input.module.css";
import { FormEvent, useState } from "react";
import { Card } from "../cards/Card";


export function Input(props) {
  const [task, setTask] = useState([] as string[]);
  const [newTask, setNewTask] = useState("");

  function handleAddTask(event: FormEvent) {
    event.preventDefault();

    setTask([...task, newTask]);
    setNewTask("");
  }

  const commentList = task.map((task, index) => {
    return (
      <Card key={index} content={task} onDeleteComment={deleteComment} />
    );
  });

  function deleteComment(commentToDelete: string) {
    const commentsWithoutDeletedOne = task.filter((task) => {
      return task !== commentToDelete;
    });
    setTask(commentsWithoutDeletedOne);
  }

  function handleNewCommentChange(event: FormEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setNewTask(event.target.value);
  }

  return (
    <>
      <form onSubmit={handleAddTask} className={styles.inputDiv}>
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
