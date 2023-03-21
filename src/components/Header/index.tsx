import todo from "../../assets/logo.svg";
import { ITask } from "../../App";
import styles from "./Header.module.scss";
import { CiCirclePlus } from "react-icons/ci";
import { useState, FormEvent, ChangeEvent } from "react";

interface Props {
  onAddTask: (content: string) => void;
}

export function Header({ onAddTask }: Props) {
  const [content, setContent] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    onAddTask(content);
    setContent("");
  }

  function onChangeContent(event: ChangeEvent<HTMLInputElement>) {
    setContent(event.target.value);
  }

  return (
    <header className={styles.header}>
      <img src={todo} alt="" />
      <form className={styles.taskForm} onSubmit={handleSubmit}>
        <input
          onChange={onChangeContent}
          value={content}
          type="text"
          placeholder="Adicione um item à sua lista"
        />
        <button>
          Criar <CiCirclePlus size={25} />
        </button>
      </form>
    </header>
  );
}
