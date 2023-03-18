/* 
 1 [x] criar um input para receber o texto da tarefa 
 2 [x] criar um useState para armazenar o valor do texto da tarefa
 3 [x] botão para chamar o método de adicionar
 4 [x] criar a lógica da função para adicionar o valor
*/

import { useState } from "react";
function CardAdicionar({adicionarTarefa}) {
    const [tarefa, setTarefa] = useState("");

    const handleAdicionar = (evento) => {
        debugger
        evento.preventDefault()
        if(tarefa != ""){
            adicionarTarefa(tarefa)
            setTarefa("")
        }
    }
    
    return (
        <div>
        <input
            type="text"
            value={tarefa}
            onChange={(e) => setTarefa(e.target.value)}
        />
        <button onClick={handleAdicionar}>Adicionar</button>
    
        </div>
    );
}   

export default CardAdicionar;