
// Bruno
function useAuth(usuario){

    // usuario permitidos
    const usuarios = ["Bruno", "Breno", "Antonio"]

    // validar se o usuario é permitido
    const resultado = usuarios.includes(usuario)

    if(resultado){
        return "Usuario logado com sucesso"
    } else {
        return "usuário não encontrado!"
    }

}

export default useAuth;