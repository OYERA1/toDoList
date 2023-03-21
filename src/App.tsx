import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";
import { useState } from "react";
import "./styles/global.scss";

export interface ITask {
  id: string;
  content: string;
  isCompleted: boolean;
}

export function App() {
  const [task, setTask] = useState<ITask[]>([]);

  function handleAddTask(setContent: string) {
    setTask([
      ...task,
      {
        id: crypto.randomUUID(),
        content: setContent,
        isCompleted: false,
      },
    ]);
  }
  return (
    <>
      <Header onAddTask={handleAddTask} />
      <Tasks tasks={task} />
    </>
  );
}
