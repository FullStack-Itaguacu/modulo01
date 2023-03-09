import './App.css'
import Card from './components/Card'

function App() {

  const usuario = { 
    nome: "Bruno Costa", 
    idade: 24, 
    foto: "https://avatars.githubusercontent.com/u/62752426?v=4", 
    github: "github.com/Bruno-Costa-fig", 
    linkedin: "https://www.linkedin.com/in/bruno-costa-b9b3141a2/" }

  return (
    <div>
      <Card usuario={usuario} />
    </div>
  )
}

export default App
