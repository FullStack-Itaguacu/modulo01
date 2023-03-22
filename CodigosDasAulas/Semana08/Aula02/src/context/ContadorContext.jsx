// 1 [x] - criar o contexto
//  1.1 - o contexto precisa começar com letra maíscula

import { useState, createContext } from "react"

//  1.2 - o contexto fica fora da função app
export const ContadorContext = createContext()

// 2 [x] - definir o escopo do contexto
//  2.2 - a definição do escopo se da pelo provider
//  2.3 - o provider usa uma propriedade chamada value para passar os valores do contexto
export const ContadorContextProvider = (props) => {
    const [dados, setDados] = useState({ nome: "Bruno", count: 0 })

    return (
        <ContadorContext.Provider value={{dados, setDados}} >
            {props.children}
        </ContadorContext.Provider>
    )
}
// 3 [x] - usar o contexto
// 3.1 - o contexto é usado através de um hook chamado useContext