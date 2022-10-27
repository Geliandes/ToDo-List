import { Header } from './components/Header'
import { NewTask } from './components/NewTask'
import Styles from './App.module.css'
import './global.css'

function App() {
  return (
    <div>
      <Header />
      <div className={Styles.container}>
        <NewTask />

      </div>
    </div>
  )
}

export default App