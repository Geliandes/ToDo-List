import styles from './Header.module.css'
import logoTodo from '../assets/todo-logo.png'

export function Header(){
    return (
        <header className={styles.header}>
            <img src={logoTodo} alt="Logo ToDo List" />
        </header>
    )
}