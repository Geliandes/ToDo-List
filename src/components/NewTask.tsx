import Styles from './NewTask.module.css'
import { PlusCircle } from 'phosphor-react'
import { useState } from 'react';
import { Tasks } from './Tasks';
import { ListTasksEmpty } from './ListTasksEmpty';

export function NewTask(){
    const [tasks, setTasks] = useState<string[]>([]);

    const [newTaskText, setNewTaskText] = useState('');

    const [numberOfTasksCreated, setNumberOfTasksCreated] = useState(0);

    const [numberOfTasksChecked, setNumberOfTasksCheked] = useState(0);

    function handleCreateNewTask() {
        event?.preventDefault();
        setTasks([...tasks, newTaskText]);
        setNewTaskText('');
        setNumberOfTasksCreated(numberOfTasksCreated + 1);
    }

    function handleNewTaskChange(event: any) {
        setNewTaskText(event.target.value);
    }

    function deleteTask(taskToDelete: string, event: any) {
        const tasksWhithoutDeletedeOne = tasks.filter((task: string) =>{
            return task !== taskToDelete;
        })

        setTasks(tasksWhithoutDeletedeOne);
        setNumberOfTasksCreated(numberOfTasksCreated - 1);
        checkTask(event)
    }

    function checkTask(event: any){
        let task = event.target.checked
        let checkboxId = event.target.id
        let trashId = event.target.parentNode.parentNode.firstChild.firstChild.id

        checkboxId === trashId && task == true ? setNumberOfTasksCheked(numberOfTasksChecked + 1) : setNumberOfTasksCheked(numberOfTasksChecked - 1)
    }

    return (
        <div>
            <form className={Styles.newTaskBlock} id="newTask" method="post" onSubmit={handleCreateNewTask}>
                <input className={Styles.inputText} type="text" placeholder="Adicione uma nova tarefa" name="task" onChange={handleNewTaskChange} value={newTaskText}></input>
                <button type="submit" form="newTask">
                    Criar<PlusCircle size={16} weight="bold" />
                </button>
            </form>

            <div className={Styles.container}>

                <div className={Styles.containerListText}>
                <div className={Styles.tasksCreated}>
                    <p>Tarefas criadas</p>
                    <span>{numberOfTasksCreated}</span>
                </div>

                <div className={Styles.completedTasks}>
                    <p>Concluídas</p>
                    <span>{numberOfTasksChecked} de {numberOfTasksCreated}</span>
                </div>
                </div>
            </div>

        {tasks.length > 0 ? (
            <div className={Styles.tasksContainerMain}>
                {tasks.map((task: string) => {
                    return (
                    <Tasks 
                        content={task}
                        key={task}
                        onDeleteTask = {deleteTask}
                        onCheckTask = {checkTask}
                    />)
                })}
            </div>
        ) : <ListTasksEmpty />}
        
        </div>
    )
}