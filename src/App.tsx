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

  function handleRemoveTask(taskId: string) {
    const newTask = task.filter((task) => task.id !== taskId);

    setTask(newTask);
  }

  function handleCompleteTask(taskId: string) {
    const newTasks = task.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });
    setTask(newTasks);
  }

  return (
    <>
      <Header onAddTask={handleAddTask} />
      <Tasks
        onDelete={handleRemoveTask}
        onComplete={handleCompleteTask}
        tasks={task}
      />
    </>
  );
}
