import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import useAuth from './hooks/useAuth.js'

function App() {

  const [mensagem, setMensagem] = useState("")
  const [usuario, setUsuario] = useState("")

  function handleValidarUsuario(evento){
    evento.preventDefault()
    const resultado = useAuth(usuario)

    setMensagem(resultado)
  }

  return (
    <div>
      <input type="text" value={usuario} onChange={e => setUsuario(e.target.value)} />
      <span>{mensagem}</span>
      <button onClick={handleValidarUsuario}>Validar usuário</button>
    </div>

  )
}

export default App
