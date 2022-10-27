import Styles from './ListTasksEmpty.module.css';
import clipboardIcon from '../assets/clipboard.png'

export function ListTasksEmpty(){
    return(
        <div className={Styles.listItemsEmpty}>
          <img src={clipboardIcon} alt="Icone Clipboard"/>
          <p>
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <br/>
            Crie tarefas e organize seus itens a fazer
          </p>
        </div>
      
    )

}