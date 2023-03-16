import { useState } from "react";

import styles from "./App.module.css";
import { Tasks } from "./components/face/Tasks";
import { Header } from "./components/header/Header";
import { Input } from "./components/input/Input";
import "./global.css";

export function App() {
  const [count, setCount] = useState(0);

  return (
    <>
        <Header />
      <div className={styles.wrapper}>
        <Input/>
        <Tasks/>
      </div>
    </>
  );
}
