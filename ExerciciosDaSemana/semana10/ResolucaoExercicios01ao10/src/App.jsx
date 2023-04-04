import { GrFormNextLink, GrFormPrevious } from "react-icons/gr"
import { FiSend } from "react-icons/fi"
import EnderecoForm from "./components/EnderecoForm"
import Agradecimento from "./components/Agradecimento"
import DadosPessoaisForm from "./components/DadosPessoaisForm"
import { SCButton, SCFormContainer, SCHeader } from "./styles"

import { useForm } from "./hooks/useForm"
import Passos from "./components/Passos"

function App() {

  const componentesFormulario = [<DadosPessoaisForm />, <EnderecoForm />, <Agradecimento />]

  const { passoAtual, componenteAtual, mudarPasso, ehUltimoPasso } = useForm(componentesFormulario)

  return (
    <div className="app">
      <SCHeader>
        <h2>Cadastre-se gratuitamente!</h2>
        <p>Faça o seu cadastro para ter acesso a todos os recursos da nossa plataforma</p>
      </SCHeader>
      <SCFormContainer>
        <form onSubmit={(e) => mudarPasso(passoAtual + 1, e)}>
          <Passos passoAtual={passoAtual}/>
          <div className="inputs-container">
            {componenteAtual}
          </div>
          <div className="acoes">
            {!passoAtual == 0 && 
            <SCButton type="button" onClick={(e) => mudarPasso(passoAtual - 1, e)}>
              <GrFormPrevious /><span>Voltar</span>
            </SCButton>}
            {ehUltimoPasso ? (
              <SCButton type="submit"><span>Enviar</span><FiSend /></SCButton>
            ) : (
              <SCButton type="submit"><span>Avançar</span><GrFormNextLink /></SCButton>
            )}
          </div>
        </form>
      </SCFormContainer>
    </div>
  )
}

export default App
