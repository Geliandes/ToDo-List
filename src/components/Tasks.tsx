import { Trash } from 'phosphor-react';
import Styles from './Tasks.module.css';

interface TasksProps {
    content: string;
    onDeleteTask: (comment: string, event: any) => void;
    onCheckTask: (event: any) => void;
}

export function Tasks({ content, onDeleteTask, onCheckTask }: TasksProps){

    function handleDeleteTask(){
        onDeleteTask(content, event);
    }

    function handleCheckTask(){
        onCheckTask(event);
    }

    return (
        <div className={Styles.taskContainer}>
            <label className={ Styles.containerCheckbox}>
                <div className={Styles.containerInput}>
                    <input type="checkbox" name="Tasks" className={Styles.checkbox} onClick={handleCheckTask} id={content}/>
                    <span className={Styles.checkmark}></span>
                    <p className={Styles.taskText}>{content}</p>
                </div>
                <button className={Styles.deleteTask} title="Apagar tarefa" onClick={handleDeleteTask} id={content}>
                     <Trash size={20} className={Styles.trash}/>
                </button>
               
            </label>
            
        </div>
    )
}