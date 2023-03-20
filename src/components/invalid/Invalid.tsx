import clipBoard from "../../assets/Clipboard.svg";
import styles from "./Invalid.module.css";
import { useState } from "react";

export function Invalid() {
  return (
    <>
      <div className={styles.parentDiv}>
        <div className={styles.imgDiv}>
          <div className={styles.imgText}>
            <img src={clipBoard} alt="" className={styles.clip} />
            <div className={styles.titlesDiv}>
              <span className={styles.title}>
                Você ainda não tem tarefas cadastradas
              </span>
              <span className={styles.subtitle}>
                Crie tarefas e organize seus itens a fazer
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
