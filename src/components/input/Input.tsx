import plus from '../../assets/plus.svg'
import styles from './Input.module.css'

export function Input() {
    return (
        <>
        <div className={styles.inputDiv}>
            <input className={styles.inputText} type="text" placeholder='Adicione uma nova tarefa'/>
            <button className={styles.button}>Criar<img src={plus} alt="" /></button>
        </div>
        </>
    )
}