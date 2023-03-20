import { useState } from "react";

import styles from "./App.module.css";
import { Header } from "./components/header/Header";
import { Task } from "./components/Task/Task";
import "./global.css";

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Task />
      </div>
    </>
  );
}
