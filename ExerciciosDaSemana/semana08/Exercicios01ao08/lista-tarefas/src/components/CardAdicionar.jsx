/* 
 1 [x] criar um input para receber o texto da tarefa 
 2 [x] criar um useState para armazenar o valor do texto da tarefa
 3 [x] botão para chamar o método de adicionar
 4 [x] criar a lógica da função para adicionar o valor
*/

import { useState } from "react";
function CardAdicionar({adicionarTarefa}) {

    // guarda o valor do texto da tarefa
    const [tarefa, setTarefa] = useState("");

    const handleAdicionar = (evento) => {
        // previne para não acontecer o comportamento padrão de submit do botão
        evento.preventDefault()

        // verifica se o input de texto não está vazio
        if(tarefa != ""){

            // envia o texto da tarefa para ser criada e adicionada a lista de tarefas
            adicionarTarefa(tarefa)

            // limpa o input do texto
            setTarefa("")
        }
    }
    
    return (
        <div>
        {/* input do texto da tarefa */}
        <input
            placeholder="adicionar tarefa"
            type="text"
            value={tarefa}
            onChange={(e) => setTarefa(e.target.value)}
        />
        {/* botão para chamar a função para criar a tarefa */}
        <button onClick={handleAdicionar}>Adicionar</button>
    
        </div>
    );
}   

export default CardAdicionar;