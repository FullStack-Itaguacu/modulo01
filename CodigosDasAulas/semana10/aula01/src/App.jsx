// import "./App.css"
import Item from "./components/Item"
import Botao from "./components/Botao"
import { useState } from "react"
import {MdOutlineDelete} from "react-icons/md"
import {AiOutlineUserDelete} from "react-icons/ai"

// o módulo retorna um objeto
import styles from "./App.module.css"

function App() {

  const [ativo, setAtivo] = useState(false)

  return (
    // <div>
    //   <div className="App">
    //     {/* 1º - você precisa colocar o estilo dentro de chaves */}
    //     {/* 2º - você precisa declarar as propriedades como se fosse um objeto javascript */}
    //     {/* 3º - cada atributo deve ser separado por vírgula */}
    //     {/* 4º - os atributos devem ser declarados no padrão camelCase */}
    //     <h1 style={{color: 'yellow', fontSize: '30px'}}>CSS dinâmico</h1>
    //     <h2>{ativo.toString()}</h2>
    //     <Botao ativo={ativo} />
    //     <button onClick={() => setAtivo(!ativo)}>alterar</button>
    //   </div>
    // </div>
    <div>
      <h1 className={styles.titulo}>Exemplo de módulo</h1>
      <button className={styles.botao}>Alterar</button>
      <button className={styles.botao}><AiOutlineUserDelete /> Editar</button>
      <button className={styles.botaoVermelho}><MdOutlineDelete className={styles.icon} /> Remover</button>
      {/* <button className={styles['botao-vermelho']}>Remover</button> */}
    </div>
  )
}

export default App


/*
  ESPECIFICIDADE CSS
  - SE COLOCAR O ATRIBUTO '!IMPORTANT'
  - INLINE
  - a regra do ultimo arquivo importado

  - id
  - class
  - tag html
  - pseudo elementos / pseudo classes

*/
