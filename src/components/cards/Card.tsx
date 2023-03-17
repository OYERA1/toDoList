import { ChangeEvent, HtmlHTMLAttributes, useState } from "react";
import trash from "../../assets/trash.svg";
import styles from "./Card.module.css";

interface CommentProps {
  id: number;
  content: string;
}
export function Card({ content }: CommentProps) {
  const [isChecked, setIsChecked] = useState(false);

  function handleCheckboxChange() {
    setIsChecked(!isChecked);
  }

  function handleCreateNewComment() {
    console.log('oi')
  }

  const divStyle = isChecked ? { border: "1px solid var(--gray-500)" } : {};
  const textStyle = isChecked
    ? { textDecoration: "line-through", color: "var(--gray-300)" }
    : {};
  return (
    <div className={styles.cardDiv} style={divStyle}>
      <div className={styles.checker}>
        <input
          type="checkbox"
          className={styles.check}
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
      </div>
      <div className={styles.text}>
        <p style={textStyle} className={styles.cardText}>
          {content}
        </p>
      </div>
      <div className={styles.butDiv}>
        <button className={styles.trash}>
          <img src={trash} alt="" />
        </button>
      </div>
    </div>
  );
}
