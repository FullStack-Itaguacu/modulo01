/* 
 1 [x] receber por props a tarefa e a função de remover a tarefa 
 2 [x] criar um useState para armazenar o valor se a tarefa está finalizada ou não
 3 [x] botão para chamar o método de finalizar
 4 [x] botão para chamar o método de remover a tarefa
*/


import { useState } from "react";
import "./listItem.css"

function ListItem({ tarefa, removerTarefa }) {

    // guarda o valor se a tarefa está ou não finaliza
    const [finalizado, setFinalizado] = useState(tarefa.finalizado)

    // finaliza a tarefa
    function finalizarTarefa(evento) {
        // previne para não acontecer o comportamento padrão de submit do botão
        evento.preventDefault()

        // se estiver falso vai se tornar verdadeiro e se verdadeiro vai ficar falso
        setFinalizado(!finalizado)
    }

    // chama a função para remover a tarefa.
    function handleRemoverTarefa(evento) {
        // previne para não acontecer o comportamento padrão de submit do botão
        evento.preventDefault()

        // vai chamar o método remover tarefa que está sendo passado como prop no app.jsx
        removerTarefa(tarefa)
    }

    return (
        <div>
            {
                // renderização condicional
                finalizado ? (
                    // li com marcação de finalizado
                    <li key={tarefa.id} className={'list-item finalizado'}>
                        {tarefa.texto}
                        <button className="list-item-button" onClick={finalizarTarefa}>finalizar</button>
                        <button className="list-item-button" onClick={handleRemoverTarefa}>remover</button>
                    </li>
                ) : (
                    // li sem marcação de finalizado
                    <li key={tarefa.id} className={'list-item'}>
                        {tarefa.texto}
                        <button className="list-item-button" onClick={finalizarTarefa}>finalizar</button>
                        <button className="list-item-button" onClick={handleRemoverTarefa}>remover</button>
                    </li>
                )
            }
        </div>

    );
}

export default ListItem;