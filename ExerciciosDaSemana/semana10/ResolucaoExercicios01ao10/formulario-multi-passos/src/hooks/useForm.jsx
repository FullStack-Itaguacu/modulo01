import { useState } from "react";

export function useForm(steps) {
    const [passoAtual, setPassoAtual] = useState(0)

    function mudarPasso(i, e) {
        e.preventDefault()

        if(i < 0 || i >= steps.length ){
            return
        }

        setPassoAtual(i)
    }


    return {
        passoAtual, 
        componenteAtual: steps[passoAtual], 
        mudarPasso, 
        ehUltimoPasso: passoAtual + 1 == steps.length ? true : false
    }
}