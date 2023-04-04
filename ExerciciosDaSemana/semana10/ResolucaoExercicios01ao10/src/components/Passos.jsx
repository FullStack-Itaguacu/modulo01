import { SCPasso, SCPassosContainer } from "./Passos.style";
import {AiOutlineUserAdd} from 'react-icons/ai'
import {BsHouseAdd} from 'react-icons/bs'
import {BiHappyHeartEyes} from 'react-icons/bi'

function Passos({passoAtual}) {
    return ( <SCPassosContainer>
        <SCPasso ativo={passoAtual == 0 ? true : false}>
            <AiOutlineUserAdd /> Dados pessoais
        </SCPasso>
        <SCPasso ativo={passoAtual == 1 ? true : false}>
            <BsHouseAdd /> Endereço
        </SCPasso>
        <SCPasso ativo={passoAtual == 2 ? true : false}>
            <BiHappyHeartEyes /> Agradecimento
        </SCPasso>
    </SCPassosContainer> );
}

export default Passos;