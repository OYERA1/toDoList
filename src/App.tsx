import { useState } from "react";

import styles from "./App.module.css";
import { Invalid } from "./components/invalid/Invalid";
import { Header } from "./components/header/Header";
import { Input } from "./components/input/Input";
import { Card } from "./components/cards/Card";
import { TaskDescription } from "./components/TaskDesc/TaskDescription";
import "./global.css";

export function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Input />
        <TaskDescription />
      </div>
    </>
  );
}
