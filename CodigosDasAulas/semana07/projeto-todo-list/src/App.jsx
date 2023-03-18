import { useState } from 'react'
import './App.css'
import CardAdicionar from './components/CardAdicionar'

function App() {
  const [listaDeTarefas, setListaDeTarefas] = useState([
    {id: 1, texto: "Tarefa 1", finalizado: false}
  ])

  function adicionarTarefa(tarefa){
    /* 
      1 [x] receber o texto da tarefa
      2 [x] criar o objeto tarefa
      3 [] set na lista de tarefas*
        3.1 [] criar uma nova lista com todas as tarefas
        3.2 [] passar a nova lista para o set
    */
    debugger
    const novaTarefa = {id: listaDeTarefas.length + 1, texto: tarefa, finalizado: false}

    // sempre que forem copiar um array ou objeto use o spread
    const novaListaGeral = [...listaDeTarefas]
    novaListaGeral.push(novaTarefa)

    setListaDeTarefas(novaListaGeral)
  }

  return (
    <div className="App">
      <CardAdicionar adicionarTarefa={adicionarTarefa} />
      {
        listaDeTarefas.map(tarefa => (
          <li key={tarefa.id}>{tarefa.texto}</li>
        ))
      }
    </div>
  )
}

export default App
