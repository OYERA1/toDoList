import styles from './Tasks.module.css'


export function Tasks(){
    return (
        <>
        <div className={styles.parentDiv}>

        <div className={styles.textDiv}>
            <span className={styles.textBlue}>Tarefas criadas <span className={styles.counter}>0</span></span>
            <span className={styles.textPurple}>Concluídas <span className={styles.counter}>0</span></span>
        </div>
        <div className={styles.imgDiv}>
            <div className={styles.imgText}>
                <img src="" alt="" />
                <span className={styles.title}>Você ainda não tem tarefas cadastradas</span>
                <span className={styles.subtitle}>Crie tarefas e organize seus itens a fazer</span>
            </div>
        </div>
        </div>
        </>
    )
}