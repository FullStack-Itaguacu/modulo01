import "./Botao.css"

function Botao({ativo}) {
    return ( <button className={ativo ? 'botao-ativo' : 'botao-inativo'}>
        {ativo ? 'Ativo' : 'Inativo'}</button> );
}

export default Botao;