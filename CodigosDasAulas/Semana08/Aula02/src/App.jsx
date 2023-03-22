import { createContext, useContext, useReducer, useState } from 'react'
import './App.css'
import Item from './components/Item'
import { ContadorContext } from './context/ContadorContext'

function App() {
  const {dados, setDados} = useContext(ContadorContext)

  return (
      <div>
          <Item />
          <button 
            onClick={() => setDados({nome: dados.nome, count: dados.count + 1})}
          >adicionar</button>
      </div>
  )
}

export default App


/* Exemplo 01 de useReducer */
// const [count, setCount] = useState(0)
  // const [count, dispatchCount] = useReducer(reducerCount, 0)

  // function reducerCount(valorAtual, action){
  //   switch(action.type){
  //     // o case precisa ser todo em letra maiuscula
  //     case "ADICIONAR":
  //       return valorAtual += 1
  //     case "REDUZIR":
  //       return valorAtual -= 1
  //   }
    
  // }

  // function handleReduzir(evento){
  //   evento.preventDefault()

  //   dispatchCount({type: evento.target.value})
  // }

  // return (
  //   <div className="App">
  //     <h1>O valor do count é {count}</h1>
  //     <button onClick={() => dispatchCount({type: "ADICIONAR"})}>Adicionar</button>
  //     <button value={"REDUZIR"} onClick={handleReduzir}>Reduzir</button>
  //   </div>
  // )

  /* Exemplo 02 de useReducer */
  // const [textoTarefa, setTextoTarefa] = useState("")

  //  // use reducer
  // const [listaDeTarefas, dispatchListaDeTarefas] 
  // = useReducer(reducerTarefas, [])
    
  // // função redutora
  // function reducerTarefas(state, action){
  //   // debugger

  //   switch(action.type){
  //     case "ADICIONAR":
  //       let novaTarefa = {
  //         id: state.length + 1,
  //         texto: textoTarefa,
  //         finalizado: false
  //       }

  //       setTextoTarefa("")
  //       return [...state, novaTarefa]
  //     case "CONCLUIR":
  //       break
  //   }
  // }

  // return (
  //   <div>
  //     <div>
  //       <input 
  //         placeholder="Texto da Tarefa"
  //         type="text" 
  //         value={textoTarefa} 
  //         onChange={(evento) => setTextoTarefa(evento.target.value)} 
  //       />
  //       <button onClick={() => dispatchListaDeTarefas({type: "ADICIONAR"})}>adicionar</button>
  //     </div>
  //     <div>
  //       {
  //         listaDeTarefas.map(tarefa => (
  //           <li key={tarefa.id}>{tarefa.texto}</li>
  //         ))
  //       }
  //     </div>
  //   </div>
  // )
